const KEY='practical:regional-continuous:v031';
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
const COMMON_EXPORT=['booking','depot','stuffing','preGate','staging','gate','weighing','eir','customs','yard','quay','vessel'];
const COMMON_IMPORT=['vessel','quay','yard','inspection','customs','preGate','staging','gate','weighing','eir','delivery'];
const PORTS={
 paranagua:{label:'Paranaguá',focus:['reefer','ferrovia','gate']},
 santos:{label:'Santos',focus:['escala','intermodal','gate']},
 itapoa:{label:'Itapoá',focus:['ocr','reefer','gate']}
};
export class RegionalContinuousMissions{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.state=this.storage?.get(KEY,null)||{port:'paranagua',direction:'exportacao',completed:[],history:[]};this.sync('init');}
 get(){return cp(this.state);} reset(port='paranagua',direction='exportacao'){this.state={port,direction,completed:[],history:[]};this.practicalOperation?.reset?.(direction,port);this.sync('reset');return this.get();}
 flow(){return this.state.direction==='importacao'?COMMON_IMPORT:COMMON_EXPORT;}
 complete(step){const flow=this.flow(),idx=flow.indexOf(step);if(idx<0)return {ok:false,reason:'step'};const missing=flow.slice(0,idx).filter(s=>!this.state.completed.includes(s));if(missing.length)return {ok:false,reason:'prerequisite',missing};if(!this.state.completed.includes(step))this.state.completed.push(step);this.state.history.push({step,at:Date.now()});const map={gate:'ocr'};this.practicalOperation?.setStep?.(map[step]||step,true);this.sync('complete');return {ok:true,next:this.next()};}
 syncFromPractical(){const p=this.practicalOperation?.get?.();const map={gate:'ocr'};for(const step of this.flow()){if(this.state.completed.includes(step))continue;if(p?.steps?.[map[step]||step])this.state.completed.push(step);else break;}this.sync('sync');return this.get();}
 next(){return this.flow().find(x=>!this.state.completed.includes(x))||null;}
 summary(){const f=this.flow(),done=f.filter(x=>this.state.completed.includes(x)).length;return {port:this.state.port,portLabel:PORTS[this.state.port]?.label||this.state.port,direction:this.state.direction,done,total:f.length,percent:Math.round(done/f.length*100),next:this.next(),focus:PORTS[this.state.port]?.focus||[]};}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('regional-continuous:changed',{reason,state:this.get(),summary:this.summary()});}
}
