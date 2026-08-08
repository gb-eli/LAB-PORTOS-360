import { SPARES } from './spare-parts-inventory.js';
import { EQUIPMENT } from './equipment-maintenance.js';
const KEY='terminal:ot-materials:v021';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),plans:{}});
const RECIPES={
 STS:[{id:'BRK-STS',qty:1},{id:'SNS-TWL',qty:1}],
 RTG:[{id:'TIR-RTG',qty:1},{id:'HOS-HYD',qty:1}],
 RS:[{id:'HOS-HYD',qty:1},{id:'FLT-ENG',qty:1}],
 LOCO:[{id:'FLT-ENG',qty:1},{id:'LMP-LED',qty:1}]
};
export class MaintenanceMaterialLinks{
 constructor({storage,eventBus,maintenanceWorkOrders,spareParts,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,spareParts,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='ot-materials'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceMaterials?.(summary,source);this.eventBus?.emit('ot-materials:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 order(id){return this.maintenanceWorkOrders?.get?.().orders.find(o=>o.id===id)||null;}
 defaultsFor(orderId){const o=this.order(orderId),e=EQUIPMENT.find(x=>x.id===o?.equipmentId);return e?clone(RECIPES[e.type]||[{id:'FLT-ENG',qty:1}]):[];}
 createPlan(orderId,items=null){const o=this.order(orderId);if(!o)return{ok:false,reason:'OT não encontrada.'};const rows=(items||this.defaultsFor(orderId)).filter(x=>SPARES.some(p=>p.id===x.id)).map(x=>({id:x.id,qty:Math.max(1,Number(x.qty)||1)}));if(!rows.length)return{ok:false,reason:'Nenhuma peça válida no plano.'};const s=this.get();s.plans[orderId]={orderId,equipmentId:o.equipmentId,status:'planned',items:rows,reserved:false,issued:false,createdAt:new Date().toISOString()};this.save(s,'plan');return{ok:true,plan:clone(s.plans[orderId])};}
 reserve(orderId){const s=this.get(),p=s.plans[orderId];if(!p)return{ok:false,reason:'Crie primeiro o plano de materiais.'};if(p.issued)return{ok:false,reason:'Materiais já consumidos.'};if(p.reserved)return{ok:true,plan:clone(p)};const done=[];for(const item of p.items){const r=this.spareParts.reserve(item.id,item.qty);if(!r.ok){done.forEach(x=>this.spareParts.release(x.id,x.qty));return{ok:false,reason:`${SPARES.find(x=>x.id===item.id)?.label}: ${r.reason}`};}done.push(item);}p.reserved=true;p.status='reserved';p.reservedAt=new Date().toISOString();this.save(s,'reserve');return{ok:true,plan:clone(p)};}
 issue(orderId){const s=this.get(),p=s.plans[orderId];if(!p)return{ok:false,reason:'Plano inexistente.'};if(p.issued)return{ok:true,plan:clone(p)};if(!p.reserved){const r=this.reserve(orderId);if(!r.ok)return r;}
 const refreshed=this.get(),plan=refreshed.plans[orderId];for(const item of plan.items){this.spareParts.release(item.id,item.qty);const r=this.spareParts.consume(item.id,item.qty,{reference:orderId});if(!r.ok)return{ok:false,reason:r.reason};}plan.reserved=false;plan.issued=true;plan.status='issued';plan.issuedAt=new Date().toISOString();this.save(refreshed,'issue');return{ok:true,plan:clone(plan)};}
 release(orderId){const s=this.get(),p=s.plans[orderId];if(!p||!p.reserved)return{ok:false,reason:'Não há reserva ativa.'};p.items.forEach(i=>this.spareParts.release(i.id,i.qty));p.reserved=false;p.status='planned';this.save(s,'release');return{ok:true};}
 summary(state=this.get()){const plans=Object.values(state.plans);const inv=this.spareParts.summary();const rows=plans.map(p=>({...p,items:p.items.map(i=>({...i,label:SPARES.find(x=>x.id===i.id)?.label||i.id,available:inv.rows.find(x=>x.id===i.id)?.available??0}))}));return{plans:rows,total:rows.length,reserved:rows.filter(x=>x.reserved).length,issued:rows.filter(x=>x.issued).length,pending:rows.filter(x=>!x.issued).length};}
 syncLive(source='ot-materials'){this.liveState?.updateMaintenanceMaterials?.(this.summary(),source);}
}
