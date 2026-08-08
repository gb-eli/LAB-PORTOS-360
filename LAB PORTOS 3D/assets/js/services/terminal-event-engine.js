const KEY='terminal:events:v017';
const clone=v=>JSON.parse(JSON.stringify(v));
export const TERMINAL_EVENTS=[
{id:'road-peak',title:'Pico de chegada rodoviária',severity:'warning',areas:['Fila','Gate'],detail:'Uma onda de caminhões chega dentro de uma janela curta e pressiona o atendimento terrestre.',effects:['+24 caminhões/h na taxa de chegada','+12 veículos na fila instantânea']},
{id:'yard-saturation',title:'Saturação do bloco de exportação',severity:'danger',areas:['Pátio','Gate'],detail:'O bloco preferencial entra em pressão operacional e exige contingência de destinação.',effects:['Bloco B levado a ~92%','Ativa exceção de congestionamento do pátio']},
{id:'weather-front',title:'Frente de vento no cais',severity:'danger',areas:['Cais','Gate'],detail:'Rajadas suspendem o ciclo de portêiner e tornam a triagem terrestre mais lenta.',effects:['Ativa alerta de vento no cais','+0,7 min no atendimento do Gate']},
{id:'rail-disruption',title:'Perda de janela ferroviária',severity:'warning',areas:['Ferrovia','Pátio'],detail:'A composição atrasa e a área de contingência recebe pressão adicional.',effects:['Ativa atraso ferroviário','Eleva ocupação do Bloco D']},
{id:'reefer-cluster',title:'Alarme em grupo Reefer',severity:'danger',areas:['Reefer','Pátio'],detail:'Uma ocorrência de temperatura exige inspeção e concentra unidades na zona energizada.',effects:['Ativa alarme Reefer','Eleva ocupação do Bloco C']}
];
const scenarioByEvent={'yard-saturation':'yard-congestion','weather-front':'wind-alert','rail-disruption':'rail-delay','reefer-cluster':'reefer-alarm'};
export class TerminalEventEngine{
 constructor({storage,eventBus,liveState,yardOccupancy,instructorControl}={}){this.storage=storage;this.eventBus=eventBus;this.liveState=liveState;this.yardOccupancy=yardOccupancy;this.instructorControl=instructorControl;if(storage.get(KEY,null)===null)storage.set(KEY,{active:null,history:[],managedScenarios:[]});}
 state(){return clone(this.storage.get(KEY,{active:null,history:[],managedScenarios:[]}));}
 catalog(){return clone(TERMINAL_EVENTS);}
 active(){const id=this.state().active;return this.catalog().find(e=>e.id===id)||null;}
 activate(id){const event=TERMINAL_EVENTS.find(e=>e.id===id);if(!event)return null;this.clear({preserveEffects:true});const st=this.state(),managed=[];const scenario=scenarioByEvent[id];if(scenario&&!this.instructorControl?.has(scenario)){this.instructorControl?.inject(scenario);managed.push(scenario);}if(id==='road-peak'){const s=this.liveState.get();s.queue.arrivalRate+=24;s.queue.queue+=12;s.queue.maxQueue=Math.max(s.queue.maxQueue,s.queue.queue);const cap=s.queue.lanes*60/Math.max(.5,s.queue.serviceMinutes);s.queue.utilization=Math.min(160,s.queue.arrivalRate/cap*100);this.liveState.save(s,'event-road-peak');}
 if(id==='yard-saturation')this.yardOccupancy.fillBlockTo('B',.92);
 if(id==='weather-front'){const s=this.liveState.get();s.queue.serviceMinutes+=.7;this.liveState.save(s,'event-weather');}
 if(id==='rail-disruption')this.yardOccupancy.fillBlockTo('D',.76);
 if(id==='reefer-cluster')this.yardOccupancy.fillBlockTo('C',.88);
 const next=this.state();next.active=id;next.managedScenarios=managed;next.history.push({id,at:new Date().toISOString()});this.storage.set(KEY,next);this.liveState.setTerminalStatus({status:event.severity==='danger'?'restricted':'attention',weather:id==='weather-front'?'wind':'clear',activeEvent:id});this.eventBus?.emit('terminal:event:changed',{active:clone(event),state:clone(next)});return clone(event);}
 clear({preserveEffects=true}={}){const st=this.state();for(const sid of st.managedScenarios||[])this.instructorControl?.clear(sid);st.active=null;st.managedScenarios=[];this.storage.set(KEY,st);this.liveState?.setTerminalStatus({status:'normal',weather:'clear',activeEvent:null});this.eventBus?.emit('terminal:event:changed',{active:null,state:clone(st),preserveEffects});return st;}
 resetAll(){this.clear({preserveEffects:false});this.liveState?.reset();this.yardOccupancy?.reset();const st={active:null,history:[],managedScenarios:[]};this.storage.set(KEY,st);this.eventBus?.emit('terminal:event:changed',{active:null,state:clone(st),reset:true});return st;}
}
