const KEY='terminal:maintenance-priority:v023';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),manual:{}});
const P={alta:35,normal:20,baixa:10};
const C={A:30,B:18,C:8};
export class MaintenancePriority{
 constructor({storage,eventBus,maintenanceWorkOrders,assetCriticality,maintenanceReadiness,maintenanceDependencies,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,assetCriticality,maintenanceReadiness,maintenanceDependencies,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-priority'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenancePriorities?.(summary,source);this.eventBus?.emit('maintenance-priority:changed',{source,state:clone(s),summary});return clone(s);}
 setManual(orderId,value=0){const s=this.get();s.manual[orderId]=Math.max(-20,Math.min(20,Number(value)||0));this.save(s,'manual');return{ok:true};}
 score(order,state=this.get()){const asset=this.assetCriticality.summary().rows.find(r=>r.id===order.equipmentId),ready=this.maintenanceReadiness.evaluate(order.id),dep=this.maintenanceDependencies.evaluate(order.id),due=this.maintenanceWorkOrders.summary().due.find(d=>d.equipment.id===order.equipmentId),successors=this.maintenanceDependencies.successors(order.id).length;let score=(P[order.priority]||20)+(C[asset?.criticalClass]||8)+(state.manual[order.id]||0)+Math.min(15,successors*5);if((due?.remaining??999)<=5)score+=18;else if((due?.remaining??999)<=25)score+=10;if(!dep.ready)score+=8;if(!ready.ready)score+=4;score=Math.max(0,Math.min(100,Math.round(score)));return{orderId:order.id,equipmentId:order.equipmentId,priority:order.priority,criticalClass:asset?.criticalClass||'C',score,band:score>=75?'P1':score>=55?'P2':score>=35?'P3':'P4',ready:ready.ready,dependencyReady:dep.ready,successors};}
 summary(state=this.get()){const rows=this.maintenanceWorkOrders.get().orders.filter(o=>o.status!=='closed').map(o=>this.score(o,state)).sort((a,b)=>b.score-a.score);return{rows,priority1:rows.filter(r=>r.band==='P1').length,priority2:rows.filter(r=>r.band==='P2').length,top:rows[0]||null};}
 syncLive(source='maintenance-priority'){this.liveState?.updateMaintenancePriorities?.(this.summary(),source);}
}
