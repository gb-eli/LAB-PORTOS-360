export const containerTypes = [
  { id:'container-20dv', name:"20' Dry", iso:'20 DV', length:'6,06 m', height:'2,59 m', width:'2,44 m', use:'Carga seca geral e lotes menores.', cue:'Mais curto; boa referência para comparar comprimento e capacidade.' },
  { id:'container-40dv', name:"40' Dry", iso:'40 DV', length:'12,19 m', height:'2,59 m', width:'2,44 m', use:'Carga seca geral com maior volume.', cue:'Comprimento próximo ao 40 HC, mas menor altura.' },
  { id:'container-40hc', name:"40' High Cube", iso:'40 HC', length:'12,19 m', height:'2,90 m', width:'2,44 m', use:'Carga seca que se beneficia de maior volume interno.', cue:'A altura maior é o principal contraste visual com o 40 DV.' },
  { id:'reefer-40hc', name:"40' Reefer HC", iso:'40 RF HC', length:'12,19 m', height:'2,90 m', width:'2,44 m', use:'Carga com controle de temperatura e monitoramento.', cue:'Reconheça a unidade frigorífica na extremidade.' },
  { id:'open-top-40', name:"40' Open Top", iso:'40 OT', length:'12,19 m', height:'2,59 m', width:'2,44 m', use:'Cargas altas ou carregadas verticalmente, conforme operação aplicável.', cue:'A cobertura superior convencional não está presente no modelo didático.' },
  { id:'flat-rack-40', name:"40' Flat Rack", iso:'40 FR', length:'12,19 m', height:'Plataforma', width:'2,44 m', use:'Cargas de projeto, máquinas e volumes fora do padrão, conforme limites operacionais.', cue:'Estrutura aberta, com plataforma e cabeceiras.' }
];

export const typeChallenges = [
  { id:'T1', question:'Qual unidade é a referência didática para carga refrigerada?', answer:'reefer-40hc' },
  { id:'T2', question:'Qual unidade desta vitrine possui maior altura entre os contêineres secos fechados de 40 pés?', answer:'container-40hc' },
  { id:'T3', question:'Qual modelo é visualmente mais adequado para representar carga de projeto fora do envelope lateral/superior convencional?', answer:'flat-rack-40' },
  { id:'T4', question:'Qual unidade aberta no topo favorece carregamento vertical em cenários compatíveis?', answer:'open-top-40' }
];
