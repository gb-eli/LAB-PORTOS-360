const KEY='terminal:technician-availability:v025';
const clone=v=>JSON.parse(JSON.stringify(v));
export const TECHNICIANS=[
 {id:'TEC-M01',name:'Técnico Mecânico 01',specialty:'Mecânica',start:0,end:480},
 {id:'TEC-M02',name:'Técnico Mecânico 02',specialty:'Mecânica',start:0,end:480},
 {id:'TEC-E01',name:'Técnico Elétrico 01',specialty:'Elétrica',start:0,end:480},
 {id:'TEC-A01',name:'Técnico Automação 01',specialty:'Automação',start:0,end:480},
 {id:'TEC-X01',name:'Técnico Multi 01',specialty:'Multidisciplinar',start:0,end:480},
 {id:'TEC-M03',name:'Técnico Mecânico 03',specialty:'Mecânica',start:480,end:960},
 {id:'TEC-M04',name:'Técnico Mecânico 04',specialty:'Mecânica',start:480,end:960},
 {id:'TEC-E02',name:'Técnico Elétrico 02',specialty:'Elétrica',start:480,end:960},
 {id:'TEC-A02',name:'Técnico Automação 02',specialty:'Automação',start:480,end:960},
 {id:'TEC-X02',name:'Técnico Multi 02',specialty:'Multidisciplinar',start:480,end:960},
 {id:'TEC-M05',name:'Técnico Mecânico 05',specialty:'Mecânica',start:960,end:1440},
 {id:'TEC-E03',name:'Técnico Elétrico 03',specialty:'Elétrica',start:960,end:1440},
 {id:'TEC-A03',name:'Técnico Automação 03',specialty:'Automação',start:960,end:1440},
 {id:'TEC-X03',name:'Técnico Multi 03',specialty:'Multidisciplinar',start:960,end:1440}
];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),clockMinute:0,absences:[],reservations:{}});
const overlap=(a,b,c,d)=>a<d&&c<b;
const canDo=(tech,specialty)=>tech.specialty===specialty||tech.specialty==='Multidisciplinar';
export class TechnicianAvailability{
 constructor({storage,eventBus,liveState}={}){Object.assign(this,{storage,eventBus,liveState});this.overtimeProvider=null;if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 setOvertimeProvider(fn){this.overtimeProvider=typeof fn==='function'?fn:null;return this;}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='technician-availability'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateTechnicianAvailability?.(summary,source);this.eventBus?.emit('technician-availability:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 setClock(minute=0){const s=this.get();s.clockMinute=Math.max(0,Number(minute)||0);return this.save(s,'clock');}
 advance(minutes=60){return this.setClock(this.get().clockMinute+Math.max(0,Number(minutes)||0));}
 addAbsence(techId,startMinute,endMinute,reason='Indisponibilidade didática'){if(!TECHNICIANS.some(t=>t.id===techId))return{ok:false,reason:'Técnico inválido.'};startMinute=Math.max(0,Number(startMinute)||0);endMinute=Math.max(startMinute+30,Number(endMinute)||startMinute+60);const s=this.get();s.absences.push({id:`ABS-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,techId,startMinute,endMinute,reason});this.save(s,'absence');return{ok:true};}
 clearAbsences(){const s=this.get();s.absences=[];return this.save(s,'clear-absences');}
 _shiftAllows(tech,start,end){const day=Math.floor(start/1440),localStart=start-day*1440,localEnd=end-day*1440;const normal=localStart>=tech.start&&localEnd<=tech.end&&localEnd>=localStart;return normal||Boolean(this.overtimeProvider?.(tech.id,start,end));}
 _busy(techId,start,end,state,extra=[]){if((state.absences||[]).some(a=>a.techId===techId&&overlap(start,end,a.startMinute,a.endMinute)))return true;const all=[...Object.values(state.reservations||{}).flat(),...extra];return all.some(r=>r.techId===techId&&overlap(start,end,r.startMinute,r.endMinute));}
 availableAt(minute,specialty=null,{durationMinutes=60,state=this.get(),extra=[]}={}){const start=Math.max(0,Number(minute)||0),end=start+Math.max(30,Number(durationMinutes)||60);return TECHNICIANS.filter(t=>(!specialty||canDo(t,specialty))&&this._shiftAllows(t,start,end)&&!this._busy(t.id,start,end,state,extra));}
 findForRequirements(requirements={},startMinute=0,durationMinutes=60,{state=this.get(),extra=[]}={}){const selected=[],used=new Set();for(const [specialty,countRaw] of Object.entries(requirements||{})){const count=Math.max(0,Math.round(Number(countRaw)||0));for(let i=0;i<count;i++){const candidates=this.availableAt(startMinute,specialty,{durationMinutes,state,extra:[...extra,...selected]}).filter(t=>!used.has(t.id));const tech=candidates[0];if(!tech)return{ok:false,reason:`Faltam técnicos de ${specialty}.`,selected:clone(selected)};const r={techId:tech.id,specialty,startMinute,endMinute:startMinute+durationMinutes};selected.push(r);used.add(tech.id);}}return{ok:true,selected};}
 reserveOrder(orderId,requirements,startMinute,durationMinutes){const state=this.get(),found=this.findForRequirements(requirements,startMinute,durationMinutes,{state});if(!found.ok)return found;state.reservations[orderId]=found.selected;this.save(state,'reserve');return{ok:true,reservations:clone(found.selected)};}
 releaseOrder(orderId){const s=this.get();delete s.reservations[orderId];this.save(s,'release');return{ok:true};}
 hourly(startMinute=0,hours=24){return Array.from({length:hours},(_,i)=>{const minute=startMinute+i*60,all=this.availableAt(minute,null,{durationMinutes:60});return{minute,total:all.length,mecanica:all.filter(t=>canDo(t,'Mecânica')).length,eletrica:all.filter(t=>canDo(t,'Elétrica')).length,automacao:all.filter(t=>canDo(t,'Automação')).length};});}
 summary(state=this.get()){const now=state.clockMinute,available=this.availableAt(now,null,{durationMinutes:60,state}),hourly=this.hourly(now,8),reserved=Object.values(state.reservations||{}).flat().filter(r=>r.endMinute>now).length;return{clockMinute:now,total:TECHNICIANS.length,availableNow:available.length,reserved,absentNow:TECHNICIANS.length-available.length-reserved,minAvailable:hourly.length?Math.min(...hourly.map(h=>h.total)):0,hourly};}
 syncLive(source='technician-availability'){this.liveState?.updateTechnicianAvailability?.(this.summary(),source);}
}
