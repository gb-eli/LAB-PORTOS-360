import { VESSELS, fmtTime } from './berth-scheduler.js';
const KEY='terminal:port-calls:v019';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),actuals:Object.fromEntries(VESSELS.map(v=>[v.id,{atb:null,atd:null}]))});
export class PortCallTimeline{
 constructor({storage,eventBus,anchorageQueue,liveState}={}){Object.assign(this,{storage,eventBus,anchorageQueue,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='port-call'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateVesselCalls?.(summary,source);this.eventBus?.emit('port-call:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 markBerth(vesselId,minute){if(!VESSELS.some(v=>v.id===vesselId))return{ok:false,reason:'Navio inválido.'};const s=this.get(),row=this.anchorageQueue.summary().rows.find(r=>r.vessel.id===vesselId),m=Math.max(row?.revisedEta??0,Number(minute)||0);s.actuals[vesselId].atb=m;s.actuals[vesselId].atd=null;this.save(s,'atb');return{ok:true,minute:m};}
 markDepart(vesselId,minute){const s=this.get(),a=s.actuals[vesselId];if(!a||a.atb===null)return{ok:false,reason:'Registre o ATB antes do ATD.'};const m=Math.max(a.atb,Number(minute)||a.atb);a.atd=m;this.save(s,'atd');return{ok:true,minute:m};}
 clear(vesselId){const s=this.get();if(!s.actuals[vesselId])return null;s.actuals[vesselId]={atb:null,atd:null};return this.save(s,'clear');}
 rows(state=this.get()){const anchor=this.anchorageQueue.summary();return anchor.rows.map(r=>{const a=state.actuals[r.vessel.id]||{atb:null,atd:null};const etb=r.start,etd=r.etd,atb=a.atb,atd=a.atd;return{...r,eta:r.revisedEta,etb,atb,etd,atd,berthVariance:atb!==null&&etb!==null?atb-etb:null,departureVariance:atd!==null&&etd!==null?atd-etd:null,portStay:atb!==null&&atd!==null?atd-atb:null};});}
 summary(state=this.get()){const rows=this.rows(state),berthed=rows.filter(r=>r.atb!==null).length,departed=rows.filter(r=>r.atd!==null).length,vars=rows.filter(r=>r.berthVariance!==null);return{rows,berthed,departed,avgBerthVariance:vars.length?vars.reduce((n,r)=>n+r.berthVariance,0)/vars.length:0,next:rows.find(r=>r.atd===null)||null,fmtTime};}
 syncLive(source='port-call'){this.liveState?.updateVesselCalls?.(this.summary(),source);}
}
