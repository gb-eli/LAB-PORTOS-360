export const IMPORT_STEPS=[
 {id:'arrival',label:'Chegada / descarga',note:'Unidade descarregada e registrada no terminal.'},
 {id:'documents',label:'Documentos comerciais e transporte',note:'Conferir dados do embarque e da carga.'},
 {id:'declaration',label:'Declaração / processo aduaneiro',note:'Registrar o processo didático de importação.'},
 {id:'inspection',label:'Conferência quando aplicável',note:'Tratar exigências ou conferência simulada.'},
 {id:'release',label:'Liberação',note:'Carga apta a seguir ao fluxo de retirada.'},
 {id:'appointment',label:'Agendamento / Gate',note:'Transportador agenda retirada e passa pelo gate.'},
 {id:'delivery',label:'Entrega ao destino',note:'Unidade segue ao importador/destino terrestre.'}
];
export const EXPORT_STEPS=[
 {id:'booking',label:'Booking / reserva',note:'Definir embarque e janela operacional.'},
 {id:'documents',label:'Documentos comerciais/fiscais',note:'Preparar dados e documentos do embarque.'},
 {id:'stuffing',label:'Estufagem e lacre',note:'Carregar a unidade e registrar o lacre.'},
 {id:'vgm',label:'VGM / massa',note:'Conferir a massa para a operação de embarque.'},
 {id:'customs',label:'Processo aduaneiro',note:'Concluir etapas didáticas aplicáveis à exportação.'},
 {id:'gate',label:'Gate In / pátio',note:'Receber a unidade no terminal.'},
 {id:'load',label:'Embarque no navio',note:'Transferir pátio → cais → navio.'}
];
export class CustomsProcess{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practical=practicalOperation;}
 steps(direction='importacao'){return direction==='exportacao'?EXPORT_STEPS:IMPORT_STEPS;}
 key(direction){return `trade-flow:${direction}:v028`;}
 get(direction){return this.storage?.get(this.key(direction),{index:0,completed:[]})||{index:0,completed:[]};}
 reset(direction){const s={index:0,completed:[]};this.storage?.set(this.key(direction),s);this.eventBus?.emit('trade:changed',{direction,state:s});return s;}
 complete(direction,stepId){const steps=this.steps(direction),state=this.get(direction),expected=steps[state.index];if(!expected||expected.id!==stepId)return {ok:false,expected};const next={index:Math.min(steps.length,state.index+1),completed:[...new Set([...state.completed,stepId])]};this.storage?.set(this.key(direction),next);if(direction==='importacao'&&stepId==='release')this.practical?.setStep('customs',true);if(direction==='exportacao'&&stepId==='customs')this.practical?.setStep('customs',true);this.eventBus?.emit('trade:changed',{direction,state:next,stepId});if(next.index>=steps.length)this.eventBus?.emit('simulation:complete',{moduleId:`jornada-${direction}`,direction});return {ok:true,state:next};}
}
