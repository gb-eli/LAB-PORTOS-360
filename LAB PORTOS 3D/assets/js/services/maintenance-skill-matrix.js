import { EQUIPMENT } from './equipment-maintenance.js';
const KEY='terminal:maintenance-skill-matrix:v025';
const clone=v=>JSON.parse(JSON.stringify(v));
export const SPECIALTIES=['Mecânica','Elétrica','Automação','Multidisciplinar'];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),custom:{}});
const defaults={
  STS:{preventive:{'Mecânica':1,'Elétrica':1},corrective:{'Mecânica':1,'Elétrica':1,'Automação':1}},
  RTG:{preventive:{'Mecânica':1,'Elétrica':1},corrective:{'Mecânica':2,'Elétrica':1}},
  RS:{preventive:{'Mecânica':1},corrective:{'Mecânica':2}},
  LOCO:{preventive:{'Mecânica':1,'Elétrica':1},corrective:{'Mecânica':2,'Elétrica':1}}
};
const normalize=req=>Object.fromEntries(Object.entries(req||{}).filter(([k,v])=>SPECIALTIES.includes(k)&&Number(v)>0).map(([k,v])=>[k,Math.max(1,Math.round(Number(v)||1))]));
export class MaintenanceSkillMatrix{
 constructor({storage,eventBus,maintenanceWorkOrders,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-skills'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceSkills?.(summary,source);this.eventBus?.emit('maintenance-skills:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 setRequirements(orderId,requirements={}){const order=this.maintenanceWorkOrders?.get?.().orders.find(o=>o.id===orderId);if(!order)return{ok:false,reason:'OT não encontrada.'};const req=normalize(requirements);if(!Object.keys(req).length)return{ok:false,reason:'Informe ao menos uma especialidade.'};const s=this.get();s.custom[orderId]=req;this.save(s,'requirements');return{ok:true,requirements:clone(req)};}
 clearRequirements(orderId){const s=this.get();delete s.custom[orderId];this.save(s,'clear');return{ok:true};}
 requirements(orderId,state=this.get()){const order=this.maintenanceWorkOrders?.get?.().orders.find(o=>o.id===orderId);if(!order)return{};if(state.custom[orderId])return clone(state.custom[orderId]);const eq=EQUIPMENT.find(e=>e.id===order.equipmentId);const family=defaults[eq?.type]||{preventive:{'Multidisciplinar':1},corrective:{'Multidisciplinar':1}};const mode=order.type==='corrective'?'corrective':'preventive';return clone(family[mode]||family.preventive);}
 summary(state=this.get()){const orders=this.maintenanceWorkOrders?.get?.().orders.filter(o=>o.status!=='closed')||[];const rows=orders.map(o=>{const requirements=this.requirements(o.id,state);return{orderId:o.id,equipmentId:o.equipmentId,type:o.type,requirements,specialtyCount:Object.keys(requirements).length,technicians:Object.values(requirements).reduce((n,v)=>n+v,0),custom:Boolean(state.custom[o.id])};});const demand={};rows.forEach(r=>Object.entries(r.requirements).forEach(([k,v])=>demand[k]=(demand[k]||0)+v));return{rows,total:rows.length,multiSpecialty:rows.filter(r=>r.specialtyCount>=2).length,totalTechnicians:rows.reduce((n,r)=>n+r.technicians,0),demand};}
 syncLive(source='maintenance-skills'){this.liveState?.updateMaintenanceSkills?.(this.summary(),source);}
}
