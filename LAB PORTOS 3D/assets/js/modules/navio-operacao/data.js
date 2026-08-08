export const vesselScenarios = [
  { id: 'N1', title: 'Descarga prioritária', operation: 'descarga', bay: '14', unit: '40 HC', destination: 'Transferência para pátio', note: 'A unidade destacada deve sair do navio e seguir para o cais.' },
  { id: 'N2', title: 'Embarque programado', operation: 'embarque', bay: '18', unit: '40 DV', destination: 'Posição de bordo', note: 'A unidade está no cais e deve ser embarcada na posição indicada.' },
  { id: 'N3', title: 'Descarga para inspeção', operation: 'descarga', bay: '22', unit: '20 DV', destination: 'Área de inspeção', note: 'Retire a unidade do navio antes da transferência terrestre.' }
];

export const bayChoices = ['10', '14', '18', '22', '26'];
