const DEFAULTS = [
  { id:'seal-mismatch', moduleId:'gate-portuario', severity:'warning', title:'Divergência de lacre', detail:'O lacre físico não coincide com o previsto no booking fictício.', effect:{sealMismatch:true} },
  { id:'vgm-delta', moduleId:'balanca-vgm', severity:'danger', title:'VGM divergente', detail:'A massa obtida excede significativamente a massa declarada no exercício.', effect:{scaleDeltaKg:1800} },
  { id:'reefer-alarm', moduleId:'reefer-operacao', severity:'danger', title:'Alarme Reefer', detail:'Return temperature elevada e alarme ativo. Requer verificação antes da continuidade.', effect:{returnOffset:8,forceAlarm:true} },
  { id:'yard-congestion', moduleId:'patio-operacional', severity:'warning', title:'Congestionamento de pátio', detail:'Bloco preferencial atingiu ocupação crítica; use a área de contingência indicada no exercício.', effect:{occupancyBoost:22,rerouteBlock:'D'} },
  { id:'docs-mismatch', moduleId:'documentacao', severity:'warning', title:'Divergência documental', detail:'Packing List e Commercial Invoice apresentam quantidades diferentes.', effect:{documentMismatch:true,invoiceVolumes:24,packingVolumes:26} },
  { id:'wind-alert', moduleId:'navio-operacao', severity:'danger', title:'Alerta meteorológico', detail:'Rajadas acima do limite didático do cenário: suspenda o ciclo até nova avaliação.', effect:{suspendCrane:true,windKts:42} },
  { id:'rail-delay', moduleId:'terminal-ferroviario', severity:'warning', title:'Atraso da composição', detail:'A janela ferroviária sofreu atraso; replaneje antes da transferência.', effect:{railDelayMin:65} }
];
function clone(v){return JSON.parse(JSON.stringify(v));}
export class ScenarioControl {
  constructor({storage,eventBus}={}){this.storage=storage;this.eventBus=eventBus;this.key='instructor:exceptions:v013';this.legacyKey='instructor:exceptions:v012';this.migrate();}
  migrate(){if(this.storage.get(this.key,null)!==null)return;const legacy=this.storage.get(this.legacyKey,[]);this.storage.set(this.key,legacy);}
  catalog(){return DEFAULTS.map(x=>clone(x));}
  list(){return this.storage.get(this.key,[]).map(item=>{const base=DEFAULTS.find(x=>x.id===item.id);return base?{...clone(base),...item,effect:{...(base.effect||{}),...(item.effect||{})}}:item;});}
  activeFor(moduleId){return this.list().filter(x=>x.moduleId===moduleId && x.active!==false);}
  has(id){return this.list().some(x=>x.id===id && x.active!==false);}
  effectFor(moduleId){return this.activeFor(moduleId).reduce((acc,x)=>Object.assign(acc,x.effect||{}),{});}
  inject(id){const base=DEFAULTS.find(x=>x.id===id);if(!base)return null;const list=this.list().filter(x=>x.id!==id);const item={...clone(base),active:true,at:new Date().toISOString()};list.push(item);this.storage.set(this.key,list);this.eventBus?.emit('instructor:exception',{...item});return item;}
  clear(id){const list=this.list().filter(x=>x.id!==id);this.storage.set(this.key,list);this.eventBus?.emit('instructor:cleared',{id});}
  clearAll(){this.storage.set(this.key,[]);this.eventBus?.emit('instructor:cleared',{all:true});}
  applyGateCase(base){const c=clone(base),fx=this.effectFor('gate-portuario');if(fx.sealMismatch){c.sealRead=c.sealExpected==='SEAL-INJETADO'?'SEAL-X001':'SEAL-INJETADO';c.expected='reter';c.note='Exceção do professor: divergência de lacre inserida no caso. A unidade deve ser tratada antes da entrada.';c.injected=true;}return c;}
  applyScaleScenario(base){const s=clone(base),fx=this.effectFor('balanca-vgm');if(fx.scaleDeltaKg){s.scaleTotal+=Number(fx.scaleDeltaKg)||0;s.injected=true;}return s;}
  applyReeferReadings({setPoint,powered}){const fx=this.effectFor('reefer-operacao');const supply=Number(setPoint)+0.4;const returnTemp=Number(setPoint)+3.1+(Number(fx.returnOffset)||0);const forceAlarm=Boolean(fx.forceAlarm);return{powered,supply,returnTemp,forceAlarm,injected:forceAlarm};}
  applyYardScenario(base){const s=clone(base),fx=this.effectFor('patio-operacional');if(fx.rerouteBlock && s.correctBlock==='B'){s.correctBlock=fx.rerouteBlock;s.assignedAddress={block:fx.rerouteBlock,bay:1,row:'A',tier:1};s.detail+=` • Exceção: ocupação crítica no bloco preferencial`;s.explanation='Exceção do professor: o bloco preferencial está congestionado. Neste exercício, a unidade é desviada para a área de contingência indicada.';s.injected=true;}return s;}
  yardBlocks(base){const list=clone(base),fx=this.effectFor('patio-operacional');if(fx.occupancyBoost){const b=list.find(x=>x.id==='B');if(b){b.occupancy=Math.min(.99,b.occupancy+(Number(fx.occupancyBoost)||0)/100);b.service+=' • congestionamento injetado';b.injected=true;}}return list;}
  applyDocumentState(){const item=this.activeFor('documentacao')[0],fx=item?.effect||{};return fx.documentMismatch?{active:true,invoiceVolumes:fx.invoiceVolumes||24,packingVolumes:fx.packingVolumes||26,token:item.at||item.id}: {active:false,token:null};}
  craneHold(){const item=this.activeFor('navio-operacao')[0],fx=item?.effect||{};return fx.suspendCrane?{active:true,windKts:fx.windKts||42,token:item.at||item.id}:{active:false,token:null};}
  railDelay(){const item=this.activeFor('terminal-ferroviario')[0],fx=item?.effect||{};return fx.railDelayMin?{active:true,minutes:Number(fx.railDelayMin)||0,token:item.at||item.id}:{active:false,minutes:0,token:null};}
  decorate(root,moduleId){const items=this.activeFor(moduleId);if(!items.length)return ()=>{};const wrap=document.createElement('aside');wrap.className='instructor-injection-banner';wrap.innerHTML=`<span>SIMULAÇÃO CONTROLADA</span><div>${items.map(x=>`<strong>${x.title}</strong><p>${x.detail}</p>`).join('')}</div>`;root.prepend(wrap);return()=>wrap.remove();}
}
