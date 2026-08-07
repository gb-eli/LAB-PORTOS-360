# Arquitetura executável — LAB PORTOS 360 v0.5.0

## Camadas

1. **Interface compartilhada** — `assets/css/` e `index.html`.
2. **Core** — roteamento, eventos, registro de módulos, persistência e qualidade.
3. **Services** — carregamento dinâmico e monitoramento.
4. **Data** — catálogo global.
5. **Modules** — cada laboratório isolado e descartável.
6. **Assets pesados** — futuramente GLB/KTX2/áudio/360 por módulo e sob demanda.

## Contrato mínimo de um módulo

```js
export async function mount(context) {
  // renderiza e registra interações
}

export async function unmount() {
  // remove listeners, timers, animações e recursos
}
```

## Regra principal

A lógica pedagógica e a simulação não devem depender diretamente da tecnologia de renderização. O mesmo módulo poderá ter fallback 2D, versão 3D leve e versão 3D avançada.
