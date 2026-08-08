const KEY='terminal:material-delivery-performance:v026';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),records:{}});
export class MaterialDeliveryPerformance{
 constructor({storage,eventBus,materialLeadTime,liveState}={}){Object.assign(this,{storage,eventBus,materialLeadTime,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.off=[];this.install();this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='material-delivery-performance'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateMaterialDeliveryPerformance?.(summary,source);this.eventBus?.emit('material-delivery-performance:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 install(){if(this.off.length||!this.eventBus)return;this.off.push(this.eventBus.on('material-lead-time:changed',()=>this.capture()));this.capture();}
 uninstall(){this.off.forEach(f=>f?.());this.off=[];}
 capture(){const lead=this.materialLeadTime?.get?.();if(!lead)return;const s=this.get();for(const r of lead.requests||[]){const rec=s.records[r.id]||{requestId:r.id,itemId:r.itemId,plannedEtaMinute:r.etaMinute,actualEtaMinute:r.actualEtaMinute??null,receivedAtMinute:null,status:r.status};rec.plannedEtaMinute=r.etaMinute;rec.actualEtaMinute=r.actualEtaMinute??rec.actualEtaMinute;rec.receivedAtMinute=r.receivedAtMinute??rec.receivedAtMinute;rec.status=r.status;if(rec.receivedAtMinute!==null){rec.varianceMinutes=rec.receivedAtMinute-rec.plannedEtaMinute;rec.onTime=rec.varianceMinutes<=0;}s.records[r.id]=rec;}this.save(s,'capture');}
 setActualArrival(requestId,actualMinute){const r=this.materialLeadTime?.get?.().requests.find(x=>x.id===requestId);if(!r)return{ok:false,reason:'Pedido não encontrado.'};const result=this.materialLeadTime.setActualETA?.(requestId,Math.max(r.requestedAtMinute,Number(actualMinute)||r.etaMinute));this.capture();return result||{ok:false,reason:'Serviço de lead time não suporta ajuste.'};}
 summary(state=this.get()){const rows=Object.values(state.records).sort((a,b)=>(b.plannedEtaMinute||0)-(a.plannedEtaMinute||0)),received=rows.filter(r=>r.receivedAtMinute!==null),delayed=received.filter(r=>(r.varianceMinutes||0)>0),early=received.filter(r=>(r.varianceMinutes||0)<0),avgVariance=received.length?received.reduce((n,r)=>n+(r.varianceMinutes||0),0)/received.length:0,onTimePct=received.length?100*(received.length-delayed.length)/received.length:100;return{rows,total:rows.length,received:received.length,open:rows.filter(r=>r.status==='open').length,delayed:delayed.length,early:early.length,avgVariance,onTimePct};}
 syncLive(source='material-delivery-performance'){this.liveState?.updateMaterialDeliveryPerformance?.(this.summary(),source);}
}
