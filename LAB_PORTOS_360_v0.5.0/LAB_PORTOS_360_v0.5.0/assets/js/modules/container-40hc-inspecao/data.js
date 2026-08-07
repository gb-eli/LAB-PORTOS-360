export const labData = {
  id: 'container-40hc-inspecao',
  mission: 'Realize uma inspeção visual inicial e identifique três pontos que exigem registro.',
  container: {
    type: '40 HC',
    length: '40 pés',
    height: 'High Cube',
    status: 'Aguardando inspeção',
    seal: 'LPS-240801'
  },
  findings: [
    { id: 'lateral', label: 'Amassamento lateral', hint: 'Observe a região esquerda da lateral.' },
    { id: 'base', label: 'Dano próximo à base', hint: 'Verifique a parte inferior central.' },
    { id: 'porta', label: 'Irregularidade próxima à porta', hint: 'Observe o setor direito superior.' }
  ]
};
