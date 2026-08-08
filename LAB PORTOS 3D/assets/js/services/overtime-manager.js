const KEY='terminal:overtime-manager:v027';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),windows:[],next:1});
export class OvertimeManager{
 constructor({storage,eventBus,technicianAvailability,liveState}={}){Object.assign(this,{storage,eventBus,technicianAvailability,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());technicianAvailability?.setOvertimeProvider?.((techId,start,end)=>this.allows(techId,start,end));this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='overtime'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateOvertime?.(summary,source);this.eventBus?.emit('overtime:changed',{source,state:clone(s),summary});return clone(s);}
 approve({techId,startMinute,endMinute,reason='Extensão didática do turno'}={}){startMinute=Math.max(0,Math.round(Number(startMinute)||0));endMinute=Math.max(startMinute+30,Math.round(Number(endMinute)||startMinute+60));const s=this.get(),id=`HE-${String(s.next++).padStart(3,'0')}`;s.windows.push({id,techId,startMinute,endMinute,reason,status:'approved'});this.save(s,'approve');return{ok:true,id};}
 revoke(id){const s=this.get(),r=s.windows.find(x=>x.id===id);if(!r)return{ok:false,reason:'Autorização não encontrada.'};r.status='revoked';this.save(s,'revoke');return{ok:true};}
 allows(techId,start,end){return this.get().windows.some(w=>w.techId===techId&&w.status==='approved'&&start>=w.startMinute&&end<=w.endMinute);}
 approvedMinutes(techId){return this.get().windows.filter(w=>w.techId===techId&&w.status==='approved').reduce((n,w)=>n+(w.endMinute-w.startMinute),0);}
 summary(state=this.get()){const active=state.windows.filter(w=>w.status==='approved');return{approved:active.length,totalMinutes:active.reduce((n,w)=>n+w.endMinute-w.startMinute,0),technicians:new Set(active.map(w=>w.techId)).size,rows:state.windows};}
 syncLive(source='overtime'){this.liveState?.updateOvertime?.(this.summary(),source);}
}
