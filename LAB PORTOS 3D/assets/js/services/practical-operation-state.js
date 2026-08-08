const KEY='practical-operation:v038';
const LEGACY=['practical-operation:v037','practical-operation:v036','practical-operation:v035','practical-operation:v031','practical-operation:v030','practical-operation:v028'];
const defaultSteps=()=>({booking:false,preGate:false,pickupAppointment:false,staging:false,ocr:false,weighing:false,eir:false,gateOut:false,depot:false,stuffing:false,warehouse:false,inspection:false,customs:false,reefer:false,yard:false,pickupLoaded:false,quay:false,vessel:false,roadTransit:false,importerReceipt:false,delivery:false,exportOrigin:false,exportRoadCollection:false,exportDocuments:false,exportEmpty:false,exportStuffing:false,exportSeal:false,exportVgm:false,exportGateIn:false,exportCutoff:false,exportLoaded:false,exportLoadPlan:false,exportHatchCovers:false,exportLashingFinal:false,exportManifest:false,vesselClosed:false,vesselUnmoored:false,vesselDeparted:false,pilotDisembarked:false,outboundChannel:false,nextPortETA:false,portCallClosed:false,portCallReport:false,portCallKPIs:false,portCallReplay:false});
const defaults=()=>({
  version:7,
  operationId:`OP-${new Date().toISOString().slice(0,10).replaceAll('-','')}-01`,
  direction:'exportacao',port:'paranagua',containerNo:'LPRT4026087',sealExpected:'SEAL-4481',sealRead:'SEAL-4481',
  booking:'BK-PORTOS-3001',plate:'ABC1D23',driver:'Condutor didático',truckType:'tractor-4x2',trailerType:'container-40',
  grossWeightKg:39450,tareVehicleKg:7850,tareChassisKg:4200,vgmDeclaredKg:27400,cargoWeightKg:18200,
  cargoClass:'general',destination:'Terminal / embarque',cfsLocation:'CFS-A-03',
  steps:defaultSteps(),notes:[],updatedAt:Date.now()
});
function clone(v){return typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));}
function mergeState(src={}){const d=defaults();return {...d,...src,version:7,steps:{...defaultSteps(),...(src.steps||{})},notes:Array.isArray(src.notes)?src.notes:[],updatedAt:Date.now()};}
export class PracticalOperationState{
  constructor({storage,eventBus,liveState}={}){this.storage=storage;this.eventBus=eventBus;this.liveState=liveState;let saved=this.storage?.get(KEY,null);if(!saved){for(const k of LEGACY){saved=this.storage?.get(k,null);if(saved)break;}}this.state=mergeState(saved||{});this.sync(saved?'migrate':'init');}
  get(){return clone(this.state);}
  reset(direction='exportacao',port='paranagua'){this.state={...defaults(),direction,port,operationId:`OP-${Date.now().toString(36).toUpperCase()}`};this.sync('reset');return this.get();}
  update(patch={},reason='update'){this.state=mergeState({...this.state,...patch,steps:{...this.state.steps,...(patch.steps||{})}});this.sync(reason);return this.get();}
  setStep(step,complete=true,data={}){this.state.steps={...this.state.steps,[step]:Boolean(complete)};this.state={...this.state,...data,updatedAt:Date.now()};this.sync(`step:${step}`);this.eventBus?.emit('practical:step',{step,complete:Boolean(complete),state:this.get()});return this.get();}
  addNote(text){this.state.notes=[...(this.state.notes||[]),{text:String(text),at:Date.now()}].slice(-50);this.sync('note');return this.get();}
  progress(){const vals=Object.values(this.state.steps||{});const done=vals.filter(Boolean).length;return {done,total:vals.length,percent:Math.round(done/Math.max(1,vals.length)*100)};}
  sync(reason='sync'){this.storage?.set(KEY,this.state);this.eventBus?.emit('practical:changed',{reason,state:this.get(),progress:this.progress()});}
}
