const KEY='terminal:recovery:v020';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),runs:[],last:null});
export const RECOVERY_ACTIONS=[
 {id:'extra-lane',label:'Abrir lane adicional no Gate',queue:-16,yard:2,sts:0,note:'Eleva capacidade terrestre; pode transferir pressão para o pátio.'},
 {id:'restore-sts',label:'Priorizar retorno de 1 STS',queue:0,yard:-4,sts:1,note:'Aumenta vazão do cais e ajuda a reduzir ocupação futura.'},
 {id:'appointment-control',label:'Reduzir chegadas em 12 cam/h',queue:-22,yard:-2,sts:0,note:'Suaviza o pico terrestre por controle de agendamento.'},
 {id:'rail-window',label:'Abrir janela ferroviária extra',queue:0,yard:-5,sts:0,note:'Cria saída adicional do pátio por modal ferroviário.'}
];
export class RecoveryPlanner{
 constructor({storage,eventBus,operationalForecast,liveState}={}){Object.assign(this,{storage,eventBus,operationalForecast,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='recovery'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateRecovery?.(summary,source);this.eventBus?.emit('recovery:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 evaluate(actionIds=[]){const fc=this.operationalForecast.latest();if(!fc)return{ok:false,reason:'Gere primeiro uma previsão operacional.'};const actions=RECOVERY_ACTIONS.filter(a=>actionIds.includes(a.id));if(!actions.length)return{ok:false,reason:'Selecione ao menos uma ação.'};const base=fc.final,queue=Math.max(0,base.queue+actions.reduce((n,a)=>n+a.queue,0)),yard=Math.max(0,Math.min(100,base.yardPct+actions.reduce((n,a)=>n+a.yard,0))),sts=Math.max(0,base.stsAvailable+actions.reduce((n,a)=>n+a.sts,0)),riskScore=(queue>=30?2:queue>=12?1:0)+(yard>=90?2:yard>=82?1:0)+(sts<2?2:sts<3?1:0)+(base.anchorage>=3?2:base.anchorage>=2?1:0),risk=riskScore>=5?'alto':riskScore>=2?'atenção':'controlado',row={id:`RC-${Date.now()}`,at:new Date().toISOString(),actions:actions.map(a=>a.id),before:{queue:base.queue,yardPct:base.yardPct,stsAvailable:base.stsAvailable,risk:base.risk},after:{queue,yardPct:yard,stsAvailable:sts,risk,riskScore},improvement:{queue:base.queue-queue,yard:base.yardPct-yard}};const s=this.get();s.runs.unshift(row);s.last=row;this.save(s,'evaluate');return{ok:true,row,actions};}
 summary(state=this.get()){return{runs:state.runs.length,last:state.last,improved:Boolean(state.last&&(state.last.after.riskScore<(state.last.before.risk==='alto'?5:state.last.before.risk==='atenção'?2:0)||state.last.after.queue<state.last.before.queue||state.last.after.yardPct<state.last.before.yardPct))};}
 syncLive(source='recovery'){this.liveState?.updateRecovery?.(this.summary(),source);}
}
