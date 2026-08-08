import { GRAPHICS_LABELS } from '../core/quality-manager.js';

const MODES=['AUTO','MINIMUM','MEDIUM','HIGH','ULTRA'];
const DESC={
  AUTO:'Usa o benchmark e as capacidades do dispositivo para escolher automaticamente.',
  MINIMUM:'Compatibilidade máxima: geometria reduzida, sem sombras pesadas e LOD leve.',
  MEDIUM:'Equilíbrio entre desempenho e detalhe para notebooks e celulares intermediários.',
  HIGH:'Mais detalhes, sombras, IBL, LOD alto e melhor definição de materiais.',
  ULTRA:'Máximo detalhamento da base atual, sombras 4K, maior anisotropia e efeitos disponíveis.'
};

function metricsHTML(result){
  if(!result)return'<p class="muted">O benchmark ainda não foi executado neste dispositivo.</p>';
  return `<div class="graphics-metrics">
    <div><span>Recomendado</span><strong>${GRAPHICS_LABELS[result.recommended]||result.recommended}</strong></div>
    <div><span>Memória estimada</span><strong>${result.device.memoryGB} GB</strong></div>
    <div><span>CPU lógica</span><strong>${result.device.cores} núcleos</strong></div>
    <div><span>WebGL</span><strong>${result.webgl.version}</strong></div>
    <div><span>GPU</span><strong title="${result.webgl.renderer}">${result.webgl.renderer}</strong></div>
    <div><span>Tela</span><strong>${result.device.screenMegapixels} MP · DPR ${result.device.dpr}</strong></div>
  </div>`;
}

export function installGraphicsSettingsUI({button,label,quality,benchmark,eventBus,toast}){
  const panel=document.createElement('div');
  panel.className='graphics-panel-backdrop';
  panel.hidden=true;
  panel.innerHTML=`<section class="graphics-panel" role="dialog" aria-modal="true" aria-labelledby="graphicsPanelTitle">
    <header class="graphics-panel__head"><div><span class="eyebrow">Renderização adaptativa v0.32</span><h2 id="graphicsPanelTitle">Configuração gráfica</h2><p>Escolha manualmente ou use a recomendação automática deste dispositivo.</p></div><button class="icon-button" type="button" data-gfx-close aria-label="Fechar">×</button></header>
    <div class="graphics-recommendation" data-gfx-recommend></div>
    <div class="graphics-options" data-gfx-options></div>
    <div class="graphics-benchmark"><div class="panel__title"><div><span class="eyebrow">Benchmark local</span><h3>Teste rápido deste dispositivo</h3></div><button class="button button--primary" type="button" data-gfx-run>Executar teste</button></div><div data-gfx-metrics></div><p class="legal-note">O teste é diagnóstico e aproximado. Temperatura, bateria, navegador, resolução e outros aplicativos podem alterar o desempenho real.</p></div>
    <footer class="graphics-panel__foot"><a class="button button--ghost" href="#/lab/configuracao-grafica" data-gfx-close>Ver diagnóstico completo</a><button class="button" type="button" data-gfx-close>Fechar</button></footer>
  </section>`;
  document.body.append(panel);
  const render=()=>{
    const d=quality.describe();
    label.textContent=d.mode==='AUTO'?`Auto · ${d.effectiveLabel}`:d.effectiveLabel;
    button.title=`Configuração gráfica: ${d.label}. Recomendado: ${d.recommendedLabel}`;
    panel.querySelector('[data-gfx-recommend]').innerHTML=`<div><span>Recomendação atual</span><strong>${d.recommendedLabel}</strong><small>${d.benchmark?'benchmark executado':'estimativa inicial; execute o benchmark para refinar'}</small></div><div><span>Em uso</span><strong>${d.mode==='AUTO'?`Automático → ${d.effectiveLabel}`:d.effectiveLabel}</strong><small>${d.mode==='AUTO'?'acompanha a recomendação':'seleção manual preservada'}</small></div>`;
    panel.querySelector('[data-gfx-options]').innerHTML=MODES.map(mode=>`<button type="button" class="graphics-option ${d.mode===mode?'is-active':''}" data-gfx-mode="${mode}"><span>${GRAPHICS_LABELS[mode]}</span>${mode===d.recommended?'<b>Recomendado</b>':''}<small>${DESC[mode]}</small></button>`).join('');
    panel.querySelector('[data-gfx-metrics]').innerHTML=metricsHTML(benchmark.getLast()||d.benchmark);
  };
  const open=()=>{render();panel.hidden=false;document.body.classList.add('modal-open');panel.querySelector('[data-gfx-close]')?.focus();};
  const close=()=>{panel.hidden=true;document.body.classList.remove('modal-open');button.focus();};
  const click=async(e)=>{
    if(e.target===panel||e.target.closest('[data-gfx-close]')){close();return;}
    const mode=e.target.closest('[data-gfx-mode]')?.dataset.gfxMode;
    if(mode){quality.set(mode);toast?.(`Gráficos: ${quality.getConfig().requestedLabel} · efetivo ${quality.getConfig().effectiveLabel}`);render();return;}
    if(e.target.closest('[data-gfx-run]')){
      const run=panel.querySelector('[data-gfx-run]');run.disabled=true;run.textContent='Testando…';
      try{const result=await benchmark.run();toast?.(`Benchmark concluído. Recomendação: ${GRAPHICS_LABELS[result.recommended]}.`);}catch(err){console.error(err);toast?.('Não foi possível concluir o benchmark.');}
      finally{run.disabled=false;run.textContent='Executar teste';render();}
    }
  };
  const key=e=>{if(e.key==='Escape'&&!panel.hidden)close();};
  button.addEventListener('click',open);panel.addEventListener('click',click);document.addEventListener('keydown',key);
  const offQuality=eventBus?.on('quality:changed',render);const offRec=eventBus?.on('quality:recommendation',render);
  render();
  return()=>{offQuality?.();offRec?.();button.removeEventListener('click',open);panel.removeEventListener('click',click);document.removeEventListener('keydown',key);panel.remove();};
}
