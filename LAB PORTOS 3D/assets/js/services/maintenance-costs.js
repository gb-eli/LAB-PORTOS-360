import { SPARES } from './spare-parts-inventory.js';
import { EQUIPMENT } from './equipment-maintenance.js';
const KEY='terminal:maintenance-costs:v021';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),budget:250000,laborRate:180,downtimeRates:{STS:9000,RTG:2500,RS:1800,LOCO:3200}});
export class MaintenanceCosts{
 constructor({storage,eventBus,reliabilityMetrics,spareParts,maintenanceWorkOrders,liveState}={}){Object.assign(this,{storage,eventBus,reliabilityMetrics,spareParts,maintenanceWorkOrders,liveState});this.off=[];if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 configure({budget,laborRate}={}){const s=this.get();if(Number.isFinite(Number(budget)))s.budget=Math.max(0,Number(budget));if(Number.isFinite(Number(laborRate)))s.laborRate=Math.max(0,Number(laborRate));s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);this.syncLive('configure');return this.summary();}
 summary(){const cfg=this.get(),rel=this.reliabilityMetrics.summary(),inv=this.spareParts.summary(),wo=this.maintenanceWorkOrders.summary();const consumed=inv.movements.filter(m=>m.type==='consumo').reduce((sum,m)=>sum+(SPARES.find(p=>p.id===m.id)?.unitCost||0)*(Number(m.qty)||0),0);const downtime=rel.events.reduce((sum,e)=>sum+(cfg.downtimeRates[EQUIPMENT.find(x=>x.id===e.equipmentId)?.type]||0)*(Number(e.downtimeMinutes)||0)/60,0);const labor=wo.orders.filter(o=>o.status==='closed').length*2*cfg.laborRate;const total=consumed+downtime+labor,remaining=cfg.budget-total,utilization=cfg.budget?total/cfg.budget*100:0;return{budget:cfg.budget,laborRate:cfg.laborRate,partsCost:consumed,downtimeCost:downtime,laborCost:labor,total,remaining,utilization,closedOrders:wo.closed,note:'Valores exclusivamente didáticos para comparação de cenários.'};}
 install(){if(this.off.length||!this.eventBus)return;['spares:changed','work-orders:changed','reliability:changed'].forEach(n=>this.off.push(this.eventBus.on(n,()=>this.syncLive(n))));}
 uninstall(){this.off.forEach(f=>f?.());this.off=[];}
 syncLive(source='maintenance-costs'){const summary=this.summary();this.liveState?.updateMaintenanceCosts?.(summary,source);this.eventBus?.emit('maintenance-costs:changed',{source,summary});}
}
