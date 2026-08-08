const KEY='terminal:maintenance-delay-causes:v024';
const clone=v=>JSON.parse(JSON.stringify(v));
export const DELAY_CAUSES=[['parts','Falta de peça'],['crew','Equipe indisponível'],['access','Acesso/liberação'],['diagnosis','Diagnóstico adicional'],['operation','Prioridade operacional'],['weather','Condição ambiental'],['other','Outros']];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),entries:[],next:1});
export class MaintenanceDelayCauses{
 constructor({storage,eventBus,maintenanceWorkOrders,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='maintenance-delay-causes'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaintenanceDelayCauses?.(summary,source);this.eventBus?.emit('maintenance-delay-causes:changed',{source,state:clone(s),summary});return clone(s);}
 add(orderId,cause,minutes=30,note=''){if(!this.maintenanceWorkOrders.get().orders.some(o=>o.id===orderId))return{ok:false,reason:'OT não encontrada.'};if(!DELAY_CAUSES.some(([id])=>id===cause))return{ok:false,reason:'Causa inválida.'};const s=this.get(),entry={id:`ATR-${String(s.next++).padStart(4,'0')}`,orderId,cause,minutes:Math.max(1,Number(minutes)||1),note:String(note||''),createdAt:new Date().toISOString()};s.entries.unshift(entry);this.save(s,'add');return{ok:true,entry:clone(entry)};}
 summary(state=this.get()){const labels=Object.fromEntries(DELAY_CAUSES),byCause=DELAY_CAUSES.map(([id,label])=>{const rows=state.entries.filter(e=>e.cause===id);return{id,label,count:rows.length,minutes:rows.reduce((n,r)=>n+r.minutes,0)};}).sort((a,b)=>b.minutes-a.minutes);const totalMinutes=state.entries.reduce((n,r)=>n+r.minutes,0);return{entries:clone(state.entries),byCause,totalMinutes,totalEvents:state.entries.length,topCause:byCause[0]?.minutes?byCause[0]:null};}
 syncLive(source='maintenance-delay-causes'){this.liveState?.updateMaintenanceDelayCauses?.(this.summary(),source);}
}
