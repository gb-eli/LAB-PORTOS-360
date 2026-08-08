export const DOCUMENT_DEFS=[
 {id:'invoice',name:'Commercial Invoice',role:'Documento comercial',fields:['exporter','importer','goods','invoiceValue','origin','destination']},
 {id:'packing',name:'Packing List',role:'Lista física da carga',fields:['packages','grossWeight','dimensions','marks']},
 {id:'bl',name:'Bill of Lading (B/L)',role:'Documento de transporte marítimo',fields:['shipper','consignee','vessel','portLoad','portDischarge','containerNo','seal']},
 {id:'booking',name:'Booking',role:'Reserva de embarque',fields:['booking','vessel','cutoff','containerType']},
 {id:'nfe',name:'NF-e / DANFE',role:'Documento fiscal eletrônico — cenário didático',fields:['invoiceNo','shipperTax','goods','value']},
 {id:'cte',name:'CT-e / DACTE',role:'Transporte terrestre — cenário didático',fields:['carrier','plate','origin','destination','linkedDocs']},
 {id:'mdfe',name:'MDF-e',role:'Manifesto da viagem — cenário didático',fields:['vehicle','driver','linkedDocs','route']},
 {id:'customs',name:'Duimp / DU-E / LPCO',role:'Processo aduaneiro — quando aplicável',fields:['declarant','operation','goods','treatment','status']}
];
export const FIELD_LINEAGE={
 containerNo:{label:'Contêiner',from:'B/L / Booking / Gate',to:'OCR, EIR, pátio e navio'},seal:{label:'Lacre',from:'Estufagem / B/L',to:'Gate, EIR e conferência'},plate:{label:'Placa',from:'Transportador / agendamento',to:'Pré-Gate, OCR, CT-e/MDF-e'},grossWeight:{label:'Peso bruto',from:'Carga / balança',to:'VGM, planejamento e documentos'},destination:{label:'Destino',from:'Invoice / transporte',to:'CT-e/MDF-e, rota e entrega'},booking:{label:'Booking',from:'Armador / reserva',to:'Pré-Gate, Gate e embarque'}
};
export class LiveDocuments{
 constructor({practicalOperation}={}){this.practical=practicalOperation;}
 build(){const s=this.practical?.get?.()||{};return {containerNo:s.containerNo,seal:s.sealRead,plate:s.plate,grossWeight:`${s.grossWeightKg||0} kg`,destination:s.destination,booking:s.booking,exporter:'Exportador Didático Ltda.',importer:'Importador Didático S.A.',shipper:'Exportador Didático Ltda.',consignee:'Importador Didático S.A.',goods:'Carga geral conteinerizada',invoiceValue:'USD 48.500 (fictício)',value:'R$ 265.000 (fictício)',packages:'24 volumes',dimensions:'12 pallets • cenário didático',marks:'LPRT / LOTE 28',vessel:'MV Escola Portuária',portLoad:s.direction==='exportacao'?s.port:'Origem internacional',portDischarge:s.direction==='importacao'?s.port:'Destino internacional',carrier:'Transportadora Escola',driver:s.driver||'Condutor didático',route:'Rota didática',operation:s.direction,status:s.steps?.customs?'Tratado':'Em análise',invoiceNo:'NF 2800001',shipperTax:'CNPJ didático',linkedDocs:'NF-e + CT-e + MDF-e',vehicle:s.plate,containerType:'40 HC',cutoff:'Janela didática T-6h',declarant:'Interveniente didático',treatment:'Conferência conforme cenário'};}
 lineage(key){return FIELD_LINEAGE[key]||{label:key,from:'Origem didática',to:'Outros processos'};}
}
