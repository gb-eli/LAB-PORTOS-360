const KEY='terminal:maintenance-sla:v023';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),targets:{alta:4,normal:24,baixa:48}});
export class MaintenanceSLA{
 constructor({storage,eventBus,maintenanceBacklog,maintenanceWorkOrders,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceBacklog,maintenanceWorkOrders,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-sla'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceSLA?.(summary,source);this.eventBus?.emit('maintenance-sla:changed',{source,state:clone(s),summary});return clone(s);}
 setTarget(priority,hours){if(!['alta','normal','baixa'].includes(priority))return{ok:false,reason:'Prioridade inválida.'};const s=this.get();s.targets[priority]=Math.max(1,Number(hours)||1);this.save(s,'target');return{ok:true};}
 summary(state=this.get()){const backlog=this.maintenanceBacklog.summary(),rows=backlog.rows.map(r=>{const target=state.targets[r.priority]||24,remaining=target-r.ageHours,ratio=r.ageHours/target,status=remaining<0?'violado':remaining<=Math.max(2,target*.2)?'próximo':'dentro';return{...r,targetHours:target,remainingHours:remaining,ratio,status};}),done=rows.filter(r=>r.status!=='violado').length,compliancePct=rows.length?done/rows.length*100:100;return{rows,targets:clone(state.targets),overdue:rows.filter(r=>r.status==='violado').length,dueSoon:rows.filter(r=>r.status==='próximo').length,compliancePct,clockHours:backlog.clockHours};}
 syncLive(source='maintenance-sla'){this.liveState?.updateMaintenanceSLA?.(this.summary(),source);}
}
