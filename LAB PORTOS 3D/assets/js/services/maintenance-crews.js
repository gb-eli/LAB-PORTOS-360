const KEY='terminal:maintenance-crews:v021';
const clone=v=>JSON.parse(JSON.stringify(v));
export const CREWS=[
 {id:'MEC-A',label:'Equipe Mecânica A',specialty:'Mecânica',shift:'06–14'},
 {id:'ELE-A',label:'Equipe Elétrica A',specialty:'Elétrica',shift:'06–14'},
 {id:'AUT-A',label:'Automação A',specialty:'Automação',shift:'14–22'},
 {id:'MEC-B',label:'Equipe Mecânica B',specialty:'Mecânica',shift:'14–22'},
 {id:'MULTI-N',label:'Equipe Multidisciplinar N',specialty:'Multidisciplinar',shift:'22–06'}
];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),assignments:{}});
export class MaintenanceCrews{
 constructor({storage,eventBus,maintenanceWorkOrders,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-crews'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceCrews?.(summary,source);this.eventBus?.emit('maintenance-crews:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 assign(orderId,crewId){const order=this.maintenanceWorkOrders.get().orders.find(o=>o.id===orderId&&o.status!=='closed'),crew=CREWS.find(c=>c.id===crewId);if(!order)return{ok:false,reason:'OT aberta não encontrada.'};if(!crew)return{ok:false,reason:'Equipe inválida.'};const s=this.get(),busy=Object.entries(s.assignments).find(([oid,cid])=>cid===crewId&&oid!==orderId&&this.maintenanceWorkOrders.get().orders.find(o=>o.id===oid&&o.status!=='closed'));if(busy)return{ok:false,reason:`${crewId} já atende ${busy[0]}.`};s.assignments[orderId]=crewId;this.save(s,'assign');return{ok:true};}
 release(orderId){const s=this.get();delete s.assignments[orderId];return this.save(s,'release');}
 start(orderId){if(!this.get().assignments[orderId])return{ok:false,reason:'Atribua uma equipe antes de iniciar.'};return this.maintenanceWorkOrders.start(orderId);}
 close(orderId){const r=this.maintenanceWorkOrders.close(orderId);if(r.ok)this.release(orderId);return r;}
 summary(state=this.get()){const orders=this.maintenanceWorkOrders.get().orders,rows=CREWS.map(c=>{const pair=Object.entries(state.assignments).find(([oid,cid])=>cid===c.id&&orders.find(o=>o.id===oid&&o.status!=='closed'));return{...c,orderId:pair?.[0]||null,busy:Boolean(pair)};});return{rows,total:rows.length,busy:rows.filter(x=>x.busy).length,available:rows.filter(x=>!x.busy).length,assignments:clone(state.assignments)};}
 syncLive(source='maintenance-crews'){this.liveState?.updateMaintenanceCrews?.(this.summary(),source);}
}
