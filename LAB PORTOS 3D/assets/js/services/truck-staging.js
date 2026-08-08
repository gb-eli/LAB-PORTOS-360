const KEY='practical:truck-staging:v030';
const seed=()=>({clock:0,slots:[null,null,null,null,null,null],queue:[
{id:'TRK-01',plate:'ABC1D23',status:'waiting',eta:0},{id:'TRK-02',plate:'DEF4G56',status:'waiting',eta:8},{id:'TRK-03',plate:'GHI7J89',status:'waiting',eta:14}
],called:[],released:[],updatedAt:Date.now()});
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
export class TruckStaging{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.state=this.storage?.get(KEY,null)||seed();this.sync('init');}
 get(){return cp(this.state);} reset(){this.state=seed();this.sync('reset');return this.get();}
 advance(min=5){this.state.clock+=Math.max(0,+min||0);this.sync('clock');return this.get();}
 arrive(plate='NEW0000'){const id=`TRK-${String(this.state.queue.length+this.state.called.length+this.state.released.length+1).padStart(2,'0')}`;this.state.queue.push({id,plate,status:'waiting',eta:this.state.clock});this.sync('arrive');return id;}
 assign(id,slotIndex){slotIndex=+slotIndex;if(slotIndex<0||slotIndex>=this.state.slots.length||this.state.slots[slotIndex])return {ok:false,reason:'slot'};const truck=this.state.queue.find(t=>t.id===id);if(!truck)return {ok:false,reason:'truck'};this.state.slots[slotIndex]=id;truck.status='staging';truck.slot=slotIndex+1;this.sync('assign');this.practicalOperation?.setStep('staging',true);return {ok:true,truck:cp(truck)};}
 call(id){const truck=this.state.queue.find(t=>t.id===id);if(!truck||truck.status!=='staging')return {ok:false,reason:'staging'};truck.status='called';const i=this.state.slots.findIndex(x=>x===id);if(i>=0)this.state.slots[i]=null;this.state.called.push({...truck,calledAt:this.state.clock});this.state.queue=this.state.queue.filter(t=>t.id!==id);this.sync('call');return {ok:true,truck:cp(truck)};}
 release(id){const truck=this.state.called.find(t=>t.id===id);if(!truck)return {ok:false};this.state.called=this.state.called.filter(t=>t.id!==id);this.state.released.push({...truck,status:'released',releasedAt:this.state.clock});this.sync('release');return {ok:true};}
 summary(){return {clock:this.state.clock,waiting:this.state.queue.filter(t=>t.status==='waiting').length,staging:this.state.queue.filter(t=>t.status==='staging').length,called:this.state.called.length,freeSlots:this.state.slots.filter(x=>!x).length,released:this.state.released.length};}
 sync(reason){this.state.updatedAt=Date.now();this.storage?.set(KEY,this.state);this.eventBus?.emit('truck-staging:changed',{reason,state:this.get(),summary:this.summary()});}
}
