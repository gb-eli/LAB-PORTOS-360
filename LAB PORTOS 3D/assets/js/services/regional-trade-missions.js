export const REGIONAL_TRADE_MISSIONS=[
 {id:'paranagua-export',port:'Paranaguá',direction:'exportacao',title:'Exportação Reefer — cadeia contínua',brief:'Leve uma unidade Reefer do exportador ao navio preservando lacre, VGM, energia e sequência de Gate/pátio/cais.',steps:['booking','empty','stuffing','vgm','gate','reefer-yard','load']},
 {id:'paranagua-import',port:'Paranaguá',direction:'importacao',title:'Importação conteinerizada — cais ao destino',brief:'Descarregue, enderece no pátio, trate liberação, agende retirada e conclua Gate Out/entrega.',steps:['discharge','yard','customs','appointment','gate-out','delivery']},
 {id:'santos-export',port:'Santos',direction:'exportacao',title:'Exportação intermodal — origem ao navio',brief:'Organize documentos, Gate, pátio e conexão terrestre/intermodal antes da janela de embarque.',steps:['booking','documents','pre-gate','gate','yard','quay','load']},
 {id:'santos-import',port:'Santos',direction:'importacao',title:'Importação conteinerizada — cais ao destino',brief:'Organize descarga, pátio, liberação, Gate Out e conexão terrestre evitando rehandles desnecessários.',steps:['discharge','yard','customs','appointment','gate-out','delivery']},
 {id:'itapoa-export',port:'Itapoá',direction:'exportacao',title:'Exportação com Gate automatizado',brief:'Trate OCR, lacre, pesagem e pátio antes do embarque. Uma divergência deve ser reconciliada antes da liberação.',steps:['pre-gate','ocr','weighing','eir','yard','load']},
 {id:'itapoa-import',port:'Itapoá',direction:'importacao',title:'Importação com Gate/OCR — retirada controlada',brief:'Conclua descarga, liberação, agendamento, leitura OCR, EIR e Gate Out mantendo rastreabilidade da unidade.',steps:['discharge','customs','appointment','ocr','eir','gate-out','delivery']}
];
export class RegionalTradeMissions{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practical=practicalOperation;}
 get(id){return REGIONAL_TRADE_MISSIONS.find(x=>x.id===id)||REGIONAL_TRADE_MISSIONS[0];}
 start(id){const m=this.get(id);const port=m.port.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();this.practical?.reset(m.direction,port);const st={id:m.id,index:0,completed:[]};this.storage?.set(`regional-trade:${m.id}:v029`,st);this.eventBus?.emit('regional-trade:changed',{mission:m,state:st});return st;}
 state(id){const m=this.get(id);return this.storage?.get(`regional-trade:${m.id}:v029`,{id:m.id,index:0,completed:[]})||{id:m.id,index:0,completed:[]};}
 complete(id,step){const m=this.get(id),key=`regional-trade:${m.id}:v029`,st=this.state(id),expected=m.steps[st.index];if(expected!==step)return {ok:false,expected};const next={...st,index:Math.min(m.steps.length,st.index+1),completed:[...st.completed,step]};this.storage?.set(key,next);this.eventBus?.emit('regional-trade:changed',{mission:m,state:next,step});return {ok:true,state:next};}
}
