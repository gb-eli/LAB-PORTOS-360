const KEY='practical:special-containers:v031';
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
export const SPECIAL_CONTAINER_TYPES={
 'open-top':{label:'Open Top',checks:['topCover','lashing','dimensions']},
 'flat-rack':{label:'Flat Rack',checks:['supports','lashing','dimensions']},
 oog:{label:'OOG / Fora de gabarito',checks:['dimensions','route','equipment','lashing']},
 reefer:{label:'Reefer',checks:['setpoint','power','monitoring']}
};
const defaults=()=>({type:'open-top',checks:{},dimensions:{length:6.06,width:2.44,height:2.90,overWidthCm:0,overHeightCm:31},approved:false,history:[]});
export class SpecialContainerOperations{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.state=this.storage?.get(KEY,null)||defaults();this.sync('init');}
 get(){return cp(this.state);} select(type){if(!SPECIAL_CONTAINER_TYPES[type])return {ok:false};this.state={...defaults(),type};this.sync('select');return this.get();}
 toggle(key,val=true){this.state.checks[key]=Boolean(val);this.sync('check');return this.get();}
 setDimensions(patch={}){this.state.dimensions={...this.state.dimensions,...patch};this.sync('dimensions');return this.get();}
 validate(){const cfg=SPECIAL_CONTAINER_TYPES[this.state.type],missing=cfg.checks.filter(k=>!this.state.checks[k]);const excessive=this.state.type==='oog'&&(Number(this.state.dimensions.overWidthCm)>120||Number(this.state.dimensions.overHeightCm)>180);this.state.approved=missing.length===0&&!excessive;this.state.history.push({type:this.state.type,approved:this.state.approved,missing,at:Date.now()});this.sync('validate');return {ok:this.state.approved,missing,excessive,state:this.get()};}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('special-container:changed',{reason,state:this.get()});}
}
