import { REHANDLE_SCENARIOS } from './yard-rehandle.js';
const KEY='terminal:rehandle-optimizer:v019';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),runs:[],avoidedTotal:0});
export class RehandleOptimizer{
 constructor({storage,eventBus,liveState}={}){Object.assign(this,{storage,eventBus,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 analyze(id){const sc=REHANDLE_SCENARIOS.find(x=>x.id===id)||REHANDLE_SCENARIOS[0],idx=sc.stack.indexOf(sc.target),current=Math.max(0,sc.stack.length-idx-1),optimized=0,grouped=Math.max(0,current-1);return{scenario:sc,current,strategies:[{id:'direct',label:'Sem replanejar',rehandles:current,note:'Mantém a pilha original.'},{id:'flow',label:'Agrupar por sequência de saída',rehandles:grouped,note:'Reposiciona uma unidade crítica antes do pico.'},{id:'target-top',label:'Pré-estivar alvo no topo',rehandles:optimized,note:'Coloca a unidade-alvo acessível na próxima janela.'}]};}
 apply(id,strategyId='flow'){const a=this.analyze(id),s=a.strategies.find(x=>x.id===strategyId)||a.strategies[0],avoided=Math.max(0,a.current-s.rehandles),state=this.get();state.runs.unshift({at:new Date().toISOString(),scenarioId:a.scenario.id,strategyId:s.id,before:a.current,after:s.rehandles,avoided});state.avoidedTotal+=avoided;this.save(state,'apply');return{ok:true,...s,before:a.current,avoided};}
 save(s,source='rehandle-optimizer'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateOptimization?.(summary,source);this.eventBus?.emit('rehandle-optimizer:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 summary(s=this.get()){return{runs:s.runs.length,avoidedTotal:s.avoidedTotal,last:s.runs[0]||null};}
 syncLive(source='rehandle-optimizer'){this.liveState?.updateOptimization?.(this.summary(),source);}
}
