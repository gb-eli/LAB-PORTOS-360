const KEY='terminal:maintenance-critical-path:v024';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),durations:{}});
const fallbackDuration=o=>o?.priority==='alta'?2:o?.type==='corrective'?4:3;
export class MaintenanceCriticalPath{
 constructor({storage,eventBus,maintenanceWorkOrders,maintenanceDependencies,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,maintenanceDependencies,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-critical-path'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceCriticalPath?.(summary,source);this.eventBus?.emit('maintenance-critical-path:changed',{source,state:clone(s),summary});return clone(s);}
 setDuration(orderId,hours){const order=this.maintenanceWorkOrders.get().orders.find(o=>o.id===orderId);if(!order)return{ok:false,reason:'OT não encontrada.'};const s=this.get();s.durations[orderId]=Math.max(.5,Number(hours)||.5);this.save(s,'duration');return{ok:true};}
 duration(order,state=this.get()){return Number(state.durations[order.id])||fallbackDuration(order);}
 summary(state=this.get()){
  const orders=this.maintenanceWorkOrders.get().orders.filter(o=>o.status!=='closed');
  const ids=new Set(orders.map(o=>o.id)),links=this.maintenanceDependencies.get().links||{};
  const preds=Object.fromEntries(orders.map(o=>[o.id,(links[o.id]||[]).filter(id=>ids.has(id))]));
  const byId=Object.fromEntries(orders.map(o=>[o.id,o]));
  const indeg=Object.fromEntries(orders.map(o=>[o.id,preds[o.id].length]));
  const succ=Object.fromEntries(orders.map(o=>[o.id,[]]));
  for(const [id,ps] of Object.entries(preds))ps.forEach(p=>succ[p]?.push(id));
  const queue=orders.filter(o=>indeg[o.id]===0).map(o=>o.id),topo=[];
  while(queue.length){const id=queue.shift();topo.push(id);for(const n of succ[id]||[]){indeg[n]-=1;if(indeg[n]===0)queue.push(n);}}
  const ef={},es={},parent={};
  for(const id of topo){const ps=preds[id]||[];let best=0,bestPred=null;for(const p of ps){if((ef[p]||0)>best){best=ef[p]||0;bestPred=p;}}es[id]=best;ef[id]=best+this.duration(byId[id],state);parent[id]=bestPred;}
  let end=null,total=0;for(const id of topo){if((ef[id]||0)>total){total=ef[id];end=id;}}
  const path=[];while(end){path.unshift(end);end=parent[end];}
  const rows=orders.map(o=>({orderId:o.id,equipmentId:o.equipmentId,durationHours:this.duration(o,state),earliestStart:es[o.id]||0,earliestFinish:ef[o.id]||this.duration(o,state),critical:path.includes(o.id),predecessors:preds[o.id]||[]})).sort((a,b)=>a.earliestStart-b.earliestStart||a.orderId.localeCompare(b.orderId));
  return{rows,path,totalDurationHours:total,criticalCount:path.length,edges:Object.values(preds).reduce((n,a)=>n+a.length,0),acyclic:topo.length===orders.length};
 }
 syncLive(source='maintenance-critical-path'){this.liveState?.updateMaintenanceCriticalPath?.(this.summary(),source);}
}
