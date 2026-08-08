const KEY='terminal:maintenance-interruptions:v027';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),active:{},history:[],next:1});
export const INTERRUPTION_TYPES=['Segurança','Liberação operacional','Permissão de trabalho','Isolamento/LOTO','Condição ambiental'];
export class MaintenanceInterruptions{
 constructor({storage,eventBus,maintenanceExecutionProgress,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceExecutionProgress,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 interrupt(orderId,{type='Segurança',reason='Interrupção preventiva'}={}){const ex=this.maintenanceExecutionProgress?.summary?.().rows.find(r=>r.orderId===orderId);if(!ex||ex.status!=='running')return{ok:false,reason:'OT precisa estar em execução.'};const pause=this.maintenanceExecutionProgress.pause(orderId,`${type}: ${reason}`);if(!pause.ok)return pause;const s=this.get(),id=`INT-${String(s.next++).padStart(3,'0')}`,row={id,orderId,type,reason,startMinute:this.maintenanceExecutionProgress.summary().clockMinute,status:'active'};s.active[id]=row;s.history.unshift(row);this.save(s,'interrupt');return{ok:true,id};}
 clear(id,{resume=true}={}){const s=this.get(),r=s.active[id];if(!r)return{ok:false,reason:'Interrupção não encontrada.'};r.status='cleared';r.endMinute=this.maintenanceExecutionProgress.summary().clockMinute;r.durationMinutes=Math.max(0,r.endMinute-r.startMinute);delete s.active[id];s.history=s.history.map(x=>x.id===id?{...x,...r}:x);if(resume)this.maintenanceExecutionProgress.resume(r.orderId);this.save(s,'clear');return{ok:true};}
 save(s,source='interruptions'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceInterruptions?.(summary,source);this.eventBus?.emit('maintenance-interruptions:changed',{source,state:clone(s),summary});return clone(s);}
 summary(state=this.get()){const active=Object.values(state.active),totalMinutes=state.history.reduce((n,r)=>n+(r.durationMinutes||0),0);return{active:active.length,total:state.history.length,totalMinutes,safetyActive:active.filter(r=>r.type==='Segurança'||r.type==='Isolamento/LOTO').length,activeRows:active,history:state.history};}
 syncLive(source='interruptions'){this.liveState?.updateMaintenanceInterruptions?.(this.summary(),source);}
}
