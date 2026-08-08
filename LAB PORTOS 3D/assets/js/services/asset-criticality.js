import { EQUIPMENT } from './equipment-maintenance.js';
const KEY='terminal:asset-criticality:v022';
const clone=v=>JSON.parse(JSON.stringify(v));
const DEFAULT_CONSEQUENCE={STS:5,RTG:4,RS:3,LOCO:4};
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),consequence:{}});
export class AssetCriticality{
 constructor({storage,eventBus,equipmentMaintenance,reliabilityFamily,liveState}={}){Object.assign(this,{storage,eventBus,equipmentMaintenance,reliabilityFamily,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='asset-criticality'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateAssetCriticality?.(summary,source);this.eventBus?.emit('asset-criticality:changed',{source,state:clone(s),summary});return clone(s);}
 setConsequence(id,value){if(!EQUIPMENT.some(e=>e.id===id))return{ok:false,reason:'Ativo inválido.'};const s=this.get();s.consequence[id]=Math.max(1,Math.min(5,Number(value)||3));this.save(s,'consequence');return{ok:true};}
 scoreAsset(e,state=this.get()){const family=this.reliabilityFamily?.summary?.().rows?.find(r=>r.type===e.type),eq=this.equipmentMaintenance.summary(),typeStatus=eq.byType[e.type]||{available:1,total:1},consequence=state.consequence[e.id]||DEFAULT_CONSEQUENCE[e.type]||3,redundancy=Math.max(1,typeStatus.available),redundancyPenalty=6-Math.min(5,redundancy),mtbf=family?.mtbf||1000,reliabilityPenalty=mtbf<250?5:mtbf<500?4:mtbf<800?3:mtbf<1200?2:1,status=this.equipmentMaintenance.get().items[e.id]?.status||'available',statusPenalty=status==='failure'?5:status==='maintenance'?3:1;const raw=consequence*8+redundancyPenalty*5+reliabilityPenalty*5+statusPenalty*4,score=Math.min(100,Math.round(raw)),criticalClass=score>=70?'A':score>=45?'B':'C';return{...e,consequence,redundancy,mtbf,status,score,criticalClass};}
 summary(state=this.get()){const rows=EQUIPMENT.map(e=>this.scoreAsset(e,state)).sort((a,b)=>b.score-a.score),top=rows[0]||null;return{rows,critical:rows.filter(x=>x.criticalClass==='A').length,high:rows.filter(x=>x.criticalClass==='B').length,criticalUnavailable:rows.filter(x=>x.criticalClass==='A'&&x.status!=='available').length,top};}
 syncLive(source='asset-criticality'){this.liveState?.updateAssetCriticality?.(this.summary(),source);}
}
