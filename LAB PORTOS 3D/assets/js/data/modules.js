export const modulesCatalog = [
  {
    id: 'container-40hc-inspecao',
    title: 'Contêiner 40 HC — Inspeção 3D',
    shortTitle: '40 HC — Inspeção',
    description: 'Explore um contêiner High Cube em 3D, identifique avarias e conclua o checklist operacional.',
    icon: '▣', category: 'Contêineres', level: 'Inicial', status: 'ready', type: '3D / Simulação',
    accent: 'teal', entry: '../modules/container-40hc-inspecao/index.js'
  },
  {
    id: 'reefer-operacao',
    title: 'Reefer — Operação e Temperatura',
    shortTitle: 'Reefer',
    description: 'Opere o painel de um contêiner refrigerado, avalie temperaturas, alimentação e alarmes.',
    icon: '❄', category: 'Contêineres', level: 'Operacional', status: 'ready', type: '3D / Simulação',
    accent: 'ice', entry: '../modules/reefer-operacao/index.js'
  },
  {
    id: 'gate-portuario',
    title: 'Gate Portuário — Triagem',
    shortTitle: 'Gate Portuário',
    description: 'Confira veículo, booking, lacre e documentos para decidir o tratamento correto no gate.',
    icon: '⇥', category: 'Operações', level: 'Operacional', status: 'ready', type: 'Simulação',
    accent: 'orange', entry: '../modules/gate-portuario/index.js'
  },
  {
    id: 'balanca-vgm',
    title: 'Balança e VGM — Pesagem',
    shortTitle: 'Balança e VGM',
    description: 'Simule uma pesagem, desconte cavalo e chassi e confronte a massa obtida com os dados declarados.',
    icon: '⚖', category: 'Operações', level: 'Operacional', status: 'ready', type: 'Ferramenta / Simulação',
    accent: 'gold', entry: '../modules/balanca-vgm/index.js'
  },
  {
    id: 'patio-operacional',
    title: 'Pátio 3D — Ocupação e Destinação',
    shortTitle: 'Pátio 3D',
    description: 'Compare blocos, ocupação e necessidades da carga para destinar contêineres em um pátio virtual.',
    icon: '▥', category: 'Pátio', level: 'Operacional', status: 'ready', type: '3D / Simulação',
    accent: 'green', entry: '../modules/patio-operacional/index.js'
  },
  {
    id: 'bay-row-tier',
    title: 'Bay / Row / Tier — Localização a Bordo',
    shortTitle: 'Bay / Row / Tier',
    description: 'Treine endereçamento de posições em uma representação tridimensional simplificada de navio porta-contêineres.',
    icon: '▦', category: 'Navios', level: 'Operacional', status: 'ready', type: '3D / Ferramenta',
    accent: 'blue', entry: '../modules/bay-row-tier/index.js'
  },
  {
    id: 'navio-operacao',
    title: 'Navio 3D — Operação de Cais',
    shortTitle: 'Navio / Cais',
    description: 'Confirme uma ordem operacional e execute ciclos simplificados de carga e descarga com portêiner virtual.',
    icon: '◭', category: 'Navios', level: 'Avançado', status: 'ready', type: '3D / Simulação',
    accent: 'navy', entry: '../modules/navio-operacao/index.js'
  },
  {
    id: 'equipamentos-portuarios',
    title: 'Equipamentos Portuários 3D',
    shortTitle: 'Equipamentos 3D',
    description: 'Compare Reach Stacker, RTG e Portêiner e relacione cada equipamento às operações em que é aplicado.',
    icon: '⚙', category: 'Equipamentos', level: 'Inicial', status: 'ready', type: '3D / Exploração',
    accent: 'orange', entry: '../modules/equipamentos-portuarios/index.js'
  },
  {
    id: 'documentacao',
    title: 'Central de Documentos — Conferência',
    shortTitle: 'Documentação',
    description: 'Explore NF-e/DANFE, CT-e/DACTE, MDF-e, B/L, Commercial Invoice, Packing List e Duimp em casos didáticos.',
    icon: '▤', category: 'Documentação', level: 'Inicial', status: 'ready', type: 'Ferramenta / Simulação', accent: 'violet',
    entry: '../modules/documentacao/index.js'
  }
,
  {
    id: 'tipos-containeres',
    title: 'Tipos de Contêiner — Comparador 3D',
    shortTitle: 'Tipos de Contêiner',
    description: "Compare 20' Dry, 40' Dry, 40' HC, Reefer, Open Top e Flat Rack com GLB e LOD por distância.",
    icon: '▤', category: 'Contêineres', level: 'Inicial', status: 'ready', type: '3D / Exploração', accent: 'blue',
    entry: '../modules/tipos-containeres/index.js'
  },
  {
    id: 'operacao-integrada',
    title: 'Operação Integrada — Gate ao Navio',
    shortTitle: 'Operação Integrada',
    description: 'Percorra Gate, Balança, Pátio e Navio em uma jornada com progresso compartilhado entre laboratórios.',
    icon: '→', category: 'Operações', level: 'Avançado', status: 'ready', type: 'Jornada / Simulação', accent: 'green',
    entry: '../modules/operacao-integrada/index.js'
  },
  {
    id: 'patio-enderecamento',
    title: 'Pátio — Block / Bay / Row / Tier',
    shortTitle: 'Endereçamento de Pátio',
    description: 'Monte e localize endereços completos de pátio em um terminal 3D com Block, Bay, Row e Tier.',
    icon: '⌖', category: 'Pátio', level: 'Operacional', status: 'ready', type: '3D / Ferramenta', accent: 'gold',
    entry: '../modules/patio-enderecamento/index.js'
  },
  {
    id: 'intermodal-ferroviario',
    title: 'Ferrovia e Rodovia — Intermodal 3D',
    shortTitle: 'Intermodal 3D',
    description: 'Compare transferências rodoviárias e ferroviárias em um terminal intermodal com trilhos, vagões e caminhão.',
    icon: '⇄', category: 'Logística', level: 'Operacional', status: 'ready', type: '3D / Simulação', accent: 'green',
    entry: '../modules/intermodal-ferroviario/index.js'
  },
  {
    id: 'missao-excecoes',
    title: 'Missão Integrada — Tratamento de Exceções',
    shortTitle: 'Missão de Exceções',
    description: 'Resolva uma cadeia de divergências em Gate, VGM, Reefer e documentação antes da liberação operacional.',
    icon: '!', category: 'Operações', level: 'Avançado', status: 'ready', type: 'Jornada / Decisão', accent: 'orange',
    entry: '../modules/missao-excecoes/index.js'
  },
  {
    id:'patio-especializado', title:'Pátio Especializado — Reefer / DG / OOG', shortTitle:'Pátio Especializado',
    description:'Treine destinação para zonas Reefer, carga perigosa e OOG com endereço de pátio e visualização 3D.',
    icon:'▧', category:'Pátio', level:'Avançado', status:'ready', type:'3D / Simulação', accent:'violet', entry:'../modules/patio-especializado/index.js'
  },
  {
    id:'terminal-ferroviario', title:'Terminal Ferroviário — Formação e Transferência', shortTitle:'Terminal Ferroviário',
    description:'Movimente locomotiva e vagões e execute uma transferência simplificada entre composição e pátio.',
    icon:'≋', category:'Logística', level:'Avançado', status:'ready', type:'3D / Simulação', accent:'orange', entry:'../modules/terminal-ferroviario/index.js'
  },
  {
    id:'cavalo-chassi', title:'Cavalo Mecânico e Chassi — Acoplamento', shortTitle:'Cavalo / Chassi',
    description:'Explore cavalo mecânico, chassi e um ciclo visual de acoplamento e desacoplamento.',
    icon:'▱', category:'Equipamentos', level:'Operacional', status:'ready', type:'3D / Exploração', accent:'blue', entry:'../modules/cavalo-chassi/index.js'
  },
  {
    id:'terminal-24h', title:'Terminal 24h — Ciclo Dia e Noite', shortTitle:'Terminal 24h',
    description:'Compare amanhecer, dia, entardecer e noite no mesmo terminal com iluminação adaptativa.',
    icon:'◐', category:'Segurança', level:'Inicial', status:'ready', type:'3D / Exploração', accent:'navy', entry:'../modules/terminal-24h/index.js'
  },
  {
    id:'painel-instrutor', title:'Painel do Professor — Injeção de Exceções', shortTitle:'Painel do Professor',
    description:'Injete falhas didáticas persistentes em Gate, VGM, Reefer, pátio, documentos, cais e ferrovia.',
    icon:'⚑', category:'Ferramentas', level:'Professor', status:'ready', type:'Controle / Simulação', accent:'gold', entry:'../modules/painel-instrutor/index.js'
  }
,
  {
    id:'spreader-twistlock', title:'Spreader e Twistlocks — Engate 3D', shortTitle:'Spreader / Twistlocks',
    description:'Treine alinhamento, travamento, elevação e liberação de uma unidade com spreader e quatro pontos de engate.',
    icon:'⊞', category:'Equipamentos', level:'Operacional', status:'ready', type:'3D / Simulação', accent:'orange', entry:'../modules/spreader-twistlock/index.js'
  },
  {
    id:'relatorio-sessao', title:'Relatório de Sessão — Evidências', shortTitle:'Relatório / Evidências',
    description:'Revise o histórico local das atividades e exporte evidências em JSON ou relatório HTML imprimível.',
    icon:'▥', category:'Ferramentas', level:'Todos', status:'ready', type:'Relatório / Ferramenta', accent:'teal', entry:'../modules/relatorio-sessao/index.js'
  }
,
  {
    id:'csc-lacres', title:'CSC, Placas e Lacres — Inspeção', shortTitle:'CSC / Lacres',
    description:'Confira placa de aprovação de segurança, exame e integridade/numeração do lacre em casos didáticos.',
    icon:'▣', category:'Contêineres', level:'Operacional', status:'ready', type:'3D / Inspeção', accent:'gold', entry:'../modules/csc-lacres/index.js'
  },
  {
    id:'avarias-estruturais', title:'Avarias Estruturais — Avaliação 3D', shortTitle:'Avarias 3D',
    description:'Explore seis tipos de avaria em um contêiner 3D e escolha o tratamento didático conforme região e gravidade.',
    icon:'⚠', category:'Contêineres', level:'Avançado', status:'ready', type:'3D / Simulação', accent:'orange', entry:'../modules/avarias-estruturais/index.js'
  }
,
  {id:'inspecao-360',title:'Inspeção Externa 360°',shortTitle:'Inspeção 360°',description:'Gire ao redor do contêiner, visite oito regiões externas e conclua uma ronda visual com câmera orbital.',icon:'◉',category:'Contêineres',level:'Operacional',status:'ready',type:'3D / 360',accent:'teal',entry:'../modules/inspecao-360/index.js'},
  {id:'portos-reais',title:'Portos Reais — Estudos de Caso',shortTitle:'Portos Reais',description:'Compare Paranaguá/TCP, Porto Itapoá e Portonave com dados institucionais datados e desafios de leitura.',icon:'⌂',category:'Portos Reais',level:'Inicial',status:'ready',type:'Informação / Estudo',accent:'blue',entry:'../modules/portos-reais/index.js'},
  {id:'cadeia-operacional',title:'Jornada Completa — Documento ao Navio',shortTitle:'Jornada Completa',description:'Integre Documentação, Gate, VGM, Pátio, transferência por cais/ferrovia e Navio em uma cadeia compartilhada.',icon:'⇢',category:'Operações',level:'Avançado',status:'ready',type:'Jornada / Integração',accent:'green',entry:'../modules/cadeia-operacional/index.js'}
,
  {id:'container-inspecao-interna',title:'Inspeção Interna — Condição para Carga',shortTitle:'Inspeção Interna',description:'Percorra piso, paredes, teto, portas, limpeza e teste de luz em um contêiner visto por dentro.',icon:'▱',category:'Contêineres',level:'Operacional',status:'ready',type:'3D / Inspeção',accent:'teal',entry:'../modules/container-inspecao-interna/index.js'},
  {id:'plano-estiva-avancado',title:'Plano de Estiva — Restrições Operacionais',shortTitle:'Estiva Avançada',description:'Posicione Dry, pesado, Reefer, DG e OOG em uma matriz 3D respeitando regras didáticas de posição e segregação.',icon:'▦',category:'Navios',level:'Avançado',status:'ready',type:'3D / Planejamento',accent:'violet',entry:'../modules/plano-estiva-avancado/index.js'},
  {id:'portainer-antisway',title:'Portêiner — Trolley, Hoist e Anti-sway',shortTitle:'Anti-sway',description:'Controle trolley e comprimento do cabo e compare a oscilação manual com assistência anti-sway.',icon:'⌁',category:'Equipamentos',level:'Avançado',status:'ready',type:'3D / Dinâmica',accent:'orange',entry:'../modules/portainer-antisway/index.js'},
  {id:'kpis-produtividade',title:'KPIs do Terminal — Produtividade e Fluxo',shortTitle:'KPIs do Terminal',description:'Interprete prancha, turn time, ocupação de pátio, dwell e vazão de gate em cenários didáticos.',icon:'▥',category:'Gestão',level:'Operacional',status:'ready',type:'Indicadores / Simulação',accent:'gold',entry:'../modules/kpis-produtividade/index.js'},
  {id:'fila-caminhoes',title:'Fila Dinâmica de Caminhões',shortTitle:'Fila de Caminhões',description:'Ajuste lanes, chegadas e tempo de atendimento e observe a formação de fila no gate.',icon:'⇥',category:'Operações',level:'Operacional',status:'ready',type:'Simulação / Fluxo',accent:'green',entry:'../modules/fila-caminhoes/index.js'}

,
  {
    id:'dashboard-terminal', title:'Central de Operações — Dashboard do Terminal', shortTitle:'Central de Operações',
    description:'Acompanhe Fila, Gate, Pátio, Cais e Ferrovia em um estado operacional compartilhado e persistente.',
    icon:'▥', category:'Gestão', level:'Avançado', status:'ready', type:'Dashboard / Simulação', accent:'teal', entry:'../modules/dashboard-terminal/index.js'
  },
  {
    id:'turno-operacional', title:'Turno Operacional — 8 horas', shortTitle:'Turno Operacional',
    description:'Simule um turno acumulando fila, gate, produtividade de cais, ferrovia e ocupação de pátio.',
    icon:'◷', category:'Gestão', level:'Avançado', status:'ready', type:'Simulação / KPIs', accent:'gold', entry:'../modules/turno-operacional/index.js'
  },
  {
    id:'plano-estiva-hatch-deck', title:'Plano de Estiva — Porão e Convés', shortTitle:'Estiva Hatch / Deck',
    description:'Planeje posições abaixo e acima da tampa de escotilha com restrições de peso, Reefer, DG e OOG.',
    icon:'▦', category:'Navios', level:'Avançado', status:'ready', type:'3D / Planejamento', accent:'navy', entry:'../modules/plano-estiva-hatch-deck/index.js'
  }

  ,{id:'mapa-ocupacao-patio',title:'Mapa de Ocupação — Block / Bay / Row / Tier',shortTitle:'Mapa de Ocupação',description:'Visualize 384 slots didáticos por Block, Bay, Row e Tier e treine reservas de posição.',icon:'▦',category:'Pátio',level:'Avançado',status:'ready',type:'Mapa / Ferramenta',accent:'green',entry:'../modules/mapa-ocupacao-patio/index.js'}
  ,{id:'programacao-bercos',title:'Programação de Navios e Berços',shortTitle:'Navios e Berços',description:'Planeje escalas fictícias, evite sobreposição de janela e respeite compatibilidade entre navio e berço.',icon:'◫',category:'Navios',level:'Avançado',status:'ready',type:'Planejamento / Simulação',accent:'navy',entry:'../modules/programacao-bercos/index.js'}
  ,{id:'mapa-operacional-terminal',title:'Mapa Operacional do Terminal',shortTitle:'Mapa Operacional',description:'Acompanhe Gate, Pátio, Ferrovia, Cais e berços em um esquema leve alimentado pelo estado vivo.',icon:'⌘',category:'Ferramentas',level:'Operacional',status:'ready',type:'Mapa / Monitoramento',accent:'teal',entry:'../modules/mapa-operacional-terminal/index.js'}
  ,{id:'eventos-turno',title:'Eventos Operacionais — Impacto Integrado',shortTitle:'Eventos de Turno',description:'Ative pico rodoviário, saturação de pátio, vento, atraso ferroviário ou alarme Reefer e observe efeitos cruzados.',icon:'⚡',category:'Operações',level:'Avançado',status:'ready',type:'Simulação / Eventos',accent:'orange',entry:'../modules/eventos-turno/index.js'}

  ,{id:'fila-fundeio',title:'Fila de Fundeio — ETA / ETD Dinâmico',shortTitle:'Fila de Fundeio',description:'Revise ETA, acompanhe espera por berço e estime ETD usando janela e recursos de cais.',icon:'◉',category:'Navios',level:'Avançado',status:'ready',type:'Planejamento / Simulação',accent:'navy',entry:'../modules/fila-fundeio/index.js'}
  ,{id:'recursos-cais',title:'Recursos do Cais — Portêineres e Equipes',shortTitle:'Recursos do Cais',description:'Aloque STSs e equipes às escalas e compare o efeito sobre duração prevista e capacidade operacional.',icon:'⌂',category:'Equipamentos',level:'Avançado',status:'ready',type:'Planejamento / Recursos',accent:'teal',entry:'../modules/recursos-cais/index.js'}
  ,{id:'manutencao-equipamentos',title:'Manutenção e Disponibilidade de Equipamentos',shortTitle:'Manutenção',description:'Simule falhas e manutenção de STS, RTG, Reach Stacker e locomotivas e acompanhe disponibilidade.',icon:'⚙',category:'Equipamentos',level:'Operacional',status:'ready',type:'Gestão / Simulação',accent:'orange',entry:'../modules/manutencao-equipamentos/index.js'}
  ,{id:'rehandles-patio',title:'Rehandles no Pátio — Remanejamentos',shortTitle:'Rehandles',description:'Acesse unidades-alvo em pilhas e meça quantos remanejamentos extras uma pré-estivagem exige.',icon:'↕',category:'Pátio',level:'Avançado',status:'ready',type:'Pátio / Sequenciamento',accent:'green',entry:'../modules/rehandles-patio/index.js'}
  ,{id:'historico-kpis',title:'Histórico de KPIs — Linha do Turno',shortTitle:'Histórico de KPIs',description:'Registre snapshots do estado vivo e visualize tendências de fila, Gate, Pátio, Cais e disponibilidade.',icon:'⌁',category:'Gestão',level:'Avançado',status:'ready',type:'Dashboard / Série temporal',accent:'blue',entry:'../modules/historico-kpis/index.js'}

  ,{id:'escala-tempos-reais',title:'Escala Portuária — ETB / ATB / ETD / ATD',shortTitle:'ETB / ATB / ETD / ATD',description:'Compare horários estimados e realizados de atracação e partida e acompanhe desvios da escala.',icon:'◷',category:'Navios',level:'Avançado',status:'ready',type:'Planejamento / Escalas',accent:'navy',entry:'../modules/escala-tempos-reais/index.js'}
  ,{id:'produtividade-sts',title:'Produtividade por Navio e STS',shortTitle:'Produtividade STS',description:'Registre movimentos e minutos ativos e compare produtividade observada por navio e por portêiner.',icon:'↥',category:'Gestão',level:'Avançado',status:'ready',type:'KPIs / Cais',accent:'teal',entry:'../modules/produtividade-sts/index.js'}
  ,{id:'ordens-manutencao',title:'Ordens de Trabalho e Horímetro',shortTitle:'OTs / Horímetro',description:'Acompanhe horas de uso, preventiva por intervalo e ciclo de abertura, execução e fechamento de ordens.',icon:'⚒',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Gestão',accent:'orange',entry:'../modules/ordens-manutencao/index.js'}
  ,{id:'otimizacao-rehandles',title:'Estratégia de Pátio — Redução de Rehandles',shortTitle:'Redução de Rehandles',description:'Compare estratégias de pré-estivagem e estime remanejamentos que podem ser evitados.',icon:'⇅',category:'Pátio',level:'Avançado',status:'ready',type:'Otimização / Pátio',accent:'green',entry:'../modules/otimizacao-rehandles/index.js'}
  ,{id:'previsao-operacional',title:'Previsão Operacional — Próximas 6 horas',shortTitle:'Previsão 6h',description:'Projete fila, ocupação, fundeio e disponibilidade de STS em cenários what-if simplificados.',icon:'⌁',category:'Gestão',level:'Avançado',status:'ready',type:'Forecast / Central',accent:'blue',entry:'../modules/previsao-operacional/index.js'}

  ,{id:'confiabilidade-mtbf-mttr',title:'Confiabilidade — MTBF / MTTR e Causas',shortTitle:'MTBF / MTTR',description:'Registre falhas didáticas, acompanhe disponibilidade e compare MTBF, MTTR e causas recorrentes.',icon:'∿',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Indicadores',accent:'orange',entry:'../modules/confiabilidade-mtbf-mttr/index.js'}
  ,{id:'estoque-manutencao',title:'Estoque de Manutenção — Peças e Reposição',shortTitle:'Estoque de Peças',description:'Controle saldo, reserva, consumo, ponto mínimo e reposição de peças críticas do terminal.',icon:'▦',category:'Equipamentos',level:'Operacional',status:'ready',type:'Manutenção / Estoque',accent:'gold',entry:'../modules/estoque-manutencao/index.js'}
  ,{id:'produtividade-hatch-bay',title:'Produtividade por Hatch / Bay',shortTitle:'Hatch / Bay',description:'Registre produtividade por região do navio e identifique gargalos que a média geral pode ocultar.',icon:'▥',category:'Navios',level:'Avançado',status:'ready',type:'Cais / Indicadores',accent:'navy',entry:'../modules/produtividade-hatch-bay/index.js'}
  ,{id:'planejamento-recursos-turno',title:'Recursos por Turno — Capacidade e Demanda',shortTitle:'Recursos por Turno',description:'Planeje STS, RTGs, Reach Stackers, equipes e lanes para uma meta operacional de oito horas.',icon:'⌘',category:'Gestão',level:'Avançado',status:'ready',type:'Planejamento / Central',accent:'green',entry:'../modules/planejamento-recursos-turno/index.js'}
  ,{id:'previsao-vs-realizado',title:'Previsão × Realizado',shortTitle:'Previsão × Real',description:'Confronte o forecast de fila, pátio e fundeio com o estado realizado e acompanhe a acurácia didática.',icon:'≈',category:'Gestão',level:'Avançado',status:'ready',type:'Forecast / Análise',accent:'blue',entry:'../modules/previsao-vs-realizado/index.js'}
  ,{id:'recuperacao-operacional',title:'Recuperação Operacional — Plano de Resposta',shortTitle:'Recuperação',description:'Compare ações de recuperação quando a previsão indicar saturação do Gate, pátio ou cais.',icon:'↺',category:'Gestão',level:'Avançado',status:'ready',type:'What-if / Decisão',accent:'teal',entry:'../modules/recuperacao-operacional/index.js'}

  ,{id:'ot-materiais',title:'OT + Peças — Reserva e Consumo',shortTitle:'OT + Peças',description:'Vincule materiais às ordens de trabalho, reserve estoque e faça a baixa didática durante a execução.',icon:'▧',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Estoque',accent:'gold',entry:'../modules/ot-materiais/index.js'}
  ,{id:'manutencao-planejada',title:'Janela de Manutenção — Indisponibilidade Futura',shortTitle:'Manutenção Planejada',description:'Programe janelas futuras de manutenção e observe o impacto da retirada planejada de equipamentos.',icon:'◷',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Planejamento',accent:'orange',entry:'../modules/manutencao-planejada/index.js'}
  ,{id:'confiabilidade-familias',title:'MTBF / MTTR por Família de Equipamento',shortTitle:'Confiabilidade por Família',description:'Compare confiabilidade e disponibilidade de STS, RTG, Reach Stacker e locomotivas.',icon:'∿',category:'Equipamentos',level:'Avançado',status:'ready',type:'Confiabilidade / Análise',accent:'teal',entry:'../modules/confiabilidade-familias/index.js'}
  ,{id:'custos-manutencao',title:'Custos Didáticos de Manutenção',shortTitle:'Custos de Manutenção',description:'Compare peças, mão de obra e indisponibilidade em um orçamento educacional configurável.',icon:'¤',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Custos',accent:'gold',entry:'../modules/custos-manutencao/index.js'}
  ,{id:'equipes-manutencao',title:'Escala de Equipes de Manutenção',shortTitle:'Equipes de Manutenção',description:'Atribua equipes às OTs, evite conflito de atendimento e conduza o ciclo de execução.',icon:'♟',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Pessoas',accent:'green',entry:'../modules/equipes-manutencao/index.js'}
  ,{id:'impacto-falhas',title:'Impacto de Falhas — ETD e Produtividade',shortTitle:'Impacto de Falhas',description:'Estime o efeito didático da indisponibilidade de STS, RTG, Reach Stacker ou locomotiva sobre a operação.',icon:'⚠',category:'Gestão',level:'Avançado',status:'ready',type:'Confiabilidade / What-if',accent:'orange',entry:'../modules/impacto-falhas/index.js'}
  ,{id:'assistente-recuperacao',title:'Assistente de Recuperação — Recomendações Automáticas',shortTitle:'Assistente de Recuperação',description:'Combine alarmes e indicadores para gerar recomendações didáticas de recuperação operacional.',icon:'✦',category:'Gestão',level:'Avançado',status:'ready',type:'Central / Recomendação',accent:'teal',entry:'../modules/assistente-recuperacao/index.js'}

  ,{id:'prontidao-ot',title:'Prontidão da OT — Peças, Equipe e Liberação',shortTitle:'Prontidão da OT',description:'Bloqueie o início da ordem até que materiais, equipe e disponibilidade estejam validados.',icon:'✓',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Controle',accent:'teal',entry:'../modules/prontidao-ot/index.js'}
  ,{id:'calendario-manutencao',title:'Calendário Semanal de Manutenção',shortTitle:'Calendário de Manutenção',description:'Distribua janelas planejadas ao longo de sete dias e acompanhe indisponibilidades no relógio simulado.',icon:'▦',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Agenda',accent:'gold',entry:'../modules/calendario-manutencao/index.js'}
  ,{id:'criticidade-ativos',title:'Criticidade dos Ativos — Classes A / B / C',shortTitle:'Criticidade dos Ativos',description:'Priorize equipamentos por consequência, redundância, confiabilidade e status operacional.',icon:'◆',category:'Equipamentos',level:'Avançado',status:'ready',type:'Confiabilidade / Priorização',accent:'orange',entry:'../modules/criticidade-ativos/index.js'}
  ,{id:'disponibilidade-futura',title:'Disponibilidade Futura por Turno',shortTitle:'Disponibilidade Futura',description:'Projete a disponibilidade de STS, RTG, Reach Stacker e locomotivas nos próximos turnos.',icon:'◷',category:'Gestão',level:'Avançado',status:'ready',type:'Planejamento / Forecast',accent:'blue',entry:'../modules/disponibilidade-futura/index.js'}
  ,{id:'impacto-manutencao-programacao',title:'Impacto da Manutenção na Programação',shortTitle:'Impacto da Manutenção',description:'Estime efeitos de janelas de manutenção sobre ETD, produtividade, pátio e ferrovia.',icon:'⚠',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / What-if',accent:'orange',entry:'../modules/impacto-manutencao-programacao/index.js'}
  ,{id:'melhor-janela-manutencao',title:'Melhor Janela de Manutenção — Recomendação',shortTitle:'Melhor Janela',description:'Compare horários candidatos e recomende a janela de menor impacto operacional didático.',icon:'✦',category:'Gestão',level:'Avançado',status:'ready',type:'Central / Recomendação',accent:'teal',entry:'../modules/melhor-janela-manutencao/index.js'}

  ,{id:'gantt-manutencao',title:'Gantt Semanal — Manutenção × Navios',shortTitle:'Gantt Manutenção × Navios',description:'Compare janelas de manutenção com escalas de navios e identifique sobreposições críticas de recursos.',icon:'▤',category:'Gestão',level:'Avançado',status:'ready',type:'Planejamento / Gantt',accent:'blue',entry:'../modules/gantt-manutencao/index.js'}
  ,{id:'dependencias-ot',title:'Dependências entre OTs — Predecessoras e Bloqueios',shortTitle:'Dependências de OTs',description:'Defina predecessoras e impeça o início de ordens sucessoras antes da conclusão das dependências.',icon:'⇢',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Sequenciamento',accent:'orange',entry:'../modules/dependencias-ot/index.js'}
  ,{id:'prioridade-manutencao',title:'Prioridade Automática das OTs — P1 a P4',shortTitle:'Prioridade das OTs',description:'Combine criticidade, prioridade, horímetro, dependências e prontidão para ordenar o trabalho.',icon:'◆',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Priorização',accent:'gold',entry:'../modules/prioridade-manutencao/index.js'}
  ,{id:'backlog-manutencao',title:'Backlog Planejado de Manutenção',shortTitle:'Backlog de Manutenção',description:'Acompanhe envelhecimento, prontidão e prioridade das ordens abertas em um relógio didático.',icon:'☷',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Backlog',accent:'teal',entry:'../modules/backlog-manutencao/index.js'}
  ,{id:'sla-ot',title:'SLA das OTs — Prazo e Aderência',shortTitle:'SLA das OTs',description:'Configure prazos didáticos por prioridade e acompanhe ordens próximas ou além do SLA.',icon:'◷',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / SLA',accent:'green',entry:'../modules/sla-ot/index.js'}
  ,{id:'risco-atraso-manutencao',title:'Risco de Atraso das OTs',shortTitle:'Risco de Atraso',description:'Combine SLA, criticidade, dependências e prontidão para identificar ordens com maior risco.',icon:'⚠',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Risco',accent:'orange',entry:'../modules/risco-atraso-manutencao/index.js'}
  ,{id:'adiamento-manutencao',title:'Qual Manutenção Adiar? — Decisão de Conflito',shortTitle:'Qual Manutenção Adiar?',description:'Compare duas janelas concorrentes e recomende qual manter e qual reagendar em cenário didático.',icon:'↷',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Decisão',accent:'violet',entry:'../modules/adiamento-manutencao/index.js'}

  ,{id:'caminho-critico-ot',title:'Caminho Crítico das OTs',shortTitle:'Caminho Crítico',description:'Calcule a cadeia de predecessoras que determina a menor duração teórica do conjunto de OTs abertas.',icon:'⇢',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / CPM',accent:'violet',entry:'../modules/caminho-critico-ot/index.js'}
  ,{id:'capacidade-manutencao',title:'Capacidade de Oficina e Equipes por Turno',shortTitle:'Capacidade de Manutenção',description:'Compare horas disponíveis de equipes e boxes com a demanda planejada do backlog.',icon:'▦',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Capacidade',accent:'teal',entry:'../modules/capacidade-manutencao/index.js'}
  ,{id:'duracao-manutencao',title:'Duração Prevista × Realizada das OTs',shortTitle:'Prevista × Realizada',description:'Registre a duração realizada e meça desvio de horas e aderência ao planejamento.',icon:'≈',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Aderência',accent:'blue',entry:'../modules/duracao-manutencao/index.js'}
  ,{id:'causas-atraso-manutencao',title:'Causas de Atraso das OTs',shortTitle:'Causas de Atraso',description:'Classifique minutos perdidos por peças, equipe, acesso, diagnóstico, operação ou condição ambiental.',icon:'⚠',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Pareto',accent:'orange',entry:'../modules/causas-atraso-manutencao/index.js'}
  ,{id:'programacao-automatica-backlog',title:'Programação Automática do Backlog',shortTitle:'Programar Backlog',description:'Ordene automaticamente OTs prontas por prioridade e capacidade dentro de um horizonte didático.',icon:'✦',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Scheduling',accent:'gold',entry:'../modules/programacao-automatica-backlog/index.js'}
  ,{id:'nivelamento-recursos-manutencao',title:'Nivelamento de Recursos — Equipes, Peças e Janelas',shortTitle:'Nivelamento de Recursos',description:'Redistribua OTs para reduzir conflitos simultâneos de equipe, materiais e horizonte disponível.',icon:'⇄',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Nivelamento',accent:'green',entry:'../modules/nivelamento-recursos-manutencao/index.js'}

  ,{id:'matriz-especialidades-ot',title:'Matriz de Especialidades por OT',shortTitle:'Especialidades por OT',description:'Defina combinações de Mecânica, Elétrica e Automação necessárias para executar a mesma ordem.',icon:'✣',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Competências',accent:'violet',entry:'../modules/matriz-especialidades-ot/index.js'}
  ,{id:'disponibilidade-tecnicos',title:'Disponibilidade de Técnicos — Hora a Hora',shortTitle:'Técnicos Hora a Hora',description:'Visualize cobertura por especialidade, reservas e ausências ao longo do turno.',icon:'◷',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Pessoas',accent:'blue',entry:'../modules/disponibilidade-tecnicos/index.js'}
  ,{id:'lead-time-pecas',title:'Lead Time de Peças — Pedido e Chegada',shortTitle:'Lead Time de Peças',description:'Simule pedidos de reposição, ETA de materiais e entrada automática no estoque didático.',icon:'▧',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Materiais',accent:'gold',entry:'../modules/lead-time-pecas/index.js'}
  ,{id:'manutencao-paralela',title:'OTs em Paralelo — Técnicos e Especialidades',shortTitle:'OTs em Paralelo',description:'Programe ordens simultâneas quando técnicos, especialidades, materiais e predecessoras permitirem.',icon:'⇉',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Scheduling',accent:'green',entry:'../modules/manutencao-paralela/index.js'}
  ,{id:'emergencia-manutencao',title:'Emergência de Manutenção — Interrupção do Turno',shortTitle:'Emergência de Manutenção',description:'Injete uma falha inesperada que cria OT corretiva, retira o ativo e pressiona materiais e programação.',icon:'⚡',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Contingência',accent:'orange',entry:'../modules/emergencia-manutencao/index.js'}
  ,{id:'reprogramacao-turno',title:'Reprogramação Automática do Restante do Turno',shortTitle:'Reprogramação do Turno',description:'Compare o plano antes/depois de uma emergência e veja OTs movidas, adicionadas ou adiadas.',icon:'↻',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Replanejamento',accent:'teal',entry:'../modules/reprogramacao-turno/index.js'}

  ,{id:'progresso-ot',title:'Progresso das OTs — Execução Minuto a Minuto',shortTitle:'Progresso das OTs',description:'Acompanhe avanço percentual, tempo produtivo, pausas e conclusão automática durante a execução.',icon:'◔',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Execução',accent:'green',entry:'../modules/progresso-ot/index.js'}
  ,{id:'pausa-retomada-ot',title:'Pausa e Retomada da OT',shortTitle:'Pausa / Retomada',description:'Interrompa e retome uma intervenção separando tempo de calendário e tempo efetivamente produtivo.',icon:'Ⅱ',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Execução',accent:'blue',entry:'../modules/pausa-retomada-ot/index.js'}
  ,{id:'transferencia-tecnicos',title:'Transferência de Técnicos entre OTs',shortTitle:'Transferência de Técnicos',description:'Mova técnicos entre intervenções e observe quando a OT de origem perde a cobertura mínima necessária.',icon:'⇄',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Pessoas',accent:'violet',entry:'../modules/transferencia-tecnicos/index.js'}
  ,{id:'entrega-pecas-previsto-real',title:'Chegada de Peças — Previsto × Real',shortTitle:'Peças Previsto × Real',description:'Compare ETA planejado e recebimento efetivo das peças, medindo atrasos, antecipações e aderência.',icon:'⌚',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Materiais',accent:'gold',entry:'../modules/entrega-pecas-previsto-real/index.js'}
  ,{id:'despacho-tecnicos',title:'Despacho Automático do Próximo Técnico Disponível',shortTitle:'Despacho de Técnicos',description:'Selecione a próxima OT pronta por prioridade e encontre automaticamente técnicos compatíveis com suas especialidades.',icon:'➜',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Despacho',accent:'teal',entry:'../modules/despacho-tecnicos/index.js'}
  ,{id:'simulador-turno-manutencao',title:'Simulador de Turno — Minuto a Minuto',shortTitle:'Turno Minuto a Minuto',description:'Execute um turno de oito horas com despacho automático, progresso das OTs, materiais e emergências pseudoaleatórias controláveis.',icon:'◴',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Runtime',accent:'orange',entry:'../modules/simulador-turno-manutencao/index.js'}

  ,{id:'eta-restante-ot',title:'Tempo Restante da OT — ETA Dinâmico',shortTitle:'ETA Restante',description:'Estime o término considerando progresso, produtividade da equipe e fadiga didática.',icon:'⌛',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / ETA',accent:'blue',entry:'../modules/eta-restante-ot/index.js'}
  ,{id:'produtividade-tecnicos',title:'Produtividade por Técnico e Equipe',shortTitle:'Produtividade Técnicos',description:'Compare minutos produtivos, conclusões e índice didático individual e da equipe.',icon:'↗',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Pessoas',accent:'green',entry:'../modules/produtividade-tecnicos/index.js'}
  ,{id:'handover-turno',title:'Handover entre Turnos — Passagem de Serviço',shortTitle:'Handover',description:'Registre OTs em curso, pausas, materiais, emergência e observações para o próximo turno.',icon:'⇥',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Handover',accent:'violet',entry:'../modules/handover-turno/index.js'}
  ,{id:'fila-despacho-tempo-real',title:'Fila de Despacho — Tempo Real',shortTitle:'Fila de Despacho',description:'Ordene OTs abertas por prioridade e prontidão e visualize espera/bloqueios em tempo real.',icon:'☷',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Despacho',accent:'teal',entry:'../modules/fila-despacho-tempo-real/index.js'}
  ,{id:'interrupcoes-seguranca',title:'Interrupções — Segurança e Liberação Operacional',shortTitle:'Interrupções',description:'Pause e retome OTs por segurança, LOTO, permissão de trabalho ou liberação operacional.',icon:'⛔',category:'Equipamentos',level:'Avançado',status:'ready',type:'Manutenção / Segurança',accent:'orange',entry:'../modules/interrupcoes-seguranca/index.js'}
  ,{id:'horas-extras-manutencao',title:'Horas Extras — Extensão Controlada do Turno',shortTitle:'Horas Extras',description:'Autorize extensões didáticas de jornada para ampliar disponibilidade além do turno normal.',icon:'＋',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Jornada',accent:'gold',entry:'../modules/horas-extras-manutencao/index.js'}
  ,{id:'fadiga-didatica',title:'Fadiga Didática — Carga de Trabalho e Risco',shortTitle:'Fadiga Didática',description:'Relacione carga produtiva, transferências e horas extras a um índice educacional de fadiga.',icon:'◔',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Pessoas',accent:'orange',entry:'../modules/fadiga-didatica/index.js'}
  ,{id:'replay-turno',title:'Replay do Turno — Linha do Tempo Completa',shortTitle:'Replay do Turno',description:'Reveja despacho, progresso, peças, transferências, interrupções, emergências e handover.',icon:'↺',category:'Gestão',level:'Avançado',status:'ready',type:'Manutenção / Replay',accent:'violet',entry:'../modules/replay-turno/index.js'}


  ,{id:'tipos-caminhoes-carretas',title:'Tipos de Caminhões e Carretas — Showroom 3D',shortTitle:'Caminhões e Carretas',description:'Compare porta-contêiner 20/40, extensível, sider, refrigerada, graneleira, tanque, prancha e cegonha em 3D.',icon:'▰',category:'Transporte Rodoviário',level:'Inicial',status:'ready',type:'3D / Exploração',accent:'blue',entry:'../modules/tipos-caminhoes-carretas/index.js'}
  ,{id:'pre-gate-agendamento',title:'Pré-Gate — Agendamento, Booking e Documentos',shortTitle:'Pré-Gate',description:'Valide janela de chegada, booking e documentação antes de encaminhar o veículo ao Gate.',icon:'◷',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'Simulação / Decisão',accent:'teal',entry:'../modules/pre-gate-agendamento/index.js'}
  ,{id:'gate-ocr',title:'Gate OCR — Placa, Contêiner e Lacre',shortTitle:'Gate OCR',description:'Execute leitura OCR simulada e reconcilie placa, identificação do contêiner e lacre com o cadastro da operação.',icon:'◎',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'Simulação / OCR',accent:'orange',entry:'../modules/gate-ocr/index.js'}
  ,{id:'balanca-fluxo',title:'Balança Entrada/Saída + VGM',shortTitle:'Balança Completa',description:'Calcule a massa da unidade a partir do conjunto rodoviário e confronte com o VGM declarado.',icon:'⚖',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'Ferramenta / Simulação',accent:'gold',entry:'../modules/balanca-fluxo/index.js'}
  ,{id:'eir-interchange',title:'EIR — Recebimento e Entrega da Unidade',shortTitle:'EIR / Interchange',description:'Registre condição, lacre, veículo e ressalvas na troca de responsabilidade da unidade.',icon:'▤',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'Documento / Simulação',accent:'violet',entry:'../modules/eir-interchange/index.js'}
  ,{id:'jornada-importacao',title:'Jornada Animada de Importação — Navio ao Importador',shortTitle:'Importação Prática',description:'Percorra chegada, documentos, processo aduaneiro, liberação, Gate e entrega terrestre em sequência.',icon:'⇣',category:'Comércio Exterior',level:'Avançado',status:'ready',type:'Jornada / Processo',accent:'blue',entry:'../modules/jornada-importacao/index.js'}
  ,{id:'jornada-exportacao',title:'Jornada Animada de Exportação — Exportador ao Navio',shortTitle:'Exportação Prática',description:'Percorra booking, documentos, estufagem/lacre, VGM, processo aduaneiro, Gate, pátio e embarque.',icon:'⇡',category:'Comércio Exterior',level:'Avançado',status:'ready',type:'Jornada / Processo',accent:'green',entry:'../modules/jornada-exportacao/index.js'}
  ,{id:'mesa-despachante',title:'Mesa do Despachante Aduaneiro — Casos Didáticos',shortTitle:'Mesa do Despachante',description:'Analise divergências documentais e ocorrências para decidir entre prosseguir, reconciliar ou reter.',icon:'⌘',category:'Comércio Exterior',level:'Avançado',status:'ready',type:'Documentos / Decisão',accent:'violet',entry:'../modules/mesa-despachante/index.js'}
  ,{id:'documentos-vivos',title:'Documentos Vivos — Origem e Destino dos Dados',shortTitle:'Documentos Vivos',description:'Clique em campos de B/L, Invoice, Packing List, NF-e, CT-e, MDF-e e processo aduaneiro para rastrear os dados.',icon:'▥',category:'Documentação',level:'Operacional',status:'ready',type:'Ferramenta / Rastreabilidade',accent:'gold',entry:'../modules/documentos-vivos/index.js'}
  ,{id:'descarga-navio-patio',title:'Descarga Prática — Navio → Cais → Pátio',shortTitle:'Descarga Navio→Pátio',description:'Execute em 3D um ciclo simplificado de descarga, portêiner, veículo interno e entrega ao pátio.',icon:'⇣',category:'Navios',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'navy',entry:'../modules/descarga-navio-patio/index.js'}
  ,{id:'embarque-patio-navio',title:'Embarque Prático — Pátio → Cais → Navio',shortTitle:'Embarque Pátio→Navio',description:'Execute em 3D o fluxo de liberação do pátio, transferência ao cais, spreader e embarque no navio.',icon:'⇡',category:'Navios',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'teal',entry:'../modules/embarque-patio-navio/index.js'}
  ,{id:'destinos-logisticos',title:'Roteamento da Carga — Destinos e Modais',shortTitle:'Destinos e Modais',description:'Escolha rotas coerentes entre terminal, importador/exportador, ferrovia, rodovia e navio.',icon:'⌖',category:'Logística',level:'Operacional',status:'ready',type:'Simulação / Roteamento',accent:'green',entry:'../modules/destinos-logisticos/index.js'}
  ,{id:'missoes-portos-brasil',title:'Paranaguá, Santos e Itapoá — Missões Práticas',shortTitle:'Missões dos Portos',description:'Resolva casos didáticos ligados a Gate, Reefer, pátio, ferrovia e cais nas três áreas portuárias estudadas.',icon:'⚓',category:'Portos Reais',level:'Operacional',status:'ready',type:'Estudo de Caso / Missão',accent:'orange',entry:'../modules/missoes-portos-brasil/index.js'}


  ,{id:'anatomia-navio-3d',title:'Anatomia do Navio Porta-Contêineres — 3D',shortTitle:'Anatomia do Navio',description:'Explore proa, popa, bombordo, boreste, passadiço, hatch covers, convés e lashing bridges em 3D.',icon:'⚓',category:'Navios',level:'Inicial',status:'ready',type:'3D / Exploração',accent:'navy',entry:'../modules/anatomia-navio-3d/index.js'}
  ,{id:'tipos-navios-3d',title:'Tipos de Navios Comerciais — Comparador 3D',shortTitle:'Tipos de Navios',description:'Compare porta-contêineres, graneleiro, navio-tanque, Ro-Ro e multipropósito em modelos didáticos.',icon:'◒',category:'Navios',level:'Inicial',status:'ready',type:'3D / Comparador',accent:'blue',entry:'../modules/tipos-navios-3d/index.js'}
  ,{id:'tipos-terminais-portuarios',title:'Tipos de Terminais Portuários',shortTitle:'Tipos de Terminais',description:'Compare terminais de contêineres, granéis sólidos/líquidos, Ro-Ro e multipropósito.',icon:'▦',category:'Terminais',level:'Inicial',status:'ready',type:'Exploração / Comparação',accent:'teal',entry:'../modules/tipos-terminais-portuarios/index.js'}
  ,{id:'gate-in-out',title:'Gate In × Gate Out — Ciclo Completo',shortTitle:'Gate In / Gate Out',description:'Reconcilie placa, contêiner, lacre, janela e documentos na entrada e na saída do terminal.',icon:'⇄',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'Simulação / Gate',accent:'orange',entry:'../modules/gate-in-out/index.js'}
  ,{id:'depot-vazios',title:'Depot de Vazios — Estoque, Retirada e Devolução',shortTitle:'Depot de Vazios',description:'Gerencie reserva, retirada para estufagem e devolução de contêineres vazios por tipo.',icon:'▧',category:'Contêineres',level:'Operacional',status:'ready',type:'Simulação / Depot',accent:'gold',entry:'../modules/depot-vazios/index.js'}
  ,{id:'ciclo-container',title:'Ciclo do Contêiner — Retirada, Uso e Devolução',shortTitle:'Ciclo do Contêiner',description:'Acompanhe a unidade desde a reserva do vazio até estufagem, Gate, navio, desova e devolução.',icon:'↻',category:'Contêineres',level:'Operacional',status:'ready',type:'Jornada / Processo',accent:'green',entry:'../modules/ciclo-container/index.js'}
  ,{id:'estufagem-3d',title:'Estufagem 3D — Distribuição, Peso e Lacre',shortTitle:'Estufagem 3D',description:'Organize volumes dentro do contêiner, valide distribuição equilibrada e registre o lacre.',icon:'▣',category:'Carga e Armazenagem',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'orange',entry:'../modules/estufagem-3d/index.js'}
  ,{id:'desova-3d',title:'Desova 3D — Conferência e Retirada da Carga',shortTitle:'Desova 3D',description:'Confira lacre, volumes e exceções antes de retirar a carga da unidade em uma simulação 3D.',icon:'□',category:'Carga e Armazenagem',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'violet',entry:'../modules/desova-3d/index.js'}
  ,{id:'lashing-unlashing',title:'Lashing / Unlashing — Travamento da Unidade',shortTitle:'Lashing / Unlashing',description:'Treine quatro pontos de fixação para liberar viagem ou movimentação da unidade no navio.',icon:'⌗',category:'Navios',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'gold',entry:'../modules/lashing-unlashing/index.js'}
  ,{id:'missoes-importacao-regional',title:'Importação Completa — Paranaguá, Santos e Itapoá',shortTitle:'Importação Regional',description:'Execute jornadas educacionais completas do navio ao destino terrestre nos três portos estudados.',icon:'⇣',category:'Portos Reais',level:'Avançado',status:'ready',type:'Jornada / Importação',accent:'blue',entry:'../modules/missoes-importacao-regional/index.js'}
  ,{id:'missoes-exportacao-regional',title:'Exportação Completa — Paranaguá, Santos e Itapoá',shortTitle:'Exportação Regional',description:'Execute jornadas educacionais de exportação com Reefer, Gate/OCR, VGM, pátio, cais e navio.',icon:'⇡',category:'Portos Reais',level:'Avançado',status:'ready',type:'Jornada / Exportação',accent:'green',entry:'../modules/missoes-exportacao-regional/index.js'}

  ,{id:'gate-3d-operacional',title:'Gate 3D — Caminhão, Cancela, OCR e Semáforo',shortTitle:'Gate 3D Operacional',description:'Conduza visualmente um caminhão pelo portal OCR, reconcilie a unidade e libere a cancela do Gate.',icon:'🚚',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'orange',entry:'../modules/gate-3d-operacional/index.js'}
  ,{id:'balanca-rodoviaria-3d',title:'Balança Rodoviária 3D — Entrada, Tara e VGM',shortTitle:'Balança 3D',description:'Posicione o conjunto na plataforma, calcule a massa da unidade e confronte com o VGM declarado.',icon:'⚖',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'gold',entry:'../modules/balanca-rodoviaria-3d/index.js'}
  ,{id:'staging-caminhoes',title:'Staging de Caminhões — Fila, Vagas e Chamada',shortTitle:'Staging de Caminhões',description:'Organize caminhões antes do Gate em vagas de espera e faça a chamada operacional sem congestionar o acesso.',icon:'▤',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'Simulação / Fluxo',accent:'teal',entry:'../modules/staging-caminhoes/index.js'}
  ,{id:'depot-vazios-3d',title:'Depot 3D — Reach Stacker e Pilhas de Vazios',shortTitle:'Depot 3D',description:'Reserve, retire e devolva contêineres vazios em um depot visual com Reach Stacker e pilhas operacionais.',icon:'▧',category:'Contêineres',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'orange',entry:'../modules/depot-vazios-3d/index.js'}
  ,{id:'empilhadeira-cfs-3d',title:'Empilhadeira 3D — Estufagem e Desova no CFS',shortTitle:'Empilhadeira / CFS 3D',description:'Movimente carga paletizada entre armazém, empilhadeira e contêiner em operações de estufagem e desova.',icon:'▣',category:'Carga e Armazenagem',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'gold',entry:'../modules/empilhadeira-cfs-3d/index.js'}
  ,{id:'cfs-armazem',title:'CFS / Armazém — Recebimento, Armazenagem e Picking',shortTitle:'CFS / Armazém',description:'Gerencie lotes de carga geral em zonas com capacidade, armazenagem, picking e rastreabilidade de movimentações.',icon:'⌂',category:'Carga e Armazenagem',level:'Operacional',status:'ready',type:'Simulação / Armazém',accent:'blue',entry:'../modules/cfs-armazem/index.js'}
  ,{id:'cargas-especiais-operacao',title:'Cargas Especiais — OOG, DG, Reefer e Projeto',shortTitle:'Cargas Especiais',description:'Trate requisitos didáticos de cargas fora de gabarito, perigosas, refrigeradas e de projeto antes da liberação.',icon:'⚠',category:'Carga e Armazenagem',level:'Avançado',status:'ready',type:'Decisão / Planejamento',accent:'violet',entry:'../modules/cargas-especiais-operacao/index.js'}
  ,{id:'missao-unidade-ponta-a-ponta',title:'Uma Unidade, Uma Jornada — Operação Ponta a Ponta',shortTitle:'Missão Ponta a Ponta',description:'Acompanhe a mesma unidade em uma missão contínua de importação ou exportação através de Gate, CFS, pátio, cais e navio.',icon:'↝',category:'Operações',level:'Avançado',status:'ready',type:'Jornada Integrada',accent:'green',entry:'../modules/missao-unidade-ponta-a-ponta/index.js'}


  ,{id:'booking-cutoff-rollover',title:'Booking → Cut-off → No-show → Rollover',shortTitle:'Booking e Cut-off',description:'Simule janela de entrega, cut-off, no-show e rollover antes do embarque.',icon:'⏱',category:'Exportação',level:'Operacional',status:'ready',type:'Simulação / Booking',accent:'orange',entry:'../modules/booking-cutoff-rollover/index.js'}
  ,{id:'gate-multilane-3d',title:'Gate 3D — Múltiplas Lanes e Fila Animada',shortTitle:'Gate Multi-lane 3D',description:'Abra e feche lanes, processe caminhões e compare fila, retenções e capacidade visualmente.',icon:'▥',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'3D / Fluxo',accent:'teal',entry:'../modules/gate-multilane-3d/index.js'}
  ,{id:'inspecao-aduaneira-visual',title:'Inspeção Física / Aduaneira Visual',shortTitle:'Inspeção Aduaneira',description:'Execute conferência documental, scanner ou inspeção física em um cenário visual da unidade.',icon:'⌕',category:'Comércio Exterior',level:'Operacional',status:'ready',type:'3D / Conferência',accent:'violet',entry:'../modules/inspecao-aduaneira-visual/index.js'}
  ,{id:'open-top-flat-rack-oog-3d',title:'Open Top / Flat Rack / OOG — Planejamento 3D',shortTitle:'Open Top / Flat Rack / OOG',description:'Compare contêineres especiais e valide dimensões, rota, equipamento e lashing.',icon:'▱',category:'Contêineres',level:'Avançado',status:'ready',type:'3D / Planejamento',accent:'gold',entry:'../modules/open-top-flat-rack-oog-3d/index.js'}
  ,{id:'reefer-jornada-integrada',title:'Reefer Integrado — Da Estufagem ao Navio',shortTitle:'Jornada Reefer',description:'Preserve setpoint, energia e monitoramento do booking ao embarque em uma jornada contínua.',icon:'❄',category:'Carga e Armazenagem',level:'Avançado',status:'ready',type:'Jornada / Reefer',accent:'blue',entry:'../modules/reefer-jornada-integrada/index.js'}
  ,{id:'cfs-operacao-avancada',title:'CFS Avançado — Docas, Put-away e Picking',shortTitle:'CFS Avançado',description:'Gerencie docas, recebimento, put-away por zona e ordens de picking no armazém.',icon:'▦',category:'Carga e Armazenagem',level:'Operacional',status:'ready',type:'Simulação / CFS',accent:'green',entry:'../modules/cfs-operacao-avancada/index.js'}
  ,{id:'missao-paranagua-completa',title:'Paranaguá — Missão Ponta a Ponta',shortTitle:'Missão Paranaguá',description:'Jornada educacional integrada de importação ou exportação usando os laboratórios reais da plataforma.',icon:'⚓',category:'Portos Reais',level:'Avançado',status:'ready',type:'Jornada Regional',accent:'green',entry:'../modules/missao-paranagua-completa/index.js'}
  ,{id:'missao-santos-completa',title:'Santos — Missão Ponta a Ponta',shortTitle:'Missão Santos',description:'Jornada educacional integrada de importação ou exportação com foco em escala, Gate e intermodalidade.',icon:'⚓',category:'Portos Reais',level:'Avançado',status:'ready',type:'Jornada Regional',accent:'blue',entry:'../modules/missao-santos-completa/index.js'}
  ,{id:'missao-itapoa-completa',title:'Itapoá — Missão Ponta a Ponta',shortTitle:'Missão Itapoá',description:'Jornada educacional integrada de importação ou exportação com foco em OCR, Gate e Reefer.',icon:'⚓',category:'Portos Reais',level:'Avançado',status:'ready',type:'Jornada Regional',accent:'teal',entry:'../modules/missao-itapoa-completa/index.js'}

  ,{id:'configuracao-grafica',title:'Configuração Gráfica e Benchmark',shortTitle:'Gráficos e Benchmark',description:'Teste o dispositivo, veja a recomendação e escolha entre Mínimo, Médio, Alto, Ultra ou Automático.',icon:'◈',category:'Sistema',level:'Ferramenta',status:'ready',type:'Configuração / Desempenho',accent:'teal',entry:'../modules/configuracao-grafica/index.js'}


  ,{id:'chegada-navio-3d',title:'Chegada do Navio — Canal e Estação de Praticagem 3D',shortTitle:'Chegada do Navio',description:'Controle distância, velocidade e rumo na aproximação visual ao porto antes do embarque do prático.',icon:'⚓',category:'Navios',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'blue',entry:'../modules/chegada-navio-3d/index.js'}
  ,{id:'praticagem-3d',title:'Praticagem Didática — Embarque e Condução 3D',shortTitle:'Praticagem 3D',description:'Visualize a lancha de praticagem, o embarque do prático e a transição para a manobra assistida.',icon:'◈',category:'Navios',level:'Operacional',status:'ready',type:'3D / Exploração',accent:'teal',entry:'../modules/praticagem-3d/index.js'}
  ,{id:'rebocadores-atracacao-3d',title:'Rebocadores — Assistência à Atracação 3D',shortTitle:'Rebocadores 3D',description:'Compare assistência de proa e popa e designe rebocadores para a manobra didática.',icon:'↔',category:'Navios',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'orange',entry:'../modules/rebocadores-atracacao-3d/index.js'}
  ,{id:'manobra-giro-3d',title:'Manobra de Giro — Bacia de Evolução 3D',shortTitle:'Manobra de Giro',description:'Execute um giro visual com velocidade reduzida e apoio de rebocadores antes da aproximação ao berço.',icon:'↻',category:'Navios',level:'Avançado',status:'ready',type:'3D / Simulação',accent:'violet',entry:'../modules/manobra-giro-3d/index.js'}
  ,{id:'aproximacao-berco-3d',title:'Aproximação ao Berço — Velocidade e Alinhamento 3D',shortTitle:'Aproximação ao Berço',description:'Ajuste distância lateral, offset longitudinal e velocidade para colocar o navio em posição de amarração.',icon:'⇥',category:'Navios',level:'Avançado',status:'ready',type:'3D / Simulação',accent:'gold',entry:'../modules/aproximacao-berco-3d/index.js'}
  ,{id:'amarracao-navio-3d',title:'Amarração do Navio — Espias e Cabeços 3D',shortTitle:'Amarração 3D',description:'Distribua espias de proa, popa, través e springs e conclua a atracação em um berço visual.',icon:'⌁',category:'Navios',level:'Operacional',status:'ready',type:'3D / Simulação',accent:'green',entry:'../modules/amarracao-navio-3d/index.js'}
  ,{id:'missao-atracacao-completa',title:'Missão Completa — Chegada e Atracação do Navio',shortTitle:'Missão de Atracação',description:'Percorra aproximação, praticagem, rebocadores, giro, berço e amarração usando os laboratórios reais da plataforma.',icon:'◆',category:'Operações',level:'Avançado',status:'ready',type:'Jornada Integrada',accent:'navy',entry:'../modules/missao-atracacao-completa/index.js'}


  ,{id:'operacao-berco-integrada',title:'Operação de Berço — Navio, STS e Fluxo para o Pátio',shortTitle:'Operação de Berço',description:'Use o navio já atracado para preparar a descarga por Bay e conectar STS, transporte interno e pátio.',icon:'▰',category:'Operações',level:'Avançado',status:'ready',type:'3D / Operação Integrada',accent:'navy',entry:'../modules/operacao-berco-integrada/index.js'}
  ,{id:'ciclo-sts-descarga-3d',title:'Ciclo STS — Retirada da Unidade do Navio 3D',shortTitle:'Ciclo STS 3D',description:'Execute hoist, trolley e lowering para retirar uma unidade da Bay e entregá-la ao buffer de cais.',icon:'↧',category:'Equipamentos',level:'Operacional',status:'ready',type:'3D / Cais',accent:'orange',entry:'../modules/ciclo-sts-descarga-3d/index.js'}
  ,{id:'terminal-tractor-3d',title:'Terminal Tractor — Cais → Pátio 3D',shortTitle:'Terminal Tractor 3D',description:'Carregue a unidade sob o STS e execute o transporte interno até a faixa de transferência do RTG.',icon:'▰',category:'Operações',level:'Operacional',status:'ready',type:'3D / Transferência Interna',accent:'gold',entry:'../modules/terminal-tractor-3d/index.js'}
  ,{id:'fila-interna-tratores',title:'Fila Interna de Terminal Tractors',shortTitle:'Fila Interna de Tratores',description:'Gerencie veículos aguardando, chamados, carregados e em trânsito para evitar bloqueio no cais.',icon:'☷',category:'Operações',level:'Operacional',status:'ready',type:'Simulação / Fluxo Interno',accent:'teal',entry:'../modules/fila-interna-tratores/index.js'}
  ,{id:'transferencia-rtg-patio-3d',title:'Transferência RTG — Terminal Tractor → Slot de Pátio 3D',shortTitle:'RTG → Pátio 3D',description:'Faça o handoff com o RTG, reserve um endereço livre e posicione a unidade em Block/Bay/Row/Tier.',icon:'↥',category:'Pátio',level:'Operacional',status:'ready',type:'3D / Handoff',accent:'green',entry:'../modules/transferencia-rtg-patio-3d/index.js'}
  ,{id:'descarga-sequencial-bays',title:'Descarga Sequencial por Bay — Plano × Realizado',shortTitle:'Descarga por Bay',description:'Acompanhe movimentos planejados e realizados por Bay e produtividade observada da descarga.',icon:'▦',category:'Navios',level:'Avançado',status:'ready',type:'Planejamento / Produtividade',accent:'blue',entry:'../modules/descarga-sequencial-bays/index.js'}
  ,{id:'missao-navio-patio',title:'Missão Completa — Navio → STS → Terminal Tractor → RTG → Pátio',shortTitle:'Missão Navio → Pátio',description:'Percorra os laboratórios reais da descarga usando a mesma unidade até o endereço final no pátio.',icon:'◆',category:'Operações',level:'Avançado',status:'ready',type:'Jornada Integrada',accent:'green',entry:'../modules/missao-navio-patio/index.js'}

  ,{id:'liberacao-importacao-patio',title:'Importação — Inspeção e Liberação da Unidade no Pátio',shortTitle:'Liberação no Pátio',description:'Localize a unidade descarregada, confira integridade e prepare a liberação para retirada.',icon:'⌕',category:'Comércio Exterior',level:'Operacional',status:'ready',type:'Conferência / Importação',accent:'violet',entry:'../modules/liberacao-importacao-patio/index.js'}
  ,{id:'documentos-entrega-importacao',title:'Documentos da Liberação — Navio → Retirada',shortTitle:'Documentos da Liberação',description:'Rastreie B/L, Invoice, Packing List e processo aduaneiro antes de liberar a unidade para retirada.',icon:'▤',category:'Comércio Exterior',level:'Operacional',status:'ready',type:'Documentos / Conferência',accent:'blue',entry:'../modules/documentos-entrega-importacao/index.js'}
  ,{id:'agendamento-retirada-importacao',title:'Agendamento de Retirada — Caminhão e Janela',shortTitle:'Agendamento de Retirada',description:'Vincule transportadora, placa, motorista e janela à unidade já liberada no terminal.',icon:'◷',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'Agendamento / Fluxo',accent:'teal',entry:'../modules/agendamento-retirada-importacao/index.js'}
  ,{id:'retirada-patio-caminhao-3d',title:'Retirada do Pátio — Reach Stacker / RTG → Caminhão 3D',shortTitle:'Pátio → Caminhão 3D',description:'Retire a mesma unidade do slot e transfira visualmente para o caminhão rodoviário agendado.',icon:'↥',category:'Pátio',level:'Operacional',status:'ready',type:'3D / Retirada',accent:'orange',entry:'../modules/retirada-patio-caminhao-3d/index.js'}
  ,{id:'gate-out-importacao-3d',title:'Gate Out Importação 3D — EIR, OCR e Liberação',shortTitle:'Gate Out Importação',description:'Registre EIR de saída, reconcilie a unidade e libere o caminhão pela cancela do terminal.',icon:'⇥',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'3D / Gate Out',accent:'green',entry:'../modules/gate-out-importacao-3d/index.js'}
  ,{id:'viagem-rodoviaria-importacao-3d',title:'Viagem Rodoviária — Porto → Destino 3D',shortTitle:'Porto → Destino 3D',description:'Acompanhe a mesma unidade pela rodovia após o Gate Out até o importador/destino final.',icon:'▰',category:'Logística',level:'Operacional',status:'ready',type:'3D / Transporte',accent:'gold',entry:'../modules/viagem-rodoviaria-importacao-3d/index.js'}
  ,{id:'recebimento-importador',title:'Recebimento no Importador — Conferência e Entrega',shortTitle:'Recebimento Importador',description:'Feche a rastreabilidade conferindo lacre, documentos, condição e recebedor no destino.',icon:'⌂',category:'Logística',level:'Operacional',status:'ready',type:'3D / Recebimento',accent:'blue',entry:'../modules/recebimento-importador/index.js'}
  ,{id:'missao-importacao-navio-destino',title:'Missão Completa — Navio → Terminal → Gate Out → Destino',shortTitle:'Missão Importação Completa',description:'Continue da descarga da v0.34 e leve a mesma unidade do pátio ao importador pelos laboratórios reais.',icon:'◆',category:'Operações',level:'Avançado',status:'ready',type:'Jornada Integrada',accent:'green',entry:'../modules/missao-importacao-navio-destino/index.js'}


  ,{id:'preparacao-exportador-documentos',title:'Exportador — Preparação, NF-e, CT-e e MDF-e',shortTitle:'Exportador e Documentos',description:'Prepare a carga e confira documentos fiscais, terrestres e comerciais do cenário de exportação.',icon:'▤',category:'Comércio Exterior',level:'Operacional',status:'ready',type:'Documentos / Origem',accent:'blue',entry:'../modules/preparacao-exportador-documentos/index.js'}
  ,{id:'coleta-exportador-3d',title:'Coleta Rodoviária 3D — Exportador → Operação de Exportação',shortTitle:'Coleta Exportador 3D',description:'Mobilize caminhão e condutor em uma rota terrestre didática antes da retirada do vazio e estufagem.',icon:'▰',category:'Logística',level:'Operacional',status:'ready',type:'3D / Transporte',accent:'gold',entry:'../modules/coleta-exportador-3d/index.js'}
  ,{id:'depot-vazio-exportacao-3d',title:'Retirada do Vazio 3D — Depot → Exportador',shortTitle:'Vazio para Exportação',description:'Reserve o tipo de contêiner, confira estoque e retire a unidade vazia para estufagem.',icon:'□',category:'Contêineres',level:'Operacional',status:'ready',type:'3D / Depot',accent:'teal',entry:'../modules/depot-vazio-exportacao-3d/index.js'}
  ,{id:'estufagem-lacre-vgm-exportacao-3d',title:'Estufagem, Lacre e VGM 3D — Exportação',shortTitle:'Estufagem + Lacre + VGM',description:'Distribua a carga, aplique o lacre e valide o VGM antes do Pré-Gate.',icon:'▣',category:'Operações',level:'Operacional',status:'ready',type:'3D / Exportação',accent:'orange',entry:'../modules/estufagem-lacre-vgm-exportacao-3d/index.js'}
  ,{id:'pre-gate-gate-in-exportacao-3d',title:'Pré-Gate + Gate In 3D — Exportação',shortTitle:'Gate In Exportação',description:'Valide booking, documentos e agendamento e faça a entrada física da unidade no terminal.',icon:'⇥',category:'Gate e Acessos',level:'Operacional',status:'ready',type:'3D / Gate In',accent:'green',entry:'../modules/pre-gate-gate-in-exportacao-3d/index.js'}
  ,{id:'patio-exportacao-cutoff',title:'Pátio de Exportação — Cut-off, No-show e Rollover',shortTitle:'Pátio + Cut-off',description:'Posicione a unidade no pátio, avance o relógio da escala e trate perda de cut-off com rollover.',icon:'◷',category:'Pátio',level:'Avançado',status:'ready',type:'Planejamento / Exportação',accent:'violet',entry:'../modules/patio-exportacao-cutoff/index.js'}
  ,{id:'embarque-exportacao-sts-3d',title:'Embarque de Exportação 3D — Pátio → STS → Navio',shortTitle:'Exportação STS → Navio',description:'Retire a unidade elegível do pátio, execute o ciclo de embarque e posicione-a na Bay do navio.',icon:'↥',category:'Navios',level:'Operacional',status:'ready',type:'3D / Embarque',accent:'navy',entry:'../modules/embarque-exportacao-sts-3d/index.js'}
  ,{id:'missao-exportacao-completa-v036',title:'Missão Completa — Exportador → Terminal → Navio',shortTitle:'Missão Exportação Completa',description:'Percorra a exportação ponta a ponta usando a mesma unidade e documentos do exportador ao navio.',icon:'◆',category:'Operações',level:'Avançado',status:'ready',type:'Jornada Integrada',accent:'green',entry:'../modules/missao-exportacao-completa-v036/index.js'}


  ,{id:'plano-carga-navio-exportacao',title:'Plano de Carga — Bay / Row / Tier',shortTitle:'Plano de Carga do Navio',description:'Monte posições didáticas a bordo e acompanhe plano × realizado antes do fechamento da escala.',icon:'▦',category:'Navios',level:'Avançado',status:'ready',type:'Planejamento / Exportação',accent:'blue',entry:'../modules/plano-carga-navio-exportacao/index.js'}
  ,{id:'sequencia-tractor-sts-exportacao',title:'Sequência Terminal Tractor → STS → Navio 3D',shortTitle:'Tractor → STS 3D',description:'Alimente o STS com Terminal Tractors e execute os movimentos restantes do plano de carga.',icon:'⇧',category:'Operações',level:'Operacional',status:'ready',type:'3D / Cais',accent:'orange',entry:'../modules/sequencia-tractor-sts-exportacao/index.js'}
  ,{id:'hatch-covers-operacao-3d',title:'Hatch Covers — Fechamento dos Porões 3D',shortTitle:'Hatch Covers 3D',description:'Feche os hatch covers após a conclusão dos movimentos previstos no navio.',icon:'▰',category:'Navios',level:'Operacional',status:'ready',type:'3D / Convés',accent:'teal',entry:'../modules/hatch-covers-operacao-3d/index.js'}
  ,{id:'lashing-final-navio-3d',title:'Lashing Final — Conferência de Travamento 3D',shortTitle:'Lashing Final 3D',description:'Conclua os setores de travamento e prepare a carga conteinerizada para a viagem.',icon:'⌁',category:'Navios',level:'Operacional',status:'ready',type:'3D / Segurança da Carga',accent:'gold',entry:'../modules/lashing-final-navio-3d/index.js'}
  ,{id:'conferencia-manifesto-embarque',title:'Manifesto de Embarque — Plano × Realizado',shortTitle:'Manifesto de Embarque',description:'Reconcilie quantidades planejadas, embarcadas e exceções antes do fechamento operacional.',icon:'▤',category:'Comércio Exterior',level:'Operacional',status:'ready',type:'Documentos / Conferência',accent:'violet',entry:'../modules/conferencia-manifesto-embarque/index.js'}
  ,{id:'fechamento-operacao-navio',title:'Fechamento da Operação do Navio',shortTitle:'Fechamento do Navio',description:'Valide carga, manifesto, hatch covers e lashing e libere o navio para saída do berço.',icon:'✓',category:'Operações',level:'Avançado',status:'ready',type:'Checklist / Encerramento',accent:'green',entry:'../modules/fechamento-operacao-navio/index.js'}
  ,{id:'desatracacao-saida-navio-3d',title:'Desatracação e Saída do Porto 3D',shortTitle:'Saída do Navio 3D',description:'Libere espias, use rebocadores no cenário didático e afaste o navio até o canal de saída.',icon:'⇢',category:'Navios',level:'Avançado',status:'ready',type:'3D / Manobra',accent:'navy',entry:'../modules/desatracacao-saida-navio-3d/index.js'}
  ,{id:'missao-navio-saida-completa',title:'Missão Completa — Embarque → Fechamento → Saída',shortTitle:'Missão Navio → Saída',description:'Percorra plano de carga, lashing, manifesto, fechamento e desatracação usando os laboratórios reais.',icon:'◆',category:'Operações',level:'Avançado',status:'ready',type:'Jornada Integrada',accent:'green',entry:'../modules/missao-navio-saida-completa/index.js'}

  ,{id:'desembarque-pratico-saida-3d',title:'Desembarque do Prático — Saída 3D',shortTitle:'Desembarque do Prático',description:'Transfira o prático do navio para a lancha após a desatracação no cenário educacional.',icon:'◇',category:'Navios',level:'Operacional',status:'ready',type:'3D / Praticagem',accent:'teal',entry:'../modules/desembarque-pratico-saida-3d/index.js'}
  ,{id:'canal-saida-navio-3d',title:'Canal de Saída — Navegação Outbound 3D',shortTitle:'Canal de Saída 3D',description:'Conduza o navio pelo canal de saída até a transição para a passagem marítima.',icon:'⇢',category:'Navios',level:'Operacional',status:'ready',type:'3D / Navegação',accent:'navy',entry:'../modules/canal-saida-navio-3d/index.js'}
  ,{id:'eta-proximo-porto',title:'Próximo Porto — Distância, Velocidade e ETA',shortTitle:'ETA Próximo Porto',description:'Calcule ETA didático usando distância restante e velocidade média de viagem.',icon:'◷',category:'Navios',level:'Operacional',status:'ready',type:'Planejamento / ETA',accent:'blue',entry:'../modules/eta-proximo-porto/index.js'}
  ,{id:'fechamento-escala-portuaria',title:'Fechamento Formal da Escala Portuária',shortTitle:'Fechar Escala',description:'Valide saída, prático, canal e próximo destino e encerre formalmente o port call.',icon:'✓',category:'Operações',level:'Avançado',status:'ready',type:'Checklist / Port Call',accent:'green',entry:'../modules/fechamento-escala-portuaria/index.js'}
  ,{id:'port-call-report',title:'Port Call Report — Relatório Completo da Escala',shortTitle:'Port Call Report',description:'Consolide chegada, atracação, carga, fechamento, saída e próximo porto em um relatório didático.',icon:'▤',category:'Gestão',level:'Avançado',status:'ready',type:'Relatório / Escala',accent:'violet',entry:'../modules/port-call-report/index.js'}
  ,{id:'indicadores-escala-navio',title:'Indicadores da Escala — Tempo, Produtividade e Aderência',shortTitle:'KPIs da Escala',description:'Analise tempo de permanência, variações ETB/ATB e ETD/ATD, produtividade e aderência do plano.',icon:'▥',category:'Gestão',level:'Avançado',status:'ready',type:'Dashboard / KPI',accent:'gold',entry:'../modules/indicadores-escala-navio/index.js'}
  ,{id:'replay-escala-completa',title:'Replay da Escala — Chegada → Atracação → Operação → Saída',shortTitle:'Replay da Escala',description:'Revise visualmente os marcos da escala completa do canal de entrada até a passagem marítima.',icon:'▶',category:'Operações',level:'Avançado',status:'ready',type:'Replay / Jornada',accent:'green',entry:'../modules/replay-escala-completa/index.js'}

  ,{id:'historico-escalas-portuarias',title:'Histórico de Escalas Portuárias',shortTitle:'Histórico de Escalas',description:'Arquive port calls concluídos e mantenha cenários demonstrativos identificados para análise comparativa.',icon:'▤',category:'Gestão',level:'Avançado',status:'ready',type:'Histórico / Port Call',accent:'blue',entry:'../modules/historico-escalas-portuarias/index.js'}
  ,{id:'comparacao-escalas-navios',title:'Comparação entre Escalas e Navios',shortTitle:'Comparar Escalas',description:'Compare turnaround, espera, permanência, produtividade, aderência e atrasos entre duas escalas.',icon:'⇄',category:'Gestão',level:'Avançado',status:'ready',type:'Comparação / Analytics',accent:'violet',entry:'../modules/comparacao-escalas-navios/index.js'}
  ,{id:'turnaround-time-escala',title:'Turnaround Time — Chegada → Saída',shortTitle:'Turnaround Time',description:'Analise o tempo total da escala e decomponha espera, permanência no berço e atrasos.',icon:'◷',category:'Gestão',level:'Avançado',status:'ready',type:'KPI / Tempo',accent:'gold',entry:'../modules/turnaround-time-escala/index.js'}
  ,{id:'tempo-por-fase-port-call',title:'Tempo por Fase do Port Call',shortTitle:'Tempo por Fase',description:'Decomponha o turnaround em espera, manobra, carga, tempo de berço, fechamento e saída.',icon:'▥',category:'Gestão',level:'Avançado',status:'ready',type:'Process Analytics',accent:'teal',entry:'../modules/tempo-por-fase-port-call/index.js'}
  ,{id:'espera-por-berco',title:'Espera por Berço — ETA, ETB e ATB',shortTitle:'Espera por Berço',description:'Compare tempo de espera antes da atracação, variação ETB→ATB e pressão sobre os berços.',icon:'⚓',category:'Navios',level:'Operacional',status:'ready',type:'Fundeio / Berço',accent:'navy',entry:'../modules/espera-por-berco/index.js'}
  ,{id:'eventos-port-call',title:'Eventos Meteorológicos e Operacionais da Escala',shortTitle:'Eventos Port Call',description:'Injete eventos didáticos de vento, visibilidade, chuva, equipamento, pátio, Gate e documentação e associe atrasos à escala.',icon:'⚠',category:'Operações',level:'Avançado',status:'ready',type:'Eventos / Exceções',accent:'orange',entry:'../modules/eventos-port-call/index.js'}
  ,{id:'dashboard-executivo-port-calls',title:'Dashboard Executivo de Port Calls',shortTitle:'Port Calls Executivo',description:'Consolide turnaround, espera, produtividade, aderência e impacto de eventos em uma visão executiva.',icon:'▦',category:'Gestão',level:'Avançado',status:'ready',type:'Dashboard / Port Calls',accent:'green',entry:'../modules/dashboard-executivo-port-calls/index.js'}

];
