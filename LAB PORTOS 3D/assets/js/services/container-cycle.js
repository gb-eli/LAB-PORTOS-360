const KEY='container-cycle:v029';
export const CONTAINER_CYCLE_STEPS=[
 {id:'reserve-empty',label:'Reserva do vazio'},{id:'withdraw-empty',label:'Retirada no depot'},{id:'stuffing',label:'Estufagem'},{id:'seal',label:'Lacre'},{id:'gate-in',label:'Gate In'},{id:'load-vessel',label:'Embarque'},{id:'discharge',label:'Descarga'},{id:'unstuffing',label:'Desova'},{id:'return-empty',label:'Devolução do vazio'}
];
export class ContainerCycle{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practical=practicalOperation;this.state=this.storage?.get(KEY,{completed:[],history:[]})||{completed:[],history:[]};}
 get(){return structuredClone(this.state);}
 complete(step){if(!CONTAINER_CYCLE_STEPS.some(x=>x.id===step))return {ok:false};this.state.completed=[...new Set([...this.state.completed,step])];this.state.history=[...this.state.history,{step,at:Date.now()}].slice(-40);this.storage?.set(KEY,this.state);this.eventBus?.emit('container-cycle:changed',{state:this.get(),step});return {ok:true,state:this.get()};}
 reset(){this.state={completed:[],history:[]};this.storage?.set(KEY,this.state);return this.get();}
}
