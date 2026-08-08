import { VESSELS } from './berth-scheduler.js';
const KEY='terminal:quay-productivity:v019';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),records:[]});
export class QuayProductivity{
 constructor({storage,eventBus,resourcePlanner,liveState}={}){Object.assign(this,{storage,eventBus,resourcePlanner,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='productivity'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateProductivity?.(summary,source);this.eventBus?.emit('quay-productivity:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 record({vesselId,craneId,moves=0,minutes=0}={}){const v=VESSELS.find(x=>x.id===vesselId);if(!v)return{ok:false,reason:'Navio inválido.'};if(!/^STS-\d{2}$/.test(craneId||''))return{ok:false,reason:'Selecione um STS.'};moves=Math.max(0,Number(moves)||0);minutes=Math.max(1,Number(minutes)||0);if(!moves)return{ok:false,reason:'Informe movimentos maiores que zero.'};const s=this.get();s.records.push({id:`PR-${Date.now()}-${s.records.length}`,at:new Date().toISOString(),vesselId,craneId,moves,minutes});this.save(s,'record');return{ok:true,rate:moves/(minutes/60)};}
 simulate(vesselId,craneId,minutes=30,rate=26){const moves=Math.max(1,Math.round(rate*(minutes/60)));return this.record({vesselId,craneId,moves,minutes});}
 summary(state=this.get()){const byVessel=VESSELS.map(v=>{const r=state.records.filter(x=>x.vesselId===v.id),moves=r.reduce((n,x)=>n+x.moves,0),minutes=r.reduce((n,x)=>n+x.minutes,0),rate=minutes?moves/(minutes/60):0,plan=this.resourcePlanner?.forecast?.(v.id);return{vessel:v,moves,minutes,rate,plannedRate:plan?.effectiveRate||28,records:r.length};});const craneIds=['STS-01','STS-02','STS-03','STS-04'];const byCrane=craneIds.map(id=>{const r=state.records.filter(x=>x.craneId===id),moves=r.reduce((n,x)=>n+x.moves,0),minutes=r.reduce((n,x)=>n+x.minutes,0);return{id,moves,minutes,rate:minutes?moves/(minutes/60):0,records:r.length};});const moves=state.records.reduce((n,x)=>n+x.moves,0),minutes=state.records.reduce((n,x)=>n+x.minutes,0);return{records:state.records,byVessel,byCrane,totalMoves:moves,totalMinutes:minutes,overallRate:minutes?moves/(minutes/60):0};}
 syncLive(source='productivity'){this.liveState?.updateProductivity?.(this.summary(),source);}
}
