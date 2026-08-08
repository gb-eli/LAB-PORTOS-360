const KEY='practical:multi-lane-gate:v031';
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
const defaults=()=>({clockMin:0,lanes:[1,2,3,4].map(id=>({id,open:true,busyUntil:0,processed:0})),queue:[],processed:[],seq:1});
export class MultiLaneGate{
 constructor({storage,eventBus,practicalOperation,gateCycle}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.gateCycle=gateCycle;this.state=this.storage?.get(KEY,null)||defaults();this.sync('init');}
 get(){return cp(this.state);} reset(){this.state=defaults();this.sync('reset');return this.get();}
 enqueue(data={}){const op=this.practicalOperation?.get?.()||{};const truck={id:`TRK-${String(this.state.seq++).padStart(3,'0')}`,plate:data.plate||op.plate||'ABC1D23',containerNo:data.containerNo||op.containerNo||'',seal:data.seal||op.sealExpected||'',appointment:data.appointment!==false,documents:data.documents!==false,joinedAt:this.state.clockMin,status:'queue'};this.state.queue.push(truck);this.sync('enqueue');return cp(truck);}
 toggleLane(id){const l=this.state.lanes.find(x=>x.id===Number(id));if(l)l.open=!l.open;this.sync('lane');return cp(l);}
 tick(min=2){this.state.clockMin+=Number(min||0);for(const lane of this.state.lanes){if(!lane.open||lane.busyUntil>this.state.clockMin)continue;const truck=this.state.queue.shift();if(!truck)break;const result=this.gateCycle?.evaluate?.('in',{plate:truck.plate,containerNo:truck.containerNo,seal:truck.seal,appointment:truck.appointment,documents:truck.documents})||{ok:true};truck.lane=lane.id;truck.startedAt=this.state.clockMin;truck.status=result.ok?'released':'retained';truck.result=result;lane.busyUntil=this.state.clockMin+2;lane.processed++;this.state.processed.push(truck);if(result.ok)this.practicalOperation?.setStep?.('ocr',true);}
 this.sync('tick');return this.get();}
 summary(){return {clockMin:this.state.clockMin,queue:this.state.queue.length,openLanes:this.state.lanes.filter(x=>x.open).length,busy:this.state.lanes.filter(x=>x.busyUntil>this.state.clockMin).length,processed:this.state.processed.length,retained:this.state.processed.filter(x=>x.status==='retained').length};}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('multi-lane-gate:changed',{reason,state:this.get(),summary:this.summary()});}
}
