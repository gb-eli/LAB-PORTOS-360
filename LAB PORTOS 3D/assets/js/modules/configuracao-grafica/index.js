import { GRAPHICS_LABELS } from '../../core/quality-manager.js';

const MODES=['AUTO','MINIMUM','MEDIUM','HIGH','ULTRA'];
let cleanup=[];

function configRows(q){
  return [
    ['Modo selecionado',q.requestedLabel],['Qualidade efetiva',q.effectiveLabel],['Recomendação',q.recommendedLabel],
    ['Pixel ratio máx.',String(q.pixelRatio)],['Sombras',q.shadows?`Sim · ${q.shadowMapSize}px`:'Não'],['Antialias',q.antialias?'Sim':'Não'],
    ['IBL',q.ibl?'Sim':'Não'],['LOD de assets',q.assetLod],['Anisotropia',`${q.anisotropy}×`],['Detalhe do ambiente',`${q.environmentDetail}/4`]
  ];
}

export async function mount({root,quality,graphicsBenchmark,eventBus,toast}){
  root.innerHTML=`<section class="lab-wide graphics-lab"><header class="lab-heading"><div><span class="eyebrow">Sistema • Renderização adaptativa</span><h1>Configuração Gráfica e Benchmark</h1><p>Escolha Mínimo, Médio, Alto ou Ultra, ou deixe em Automático para usar a recomendação deste dispositivo.</p></div><a class="button button--ghost" href="#/">← Central</a></header>
  <div class="graphics-lab-grid"><section class="panel"><div class="panel__title"><div><span class="eyebrow">Configuração</span><h2>Qualidade</h2></div><span class="tag" id="gfxLabCurrent"></span></div><div class="graphics-options graphics-options--lab" id="gfxLabOptions"></div><div class="info-list" id="gfxLabConfig"></div></section>
  <section class="panel"><div class="panel__title"><div><span class="eyebrow">Diagnóstico local</span><h2>Benchmark</h2></div><button class="button button--primary" id="gfxLabRun">Executar benchmark</button></div><div id="gfxLabBench"></div><div class="feedback-box" data-tone="info"><strong>Como usar</strong><p>Comece pela recomendação. Se o ambiente permanecer fluido, você pode subir manualmente; se houver travamentos ou aquecimento, reduza um nível.</p></div></section></div>
  <section class="panel"><span class="eyebrow">O que muda de verdade</span><h2>Escalonamento progressivo</h2><div class="graphics-feature-grid"><article><strong>Mínimo</strong><span>LOD leve, sem sombras pesadas, menos geometria e detalhes decorativos.</span></article><article><strong>Médio</strong><span>Sombras 1K, antialias e detalhamento equilibrado.</span></article><article><strong>Alto</strong><span>IBL, sombras 2K, LOD alto, decals e detalhes de equipamentos/ambiente.</span></article><article><strong>Ultra</strong><span>Sombras 4K, anisotropia 16× e todo o detalhamento disponível na cena.</span></article></div></section></section>`;
  const render=()=>{
    const q=quality.getConfig(),d=quality.describe(),last=graphicsBenchmark.getLast();
    root.querySelector('#gfxLabCurrent').textContent=`${d.mode==='AUTO'?'Automático → ':''}${q.effectiveLabel}`;
    root.querySelector('#gfxLabOptions').innerHTML=MODES.map(m=>`<button class="graphics-option ${d.mode===m?'is-active':''}" type="button" data-mode="${m}"><span>${GRAPHICS_LABELS[m]}</span>${m===d.recommended?'<b>Recomendado</b>':''}<small>${m==='AUTO'?'Segue o benchmark':m==='MINIMUM'?'Compatibilidade':m==='MEDIUM'?'Equilíbrio':m==='HIGH'?'Mais realismo':'Máximo detalhe'}</small></button>`).join('');
    root.querySelector('#gfxLabConfig').innerHTML=configRows(q).map(([a,b])=>`<div><span>${a}</span><strong>${b}</strong></div>`).join('');
    root.querySelector('#gfxLabBench').innerHTML=last?`<div class="graphics-metrics"><div><span>Recomendado</span><strong>${GRAPHICS_LABELS[last.recommended]}</strong></div><div><span>GPU</span><strong>${last.webgl.renderer}</strong></div><div><span>WebGL</span><strong>${last.webgl.version}</strong></div><div><span>CPU</span><strong>${last.device.cores} núcleos</strong></div><div><span>Memória</span><strong>${last.device.memoryGB} GB</strong></div><div><span>Tela</span><strong>${last.device.screenMegapixels} MP</strong></div><div><span>Probe CPU</span><strong>${last.cpu.ms} ms</strong></div><div><span>Probe GPU</span><strong>${last.gpu.ms??'—'} ms</strong></div></div>`:'<div class="empty-inline">Ainda sem benchmark salvo.</div>';
  };
  const click=async e=>{const mode=e.target.closest('[data-mode]')?.dataset.mode;if(mode){quality.set(mode);toast(`Configuração gráfica: ${quality.getConfig().requestedLabel}.`);return;}if(e.target.id==='gfxLabRun'){e.target.disabled=true;e.target.textContent='Testando…';try{const r=await graphicsBenchmark.run();toast(`Recomendação: ${GRAPHICS_LABELS[r.recommended]}.`);}finally{e.target.disabled=false;e.target.textContent='Executar benchmark';render();}}};
  root.addEventListener('click',click);cleanup.push(()=>root.removeEventListener('click',click));
  cleanup.push(eventBus.on('quality:changed',render));cleanup.push(eventBus.on('quality:recommendation',render));render();
}
export async function unmount(){cleanup.forEach(fn=>fn?.());cleanup=[];}
