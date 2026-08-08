export const DAMAGE_CATALOG = [
  {id:'side-dent',label:'Amassamento lateral',zone:'Painel lateral',severity:'moderada',action:'avaliar',position:[-2.9,.35,1.28],hint:'Observe deformação, arestas e possível redução do espaço interno.'},
  {id:'corner-crack',label:'Trinca no corner fitting',zone:'Canto superior',severity:'crítica',action:'reter',position:[5.9,1.55,1.3],hint:'Corner fittings participam do içamento e da transferência de cargas.'},
  {id:'roof-hole',label:'Perfuração no teto',zone:'Teto',severity:'alta',action:'reter',position:[.4,1.68,.1],hint:'Perfuração pode comprometer estanqueidade e proteção da carga.'},
  {id:'door-gasket',label:'Vedação de porta danificada',zone:'Portas',severity:'moderada',action:'avaliar',position:[6.25,.25,-.65],hint:'Verifique continuidade da vedação e fechamento.'},
  {id:'rail-buckle',label:'Deformação na longarina',zone:'Estrutura inferior',severity:'alta',action:'reter',position:[-1.1,-1.18,-1.28],hint:'Deformações estruturais exigem avaliação antes de continuidade.'},
  {id:'surface-corrosion',label:'Corrosão superficial',zone:'Painel lateral',severity:'baixa',action:'registrar',position:[2.3,-.35,1.28],hint:'Diferencie corrosão superficial de perda de material/perfuração.'}
];
export const ACTIONS = [
  {id:'registrar',label:'Registrar e monitorar'},
  {id:'avaliar',label:'Encaminhar para avaliação'},
  {id:'reter',label:'Reter até avaliação/reparo'}
];
export function evaluateDamage(damageId,action){const d=DAMAGE_CATALOG.find(x=>x.id===damageId);return d?{ok:d.action===action,damage:d}:null;}
