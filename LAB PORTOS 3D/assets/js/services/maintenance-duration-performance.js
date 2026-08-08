const KEY='terminal:maintenance-duration-performance:v024';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),records:{}});
export class MaintenanceDurationPerformance{
 constructor({storage,eventBus,maintenanceWorkOrders,maintenanceCriticalPath,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,maintenanceCriticalPath,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-duration'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceDurationPerformance?.(summary,source);this.eventBus?.emit('maintenance-duration:changed',{source,state:clone(s),summary});return clone(s);}
 setActual(orderId,hours){const o=this.maintenanceWorkOrders.get().orders.find(x=>x.id===orderId);if(!o)return{ok:false,reason:'OT não encontrada.'};const s=this.get(),planned=this.maintenanceCriticalPath.summary().rows.find(r=>r.orderId===orderId)?.durationHours||3,actual=Math.max(.25,Number(hours)||.25);s.records[orderId]={orderId,equipmentId:o.equipmentId,plannedHours:planned,actualHours:actual,varianceHours:actual-planned,variancePct:planned?(actual-planned)/planned*100:0,recordedAt:new Date().toISOString()};this.save(s,'actual');return{ok:true,record:clone(s.records[orderId])};}
 summary(state=this.get()){const rows=Object.values(state.records);const avgVariance=rows.length?rows.reduce((n,r)=>n+r.variancePct,0)/rows.length:0;return{rows,count:rows.length,late:rows.filter(r=>r.varianceHours>0).length,ahead:rows.filter(r=>r.varianceHours<0).length,onTime:rows.filter(r=>Math.abs(r.varianceHours)<.01).length,avgVariancePct:avgVariance,last:rows.at(-1)||null};}
 syncLive(source='maintenance-duration'){this.liveState?.updateMaintenanceDurationPerformance?.(this.summary(),source);}
}
