import { EQUIPMENT } from './equipment-maintenance.js';
const KEY='terminal:maintenance-calendar:v022';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),focusDay:0});
export const DAY_LABELS=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
export class MaintenanceCalendar{
 constructor({storage,eventBus,plannedMaintenance,equipmentMaintenance,liveState}={}){Object.assign(this,{storage,eventBus,plannedMaintenance,equipmentMaintenance,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-calendar'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary();this.liveState?.updateMaintenanceCalendar?.(summary,source);this.eventBus?.emit('maintenance-calendar:changed',{source,state:clone(s),summary});return clone(s);}
 schedule({equipmentId,day=0,startHour=8,durationHours=2,reason='Preventiva semanal'}={}){if(!EQUIPMENT.some(e=>e.id===equipmentId))return{ok:false,reason:'Equipamento inválido.'};day=Math.max(0,Math.min(6,Number(day)||0));startHour=Math.max(0,Math.min(23,Number(startHour)||0));durationHours=Math.max(.5,Math.min(12,Number(durationHours)||2));const base=Math.floor((this.equipmentMaintenance.get().clock||0)/10080)*10080;const startMinute=base+day*1440+startHour*60;const r=this.plannedMaintenance.schedule({equipmentId,startMinute,duration:Math.round(durationHours*60),reason});if(r.ok){const s=this.get();s.focusDay=day;this.save(s,'schedule');}return r;}
 weekRows(){const clock=this.equipmentMaintenance.get().clock||0,base=Math.floor(clock/10080)*10080,end=base+10080,windows=this.plannedMaintenance.summary().windows.filter(w=>w.startMinute<end&&w.endMinute>base&&w.status!=='cancelled');return DAY_LABELS.map((label,day)=>{const start=base+day*1440,finish=start+1440;return{day,label,start,windows:windows.filter(w=>w.startMinute<finish&&w.endMinute>start).map(w=>({...w,equipment:EQUIPMENT.find(e=>e.id===w.equipmentId)}))};});}
 summary(){const rows=this.weekRows(),windows=rows.flatMap(r=>r.windows),unique=[...new Map(windows.map(w=>[w.id,w])).values()];return{rows,total:unique.length,active:unique.filter(w=>w.status==='active').length,scheduled:unique.filter(w=>w.status==='scheduled').length,next:this.plannedMaintenance.summary().next||null};}
 syncLive(source='maintenance-calendar'){this.liveState?.updateMaintenanceCalendar?.(this.summary(),source);}
}
