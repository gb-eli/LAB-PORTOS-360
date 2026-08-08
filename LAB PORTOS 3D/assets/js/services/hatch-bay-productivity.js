import { VESSELS } from './berth-scheduler.js';
const KEY='terminal:hatch-bay-productivity:v020';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),records:[]});
export const HATCHES=['H1','H2','H3','H4'];
export const BAYS=['01','03','05','07','09','11'];
export class HatchBayProductivity{
 constructor({storage,eventBus,liveState}={}){Object.assign(this,{storage,eventBus,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='hatch-productivity'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateHatchProductivity?.(summary,source);this.eventBus?.emit('hatch-productivity:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 record({vesselId,hatch='H1',bay='01',craneId='STS-01',moves=12,minutes=30}={}){if(!VESSELS.some(v=>v.id===vesselId))return{ok:false,reason:'Navio inválido.'};if(!HATCHES.includes(hatch)||!BAYS.includes(bay))return{ok:false,reason:'Hatch/Bay inválido.'};moves=Math.max(1,Number(moves)||1);minutes=Math.max(1,Number(minutes)||1);const s=this.get();s.records.push({id:`HB-${Date.now()}-${s.records.length}`,at:new Date().toISOString(),vesselId,hatch,bay,craneId,moves,minutes});this.save(s,'record');return{ok:true,rate:moves/(minutes/60)};}
 summary(state=this.get()){const group=(key)=>[...new Set(state.records.map(r=>r[key]))].map(id=>{const rows=state.records.filter(r=>r[key]===id),moves=rows.reduce((n,x)=>n+x.moves,0),minutes=rows.reduce((n,x)=>n+x.minutes,0);return{id,moves,minutes,rate:minutes?moves/(minutes/60):0,records:rows.length};}).sort((a,b)=>a.id.localeCompare(b.id));const totalMoves=state.records.reduce((n,x)=>n+x.moves,0),totalMinutes=state.records.reduce((n,x)=>n+x.minutes,0),byHatch=group('hatch'),byBay=group('bay'),bottleneck=[...byHatch,...byBay].filter(x=>x.minutes>0).sort((a,b)=>a.rate-b.rate)[0]||null;return{records:state.records,totalMoves,totalMinutes,overallRate:totalMinutes?totalMoves/(totalMinutes/60):0,byHatch,byBay,bottleneck};}
 syncLive(source='hatch-productivity'){this.liveState?.updateHatchProductivity?.(this.summary(),source);}
}
