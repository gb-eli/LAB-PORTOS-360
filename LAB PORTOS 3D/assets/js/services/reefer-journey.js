const KEY='practical:reefer-journey:v031';
const STEPS=['booking','stuffing','setpoint','preGate','gate','plugYard','monitoring','quay','vessel'];
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
const defaults=()=>({setpointC:-18,currentC:-18,power:true,alarms:[],completed:[],history:[]});
export class ReeferJourney{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.state=this.storage?.get(KEY,null)||defaults();this.sync('init');}
 get(){return cp(this.state);} reset(){this.state=defaults();this.sync('reset');return this.get();}
 setTemperature(currentC){this.state.currentC=Number(currentC);const d=Math.abs(this.state.currentC-this.state.setpointC);if(d>3&&!this.state.alarms.includes('temperature'))this.state.alarms.push('temperature');if(d<=3)this.state.alarms=this.state.alarms.filter(x=>x!=='temperature');this.sync('temperature');return this.get();}
 setPower(on){this.state.power=Boolean(on);if(!on&&!this.state.alarms.includes('power'))this.state.alarms.push('power');if(on)this.state.alarms=this.state.alarms.filter(x=>x!=='power');this.sync('power');return this.get();}
 complete(step){const idx=STEPS.indexOf(step);if(idx<0)return {ok:false,reason:'step'};const missing=STEPS.slice(0,idx).filter(s=>!this.state.completed.includes(s));if(missing.length)return {ok:false,reason:'prerequisite',missing};if(['plugYard','monitoring','quay','vessel'].includes(step)&&(!this.state.power||this.state.alarms.length))return {ok:false,reason:'reefer-alarm',alarms:[...this.state.alarms]};if(!this.state.completed.includes(step))this.state.completed.push(step);this.state.history.push({step,at:Date.now()});if(step==='vessel')this.practicalOperation?.setStep?.('reefer',true);this.sync('complete');return {ok:true,next:this.next()};}
 next(){return STEPS.find(s=>!this.state.completed.includes(s))||null;}
 summary(){return {done:this.state.completed.length,total:STEPS.length,percent:Math.round(this.state.completed.length/STEPS.length*100),next:this.next(),alarms:[...this.state.alarms]};}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('reefer-journey:changed',{reason,state:this.get(),summary:this.summary()});}
}
