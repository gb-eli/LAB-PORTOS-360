export const yardBlocks = [
  { id: 'A', name: 'Bloco A — Importação', occupancy: 0.72, service: 'Carga seca / permanência', accent: '#4e8aa0' },
  { id: 'B', name: 'Bloco B — Exportação', occupancy: 0.54, service: 'Pré-embarque / giro rápido', accent: '#d39b31' },
  { id: 'C', name: 'Bloco C — Reefer / DG', occupancy: 0.41, service: 'Tomadas, monitoramento e área segregada', accent: '#5eb5a4' },
  { id: 'D', name: 'Bloco D — OOG / Especial', occupancy: 0.33, service: 'Fora de gabarito e contingências', accent: '#9b78d0' }
];

export const yardScenarios = [
  {
    id: 'P1', title: 'Exportação com janela próxima', container: '40 HC seco', detail: 'Gate liberado • embarque previsto em 2 h',
    correctBlock: 'B', assignedAddress: { block:'B', bay:2, row:'B', tier:2 }, explanation: 'Para este cenário didático, o Bloco B é a área de pré-embarque e reduz movimentações intermediárias.'
  },
  {
    id: 'P2', title: 'Reefer de exportação', container: '40 RF • -18 °C', detail: 'Requer alimentação elétrica e monitoramento',
    correctBlock: 'C', assignedAddress: { block:'C', bay:2, row:'A', tier:1 }, explanation: 'A unidade deve ser posicionada na área equipada com tomadas e rotina de monitoramento.'
  },
  {
    id: 'P3', title: 'Importação seca liberada do navio', container: '20 DV seco', detail: 'Aguardará retirada rodoviária',
    correctBlock: 'A', assignedAddress: { block:'A', bay:4, row:'C', tier:2 }, explanation: 'Neste exercício, o Bloco A atende a importação seca em permanência antes da retirada.'
  }
];
