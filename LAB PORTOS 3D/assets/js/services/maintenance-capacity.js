import { CREWS } from './maintenance-crews.js';
const KEY='terminal:maintenance-capacity:v024';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),workshops:{MEC:{label:'Oficina Mecânica',bays:2},ELE:{label:'Elétrica / Automação',bays:2},MULTI:{label:'Área Multidisciplinar',bays:1}},hoursPerShift:8});
const shiftOf=c=>c.shift;
export class MaintenanceCapacity{
 constructor({storage,eventBus,maintenanceWorkOrders,maintenanceCrews,maintenanceBacklog,maintenanceCriticalPath,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,maintenanceCrews,maintenanceBacklog,maintenanceCriticalPath,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-capacity'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceCapacity?.(summary,source);this.eventBus?.emit('maintenance-capacity:changed',{source,state:clone(s),summary});return clone(s);}
 setBays(key,bays){const s=this.get();if(!s.workshops[key])return{ok:false,reason:'Oficina inválida.'};s.workshops[key].bays=Math.max(1,Math.min(6,Number(bays)||1));this.save(s,'bays');return{ok:true};}
 summary(state=this.get()){
  const backlog=this.maintenanceBacklog.summary().rows.filter(r=>r.status==='open'),crit=Object.fromEntries(this.maintenanceCriticalPath.summary().rows.map(r=>[r.orderId,r]));
  const shifts=['06–14','14–22','22–06'];
  const rows=shifts.map(shift=>{const crewCount=CREWS.filter(c=>shiftOf(c)===shift).length;const bayCount=Object.values(state.workshops).reduce((n,w)=>n+w.bays,0);const capacityHours=Math.min(crewCount,bayCount)*state.hoursPerShift;const demandHours=backlog.reduce((n,r)=>n+(crit[r.orderId]?.durationHours||3),0);return{shift,crewCount,bayCount,capacityHours,demandHours,loadPct:capacityHours?demandHours/capacityHours*100:999,status:demandHours>capacityHours?'pressão':'capaz'};});
  return{rows,workshops:clone(state.workshops),hoursPerShift:state.hoursPerShift,minCapacityHours:Math.min(...rows.map(r=>r.capacityHours)),maxLoadPct:Math.max(...rows.map(r=>r.loadPct)),pressureShifts:rows.filter(r=>r.status==='pressão').length};
 }
 syncLive(source='maintenance-capacity'){this.liveState?.updateMaintenanceCapacity?.(this.summary(),source);}
}
