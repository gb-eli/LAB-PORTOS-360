const KEY='terminal:rehandles:v018';
const clone=v=>JSON.parse(JSON.stringify(v));
export const REHANDLE_SCENARIOS=[
{id:'R1',label:'Exportação — alvo no Tier 2',stack:['CONT-A','CONT-B','CONT-C','CONT-D'],target:'CONT-B',address:'B-03-C',note:'Duas unidades estão acima da unidade-alvo.'},
{id:'R2',label:'Importação — alvo no fundo',stack:['IMP-17','IMP-21','IMP-33','IMP-44'],target:'IMP-17',address:'A-04-B',note:'O alvo está no Tier 1 e exige três remanejamentos.'},
{id:'R3',label:'Reefer — acesso rápido',stack:['RF-08','RF-19','RF-25'],target:'RF-19',address:'C-02-A',note:'Uma unidade está acima do Reefer alvo.'},
{id:'R4',label:'Boa pré-estivagem',stack:['EXP-01','EXP-02','EXP-03'],target:'EXP-03',address:'B-01-D',note:'Alvo já está no topo: nenhum rehandle.'}
];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),current:null,totalRehandles:0,completed:0});
export class YardRehandle{
 constructor({storage,eventBus,liveState}={}){Object.assign(this,{storage,eventBus,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='rehandle'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);this.eventBus?.emit('yard-rehandle:changed',{source,state:clone(s),summary:this.summary(s)});this.liveState?.recordRehandles?.(s.totalRehandles,source);return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 scenario(id){return REHANDLE_SCENARIOS.find(x=>x.id===id)||REHANDLE_SCENARIOS[0];}
 start(id='R1'){const sc=this.scenario(id),s=this.get();s.current={scenarioId:sc.id,stack:[...sc.stack],buffer:[],moves:0,complete:false,retrieved:null};return this.save(s,'start').current;}
 current(){return this.get().current;}
 analyze(id){const sc=this.scenario(id),idx=sc.stack.indexOf(sc.target),above=Math.max(0,sc.stack.length-idx-1);return{scenario:sc,targetTier:idx+1,rehandles:above,directMoves:1,totalMoves:above+1};}
 moveTop(){const s=this.get(),run=s.current;if(!run||run.complete)return{ok:false,reason:'Inicie um cenário.'};const sc=this.scenario(run.scenarioId),top=run.stack[run.stack.length-1];if(top===sc.target)return{ok:false,reason:'A unidade-alvo já está no topo; agora retire o alvo.'};const moved=run.stack.pop();run.buffer.push(moved);run.moves++;this.save(s,'move');return{ok:true,moved};}
 retrieve(){const s=this.get(),run=s.current;if(!run||run.complete)return{ok:false,reason:'Inicie um cenário.'};const sc=this.scenario(run.scenarioId),top=run.stack[run.stack.length-1];if(top!==sc.target)return{ok:false,reason:'Ainda existem unidades acima do alvo.'};run.retrieved=run.stack.pop();run.moves++;run.complete=true;s.totalRehandles+=run.buffer.length;s.completed+=1;this.save(s,'retrieve');return{ok:true,rehandles:run.buffer.length,moves:run.moves,target:run.retrieved};}
 summary(s=this.get()){return{totalRehandles:s.totalRehandles,completed:s.completed,current:s.current?clone(s.current):null};}
}
