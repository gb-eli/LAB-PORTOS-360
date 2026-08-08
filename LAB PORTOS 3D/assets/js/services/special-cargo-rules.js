export const DG_CLASSES_DIDACTIC = [
  {id:'2',label:'Classe 2 — Gases',accent:'#72aee6'},
  {id:'3',label:'Classe 3 — Líquidos inflamáveis',accent:'#d9544d'},
  {id:'8',label:'Classe 8 — Corrosivos',accent:'#9d7cc1'},
  {id:'9',label:'Classe 9 — Perigos diversos',accent:'#737f86'}
];
export const SPECIAL_RULES = {
  reefer:['Zona com energia disponível','Monitoramento de temperatura','Ronda/alarme conforme procedimento local'],
  dg:['Segregação didática por classe/risco','Sinalização e documentação da carga','Aplicar procedimento real do terminal e requisitos vigentes'],
  oog:['Tier térreo no exercício','Reserva de folga lateral/vertical','Planejar equipamento e rota de movimentação']
};
export function describeSpecialCargo(cargo={}){if(cargo.reefer)return{kind:'reefer',label:'Reefer',checks:SPECIAL_RULES.reefer};if(cargo.dg)return{kind:'dg',label:cargo.dgClass?`DG classe ${cargo.dgClass}`:'DG',checks:SPECIAL_RULES.dg};if(cargo.oog)return{kind:'oog',label:'OOG',checks:SPECIAL_RULES.oog};return{kind:'general',label:'Carga comum',checks:['Aplicar regra geral de destinação do exercício']};}
export function evaluateSpecialConditions(cargo={},address={}){const issues=[];if(cargo.oog&&Number(address.tier)!==1)issues.push('OOG deve permanecer no tier térreo neste exercício.');if(cargo.dg&&!cargo.dgClass)issues.push('Classe DG não informada no cenário.');if(cargo.reefer&&String(address.block).toUpperCase()!=='C')issues.push('Reefer fora da zona energizada simulada.');return{valid:issues.length===0,issues};}
