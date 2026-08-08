const KEY='terminal:shift-handover:v027';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),records:[],next:1});
export class ShiftHandover{
 constructor({storage,eventBus,maintenanceWorkOrders,maintenanceExecutionProgress,technicianAvailability,materialLeadTime,maintenanceEmergency,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceWorkOrders,maintenanceExecutionProgress,technicianAvailability,materialLeadTime,maintenanceEmergency,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 snapshot(){const ex=this.maintenanceExecutionProgress?.summary?.(),wo=this.maintenanceWorkOrders?.summary?.(),mat=this.materialLeadTime?.summary?.(),emg=this.maintenanceEmergency?.summary?.();return{clockMinute:ex?.clockMinute||0,running:(ex?.rows||[]).filter(r=>r.status==='running').map(r=>({orderId:r.orderId,equipmentId:r.equipmentId,progressPct:r.progressPct,technicians:r.technicians})),paused:(ex?.rows||[]).filter(r=>r.status==='paused').map(r=>({orderId:r.orderId,equipmentId:r.equipmentId,progressPct:r.progressPct,reason:r.pauseReason})),openOrders:wo?.open||0,materialsOpen:mat?.open||0,emergency:emg?.active?{equipmentId:emg.equipmentId,orderId:emg.orderId}:null};}
 create({fromShift='A',toShift='B',notes=''}={}){const s=this.get(),id=`HO-${String(s.next++).padStart(3,'0')}`,record={id,fromShift,toShift,notes,status:'pending',createdAt:new Date().toISOString(),snapshot:this.snapshot(),acceptedAt:null};s.records.unshift(record);this.save(s,'create');return{ok:true,id,record:clone(record)};}
 accept(id){const s=this.get(),r=s.records.find(x=>x.id===id);if(!r)return{ok:false,reason:'Handover não encontrado.'};r.status='accepted';r.acceptedAt=new Date().toISOString();this.save(s,'accept');return{ok:true};}
 save(s,source='handover'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateShiftHandover?.(summary,source);this.eventBus?.emit('shift-handover:changed',{source,state:clone(s),summary});return clone(s);}
 summary(state=this.get()){return{total:state.records.length,pending:state.records.filter(r=>r.status==='pending').length,accepted:state.records.filter(r=>r.status==='accepted').length,last:state.records[0]||null,rows:state.records};}
 syncLive(source='handover'){this.liveState?.updateShiftHandover?.(this.summary(),source);}
}
