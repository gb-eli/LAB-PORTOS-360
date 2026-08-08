const KEY='terminal:reliability-family:v021';
const clone=v=>JSON.parse(JSON.stringify(v));
const LABELS={STS:'Portêineres STS',RTG:'RTGs',RS:'Reach Stackers',LOCO:'Locomotivas'};
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),snapshots:[]});
export class ReliabilityFamily{
 constructor({storage,eventBus,reliabilityMetrics,equipmentMaintenance,liveState}={}){Object.assign(this,{storage,eventBus,reliabilityMetrics,equipmentMaintenance,liveState});this.off=[];if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 calculate(){const rel=this.reliabilityMetrics.summary(),eq=this.equipmentMaintenance.summary(),types=['STS','RTG','RS','LOCO'];return types.map(type=>{const rows=rel.rows.filter(r=>r.equipment.type===type),failures=rows.reduce((n,r)=>n+r.failures,0),downtimeMinutes=rows.reduce((n,r)=>n+r.downtimeMinutes,0),hours=rows.reduce((n,r)=>n+r.hours,0),mtbf=failures?hours/failures:hours,mttr=failures?downtimeMinutes/failures:0,a=eq.byType[type]||{total:0,available:0};return{type,label:LABELS[type],assets:a.total,available:a.available,failures,hours,downtimeMinutes,mtbf,mttr,availabilityPct:a.total?a.available/a.total*100:100};});}
 capture(){const s=this.get(),rows=this.calculate(),snap={at:new Date().toISOString(),rows};s.snapshots.unshift(snap);s.snapshots=s.snapshots.slice(0,20);s.updatedAt=snap.at;this.storage.set(KEY,s);this.syncLive('capture');this.eventBus?.emit('reliability-family:changed',{rows:clone(rows)});return rows;}
 summary(){const rows=this.calculate(),worst=rows.filter(r=>r.failures>0).sort((a,b)=>a.mtbf-b.mtbf)[0]||null;return{rows,worst,snapshots:this.get().snapshots.length};}
 install(){if(this.off.length||!this.eventBus)return;['reliability:changed','equipment:changed','work-orders:changed'].forEach(n=>this.off.push(this.eventBus.on(n,()=>this.syncLive(n))));}
 uninstall(){this.off.forEach(f=>f?.());this.off=[];}
 syncLive(source='reliability-family'){this.liveState?.updateReliabilityFamily?.(this.summary(),source);}
}
