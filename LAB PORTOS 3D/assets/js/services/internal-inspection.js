export const INTERNAL_ZONES=[
 {id:'floor',label:'Piso',hint:'Procure furos, tábuas soltas, umidade ou contaminação.'},
 {id:'walls',label:'Paredes laterais',hint:'Observe perfurações, deformações e resíduos.'},
 {id:'front',label:'Parede frontal',hint:'Verifique integridade e sinais de impacto.'},
 {id:'roof',label:'Teto',hint:'Observe perfurações, entrada de luz e deformações.'},
 {id:'doors',label:'Portas e vedação',hint:'Confirme fechamento, borrachas e travas.'},
 {id:'cleanliness',label:'Limpeza / odor',hint:'Avalie resíduos, odores e condição para a carga.'},
 {id:'light-test',label:'Teste de luz',hint:'Com portas fechadas, pontos de luz podem indicar perfuração.'}
];
export const INTERNAL_SCENARIOS=[
 {id:'clean',title:'Unidade limpa e íntegra',issues:[],expected:'release',notes:'Sem evidência didática de perfuração ou contaminação.'},
 {id:'roof-light',title:'Entrada de luz no teto',issues:['roof','light-test'],expected:'hold',notes:'Ponto de luz indica possível perda de estanqueidade.'},
 {id:'floor-contamination',title:'Piso contaminado',issues:['floor','cleanliness'],expected:'hold',notes:'Resíduo/odor exige tratamento antes do carregamento.'},
 {id:'door-seal',title:'Vedação de porta comprometida',issues:['doors'],expected:'hold',notes:'A condição deve ser tratada antes da liberação didática.'}
];
export function getInternalScenario(id){return INTERNAL_SCENARIOS.find(s=>s.id===id)||INTERNAL_SCENARIOS[0];}
export function evaluateInternalInspection({scenarioId,checked=[],decision}={}){
 const scenario=getInternalScenario(scenarioId);const missing=INTERNAL_ZONES.filter(z=>!checked.includes(z.id)).map(z=>z.id);
 const complete=!missing.length;const correct=complete&&decision===scenario.expected;
 return {scenario,missing,complete,correct,expected:scenario.expected,issues:scenario.issues.slice()};
}
