export const exceptionMission = {
  id:'MX-01',
  unit:'RFRU 550318 4',
  title:'Exportação reefer com divergências',
  intro:'A unidade chegou ao terminal para exportação. Resolva as exceções antes de liberar o fluxo para o cais.',
  stages:[
    { id:'gate', title:'Gate', fact:'Lacre físico: LAC-8842 • Booking: BK-2048 • Lacre previsto: LAC-8842', question:'Qual ação é adequada?', options:[['liberar','Liberar entrada'],['reter','Reter unidade']], answer:'liberar', explanation:'Os dados apresentados no exercício estão coerentes para continuidade do fluxo.' },
    { id:'vgm', title:'Balança / VGM', fact:'Massa obtida: 30.480 kg • Massa declarada: 27.900 kg', question:'Como tratar a divergência?', options:[['aceitar','Aceitar sem análise'],['investigar','Investigar divergência antes do embarque']], answer:'investigar', explanation:'Uma divergência relevante de massa deve ser tratada antes da continuidade da operação.' },
    { id:'reefer', title:'Reefer', fact:'Set point: -18 °C • Supply: -17,8 °C • Return: -11,2 °C • Alarme ativo', question:'Qual ação é mais prudente?', options:[['embarcar','Enviar diretamente ao cais'],['monitorar','Reter para verificação/monitoramento']], answer:'monitorar', explanation:'O retorno elevado e o alarme justificam verificação operacional antes do embarque neste caso didático.' },
    { id:'docs', title:'Documentação', fact:'Packing List informa 24 volumes • Commercial Invoice informa 26 volumes', question:'O que fazer?', options:[['ignorar','Ignorar diferença'],['conferir','Conferir documentos/carga antes de liberar']], answer:'conferir', explanation:'Informações divergentes entre documentos precisam ser reconciliadas antes da continuidade do processo.' }
  ]
};
