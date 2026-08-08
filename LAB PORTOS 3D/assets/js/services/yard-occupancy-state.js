import { YARD_SCHEMA, formatYardAddress, normalizeYardAddress } from './yard-addressing.js';
const KEY='terminal:yard-map:v017';
const clone=v=>JSON.parse(JSON.stringify(v));
const targets={A:62,B:72,C:64,D:38};
const keyOf=a=>formatYardAddress(a);
function seeded(){const slots={};YARD_SCHEMA.blocks.forEach((block,bi)=>YARD_SCHEMA.bays.forEach(bay=>YARD_SCHEMA.rows.forEach((row,ri)=>YARD_SCHEMA.tiers.forEach(tier=>{const a={block,bay,row,tier};const key=keyOf(a);const hash=(bi*37+bay*19+ri*13+tier*17)%100;let status=hash<targets[block]?'occupied':'free';if(status==='occupied'&&block==='C'&&bay<=2)status='reefer';if(status==='occupied'&&block==='D'&&bay===1)status='special';slots[key]=status;}))));return{version:1,updatedAt:new Date().toISOString(),slots};}
export class YardOccupancyState{
 constructor({storage,eventBus,liveState}={}){this.storage=storage;this.eventBus=eventBus;this.liveState=liveState;this.off=[];if(!storage.get(KEY,null))storage.set(KEY,seeded());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,seeded()));}
 save(state,source='yard-map'){state.updatedAt=new Date().toISOString();this.storage.set(KEY,state);this.syncLive(source);this.eventBus?.emit('yard-map:changed',{source,state:clone(state),summary:this.summary()});return clone(state);}
 reset(){const s=seeded();this.storage.set(KEY,s);this.syncLive('reset');this.eventBus?.emit('yard-map:changed',{source:'reset',state:clone(s),summary:this.summary()});return s;}
 install(){if(this.off.length||!this.eventBus)return;this.off=[this.eventBus.on('simulation:complete',p=>this.capture(p))];}
 uninstall(){this.off.forEach(f=>f?.());this.off=[];}
 capture(p={}){if(p.moduleId==='patio-operacional'){const block=p.lastBlock||'A';const address=p.address||this.findFirstFree({block});if(address)this.set(address,'occupied','patio-operacional');}if(p.moduleId==='patio-especializado'&&p.address){this.set(p.address,p.cargo?.toLowerCase().includes('reefer')?'reefer':'special','patio-especializado');}}
 normalizeAddress(value){if(typeof value==='string'){const m=/^([A-D])-(\d{2})-([A-D])-(\d{2})$/.exec(value);if(m)return{block:m[1],bay:Number(m[2]),row:m[3],tier:Number(m[4])};}return normalizeYardAddress(value);}
 status(address){const a=this.normalizeAddress(address);return this.get().slots[keyOf(a)]||'free';}
 set(address,status='occupied',source='manual'){const a=this.normalizeAddress(address),key=keyOf(a);if(key==='—')return null;const s=this.get();s.slots[key]=status;this.save(s,source);return{address:a,key,status};}
 toggle(address){const cur=this.status(address);return this.set(address,cur==='free'?'reserved':'free','toggle');}
 findFirstFree({block='A',tier}={}){for(const bay of YARD_SCHEMA.bays)for(const row of YARD_SCHEMA.rows)for(const t of YARD_SCHEMA.tiers){if(tier&&tier!==t)continue;const a={block,bay,row,tier:t};if(this.status(a)==='free')return a;}return null;}
 fillBlockTo(block,target=.9){const goal=Math.max(0,Math.min(1,target));const s=this.get();const keys=Object.keys(s.slots).filter(k=>k.startsWith(block+'-'));const occupied=()=>keys.filter(k=>s.slots[k]!=='free').length;let i=0;while(occupied()/keys.length<goal&&i<keys.length){const k=keys[i++];if(s.slots[k]==='free')s.slots[k]='occupied';}return this.save(s,'fill-block');}
 blockStats(block){const s=this.get(),keys=Object.keys(s.slots).filter(k=>k.startsWith(block+'-')),occupied=keys.filter(k=>s.slots[k]!=='free').length;return{block,total:keys.length,occupied,free:keys.length-occupied,pct:keys.length?occupied/keys.length*100:0};}
 bayStats(block){return YARD_SCHEMA.bays.map(bay=>{const prefix=`${block}-${String(bay).padStart(2,'0')}-`,s=this.get(),keys=Object.keys(s.slots).filter(k=>k.startsWith(prefix)),occupied=keys.filter(k=>s.slots[k]!=='free').length;return{bay,total:keys.length,occupied,pct:keys.length?occupied/keys.length*100:0};});}
 summary(){const blocks=YARD_SCHEMA.blocks.map(b=>this.blockStats(b)),total=blocks.reduce((a,b)=>a+b.total,0),occupied=blocks.reduce((a,b)=>a+b.occupied,0);return{blocks,total,occupied,free:total-occupied,pct:total?occupied/total*100:0};}
 syncLive(source='yard-map'){if(!this.liveState)return;const sum=this.summary(),s=this.liveState.get();s.yard.occupancyPct=sum.pct;s.yard.blockOccupancy=Object.fromEntries(sum.blocks.map(b=>[b.block,b.pct]));this.liveState.save(s,source);}
}
