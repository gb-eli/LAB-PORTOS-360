const KEY='terminal:technician-productivity:v027';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),snapshots:0,last:null});
export class TechnicianProductivity{
 constructor({storage,eventBus,maintenanceExecutionProgress,liveState}={}){Object.assign(this,{storage,eventBus,maintenanceExecutionProgress,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.off=[];this.install();this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='technician-productivity'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary();this.liveState?.updateTechnicianProductivity?.(summary,source);this.eventBus?.emit('technician-productivity:changed',{source,summary});return clone(s);}
 install(){if(this.off.length||!this.eventBus)return;this.off.push(this.eventBus.on('maintenance-execution:changed',()=>this.capture('execution')));}
 uninstall(){this.off.forEach(f=>f?.());this.off=[];}
 rows(){const ex=this.maintenanceExecutionProgress?.summary?.().rows||[],map={};for(const e of ex){const techs=e.technicians||[];if(!techs.length)continue;const share=(e.productiveMinutes||0)/techs.length;for(const id of techs){const r=map[id]||(map[id]={techId:id,productiveMinutes:0,orders:new Set(),completed:0,pausedExposure:0});r.productiveMinutes+=share;r.orders.add(e.orderId);r.pausedExposure+=(e.pausedMinutes||0)/techs.length;if(e.status==='completed')r.completed+=1;}}return Object.values(map).map(r=>{const hours=r.productiveMinutes/60,index=Math.max(60,Math.min(130,100+r.completed*4-Math.max(0,hours-6)*3-r.pausedExposure/90));return{techId:r.techId,productiveMinutes:Math.round(r.productiveMinutes),orders:r.orders.size,completed:r.completed,index};}).sort((a,b)=>b.index-a.index);}
 team(){const rows=this.rows();return{technicians:rows.length,productiveMinutes:rows.reduce((n,r)=>n+r.productiveMinutes,0),completed:rows.reduce((n,r)=>n+r.completed,0),avgIndex:rows.length?rows.reduce((n,r)=>n+r.index,0)/rows.length:100};}
 factorForOrder(orderId){const ex=this.maintenanceExecutionProgress?.summary?.().rows.find(r=>r.orderId===orderId),rows=this.rows();if(!ex?.technicians?.length)return 1;const vals=ex.technicians.map(id=>rows.find(r=>r.techId===id)?.index||100);return Math.max(.65,Math.min(1.3,(vals.reduce((a,b)=>a+b,0)/vals.length)/100));}
 capture(source='capture'){const s=this.get();s.snapshots+=1;s.last={at:new Date().toISOString(),team:this.team()};this.save(s,source);return this.summary();}
 summary(){const state=this.get(),rows=this.rows(),team=this.team();return{snapshots:state.snapshots,rows,...team,last:state.last};}
 syncLive(source='technician-productivity'){this.liveState?.updateTechnicianProductivity?.(this.summary(),source);}
}
