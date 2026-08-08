const KEY='practical:customs-inspection:v031';
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
const defaults=()=>({cases:[{id:'INSP-01',mode:'documental',containerNo:'LPRT4026087',status:'pending',checks:{documents:false,seal:false,cargo:false,scanner:false},findings:[]}],history:[]});
export class CustomsInspectionVisual{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.state=this.storage?.get(KEY,null)||defaults();this.sync('init');}
 get(){return cp(this.state);} reset(){this.state=defaults();this.sync('reset');return this.get();}
 create(mode='fisica'){const c={id:`INSP-${Date.now().toString(36).toUpperCase()}`,mode,containerNo:this.practicalOperation?.get?.().containerNo||'',status:'pending',checks:{documents:false,seal:false,cargo:false,scanner:false},findings:[]};this.state.cases.push(c);this.sync('create');return cp(c);}
 check(id,key,value=true){const c=this.state.cases.find(x=>x.id===id);if(!c||!(key in c.checks))return {ok:false};c.checks[key]=Boolean(value);this.sync('check');return {ok:true,case:cp(c)};}
 finding(id,text){const c=this.state.cases.find(x=>x.id===id);if(!c)return {ok:false};c.findings.push(String(text));this.sync('finding');return {ok:true};}
 conclude(id){const c=this.state.cases.find(x=>x.id===id);if(!c)return {ok:false};const required=c.mode==='documental'?['documents']:c.mode==='scanner'?['documents','seal','scanner']:['documents','seal','cargo'];const missing=required.filter(k=>!c.checks[k]);if(missing.length)return {ok:false,reason:'checks',missing};c.status=c.findings.length?'review':'released';c.concludedAt=Date.now();this.state.history.push({id:c.id,status:c.status,at:c.concludedAt});if(c.status==='released')this.practicalOperation?.setStep?.('inspection',true);this.sync('conclude');return {ok:c.status==='released',status:c.status,case:cp(c)};}
 summary(){const cs=this.state.cases;return {total:cs.length,pending:cs.filter(x=>x.status==='pending').length,released:cs.filter(x=>x.status==='released').length,review:cs.filter(x=>x.status==='review').length};}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('customs-inspection:changed',{reason,state:this.get(),summary:this.summary()});}
}
