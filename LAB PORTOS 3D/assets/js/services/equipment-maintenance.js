const KEY='terminal:equipment:v018';
const clone=v=>JSON.parse(JSON.stringify(v));
export const EQUIPMENT=[
  ...Array.from({length:4},(_,i)=>({id:`STS-${String(i+1).padStart(2,'0')}`,type:'STS',label:`Portêiner ${i+1}`,area:'Cais'})),
  ...Array.from({length:6},(_,i)=>({id:`RTG-${String(i+1).padStart(2,'0')}`,type:'RTG',label:`RTG ${i+1}`,area:'Pátio'})),
  ...Array.from({length:2},(_,i)=>({id:`RS-${String(i+1).padStart(2,'0')}`,type:'RS',label:`Reach Stacker ${i+1}`,area:'Pátio'})),
  ...Array.from({length:2},(_,i)=>({id:`LOCO-${String(i+1).padStart(2,'0')}`,type:'LOCO',label:`Locomotiva ${i+1}`,area:'Ferrovia'}))
];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),clock:0,items:Object.fromEntries(EQUIPMENT.map(e=>[e.id,{status:'available',reason:'',plannedReturn:null}]))});
export class EquipmentMaintenance{
 constructor({storage,eventBus,liveState}={}){Object.assign(this,{storage,eventBus,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(state,source='equipment'){state.updatedAt=new Date().toISOString();this.storage.set(KEY,state);const summary=this.summary(state);this.liveState?.updateEquipment?.(summary);this.eventBus?.emit('equipment:changed',{source,state:clone(state),summary});return clone(state);}
 reset(){return this.save(fresh(),'reset');}
 setClock(minute=0){const s=this.get();s.clock=Math.max(0,Number(minute)||0);Object.values(s.items).forEach(item=>{if(item.status!=='available'&&Number.isFinite(item.plannedReturn)&&item.plannedReturn<=s.clock){item.status='available';item.reason='Retorno automático após manutenção';item.plannedReturn=null;}});return this.save(s,'clock');}
 setStatus(id,status='available',{reason='',plannedReturn=null}={}){if(!EQUIPMENT.some(e=>e.id===id))return null;const s=this.get();s.items[id]={status,reason:status==='available'?'':reason,plannedReturn:status==='available'?null:(Number.isFinite(plannedReturn)?plannedReturn:null)};return this.save(s,'status');}
 isAvailable(id){return this.get().items[id]?.status==='available';}
 available(type){return EQUIPMENT.filter(e=>(!type||e.type===type)&&this.isAvailable(e.id));}
 summary(state=this.get()){const byType={};EQUIPMENT.forEach(e=>{byType[e.type]||={total:0,available:0,maintenance:0,failure:0};byType[e.type].total++;const st=state.items[e.id]?.status||'available';if(st==='available')byType[e.type].available++;else if(st==='failure')byType[e.type].failure++;else byType[e.type].maintenance++;});const available=Object.values(byType).reduce((n,x)=>n+x.available,0);return{clock:state.clock,total:EQUIPMENT.length,available,unavailable:EQUIPMENT.length-available,availabilityPct:EQUIPMENT.length?available/EQUIPMENT.length*100:100,byType,items:EQUIPMENT.map(e=>({...e,...state.items[e.id]}))};}
 syncLive(source='equipment'){this.liveState?.updateEquipment?.(this.summary(),source);}
}
