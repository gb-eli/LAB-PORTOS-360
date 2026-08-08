const KEY='operation:extended-flow:v014';
const STEPS=[
 {id:'documentos',label:'Documentação',modules:['documentacao']},
 {id:'gate',label:'Gate',modules:['gate-portuario']},
 {id:'vgm',label:'VGM / Pesagem',modules:['balanca-vgm']},
 {id:'patio',label:'Pátio',modules:['patio-operacional','patio-especializado']},
 {id:'transferencia',label:'Transferência',modules:['terminal-ferroviario','spreader-twistlock']},
 {id:'navio',label:'Navio',modules:['navio-operacao']}
];
export class ExtendedOperationFlow{
 constructor({storage,eventBus}={}){this.storage=storage;this.eventBus=eventBus;this.state=this.storage.get(KEY,{active:false,startedAt:null,completed:{},unit:'LPXU 140826 4',route:'cais'});this.off=null;}
 install(){if(this.off||!this.eventBus)return;this.off=this.eventBus.on('simulation:complete',p=>this.complete(p?.moduleId,p||{}));}
 uninstall(){this.off?.();this.off=null;}
 start({route='cais'}={}){this.state={active:true,startedAt:new Date().toISOString(),completed:{},unit:'LPXU 140826 4',route};this.#save();this.#emit();return this.snapshot();}
 reset(opts={}){return this.start(opts);}
 getSteps(){return STEPS.map(s=>({...s,complete:Boolean(this.state.completed?.[s.id]),detail:this.state.completed?.[s.id]||null}));}
 nextStep(){return this.getSteps().find(s=>!s.complete)||null;}
 complete(moduleId,payload={}){if(!this.state.active||!moduleId)return this.snapshot();const next=this.nextStep();if(!next)return this.snapshot();if(!next.modules.includes(moduleId)){const attempted=STEPS.find(s=>s.modules.includes(moduleId));if(attempted)this.eventBus?.emit('extended-flow:blocked',{attempted:attempted.id,expected:next.id,moduleId});return this.snapshot();}
   if(next.id==='transferencia'&&this.state.route==='ferrovia'&&moduleId!=='terminal-ferroviario')return this.snapshot();
   if(next.id==='transferencia'&&this.state.route==='cais'&&moduleId!=='spreader-twistlock')return this.snapshot();
   this.state.completed[next.id]={at:new Date().toISOString(),moduleId,payload};this.#save();this.#emit();return this.snapshot();}
 snapshot(){return {...this.state,completed:{...this.state.completed},steps:this.getSteps(),next:this.nextStep(),complete:this.getSteps().every(s=>s.complete)};}
 #save(){this.storage.set(KEY,this.state);} #emit(){this.eventBus?.emit('extended-flow:changed',this.snapshot());}
}
