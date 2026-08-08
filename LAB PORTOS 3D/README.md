# LAB PORTOS 360 — v0.39.0

Plataforma educacional front-end modular para o curso Técnico em Portos, preparada para GitHub Pages e dispositivos com capacidades gráficas diferentes.

## Direção da v0.39.0

A v0.39.0 transforma a escala completa construída até a v0.38 em uma camada de **Port Call Analytics**: histórico persistente, comparação entre navios/escalas, turnaround time, tempo por fase, espera por berço, eventos meteorológicos/operacionais e dashboard executivo.

Os dados arquivados pelo usuário vêm do estado local da simulação. Cenários demonstrativos são identificados explicitamente como **DEMO** e servem apenas para comparação educacional.

## Destaques

- **194 laboratórios funcionais**.
- Novo `port-call-history.js` para arquivar escalas concluídas e manter registros comparáveis.
- Novo `port-call-events.js` para eventos didáticos de meteorologia e exceções operacionais com minutos de impacto.
- Novo `port-call-analytics.js` para turnaround, espera, produtividade, fases e visão executiva.
- A Central de Operações passa a mostrar histórico de escalas, turnaround médio, espera/produtividade e atrasos por eventos.
- A escala atual pode ser arquivada depois do fechamento formal da v0.38.

## Novos laboratórios

1. Histórico de Escalas Portuárias.
2. Comparação entre Escalas e Navios.
3. Turnaround Time — Chegada → Saída.
4. Tempo por Fase do Port Call.
5. Espera por Berço — ETA, ETB e ATB.
6. Eventos Meteorológicos e Operacionais da Escala.
7. Dashboard Executivo de Port Calls.

## Fluxo analítico

```text
PORT CALL FECHADO
      ↓
ARQUIVAR ESCALA
      ↓
HISTÓRICO
      ├── TURNAROUND
      ├── ESPERA POR BERÇO
      ├── PERMANÊNCIA
      ├── PRODUTIVIDADE
      ├── ADERÊNCIA AO PLANO
      └── TEMPO POR FASE
               ↓
EVENTOS / EXCEÇÕES
      ├── meteorologia
      └── operação
               ↓
COMPARAÇÃO ENTRE ESCALAS
               ↓
DASHBOARD EXECUTIVO
```

Quando ainda não existem duas escalas reais arquivadas, o usuário pode carregar cenários **DEMO** sintéticos. Eles nunca são apresentados como dados reais de Paranaguá, Santos, Itapoá ou qualquer outro porto.

## Qualidade gráfica

A configuração global permanece em **Automático / Mínimo / Médio / Alto / Ultra**, com benchmark local, recomendação e escolha manual persistente.

## Publicação no GitHub Pages

Envie o conteúdo desta pasta para a raiz do repositório e ative **Settings → Pages → Deploy from a branch → main / root**. Não há build obrigatório nem backend.

## Atualização modular

Quem já está na v0.38.0 pode aplicar `LAB_PORTOS_360_PATCH_v0.39.0.zip` sobre a raiz do projeto.
