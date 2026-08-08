const KEY='terminal:fatigue-model:v027';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),snapshots:0,last:null});
export class FatigueModel{
 constructor({storage,eventBus,maintenanceExecutionProgress,overtimeManager,technicianTransfer,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceExecutionProgress,overtimeManager,technicianTransfer,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 _rows(){const ex=this.maintenanceExecutionProgress?.summary?.().rows||[],map={};for(const e of ex){for(const id of e.technicians||[]){const r=map[id]||(map[id]={techId:id,productive:0,paused:0,orders:new Set()});r.productive+=(e.productiveMinutes||0)/(e.technicians.length||1);r.paused+=(e.pausedMinutes||0)/(e.technicians.length||1);r.orders.add(e.orderId);}}const transfers=this.technicianTransfer?.summary?.().rows||[];return Object.values(map).map(r=>{const overtime=this.overtimeManager?.approvedMinutes?.(r.techId)||0,transferCount=transfers.filter(t=>t.techId===r.techId).length;const score=Math.max(0,Math.min(100,r.productive/6+overtime/18+transferCount*5-r.paused/30));const level=score>=70?'alto':score>=45?'atenção':'controlado';const factor=Math.max(.65,1-score*.0045);return{techId:r.techId,score,level,factor,productiveMinutes:Math.round(r.productive),overtimeMinutes:overtime,transfers:transferCount,orders:r.orders.size};}).sort((a,b)=>b.score-a.score);}
 factorForTechnicians(ids=[]){const rows=this._rows(),vals=ids.map(id=>rows.find(r=>r.techId===id)?.factor||1);return vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:1;}
 capture(){const s=this.get(),rows=this._rows();s.snapshots+=1;s.last={at:new Date().toISOString(),high:rows.filter(r=>r.level==='alto').length};this.storage.set(KEY,s);this.syncLive('capture');return this.summary();}
 summary(){const state=this.get(),rows=this._rows();return{snapshots:state.snapshots,rows,high:rows.filter(r=>r.level==='alto').length,attention:rows.filter(r=>r.level==='atenção').length,maxScore:rows[0]?.score||0,last:state.last};}
 syncLive(source='fatigue'){const summary=this.summary();this.liveState?.updateFatigue?.(summary,source);this.eventBus?.emit('fatigue:changed',{source,summary});}
}
