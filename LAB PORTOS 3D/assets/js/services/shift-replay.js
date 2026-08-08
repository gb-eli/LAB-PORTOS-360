const KEY='terminal:shift-replay:v027';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),recording:true,events:[],snapshots:[]});
const WATCH=['maintenance-execution:changed','technician-transfer:changed','material-delivery-performance:changed','technician-dispatcher:changed','maintenance-shift-runtime:changed','maintenance-interruptions:changed','overtime:changed','shift-handover:changed','maintenance-emergency:changed'];
export class ShiftReplay{
 constructor({storage,eventBus,maintenanceShiftRuntime,maintenanceExecutionProgress,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceShiftRuntime,maintenanceExecutionProgress,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.off=[];this.install();this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 install(){if(this.off.length||!this.eventBus)return;for(const name of WATCH)this.off.push(this.eventBus.on(name,p=>this.record(name,p)));}
 uninstall(){this.off.forEach(f=>f?.());this.off=[];}
 setRecording(on){const s=this.get();s.recording=Boolean(on);return this.save(s,'recording');}
 clear(){return this.save(fresh(),'clear');}
 record(type,payload={}){const s=this.get();if(!s.recording)return;const minute=this.maintenanceShiftRuntime?.summary?.().clockMinute??this.maintenanceExecutionProgress?.summary?.().clockMinute??0,source=payload?.source||type.replace(':changed','');const event={id:`R-${Date.now()}-${Math.random().toString(36).slice(2,5)}`,minute,type,source,label:this.label(type,payload)};s.events.push(event);s.events=s.events.slice(-600);if(minute%30===0&&!s.snapshots.some(x=>x.minute===minute))s.snapshots.push({minute,execution:this.maintenanceExecutionProgress?.summary?.(),runtime:this.maintenanceShiftRuntime?.summary?.()});s.snapshots=s.snapshots.slice(-80);this.save(s,'record');}
 label(type,p){const map={'maintenance-execution:changed':'Execução de OT atualizada','technician-transfer:changed':'Transferência de técnico','material-delivery-performance:changed':'Entrega de peça atualizada','technician-dispatcher:changed':'Despacho automático','maintenance-shift-runtime:changed':'Relógio do turno','maintenance-interruptions:changed':'Interrupção operacional','overtime:changed':'Hora extra atualizada','shift-handover:changed':'Handover registrado','maintenance-emergency:changed':'Emergência de manutenção'};return map[type]||p?.source||type;}
 save(s,source='replay'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateShiftReplay?.(summary,source);this.eventBus?.emit('shift-replay:changed',{source,summary});return clone(s);}
 timeline({from=0,to=Infinity}={}){return this.get().events.filter(e=>e.minute>=from&&e.minute<=to);}
 summary(state=this.get()){return{recording:state.recording,events:state.events.length,snapshots:state.snapshots.length,last:state.events.at(-1)||null,rows:state.events};}
 syncLive(source='replay'){this.liveState?.updateShiftReplay?.(this.summary(),source);}
}
