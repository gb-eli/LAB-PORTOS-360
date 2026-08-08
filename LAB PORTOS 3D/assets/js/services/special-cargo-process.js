const KEY='practical:special-cargo:v030';
export const SPECIAL_CARGO_TYPES={
 general:{label:'Carga geral',requirements:['documentos','unitizacao'],note:'Fluxo padrão do terminal.'},
 reefer:{label:'Reefer',requirements:['setpoint','plug','monitoramento'],note:'Exige energia e controle de temperatura.'},
 oog:{label:'OOG / Fora de gabarito',requirements:['dimensoes','rota','equipamento'],note:'Exige avaliação dimensional, rota e equipamento compatível.'},
 dg:{label:'Carga perigosa (DG)',requirements:['classificacao','segregacao','documentos'],note:'Exige identificação e segregação conforme cenário didático.'},
 project:{label:'Carga de projeto',requirements:['plano-içamento','rota','amarração'],note:'Exige planejamento de movimentação e amarração.'}
};
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
export class SpecialCargoProcess{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.state=this.storage?.get(KEY,{type:'general',checked:[],history:[]})||{type:'general',checked:[],history:[]};}
 get(){return cp(this.state);} select(type){if(!SPECIAL_CARGO_TYPES[type])return this.get();this.state={...this.state,type,checked:[]};this.sync('select');this.practicalOperation?.update({cargoClass:type},'cargo-class');return this.get();}
 toggle(req){const checked=new Set(this.state.checked||[]);checked.has(req)?checked.delete(req):checked.add(req);this.state.checked=[...checked];this.sync('toggle');return this.get();}
 validate(){const spec=SPECIAL_CARGO_TYPES[this.state.type],missing=spec.requirements.filter(r=>!this.state.checked.includes(r)),ok=missing.length===0;this.state.history=[...(this.state.history||[]),{type:this.state.type,ok,missing,at:Date.now()}].slice(-30);this.sync('validate');return {ok,missing,spec};}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('special-cargo:changed',{reason,state:this.get()});}
}
