const KEY='terminal:kpi-history:v018';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),points:[]});
export class KPIHistory{
 constructor({storage,eventBus,liveState,maxPoints=120}={}){Object.assign(this,{storage,eventBus,liveState,maxPoints});this.off=[];if(storage.get(KEY,null)===null)storage.set(KEY,fresh());}
 get(){return clone(this.storage.get(KEY,fresh()));}
 reset(){const s=fresh();this.storage.set(KEY,s);this.eventBus?.emit('kpi-history:changed',{source:'reset',history:clone(s.points)});return s;}
 capture(source='manual',force=false){const state=this.liveState.summary(),s=this.get(),minute=Number(state.elapsedMinutes)||0,last=s.points[s.points.length-1];const point={minute,at:new Date().toISOString(),source,queue:Number(state.queue.queue)||0,gateTph:Number(state.derived.gateTrucksPerHour)||0,turnMinutes:Number(state.derived.truckTurnMinutes)||0,yardPct:Number(state.yard.occupancyPct)||0,quayMph:Number(state.derived.craneMovesPerHour)||0,railCycles:Number(state.rail.cycles)||0,anchorageWaiting:Number(state.anchorage?.waiting)||0,equipmentAvailability:Number(state.equipment?.availabilityPct??100),rehandles:Number(state.yard.rehandles)||0};if(!force&&last&&last.minute===minute){s.points[s.points.length-1]=point;}else{s.points.push(point);if(s.points.length>this.maxPoints)s.points=s.points.slice(-this.maxPoints);}s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);this.eventBus?.emit('kpi-history:changed',{source,point:clone(point),history:clone(s.points)});return point;}
 install(){if(this.off.length||!this.eventBus)return;this.off=[this.eventBus.on('terminal-live:changed',p=>this.capture(p?.source||'live')),this.eventBus.on('shift:tick',()=>this.capture('shift'))];this.capture('install',true);}
 uninstall(){this.off.forEach(f=>f?.());this.off=[];}
 points(){return this.get().points;}
 latest(){const p=this.points();return p[p.length-1]||null;}
 range(){const p=this.points();return{count:p.length,start:p[0]?.minute??0,end:p[p.length-1]?.minute??0};}
}
