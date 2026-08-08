const KEY='empty-depot:v029';
const seed=()=>({stock:{'20-dry':18,'40-dry':22,'40-hc':31,'40-reefer':8},moves:[],reservations:[]});
export class EmptyDepot{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practical=practicalOperation;this.state=this.storage?.get(KEY,null)||seed();}
 get(){return structuredClone(this.state);}
 reserve(type='40-hc'){if((this.state.stock[type]||0)<=0)return {ok:false,reason:'sem-estoque'};const r={id:`RES-${Date.now().toString(36)}`,type,status:'reserved',at:Date.now()};this.state.reservations.push(r);this.sync('reserve');return {ok:true,reservation:r};}
 withdraw(type='40-hc'){if((this.state.stock[type]||0)<=0)return {ok:false};this.state.stock[type]-=1;this.state.moves.push({type,kind:'withdraw',at:Date.now()});this.practical?.update({containerType:type,destination:'Estufagem / exportador'},'empty-withdraw');this.sync('withdraw');return {ok:true};}
 returnEmpty(type='40-hc',condition='apto'){this.state.stock[type]=(this.state.stock[type]||0)+1;this.state.moves.push({type,kind:'return',condition,at:Date.now()});this.sync('return');return {ok:true};}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('empty-depot:changed',{reason,state:this.get()});}
}
