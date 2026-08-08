const KEY='gate-cycle:v029';
export class GateCycle{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practical=practicalOperation;this.state=this.storage?.get(KEY,{direction:'in',visits:[],last:null})||{direction:'in',visits:[],last:null};}
 get(){return structuredClone(this.state);}
 evaluate(direction='in',data={}){const s=this.practical?.get?.()||{},checks=[['plate',data.plate===s.plate],['container',data.containerNo===s.containerNo],['seal',data.seal===s.sealExpected],['appointment',Boolean(data.appointment)],['documents',Boolean(data.documents)]];const ok=checks.every(([,v])=>v);const visit={id:`GATE-${Date.now().toString(36)}`,direction,ok,checks:Object.fromEntries(checks),at:Date.now()};this.state={direction,visits:[...this.state.visits,visit].slice(-30),last:visit};this.storage?.set(KEY,this.state);if(ok)this.practical?.setStep(direction==='in'?'ocr':'gateOut',true,{sealRead:data.seal,location:direction==='out'?'road':this.practical?.get?.().location});this.eventBus?.emit('gate-cycle:changed',{state:this.get(),visit});return visit;}
 reset(){this.state={direction:'in',visits:[],last:null};this.storage?.set(KEY,this.state);return this.get();}
}
