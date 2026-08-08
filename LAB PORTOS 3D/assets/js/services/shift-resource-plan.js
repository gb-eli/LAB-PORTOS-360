const KEY='terminal:shift-resource-plan:v020';
const clone=v=>JSON.parse(JSON.stringify(v));
export const SHIFTS=[{id:'manha',label:'06h–14h'},{id:'tarde',label:'14h–22h'},{id:'noite',label:'22h–06h'}];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),plans:{}});
export class ShiftResourcePlan{
 constructor({storage,eventBus,equipmentMaintenance,liveState}={}){Object.assign(this,{storage,eventBus,equipmentMaintenance,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='shift-resources'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateShiftResources?.(summary,source);this.eventBus?.emit('shift-resources:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 capacity({sts=1,rtg=2,reach=1,teams=1,lanes=2}={}){return{quayMoves:sts*28*8*Math.min(1,teams/Math.max(1,sts)),yardMoves:(rtg*18+reach*10)*8,gateTrucks:lanes*20*8};}
 plan(shiftId,{targetMoves=500,targetTrucks=260,sts=2,rtg=3,reach=1,teams=2,lanes=2}={}){const shift=SHIFTS.find(x=>x.id===shiftId);if(!shift)return{ok:false,reason:'Turno inválido.'};const eq=this.equipmentMaintenance.summary(),max={sts:eq.byType.STS.available,rtg:eq.byType.RTG.available,reach:eq.byType.RS.available};sts=Math.max(0,Math.min(max.sts,Number(sts)||0));rtg=Math.max(0,Math.min(max.rtg,Number(rtg)||0));reach=Math.max(0,Math.min(max.reach,Number(reach)||0));teams=Math.max(1,Number(teams)||1);lanes=Math.max(1,Number(lanes)||1);const cap=this.capacity({sts,rtg,reach,teams,lanes}),shortages=[];if(cap.quayMoves<targetMoves)shortages.push('cais');if(cap.gateTrucks<targetTrucks)shortages.push('gate');if(cap.yardMoves<targetMoves*.75)shortages.push('pátio');const s=this.get();s.plans[shiftId]={shiftId,targetMoves:Number(targetMoves)||0,targetTrucks:Number(targetTrucks)||0,sts,rtg,reach,teams,lanes,capacity:cap,shortages,createdAt:new Date().toISOString()};this.save(s,'plan');return{ok:true,plan:clone(s.plans[shiftId])};}
 summary(state=this.get()){const rows=SHIFTS.map(s=>({shift:s,plan:state.plans[s.id]||null})),planned=rows.filter(x=>x.plan).length,shortages=rows.flatMap(x=>x.plan?.shortages||[]);return{rows,planned,shortageCount:shortages.length,shortageAreas:[...new Set(shortages)]};}
 syncLive(source='shift-resources'){this.liveState?.updateShiftResources?.(this.summary(),source);}
}
