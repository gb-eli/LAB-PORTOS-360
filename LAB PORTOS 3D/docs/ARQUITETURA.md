# Arquitetura — LAB PORTOS 360 v0.16.0

```text
Router
  ↓
Module Registry
  ↓
Laboratório
  ├─ Conteúdo / dados
  ├─ Simulation Core local
  └─ Graphics Adapter
        ↓
     Three Engine
        ↓
     Port Scene Kit
        ├─ Contêineres
        ├─ Caminhões
        ├─ Pátio / blocos
        ├─ Reach Stacker
        ├─ RTG
        ├─ Portêiner
        ├─ Navio
        └─ Cais / água
```

## Regras

1. Nenhum laboratório cria um renderer global próprio.
2. Objetos portuários reutilizáveis devem ficar no `port-scene-kit.js` ou em serviços equivalentes, não duplicados entre módulos.
3. Toda cena deve possuir `dispose()` via `mountThreeScene()`.
4. Q0 deve preservar uma experiência didática sem WebGL sempre que possível.
5. Instancing deve ser preferido para grandes conjuntos repetidos, como pilhas de contêineres.
6. A lógica pedagógica não deve depender da fidelidade do modelo 3D.
7. Futuras versões podem substituir modelos procedurais por GLB mantendo a mesma API conceitual.


## Camada de assets v0.8

O `AssetManager` lê `assets/models/manifest.json`, seleciona LOD a partir do Quality Manager, carrega GLB sob demanda e controla cache/referências. O pipeline está preparado para GLTFLoader + Draco + Meshopt + KTX2. Assets gerenciados são marcados para que o descarte genérico da cena não invalide geometrias compartilhadas.

A regra é: laboratório solicita um `assetId`; caminhos físicos e variantes ficam fora do módulo.


## Camada v0.9 — LOD por distância e fluxo integrado

- `distance-lod.js` cria grupos `THREE.LOD` a partir dos LODs registrados no Asset Manager.
- Q1 carrega somente LOD2; Q2 usa LOD1+LOD2; Q3/Q4 podem usar LOD0+LOD1+LOD2.
- `operation-flow.js` mantém uma jornada opcional Gate → Balança → Pátio → Navio sem acoplar os laboratórios entre si.
- Caminhão, Reach Stacker, RTG e Portêiner possuem GLBs próprios em três níveis de detalhe.
- A biblioteca de contêineres passa a incluir 20 DV, 40 DV, 40 HC, Reefer 40 HC, Open Top 40 e Flat Rack 40.
- Todo carregamento GLB mantém fallback procedural e o Q0 continua sem exigir WebGL.


## Camada v0.10 — ambiente, endereçamento e missões

A v0.10 adiciona três serviços compartilhados: `terminal-environment.js`, `yard-addressing.js` e `mission-engine.js`. O primeiro cria infraestrutura visual reutilizável sem texturas externas obrigatórias; o segundo mantém a regra de endereçamento de pátio fora dos componentes visuais; o terceiro encapsula persistência e avaliação de missões com exceções.

Em Q3/Q4, `three-engine.js` tenta gerar iluminação ambiental procedural por PMREM/RoomEnvironment. Se isso falhar, a cena continua usando iluminação hemisférica e direcional.


## Extensões v0.11.0
- `yard-zoning.js`: classificação de cargas e zonas de pátio.
- `scenario-control.js`: injeção local de exceções pelo professor.
- `day-night-cycle.js`: ciclo visual com alteração de luz/ambiente.
- `three-engine.js`: `buildScene` recebe `lights.hemi` e `lights.sun`.
- Assets adicionais: `locomotive` e `chassis`, ambos com LOD0/1/2.


## Extensões v0.16.0
- `session-recorder.js`: registra passos, conclusões, mudanças de qualidade e exceções no armazenamento local e exporta evidências.
- `cargo-securing.js`: contrato visual para spreader e twistlocks, separado da missão pedagógica.
- `truck-coupling.js`: sequência de acoplamento rodoviário independente da cena 3D.
- `special-cargo-rules.js`: regras didáticas complementares para Reefer, DG e OOG.
- `scenario-control.js`: passa a aplicar efeitos nos dados simulados de Gate, Balança/VGM e Reefer, além de exibir o banner contextual.
- `SessionRecorder` é injetado pelo `app.js` nos módulos, mantendo o relatório desacoplado dos laboratórios.


## Extensões v0.16.0
- `container-compliance.js`: casos CSC/lacres e decisão didática.
- `damage-assessment.js`: catálogo e tratamento de avarias.
- `quay-crane-rig.js`: cabos/trolley/spreader sincronizados.
- `scenario-control.js`: efeitos efetivos em 7 áreas operacionais.
- `session-recorder.js`: relatório consolidado de jornada.


## Extensões v0.16.0
- `damage-visuals.js`: representação visual das seis avarias.
- `extended-operation-flow.js`: jornada de seis etapas com rota de transferência.
- `port-case-studies.js`: dados institucionais datados de terminais reais.
- `cargo-securing.js`: span telescópico didático 20’/40’.
- `inspecao-360`: adapter de exploração orbital sem panorama pesado.


## Extensões v0.16.0
- `internal-inspection.js`: checklist e cenários de inspeção interna.
- `stowage-planner.js`: slots e validação de estiva didática.
- `crane-dynamics.js`: pêndulo simplificado e assistência anti-sway.
- `terminal-kpis.js`: cálculo e interpretação didática de KPIs.
- `truck-queue.js`: simulação determinística de fila de gate.


## Extensões v0.16.0
- `terminal-live-state.js`: estado operacional compartilhado e persistente.
- `shift-simulator.js`: turno acumulado de 8 horas.
- `hatch-deck-planner.js`: planejamento didático porão/convés.
- Dashboard lê o estado compartilhado sem duplicar regras dos laboratórios.

## v0.23 — Sequenciamento e governança da manutenção

A camada de manutenção passa a tratar predecessoras, prioridade, idade de backlog, SLA e risco como serviços independentes. `maintenance-readiness.js` continua como guard global de execução e agora consulta `maintenance-dependencies.js` antes de liberar a OT. A visão Gantt é derivada de `planned-maintenance.js`, `maintenance-calendar.js`, `berth-scheduler.js` e `quay-resource-planner.js`, sem duplicar o estado das escalas. O `maintenance-deferral-advisor.js` usa criticidade, risco de atraso, impacto operacional e o `maintenance-window-advisor.js` para comparar duas janelas concorrentes e sugerir reagendamento.


## v0.24 — Planejamento de capacidade e nivelamento

A camada de manutenção passa a modelar o encadeamento temporal das OTs. `maintenance-critical-path.js` usa as dependências já existentes para calcular início/fim mais cedo e o caminho crítico didático. `maintenance-capacity.js` compara demanda do backlog com capacidade de equipes/boxes por turno. `maintenance-duration-performance.js` confronta duração planejada e realizada, enquanto `maintenance-delay-causes.js` classifica minutos perdidos. `maintenance-auto-scheduler.js` ordena OTs por prioridade/prontidão em um horizonte e `maintenance-resource-leveler.js` redistribui as ordens entre lanes de equipe, respeitando disponibilidade de materiais. Todos publicam resumos no Terminal Live State e na Central sem acoplar os módulos entre si.

## v0.25 — Execução paralela, técnicos e contingência

A camada de manutenção passa a distinguir capacidade agregada de equipe de disponibilidade real de técnicos por especialidade. `maintenance-skill-matrix.js` descreve requisitos simultâneos de cada OT; `technician-availability.js` mantém técnicos individuais, turnos, ausências e reservas; e `maintenance-parallel-execution.js` combina essas informações com dependências, duração e materiais para construir um plano paralelo.

`material-lead-time.js` introduz ETA de peças sem alterar o estoque base: pedidos em trânsito só entram no saldo quando o relógio didático alcança o lead time. `maintenance-emergency.js` cria uma corretiva prioritária e retira o ativo da operação. `maintenance-rescheduler.js` refaz o restante do turno e registra OTs movidas, adicionadas ou retiradas do horizonte.

```text
OT / requisitos
      ↓
Matriz de especialidades
      ↓
Técnicos hora a hora ───┐
      ↓                 │
Materiais / lead time ──┤
      ↓                 │
Planejamento paralelo   │
      ↓                 │
Turno ← emergência ─────┘
      ↓
Reprogramação automática
```

O nivelamento agregado da v0.24 permanece disponível; a v0.25 adiciona granularidade, não substituição.

## v0.26 — Execução minuto a minuto e runtime do turno

A camada de planejamento continua separada da execução. A v0.26 acrescenta serviços de runtime que consomem OTs, materiais, dependências, prioridades e técnicos já existentes.

```text
Maintenance Work Orders
        ↓
Maintenance Readiness
        ↓
Technician Dispatcher
        ↓
Maintenance Execution Progress
        ├── pause/resume
        ├── technician transfer
        └── completion
        ↓
Maintenance Shift Runtime
        ├── clock
        ├── material arrivals
        ├── auto dispatch
        └── controlled emergencies
        ↓
Terminal Live State v026
```

O runtime é determinístico quando o mesmo `seed` e parâmetros são usados. Emergências são pseudoaleatórias e configuráveis, permitindo repetição pedagógica do cenário sem depender de backend.
