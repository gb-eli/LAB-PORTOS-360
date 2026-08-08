import { VESSELS, fmtTime } from './berth-scheduler.js';
const KEY='terminal:anchorage:v018';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),clock:0,delays:Object.fromEntries(VESSELS.map(v=>[v.id,{minutes:0,reason:''}]))});
export class AnchorageQueue{
 constructor({storage,eventBus,berthScheduler,resourcePlanner,liveState}={}){Object.assign(this,{storage,eventBus,berthScheduler,resourcePlanner,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(state,source='anchorage'){state.updatedAt=new Date().toISOString();this.storage.set(KEY,state);const summary=this.summary(state);this.liveState?.updateAnchorage?.(summary,source);this.eventBus?.emit('anchorage:changed',{source,state:clone(state),summary});return clone(state);}
 reset(){return this.save(fresh(),'reset');}
 setClock(minute=0){const s=this.get();s.clock=Math.max(0,Number(minute)||0);return this.save(s,'clock');}
 delay(vesselId,minutes=0,reason='Ajuste operacional'){if(!VESSELS.some(v=>v.id===vesselId))return null;const s=this.get();s.delays[vesselId]={minutes:Math.max(0,Number(minutes)||0),reason};return this.save(s,'delay');}
 clearDelay(vesselId){return this.delay(vesselId,0,'');}
 rows(state=this.get()){const schedule=this.berthScheduler.summary();return VESSELS.map(v=>{const d=state.delays[v.id]||{minutes:0,reason:''},revisedEta=v.eta+d.minutes,a=schedule.assignments.find(x=>x.vesselId===v.id),resource=this.resourcePlanner?.forecast(v.id),start=a?Math.max(a.start,revisedEta):null,duration=resource?.durationMinutes||v.duration,etd=start===null?null:start+duration,waiting=start===null?Math.max(0,state.clock-revisedEta):Math.max(0,start-revisedEta);let status='aproximação';if(state.clock>=revisedEta)status='fundeio';if(start!==null&&state.clock>=start)status='berçado';if(etd!==null&&state.clock>=etd)status='partiu';return{vessel:v,delay:d.minutes,reason:d.reason,revisedEta,scheduledStart:a?.start??null,start,etd,waiting,status,berth:a?.berth||null,resource};});}
 summary(state=this.get()){const rows=this.rows(state),waitingRows=rows.filter(r=>r.status==='fundeio'),delayed=rows.filter(r=>r.delay>0),next=[...rows].filter(r=>r.status!=='partiu').sort((a,b)=>a.revisedEta-b.revisedEta)[0]||null;return{clock:state.clock,rows,waiting:waitingRows.length,delayed:delayed.length,avgDelay:delayed.length?delayed.reduce((n,r)=>n+r.delay,0)/delayed.length:0,maxWait:rows.reduce((m,r)=>Math.max(m,r.waiting),0),nextVessel:next?.vessel?.name||null,fmtTime};}
 syncLive(source='anchorage'){this.liveState?.updateAnchorage?.(this.summary(),source);}
}
