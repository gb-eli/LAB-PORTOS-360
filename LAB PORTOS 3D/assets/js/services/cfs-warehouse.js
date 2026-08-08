const KEY='practical:cfs:v030';
const seed=()=>({zones:{A:{capacity:40,used:8},B:{capacity:32,used:12},C:{capacity:24,used:4},D:{capacity:18,used:3}},lots:[{id:'LOT-01',description:'Carga geral paletizada',qty:12,zone:'B',status:'stored'}],moves:[],updatedAt:Date.now()});
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
export class CFSWarehouse{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.state=this.storage?.get(KEY,null)||seed();this.sync('init');}
 get(){return cp(this.state);} reset(){this.state=seed();this.sync('reset');return this.get();}
 receive({description='Carga geral',qty=1}={}){qty=Math.max(1,Math.round(+qty||1));const id=`LOT-${String(this.state.lots.length+1).padStart(2,'0')}`;this.state.lots.push({id,description,qty,zone:null,status:'received'});this.log('receive',id,qty);return id;}
 store(id,zone='A'){const lot=this.state.lots.find(x=>x.id===id),z=this.state.zones[zone];if(!lot||!z||z.used+lot.qty>z.capacity)return {ok:false,reason:'capacity'};if(lot.zone&&this.state.zones[lot.zone])this.state.zones[lot.zone].used=Math.max(0,this.state.zones[lot.zone].used-lot.qty);z.used+=lot.qty;lot.zone=zone;lot.status='stored';this.log('store',id,lot.qty,{zone});this.practicalOperation?.setStep('warehouse',true,{cfsLocation:`CFS-${zone}`});return {ok:true};}
 pick(id,qty=1){const lot=this.state.lots.find(x=>x.id===id);qty=Math.max(1,Math.round(+qty||1));if(!lot||lot.status!=='stored'||qty>lot.qty)return {ok:false};lot.qty-=qty;if(lot.zone&&this.state.zones[lot.zone])this.state.zones[lot.zone].used=Math.max(0,this.state.zones[lot.zone].used-qty);this.log('pick',id,qty);if(lot.qty===0)lot.status='picked';return {ok:true,remaining:lot.qty};}
 utilization(){const zones=Object.entries(this.state.zones).map(([id,z])=>({id,...z,pct:Math.round(z.used/z.capacity*100)}));const used=zones.reduce((s,z)=>s+z.used,0),capacity=zones.reduce((s,z)=>s+z.capacity,0);return {zones,used,capacity,pct:Math.round(used/capacity*100)};}
 log(type,id,qty,extra={}){this.state.moves.push({type,id,qty,...extra,at:Date.now()});this.state.moves=this.state.moves.slice(-80);this.sync(type);}
 sync(reason){this.state.updatedAt=Date.now();this.storage?.set(KEY,this.state);this.eventBus?.emit('cfs:changed',{reason,state:this.get(),utilization:this.utilization()});}
}
