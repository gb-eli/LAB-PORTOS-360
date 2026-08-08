# Changelog

## 0.39.0 — 08/08/2026

### Adicionado
- `port-call-history.js` para histórico persistente de escalas concluídas e cenários DEMO claramente identificados.
- `port-call-events.js` para eventos meteorológicos/operacionais didáticos e impacto em minutos por escala.
- `port-call-analytics.js` para turnaround, espera por berço, produtividade, tempo por fase, comparação e visão executiva.
- 7 laboratórios: histórico, comparação, turnaround, fases, espera por berço, eventos e dashboard executivo.

### Alterado
- Central de Operações passa para estado vivo v0.39 e mostra indicadores de múltiplos Port Calls.
- Tela Sobre e Home passam a destacar Port Call Analytics.

### Integração
- Escalas reais do usuário só entram no histórico depois do fechamento formal do port call.
- Cenários DEMO são sintéticos, rotulados e removíveis.
- Eventos podem ser vinculados a uma escala para separar atraso meteorológico e operacional.


## 0.38.0 — 08/08/2026

### Adicionado
- `port-call-completion.js` para desembarque do prático, canal outbound, próximo porto/ETA, fechamento formal, Port Call Report e KPIs.
- `port-call-replay.js` para reconstrução de 18 marcos da escala completa.
- `outbound-voyage-scene-kit.js` para lancha de praticagem, canal de saída e passagem marítima.
- 7 laboratórios: desembarque do prático, canal outbound, ETA do próximo porto, fechamento da escala, Port Call Report, indicadores e replay completo.

### Alterado
- `PracticalOperationState` migra para `practical-operation:v038`, preservando v037/v036/v035/v031/v030/v028.
- A Central de Operações passa a mostrar port call, report e replay.
- O fechamento formal tenta registrar ATD no `PortCallTimeline` didático.

### Integração
- A escala só fecha depois de saída inicial, desembarque do prático, canal outbound e ETA do próximo porto.
- Todos os novos ambientes 3D usam Automático/Mínimo/Médio/Alto/Ultra.

## 0.37.0 — 08/08/2026

### Adicionado
- `vessel-departure-operation.js` para plano de carga, fechamento operacional e saída persistente do navio.
- `vessel-departure-scene-kit.js` para cais/plano de carga, hatch covers, lashing, manifesto e desatracação.
- 8 laboratórios: plano Bay/Row/Tier, sequência Tractor→STS, hatch covers, lashing final, manifesto, fechamento, desatracação e missão completa.

### Alterado
- `PracticalOperationState` migra para `practical-operation:v037`, preservando v036/v035/v031/v030/v028.
- A unidade embarcada pela v0.36 passa a ser a referência ativa do plano do navio.
- Cada movimento adicional de carga registra produtividade em `QuayProductivity`.

### Integração
- O navio só pode ser liberado para desatracação depois de carga concluída, hatch covers fechados, lashing final e manifesto reconciliado.
- Todos os novos ambientes 3D usam Automático/Mínimo/Médio/Alto/Ultra.

## 0.36.0 — 08/08/2026

### Adicionado
- `export-shipment-operation.js` para a jornada persistente da exportação do exportador ao navio.
- `export-shipment-scene-kit.js` com cenas procedurais de origem, rodovia, estufagem, Gate, pátio e embarque.
- 8 laboratórios: origem/documentos, coleta rodoviária, depot/vazio, estufagem+lacre+VGM, Pré-Gate/Gate In, pátio+cut-off/rollover, embarque STS→Navio e missão completa.

### Alterado
- `PracticalOperationState` migra para `practical-operation:v036`, preservando v035/v031/v030/v028 e adicionando etapas de exportação.
- Gate In, BookingCutoff, EmptyDepot, YardOccupancyState e QuayProductivity são reutilizados pela nova jornada.
- O pátio de exportação ocupa um slot real e o embarque libera o endereço quando a unidade segue ao navio.

### Integração
- A mesma unidade e o mesmo histórico documental percorrem a cadeia completa até o embarque.
- Todos os novos ambientes 3D usam Automático/Mínimo/Médio/Alto/Ultra.

## 0.35.0 — 08/08/2026

### Adicionado
- `import-delivery-operation.js` para a cadeia persistente de importação do pátio ao importador.
- `road-delivery-scene-kit.js` para ambientes procedurais de retirada, rodovia e destino.
- 8 laboratórios: inspeção/liberação no pátio, documentos da liberação, agendamento de retirada, retirada pátio→caminhão 3D, Gate Out 3D, viagem rodoviária 3D, recebimento no importador e missão completa Navio→Destino.

### Alterado
- `PracticalOperationState` migra para `practical-operation:v035`, preservando estados anteriores e adicionando `pickupAppointment`, `pickupLoaded`, `gateOut`, `roadTransit` e `importerReceipt`.
- `GateCycle` registra Gate Out separadamente da entrega final.
- O carregamento da unidade no caminhão libera o slot correspondente no `YardOccupancyState`.
- Home/Sobre passam a destacar a jornada de importação do pátio ao destino.

### Integração
- A mesma unidade descarregada pela v0.34 permanece identificada durante inspeção, liberação, agendamento, retirada, EIR/Gate Out, rodovia e recebimento final.
- Todos os novos ambientes 3D usam a configuração gráfica Automático/Mínimo/Médio/Alto/Ultra.

# CHANGELOG

## 0.34.0 — 08/08/2026

### Operação de cais — STS → Terminal Tractor → RTG → Pátio
- Catálogo ampliado de 149 para **156 laboratórios funcionais**.
- Novo `quay-yard-operation.js` com estado persistente da descarga entre navio, cais, transporte interno, RTG e slot de pátio.
- Novo `quay-yard-scene-kit.js` com Terminal Tractor procedural e composição compartilhada de cais/pátio.
- Novos laboratórios: Operação de Berço, Ciclo STS 3D, Terminal Tractor 3D, Fila Interna de Tratores, Transferência RTG/Pátio 3D, Descarga Sequencial por Bay e Missão Navio→Pátio.
- Posicionamento final reserva/ocupa o `YardOccupancyState` em Block/Bay/Row/Tier.
- `PracticalOperationState` recebe localização e endereço de pátio da mesma unidade.
- Cada ciclo concluído registra movimento/minutos em `QuayProductivity`.
- Todos os novos ambientes respeitam Automático/Mínimo/Médio/Alto/Ultra.
- Preservados todos os estados e laboratórios anteriores.

## 0.33.0 — 08/08/2026

### Chegada do navio e atracação 3D
- Catálogo ampliado de 142 para **149 laboratórios funcionais**.
- Novo `port-arrival-operation.js` com estado persistente para aproximação, prático, rebocadores, giro, berço e amarração.
- Novo `nautical-scene-kit.js` com lancha de praticagem, rebocadores, berço, defensas, cabeços, boias e espias procedurais.
- Novos laboratórios: Chegada do Navio 3D, Praticagem 3D, Rebocadores 3D, Manobra de Giro 3D, Aproximação ao Berço 3D, Amarração 3D e Missão Completa de Atracação.
- Missão integrada abre o laboratório real da próxima etapa e preserva o estado entre rotas.
- `PracticalOperationState` recebe localização/registro de navio atracado quando a amarração é concluída.
- Todos os novos ambientes respeitam Automático/Mínimo/Médio/Alto/Ultra.
- Preservados todos os laboratórios e estados anteriores.

## 0.32.0 — 08/08/2026

### Renderização adaptativa e realismo progressivo
- Catálogo ampliado de 141 para **142 laboratórios funcionais**.
- Novo laboratório **Configuração Gráfica e Benchmark**.
- `quality-manager.js` migrado para nomes legíveis: Automático, Mínimo, Médio, Alto e Ultra, mantendo Q1–Q4 apenas como compatibilidade interna.
- Novo `graphics-benchmark.js` com diagnóstico local de CPU, memória estimada, núcleos, tela, WebGL/GPU e recomendação persistente.
- Novo `graphics-settings-ui.js` com painel global, recomendação, seleção manual e rerun do benchmark.
- `three-engine.js` passou a escalar pixel ratio, antialias, sombras, shadow map, IBL, anisotropia e geometria progressiva por nível.
- `port-scene-kit.js` recebeu mais detalhes progressivos em cavalo mecânico, contêineres, Reach Stacker e navio.
- `road-vehicle-kit.js` ganhou maior realismo para cavalos, chassi porta-contêiner, sider/reefer, graneleira, tanque, lowbed e cegonha.
- `visual-port-practical-kit.js` ganhou detalhes progressivos em Gate/OCR, cancela, semáforo, balança, empilhadeira e armazém.
- Seleção manual nunca é substituída pelo benchmark; apenas o modo Automático acompanha a recomendação.
- Preservados todos os laboratórios e estados anteriores.

## 0.30.0 — 08/08/2026

### Operação Portuária Prática III — Ambientes conectados
- Catálogo ampliado de 124 para **132 laboratórios funcionais**.
- `practical-operation-state.js` migrado para `practical-operation:v030`, preservando o estado v028 e ampliando a jornada compartilhada.
- Novo `truck-staging.js` para fila, vagas de staging, chamada e liberação de caminhões.
- Novo `cfs-warehouse.js` para recebimento, armazenagem, picking e ocupação por zona.
- Novo `special-cargo-process.js` para cenários didáticos de carga geral, Reefer, OOG, DG e carga de projeto.
- Novo `continuous-port-mission.js` para jornada de importação/exportação ponta a ponta com a mesma unidade.
- Novo `visual-port-practical-kit.js` com portal de Gate, cancela, semáforo, balança, empilhadeira e shell de armazém procedurais.
- Novos laboratórios: Gate 3D, Balança Rodoviária 3D, Staging de Caminhões, Depot 3D, Empilhadeira/CFS 3D, CFS/Armazém, Cargas Especiais e Missão Ponta a Ponta.
- Preservados todos os 124 laboratórios anteriores.

## 0.29.0 — 08/08/2026

### Operação Portuária Prática II
- Catálogo ampliado de 113 para 124 laboratórios funcionais.
- Novo `vessel-anatomy-kit.js` para anatomia e tipos de navios 3D procedurais.
- Novo `gate-cycle.js` para ciclo Gate In × Gate Out.
- Novo `empty-depot.js` para estoque/reserva/retirada/devolução de vazios.
- Novo `container-cycle.js` para ciclo completo da unidade.
- Novo `cargo-handling-process.js` para estufagem, desova e lashing/unlashing.
- Novo `regional-trade-missions.js` com importação e exportação educacionais em Paranaguá, Santos e Itapoá.
- Novos laboratórios: Anatomia do Navio 3D, Tipos de Navios 3D, Tipos de Terminais, Gate In/Out, Depot de Vazios, Ciclo do Contêiner, Estufagem 3D, Desova 3D, Lashing/Unlashing, Importação Regional e Exportação Regional.
- Preservados os 113 laboratórios anteriores e todos os serviços de operação, gestão e manutenção.

## 0.28.0 — 08/08/2026

### Operação Portuária Prática
- Catálogo ampliado de 100 para 113 laboratórios funcionais.
- Novo estado compartilhado `practical-operation-state.js` para acompanhar a mesma unidade ao longo do processo.
- Novo `road-vehicle-kit.js` com showroom 3D de porta-contêiner 20/40, extensível, sider, refrigerada, graneleira, tanque, prancha e cegonha.
- Novo `customs-process.js` para jornadas ordenadas de importação e exportação.
- Novo `live-documents.js` para rastreabilidade de campos entre documentos e operações.
- Novo `regional-port-missions.js` com missões didáticas de Paranaguá, Santos e Itapoá.
- Novos laboratórios: Caminhões/Carretas 3D, Pré-Gate, Gate OCR, Balança Completa, EIR, Importação, Exportação, Mesa do Despachante, Documentos Vivos, Descarga Navio→Pátio, Embarque Pátio→Navio, Destinos/Modais e Missões dos Portos.
- Home e arquitetura atualizadas para priorizar operação portuária prática.
- Mantidas todas as 100 experiências anteriores, incluindo manutenção, Central de Operações, 3D/LOD e evidências.

# Changelog — LAB PORTOS 360

## 0.27.0 — 08/08/2026

- Plataforma ampliada de 92 para **100 laboratórios funcionais**.
- Criado `maintenance-eta.js` para ETA restante dinâmico das OTs.
- Criado `technician-productivity.js` para produtividade didática individual/equipe.
- Criado `shift-handover.js` para passagem estruturada entre turnos.
- Criado `dispatch-queue.js` para fila de despacho em tempo real.
- Criado `maintenance-interruptions.js` para pausas por segurança, LOTO e liberação operacional.
- Criado `overtime-manager.js`; horas extras passam a ampliar de fato a disponibilidade dos técnicos.
- Criado `fatigue-model.js` para carga de trabalho/fadiga estritamente didática.
- Criado `shift-replay.js` para replay persistente da linha do tempo do turno.
- `technician-availability.js` ganhou suporte a janelas autorizadas de hora extra.
- Terminal Live State migrou de v026 para v027, preservando os dados anteriores.
- Central de Operações e alarmes ampliados para ETA, handover, fila de despacho, interrupções, horas extras, fadiga e replay.

# CHANGELOG

## 0.26.0 — 08/08/2026

- Plataforma ampliada de 86 para 92 laboratórios funcionais.
- Novo `maintenance-execution-progress.js` para progresso percentual, tempo produtivo, pausas e conclusão automática das OTs.
- Novo `technician-transfer.js` para transferência de técnicos entre intervenções e rechecagem de cobertura mínima.
- Novo `material-delivery-performance.js` para ETA previsto × chegada real das peças e aderência de recebimento.
- Novo `technician-dispatcher.js` para despacho automático da próxima OT compatível com prioridade, materiais, dependências e técnicos disponíveis.
- Novo `maintenance-shift-runtime.js` para simulação minuto a minuto de um turno de 8 h com despacho, progresso e emergências pseudoaleatórias controláveis.
- `material-lead-time.js` migrado para v026, preservando v025 e adicionando ETA real ajustável.
- `maintenance-readiness.js` passou a aceitar reservas granulares de técnicos como cobertura válida de execução.
- `terminal-live-state.js` migrado para v026 preservando v025.
- Central de Operações e alarmes ampliados com progresso, pausas, transferências, aderência de peças, despacho e runtime do turno.
- Mantidos 36 GLBs e compatibilidade GitHub Pages sem build.

## 0.25.0 — 08/08/2026

- Plataforma ampliada de 80 para 86 laboratórios funcionais.
- Novo `maintenance-skill-matrix.js` para múltiplas especialidades e quantidade de técnicos por OT.
- Novo `technician-availability.js` para disponibilidade individual hora a hora, ausências e reservas.
- Novo `material-lead-time.js` para pedidos, ETA e recebimento automático de peças no estoque didático.
- Novo `maintenance-parallel-execution.js` para scheduling paralelo com técnicos, materiais, dependências e duração.
- Novo `maintenance-emergency.js` para falha emergencial, OT corretiva prioritária e pressão sobre materiais/programação.
- Novo `maintenance-rescheduler.js` para reprogramar automaticamente o restante do turno após emergência.
- `maintenance-readiness.js` ajustado para permitir início controlado de OT corretiva em equipamento em falha.
- `terminal-live-state.js` migrado para v025 preservando v024.
- Central de Operações e alarmes ampliados com especialidades, técnicos, lead time, paralelismo, emergência e reprogramação.
- Mantidos 36 GLBs e compatibilidade GitHub Pages sem build.

## 0.24.0 — 08/08/2026

- Plataforma ampliada de 74 para 80 laboratórios funcionais.
- Novo `maintenance-critical-path.js` para caminho crítico, duração planejada e predecessoras.
- Novo `maintenance-capacity.js` para capacidade didática de oficinas/equipes por turno.
- Novo `maintenance-duration-performance.js` para previsto × realizado das OTs.
- Novo `maintenance-delay-causes.js` para classificação e Pareto de causas de atraso.
- Novo `maintenance-auto-scheduler.js` para programação automática do backlog por prioridade e prontidão.
- Novo `maintenance-resource-leveler.js` para nivelamento de equipes, materiais e horizonte.
- `terminal-live-state.js` migrado para v024 preservando v023.
- Central de Operações e alarmes ampliados com caminho crítico, capacidade, duração, atrasos, scheduling e nivelamento.
- Mantidos 36 GLBs e compatibilidade GitHub Pages sem build.

## 0.23.0 — 08/08/2026

- Plataforma ampliada de 67 para 74 laboratórios funcionais.
- Novo `maintenance-gantt.js` para visão semanal manutenção × escalas de navios e conflitos com STS alocados.
- Novo `maintenance-dependencies.js` para predecessoras/sucessoras, prevenção de ciclos e bloqueio de OTs dependentes.
- `maintenance-readiness.js` ampliado para validar predecessoras antes de liberar a execução.
- Novo `maintenance-priority.js` com ranking didático P1–P4.
- Novo `maintenance-backlog.js` com relógio didático e envelhecimento do backlog.
- Novo `maintenance-sla.js` com metas configuráveis por prioridade.
- Novo `maintenance-delay-risk.js` para risco consolidado de atraso.
- Novo `maintenance-deferral-advisor.js` para comparar janelas concorrentes e recomendar adiamento/reagendamento.
- `terminal-live-state.js` migrado para v023 preservando v022.
- Central de Operações e alarmes ampliados com dependências, prioridades, backlog, SLA, risco e conflitos Gantt.
- Mantidos 36 GLBs e compatibilidade GitHub Pages sem build.

## 0.22.0 — 08/08/2026

- Plataforma ampliada de 61 para 67 laboratórios funcionais.
- Novo `maintenance-readiness.js` e guard global para impedir início de OT sem peças/equipe/disponibilidade.
- Novo `maintenance-calendar.js` para agenda semanal de janelas planejadas.
- Novo `asset-criticality.js` com classes A/B/C didáticas por ativo.
- Novo `future-availability.js` para disponibilidade projetada por turno.
- Novo `maintenance-program-impact.js` para impacto acumulado de janelas na programação.
- Novo `maintenance-window-advisor.js` para recomendar a janela de menor impacto nas próximas 168 horas.
- `terminal-live-state.js` migrado para v022 preservando v021.
- Central de Operações ampliada com seis novos indicadores e atalhos.
- Alarmes ampliados para OTs bloqueadas, ativo crítico indisponível, disponibilidade futura baixa e impacto programado sobre ETD.
- Mantidos 36 GLBs e compatibilidade GitHub Pages sem build.

## 0.21.0 — 08/08/2026

- Plataforma ampliada de 54 para 61 laboratórios funcionais.
- Novo `maintenance-material-links.js` para vincular peças às OTs, reservar e consumir estoque.
- Novo `planned-maintenance.js` para janelas futuras de indisponibilidade planejada.
- Novo `reliability-family.js` para MTBF/MTTR por família de equipamento.
- Novo `maintenance-costs.js` com orçamento e custos estritamente didáticos.
- Novo `maintenance-crews.js` para escala e alocação de equipes às OTs.
- Novo `failure-impact.js` para impacto didático de falhas em ETD/produtividade/pátio/ferrovia.
- Novo `recovery-advisor.js` para recomendações automáticas baseadas em regras da Central.
- `terminal-live-state.js` migrado para v021 preservando v020.
- Alarmes ampliados para falta de materiais, manutenção planejada ativa, orçamento pressionado, equipes ocupadas e impacto relevante no ETD.
- Mantidos 36 GLBs locais e compatibilidade GitHub Pages sem build.

## 0.20.0 — 07/08/2026

- Plataforma ampliada de 48 para 54 laboratórios funcionais.
- Novo `reliability-metrics.js` para MTBF, MTTR, falhas abertas e análise de causas.
- Novo `spare-parts-inventory.js` para saldo, reserva, consumo, ponto mínimo e reposição de peças.
- Novo `hatch-bay-productivity.js` para produtividade granular por Hatch e Bay.
- Novo `shift-resource-plan.js` para capacidade por turno com STS, RTG, Reach Stacker, equipes e lanes.
- Novo `forecast-vs-actual.js` para comparar previsão e realizado com acurácia didática.
- Novo `recovery-planner.js` para cenários de recuperação operacional.
- `terminal-live-state.js` migrado para v020 preservando v019.
- Central de Operações ampliada com confiabilidade, estoque, Hatch/Bay, recursos de turno, acurácia e recuperação.
- Alarmes ampliados para falhas simultâneas, estoque crítico, gargalo por Hatch/Bay, plano insuficiente e baixa aderência do forecast.
- Mantidos 36 GLBs locais e compatibilidade com GitHub Pages sem build.

## 0.19.0 — 07/08/2026

- Plataforma ampliada de 43 para 48 laboratórios funcionais.
- Novo `port-call-timeline.js` com ETA/ETB/ATB/ETD/ATD e desvios por escala.
- Novo `quay-productivity.js` para movimentos/h por navio e por STS.
- Novo `maintenance-work-orders.js` com horímetro, preventiva automática didática e ciclo de OTs.
- Novo `rehandle-optimizer.js` para comparar estratégias de pré-estivagem e rehandles evitáveis.
- Novo `operational-forecast.js` com projeção what-if de 6 horas.
- `terminal-live-state.js` migrado para v019, preservando v018.
- Central de Operações ampliada com produtividade, OTs, escalas realizadas e forecast.
- Alarmes ampliados para desvio de atracação, produtividade, backlog de OTs e risco previsto.
- Mantidos 36 GLBs locais e compatibilidade GitHub Pages.

## 0.18.0 — 07/08/2026
- Fila de Fundeio com ETA/ETD dinâmico e atrasos didáticos.
- Planejamento de portêineres/equipes por escala.
- Manutenção e disponibilidade de STS, RTG, Reach Stacker e locomotiva.
- Laboratório de rehandles no pátio com impacto no estado vivo.
- Histórico temporal persistente de KPIs.
- Central de Operações ampliada com fundeio, recursos, manutenção e tendência.
- Terminal Live State migrado para v018.

# v0.17.0 — 07/08/2026

- 38 laboratórios funcionais.
- Dashboard evoluído para Central de Operações.
- Novo `yard-occupancy-state.js` com 384 slots didáticos e persistência.
- Novo `berth-scheduler.js` para programação de navios/berços.
- Novo `terminal-event-engine.js` com eventos que afetam múltiplas áreas.
- Novo `terminal-alarm-manager.js` com alarmes derivados e reconhecimento.
- Novos laboratórios Mapa de Ocupação, Programação de Berços, Mapa Operacional e Eventos de Turno.
- `terminal-live-state.js` migra para v017 e passa a registrar status/evento do terminal.

# v0.16.0 — 07/08/2026

- 34 laboratórios funcionais.
- Estado operacional compartilhado e persistente.
- Integração Fila → Gate → KPIs.
- Novo Dashboard do Terminal.
- Novo Turno Operacional de 8 horas.
- Novo Plano de Estiva Hatch/Deck.
- Inspeção interna com portas e lanterna.
- Novos serviços `terminal-live-state.js`, `shift-simulator.js` e `hatch-deck-planner.js`.

# v0.15.0 — 07/08/2026

- 31 laboratórios funcionais.
- Nova inspeção interna de contêiner.
- Novo plano de estiva com restrições didáticas.
- Nova dinâmica trolley/hoist/anti-sway.
- Novos KPIs de produtividade e fluxo.
- Nova fila dinâmica de caminhões.
- Estudos reais ampliados com BTP, Tecon Santos e DP World Santos.
- Novos serviços `internal-inspection.js`, `stowage-planner.js`, `crane-dynamics.js`, `terminal-kpis.js` e `truck-queue.js`.

# v0.14.0 — 07/08/2026

- 26 laboratórios funcionais.
- Nova Inspeção Externa 360°.
- Novo `damage-visuals.js` com avarias visuais específicas.
- Spreader telescópico 20’/40’ em `cargo-securing.js`.
- Novo `extended-operation-flow.js` + Jornada Completa Documento → Navio.
- Novo `port-case-studies.js` + estudos de Paranaguá/TCP, Porto Itapoá e Portonave.
- Relatório passa a exibir também a jornada ampliada.
- Referências oficiais datadas adicionadas à documentação.

# v0.13.0 — 07/08/2026

- 23 laboratórios funcionais.
- Novo `container-compliance.js` + laboratório CSC, Placas e Lacres.
- Novo `damage-assessment.js` + laboratório Avarias Estruturais 3D.
- Novo `quay-crane-rig.js`; portêiner do laboratório de cais sincroniza trolley/spreader/cabos com a unidade.
- `scenario-control.js` migra para v013 e aplica efeitos efetivos em Pátio, Documentação, Navio e Ferrovia, além de Gate/VGM/Reefer.
- Pátio ganha Bloco D na cena e desvio didático por congestionamento injetado.
- Documentação exige reconciliação quando Invoice e Packing List divergem.
- Cais bloqueia ciclo sob alerta de vento injetado.
- Ferrovia exige replanejamento quando há atraso injetado.
- Relatório de Sessão consolida a jornada Gate → Balança → Pátio → Navio e exporta relatório específico.

# v0.12.0 — 07/08/2026

- 21 laboratórios funcionais.
- Novo `cargo-securing.js` e laboratório Spreader/Twistlocks com sequência de alinhamento, lock, lift e release.
- Novo `session-recorder.js` e laboratório Relatório de Sessão, com exportação JSON/HTML.
- `scenario-control.js` agora injeta efeitos reais em Gate, Balança/VGM e Reefer.
- Novo `truck-coupling.js`; Cavalo/Chassi ganhou checklist sequencial e visual de quinta roda, pino-rei e pernas de apoio.
- Novo `special-cargo-rules.js`; Pátio Especializado ampliado para cenários DG classe 3/8, Reefer e OOG.
- App registra abertura de módulos e instala o SessionRecorder no Event Bus.

# v0.11.0 — 07/08/2026

- 19 laboratórios funcionais.
- Adicionados Pátio Especializado, Terminal Ferroviário, Cavalo/Chassi, Terminal 24h e Painel do Professor.
- Novo `yard-zoning.js` para zonas Reefer/DG/OOG e endereços coerentes.
- Novo `scenario-control.js` para exceções persistentes injetadas pelo professor.
- Novo `day-night-cycle.js` e exposição das luzes do Three Engine aos módulos.
- `terminal-environment.js` ganhou locomotiva e conjunto cavalo/chassi.
- Pátio Operacional passou a exibir endereço de destino após a destinação correta.
- Acrescentados assets GLB de locomotiva e chassi com três LODs.

## v0.10.0 — 2026-08-07

- Adicionado IBL procedural em Q3/Q4 via PMREM + RoomEnvironment, mantendo luz direta nos perfis leves.
- Criado `terminal-environment.js` com asfalto procedural, faixas de segurança, cercamento, postes, trilhos e vagões reutilizáveis.
- Pátio 3D e Navio/Cais passaram a usar o novo kit ambiental.
- Criado `yard-addressing.js` para Block, Bay, Row, Tier, formatação, validação e conversão para posição 3D.
- Novo laboratório **Pátio — Block / Bay / Row / Tier**.
- Novo laboratório **Ferrovia e Rodovia — Intermodal 3D**.
- Criado `mission-engine.js` e novo laboratório **Missão Integrada — Tratamento de Exceções**.
- Catálogo ampliado de 11 para 14 laboratórios funcionais.
- Manifesto de assets atualizado para v0.10.0; biblioteca GLB/LOD da v0.9 permanece compatível.
- Q0, fallback procedural, lazy loading e arquitetura sem build preservados.


## v0.8.0 — 2026-08-07

### Adicionado
- Asset Manager compartilhado (`asset-manager.js`).
- Manifesto de assets (`assets/models/manifest.json`).
- Primeiro pipeline GLB local com LOD0/LOD1/LOD2 para contêiner 40 HC.
- Preparação de GLTFLoader para Draco, Meshopt e KTX2.
- Serviço de detalhes PBR/decal (`pbr-details.js`).
- Identificação visual do contêiner e detalhe projetado em Q3/Q4 quando suportado.
- Demonstrações animadas para Reach Stacker, RTG e Portêiner.
- Laboratório Central de Documentos — Conferência.

### Alterado
- Quality Manager passa a expor LOD de asset, decals e nível de animação por perfil.
- Contêiner 40 HC prioriza GLB e cai automaticamente para modelo procedural quando necessário.
- Three Engine preserva recursos gerenciados pelo Asset Manager durante o descarte da cena.
- Catálogo passa de 8 para 9 laboratórios funcionais.

### Mantido
- GitHub Pages sem build e sem backend.
- Q0 e fallback leve.
- Modelos procedurais como rede de segurança.
- Separação entre simulação pedagógica e renderização.


## 0.6.0 — 2026-08-07

Expansão dos laboratórios e primeira camada gráfica 3D compartilhada.

- Three.js r184 via import map, carregado sob demanda.
- `three-engine.js` com renderer, câmera, OrbitControls, luzes, qualidade, resize, raycasting, métricas e descarte.
- Contêiner 40 HC reconstruído como modelo procedural 3D com frame, portas, barras e corrugações.
- Hotspots 3D clicáveis para inspeção de avarias.
- Novo laboratório Reefer com modelo 3D e painel operacional.
- Novo laboratório Gate Portuário com triagem de veículos e casos simulados.
- Novo laboratório Balança/VGM com cálculo e tomada de decisão.
- Novo laboratório Bay/Row/Tier com `InstancedMesh` e desafios de localização.
- Central Portuária com busca, filtros e identidade gráfica ampliada.
- Fallback leve para cenários sem WebGL/Three.js.
- Responsividade adicional para laboratórios em notebook, tablet e celular.

## 0.5.0 — 2026-08-07

Primeira fundação executável do LAB PORTOS 360.

- Central Portuária responsiva.
- Tema escuro/claro.
- Router por hash compatível com GitHub Pages.
- Module Registry.
- Event Bus.
- Storage Adapter com localStorage.
- Quality Manager Q0–Q4 + Auto.
- Performance Monitor.
- Catálogo modular.
- Primeiro vertical slice: Contêiner 40 HC — Inspeção.
- Estrutura pronta para receber módulos 2D, 3D e 360 sob demanda.

## v0.7.0 — 2026-08-07

### Adicionado
- Port Scene Kit compartilhado (`port-scene-kit.js`).
- Laboratório Pátio 3D — Ocupação e Destinação.
- Laboratório Navio 3D — Operação de Cais.
- Laboratório Equipamentos Portuários 3D.
- Modelos procedurais reutilizáveis de caminhão, Reach Stacker, RTG, Portêiner e navio.
- Pilhas de pátio usando InstancedMesh.
- Animações de destinação de contêiner e ciclo de carga/descarga.

### Alterado
- `three-engine.js` agora aceita configuração de ambiente por laboratório.
- Central Portuária passa a destacar Pátio e Operação de Cais.
- Catálogo passa de 5 para 8 laboratórios funcionais.

### Mantido
- Compatibilidade com GitHub Pages sem build.
- Carregamento sob demanda do Three.js.
- Perfis AUTO / Q0–Q4 e fallback leve.

## v0.9.0 — 2026-08-07
- Adicionados GLBs próprios de caminhão, Reach Stacker, RTG e Portêiner em três LODs.
- Criada biblioteca de seis tipos de contêiner com GLB e comparador 3D.
- Adicionado `distance-lod.js` usando `THREE.LOD` conforme o perfil gráfico.
- `AssetManager.loadModel()` passa a aceitar LOD explícito, sem quebrar a seleção automática por qualidade.
- Novo módulo `Operação Integrada — Gate ao Navio` com progresso compartilhado em localStorage.
- Gate, Balança, Pátio e Navio registram etapas na jornada quando uma atividade é concluída corretamente.
- Home mostra o estado das quatro etapas da operação integrada.
- Q0 e fallbacks procedurais permanecem disponíveis.
