const KEY='terminal:maintenance-dependencies:v023';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),links:{}});
export class MaintenanceDependencies{
 constructor({storage,eventBus,maintenanceWorkOrders,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-dependencies'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceDependencies?.(summary,source);this.eventBus?.emit('maintenance-dependencies:changed',{source,state:clone(s),summary});return clone(s);}
 orders(){return this.maintenanceWorkOrders?.get?.().orders||[];}
 exists(id){return this.orders().some(o=>o.id===id);}
 pathExists(from,target,state=this.get(),seen=new Set()){if(from===target)return true;if(seen.has(from))return false;seen.add(from);return (state.links[from]||[]).some(next=>this.pathExists(next,target,state,seen));}
 add(orderId,predecessorId){if(orderId===predecessorId)return{ok:false,reason:'Uma OT não pode depender dela mesma.'};if(!this.exists(orderId)||!this.exists(predecessorId))return{ok:false,reason:'Selecione OTs existentes.'};const s=this.get();s.links[orderId]=s.links[orderId]||[];if(s.links[orderId].includes(predecessorId))return{ok:true};if(this.pathExists(predecessorId,orderId,s))return{ok:false,reason:'Dependência criaria um ciclo.'};s.links[orderId].push(predecessorId);this.save(s,'add');return{ok:true};}
 remove(orderId,predecessorId){const s=this.get();s.links[orderId]=(s.links[orderId]||[]).filter(id=>id!==predecessorId);if(!s.links[orderId].length)delete s.links[orderId];this.save(s,'remove');return{ok:true};}
 clear(orderId){const s=this.get();delete s.links[orderId];return this.save(s,'clear');}
 evaluate(orderId,state=this.get()){const preds=state.links[orderId]||[],orders=this.orders(),rows=preds.map(id=>{const o=orders.find(x=>x.id===id);return{id,status:o?.status||'missing',closed:o?.status==='closed',equipmentId:o?.equipmentId||'—'};});const pending=rows.filter(x=>!x.closed);return{ok:pending.length===0,ready:pending.length===0,predecessors:rows,pending,reason:pending.length?`Aguarde: ${pending.map(x=>x.id).join(', ')} ainda não foi concluída.`:'Dependências concluídas.'};}
 successors(orderId,state=this.get()){return Object.entries(state.links).filter(([,ids])=>ids.includes(orderId)).map(([id])=>id);}
 summary(state=this.get()){const orders=this.orders().filter(o=>o.status!=='closed'),rows=orders.map(o=>({orderId:o.id,equipmentId:o.equipmentId,status:o.status,...this.evaluate(o.id,state),successors:this.successors(o.id,state)}));return{rows,linked:Object.values(state.links).reduce((n,a)=>n+a.length,0),blocked:rows.filter(r=>!r.ready).length,withDependencies:rows.filter(r=>r.predecessors.length).length};}
 syncLive(source='maintenance-dependencies'){this.liveState?.updateMaintenanceDependencies?.(this.summary(),source);}
}
