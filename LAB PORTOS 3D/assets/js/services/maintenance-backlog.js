const KEY='terminal:maintenance-backlog:v023';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),clockHours:0,ageOffsets:{}});
export class MaintenanceBacklog{
 constructor({storage,eventBus,maintenanceWorkOrders,maintenanceReadiness,maintenancePriority,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,maintenanceReadiness,maintenancePriority,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-backlog'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceBacklog?.(summary,source);this.eventBus?.emit('maintenance-backlog:changed',{source,state:clone(s),summary});return clone(s);}
 advance(hours=1){const s=this.get();s.clockHours=Math.max(0,s.clockHours+Math.max(0,Number(hours)||0));this.save(s,'clock');return this.summary();}
 setAge(orderId,hours=0){const s=this.get();s.ageOffsets[orderId]=Math.max(0,Number(hours)||0);this.save(s,'age');return{ok:true};}
 age(orderId,state=this.get()){return Math.max(0,state.clockHours+(state.ageOffsets[orderId]||0));}
 summary(state=this.get()){const pri=Object.fromEntries(this.maintenancePriority.summary().rows.map(r=>[r.orderId,r])),orders=this.maintenanceWorkOrders.get().orders.filter(o=>o.status!=='closed'),rows=orders.map(o=>{const ready=this.maintenanceReadiness.evaluate(o.id).ready;return{orderId:o.id,equipmentId:o.equipmentId,status:o.status,priority:o.priority,ageHours:this.age(o.id,state),ready,band:pri[o.id]?.band||'P4',score:pri[o.id]?.score||0};}).sort((a,b)=>b.score-a.score||b.ageHours-a.ageHours);return{rows,clockHours:state.clockHours,open:rows.length,inProgress:rows.filter(r=>r.status==='in-progress').length,ready:rows.filter(r=>r.ready&&r.status==='open').length,blocked:rows.filter(r=>!r.ready&&r.status==='open').length,aging:rows.filter(r=>r.ageHours>=24).length};}
 syncLive(source='maintenance-backlog'){this.liveState?.updateMaintenanceBacklog?.(this.summary(),source);}
}
