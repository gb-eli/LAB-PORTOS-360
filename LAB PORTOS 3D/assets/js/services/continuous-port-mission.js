const KEY='practical:continuous-mission:v031';
const LEGACY='practical:continuous-mission:v030';
const FLOWS={
 exportacao:[
  ['booking','Booking / cut-off','booking-cutoff-rollover'],['depot','Retirar unidade vazia','depot-vazios-3d'],['stuffing','Estufar e lacrar','empilhadeira-cfs-3d'],['preGate','Pré-Gate / agendamento','pre-gate-agendamento'],['staging','Staging de caminhões','staging-caminhoes'],['ocr','Gate OCR','gate-3d-operacional'],['weighing','Balança / VGM','balanca-rodoviaria-3d'],['eir','EIR de entrada','eir-interchange'],['warehouse','CFS / conferência quando aplicável','cfs-armazem'],['inspection','Inspeção quando selecionada','inspecao-aduaneira-visual'],['customs','Processo aduaneiro','mesa-despachante'],['yard','Pátio','patio-operacional'],['quay','Cais','embarque-patio-navio'],['vessel','Embarque no navio','lashing-unlashing']
 ],
 importacao:[
  ['vessel','Chegada / descarga do navio','descarga-navio-patio'],['quay','Cais','descarga-navio-patio'],['yard','Pátio de importação','patio-operacional'],['inspection','Inspeção quando selecionada','inspecao-aduaneira-visual'],['customs','Processo aduaneiro','mesa-despachante'],['warehouse','CFS / conferência quando aplicável','empilhadeira-cfs-3d'],['preGate','Agendamento de retirada','pre-gate-agendamento'],['staging','Staging de caminhões','staging-caminhoes'],['ocr','Gate OCR','gate-3d-operacional'],['weighing','Balança','balanca-rodoviaria-3d'],['eir','EIR de saída','eir-interchange'],['delivery','Destino terrestre','destinos-logisticos']
 ]
};
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
export class ContinuousPortMission{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.state=this.storage?.get(KEY,null)||this.storage?.get(LEGACY,null)||{direction:'exportacao',port:'paranagua',completed:[],startedAt:Date.now(),history:[]};this.sync('init');}
 get(){return cp(this.state);} flow(){return FLOWS[this.state.direction]||FLOWS.exportacao;}
 reset(direction='exportacao',port='paranagua'){this.state={direction,port,completed:[],startedAt:Date.now(),history:[]};this.practicalOperation?.reset(direction,port);this.sync('reset');return this.get();}
 complete(step){const flow=this.flow(),idx=flow.findIndex(([id])=>id===step);if(idx<0)return {ok:false,reason:'step'};const prev=flow.slice(0,idx).map(([id])=>id),missing=prev.filter(id=>!this.state.completed.includes(id));if(missing.length)return {ok:false,reason:'prerequisite',missing};if(!this.state.completed.includes(step))this.state.completed.push(step);this.practicalOperation?.setStep(step,true);this.state.history.push({step,at:Date.now()});this.sync('complete');return {ok:true,next:this.next()};}
 syncFromPractical(){const p=this.practicalOperation?.get?.();if(p?.steps){for(const [id] of this.flow()){if(this.state.completed.includes(id))continue;if(p.steps[id])this.state.completed.push(id);else break;}}this.sync('sync');return this.get();}
 next(){return this.flow().find(([id])=>!this.state.completed.includes(id))||null;}
 summary(){const flow=this.flow(),done=flow.filter(([id])=>this.state.completed.includes(id)).length;return {done,total:flow.length,percent:Math.round(done/flow.length*100),next:this.next(),complete:done===flow.length};}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('continuous-mission:changed',{reason,state:this.get(),summary:this.summary()});}
}
