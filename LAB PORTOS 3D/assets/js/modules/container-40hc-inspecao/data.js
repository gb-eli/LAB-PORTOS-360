export const labData = {
  id: 'container-40hc-inspecao',
  mission: 'Gire a cena, aproxime o contêiner e registre os três pontos de avaria indicados no modelo 3D.',
  container: {
    type: '40 HC',
    length: '40 pés',
    height: 'High Cube',
    status: 'Aguardando inspeção',
    seal: 'LPS-240801'
  },
  findings: [
    { id: 'lateral', label: 'Amassamento lateral', hint: 'Inspecione a lateral esquerda do contêiner.', position: [-2.8, 0.25, 1.28] },
    { id: 'base', label: 'Dano próximo à base', hint: 'Observe a longarina inferior e a região central.', position: [1.1, -1.15, -1.28] },
    { id: 'porta', label: 'Irregularidade próxima à porta', hint: 'Aproxime a câmera da extremidade das portas.', position: [6.25, 0.7, 0.66] }
  ]
};
