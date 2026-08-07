export const modulesCatalog = [
  {
    id: 'container-40hc-inspecao',
    title: 'Contêiner 40 HC — Inspeção',
    shortTitle: '40 HC — Inspeção',
    description: 'Inspecione um contêiner High Cube, identifique avarias e conclua um checklist operacional.',
    icon: '▣',
    category: 'Contêineres',
    level: 'Inicial',
    status: 'ready',
    type: 'Simulação leve',
    entry: '../modules/container-40hc-inspecao/index.js'
  },
  {
    id: 'reefer-operacao', title: 'Reefer — Operação e Temperatura', description: 'Conferência de set point, alimentação e riscos de carga refrigerada.', icon: '❄', category: 'Contêineres', level: 'Operacional', status: 'planned', type: '3D / Simulação'
  },
  {
    id: 'gate-portuario', title: 'Gate Portuário', description: 'Fluxo de entrada, conferência documental e tomada de decisão no gate.', icon: '⇥', category: 'Operações', level: 'Operacional', status: 'planned', type: 'Simulação'
  },
  {
    id: 'balanca-vgm', title: 'Balança e VGM', description: 'Pesagem, tara, peso bruto e validação de massa verificada.', icon: '⚖', category: 'Operações', level: 'Operacional', status: 'planned', type: 'Ferramenta'
  },
  {
    id: 'bay-row-tier', title: 'Bay / Row / Tier', description: 'Aprenda a localizar contêineres a bordo usando a estrutura de endereçamento do navio.', icon: '▦', category: 'Navios', level: 'Operacional', status: 'planned', type: '3D / Ferramenta'
  },
  {
    id: 'documentacao', title: 'Central de Documentos', description: 'CT-e, DACTE, MDF-e, NF-e, BL, Packing List e documentos de comércio exterior.', icon: '▤', category: 'Documentação', level: 'Inicial', status: 'planned', type: 'Ferramenta'
  }
];
