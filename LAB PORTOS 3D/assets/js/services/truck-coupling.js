export const COUPLING_STEPS=[
 {id:'inspect',label:'Inspecionar quinta roda e pino-rei'},
 {id:'approach',label:'Aproximar e alinhar'},
 {id:'lock',label:'Travar acoplamento'},
 {id:'legs',label:'Recolher pernas de apoio'},
 {id:'test',label:'Executar teste didático de tração'}
];
export function couplingStatus(state){const done=COUPLING_STEPS.filter(s=>state[s.id]).length;return{done,total:COUPLING_STEPS.length,complete:done===COUPLING_STEPS.length};}
export function canAdvance(state,step){const i=COUPLING_STEPS.findIndex(s=>s.id===step);if(i<=0)return true;return COUPLING_STEPS.slice(0,i).every(s=>state[s.id]);}
