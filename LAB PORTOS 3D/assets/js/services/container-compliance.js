export const CSC_CHECKS = [
  {id:'plate',label:'Placa de aprovação de segurança presente e legível'},
  {id:'exam',label:'Marca de exame / programa de exame coerente no cenário'},
  {id:'gross',label:'Massa bruta máxima e dados técnicos identificáveis'},
  {id:'seal',label:'Lacre presente, íntegro e com identificação conferida'}
];

export const complianceCases = [
  {id:'CSC-01',title:'Unidade apta no exercício',plate:{present:true,approval:'BR/26/LP-041',scheme:'ACEP • EXEMPLO DIDÁTICO',gross:'30 480 kg',stacking:'192 000 kg / 1,8 g'},seal:{present:true,expected:'HSS-402608',read:'HSS-402608',tamper:false},expected:'liberar',note:'Placa legível e lacre coerente no cenário didático.'},
  {id:'CSC-02',title:'Placa ausente / ilegível',plate:{present:false,approval:'—',scheme:'—',gross:'—',stacking:'—'},seal:{present:true,expected:'HSS-611204',read:'HSS-611204',tamper:false},expected:'reter',note:'Sem a placa de segurança legível, o exercício exige retenção para avaliação conforme procedimento aplicável.'},
  {id:'CSC-03',title:'Divergência de lacre',plate:{present:true,approval:'BR/26/LP-078',scheme:'PRÓX. EXAME 09/2027 • EXEMPLO',gross:'30 480 kg',stacking:'192 000 kg / 1,8 g'},seal:{present:true,expected:'HSS-778321',read:'HSS-778399',tamper:false},expected:'reter',note:'O número físico diverge da referência documental. A cadeia de custódia deve ser tratada antes da continuidade.'},
  {id:'CSC-04',title:'Sinal de violação',plate:{present:true,approval:'BR/26/LP-119',scheme:'ACEP • EXEMPLO DIDÁTICO',gross:'30 480 kg',stacking:'192 000 kg / 1,8 g'},seal:{present:true,expected:'HSS-930501',read:'HSS-930501',tamper:true},expected:'reter',note:'Mesmo com numeração coincidente, sinais de violação exigem tratamento da ocorrência no exercício.'}
];

export function evaluateCompliance(c, decision){
  const findings=[];
  if(!c.plate.present) findings.push('Placa CSC ausente/ilegível');
  if(!c.seal.present) findings.push('Lacre ausente');
  if(c.seal.expected!==c.seal.read) findings.push('Número de lacre divergente');
  if(c.seal.tamper) findings.push('Indício visual de violação');
  return {ok:decision===c.expected,findings,expected:c.expected,note:c.note};
}
