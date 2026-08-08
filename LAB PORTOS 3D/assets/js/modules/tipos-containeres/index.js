import { containerTypes, typeChallenges } from './data.js';
import { mountThreeScene, createProceduralContainer } from '../../services/three-engine.js';
import { createDistanceLodAsset } from '../../services/distance-lod.js';

let sceneHandle = null;
let cleanupFns = [];

export async function mount({ root, quality, eventBus, toast, storage, assets }) {
  const saved = storage.get('progress:tipos-containeres', { challenge: 0, correct: 0 });
  const state = { challenge: saved.challenge % typeChallenges.length, correct: saved.correct || 0 };
  let selected = 'container-20dv';
  let currentAsset = null;

  root.innerHTML = `
  <section class="lab-wide">
    <header class="lab-heading"><div><span class="eyebrow">Contêineres • Biblioteca técnica</span><h1>Tipos de Contêiner — Comparador 3D</h1><p>Compare proporções, características visuais e aplicações didáticas de seis tipos de unidade.</p></div><a class="button button--ghost" href="#/">← Central</a></header>
    <div class="equipment-layout">
      <section class="panel panel--stage terminal-visual">
        <div id="types3d" class="three-host three-host--terminal"><div class="stage-loading"><span class="loader-ring"></span><strong>Carregando biblioteca de contêineres…</strong></div></div>
        <div class="stage-toolbar"><span class="stage-badge">ASSET + LOD</span><span id="typeSceneTag" class="stage-badge stage-badge--secondary">20' DRY</span></div>
        <div id="typeStats" class="graphics-stats">LOD por distância • aguardando renderer</div>
      </section>
      <section class="panel equipment-console">
        <div class="panel__title"><h2>Comparador</h2><span class="tag">6 tipos</span></div>
        <div id="typeTabs" class="equipment-tabs container-type-tabs"></div>
        <div class="equipment-fact"><small>TIPO SELECIONADO</small><strong id="typeName"></strong><p id="typeUse"></p><span id="typeCue"></span></div>
        <div class="document-grid"><div class="doc-tile"><span>Comprimento</span><strong id="typeLength"></strong></div><div class="doc-tile"><span>Altura</span><strong id="typeHeight"></strong></div><div class="doc-tile"><span>Largura</span><strong id="typeWidth"></strong></div><div class="doc-tile"><span>Referência</span><strong id="typeIso"></strong></div></div>
        <div class="challenge-card"><small id="typeChallengeId"></small><strong id="typeQuestion"></strong><div id="typeAnswers" class="equipment-answer-grid"></div></div>
        <div id="typeFeedback" class="feedback-box" hidden></div>
        <div class="actions"><button id="nextTypeChallenge" class="button button--primary" type="button">Próximo desafio</button></div>
        <p class="legal-note">Dimensões externas aproximadas usadas para comparação didática. Especificações, payload e limites variam por unidade/fabricante e devem ser conferidos na documentação aplicável.</p>
      </section>
    </div>
  </section>`;

  const save = () => storage.set('progress:tipos-containeres', state);
  const info = () => containerTypes.find(t => t.id === selected) || containerTypes[0];

  const renderInfo = () => {
    const t = info();
    root.querySelector('#typeSceneTag').textContent = t.iso;
    root.querySelector('#typeName').textContent = t.name;
    root.querySelector('#typeUse').textContent = t.use;
    root.querySelector('#typeCue').textContent = t.cue;
    root.querySelector('#typeLength').textContent = t.length;
    root.querySelector('#typeHeight').textContent = t.height;
    root.querySelector('#typeWidth').textContent = t.width;
    root.querySelector('#typeIso').textContent = t.iso;
    root.querySelector('#typeTabs').innerHTML = containerTypes.map(x => `<button type="button" class="equipment-tab ${x.id === selected ? 'is-selected' : ''}" data-type="${x.id}">${x.name}</button>`).join('');
    root.querySelectorAll('[data-type]').forEach(btn => {
      const handler = async () => { selected = btn.dataset.type; renderInfo(); await sceneHandle?.built?.showType?.(selected); };
      btn.addEventListener('click', handler);
      cleanupFns.push(() => btn.removeEventListener('click', handler));
    });
  };

  const check = (answer) => {
    const c = typeChallenges[state.challenge];
    selected = answer;
    renderInfo();
    sceneHandle?.built?.showType?.(answer);
    const ok = answer === c.answer;
    const box = root.querySelector('#typeFeedback');
    box.hidden = false; box.dataset.tone = ok ? 'success' : 'warning';
    box.innerHTML = ok ? `<strong>Correto</strong><p>${info().cue}</p>` : '<strong>Compare a geometria e a aplicação</strong><p>Use a vitrine 3D e a ficha técnica antes de responder novamente.</p>';
    if (ok) { state.correct += 1; save(); toast('Tipo de contêiner identificado.'); eventBus.emit('simulation:complete', { moduleId:'tipos-containeres', challenge:c.id }); }
  };

  const renderChallenge = () => {
    const c = typeChallenges[state.challenge];
    root.querySelector('#typeChallengeId').textContent = `DESAFIO ${c.id}`;
    root.querySelector('#typeQuestion').textContent = c.question;
    root.querySelector('#typeAnswers').innerHTML = containerTypes.map(t => `<button type="button" class="decision-card" data-type-answer="${t.id}"><strong>${t.iso}</strong><span>${t.name}</span></button>`).join('');
    root.querySelector('#typeFeedback').hidden = true;
    root.querySelectorAll('[data-type-answer]').forEach(btn => {
      const handler = () => check(btn.dataset.typeAnswer);
      btn.addEventListener('click', handler);
      cleanupFns.push(() => btn.removeEventListener('click', handler));
    });
  };

  sceneHandle = await mountThreeScene({
    host: root.querySelector('#types3d'), qualityManager: quality, eventBus,
    cameraPosition:[15,8,18], target:[0,0,0],
    environment:{ ground:true, groundSize:48, fogNear:28, fogFar:95, background:0x071a24, sunPosition:[15,22,12], sunIntensity:4.8 },
    buildScene: async ({ THREE, scene, renderer, config, controls }) => {
      const holder = new THREE.Group(); scene.add(holder);
      let release = null;
      let active = null;
      const fitScale = id => id === 'container-20dv' ? .88 : id === 'flat-rack-40' ? .67 : .62;
      const showType = async id => {
        release?.(); release = null;
        holder.clear(); active = null;
        try {
          const built = await createDistanceLodAsset({ THREE, assets, assetId:id, renderer, quality:config.effective, scale:fitScale(id), distances:[0,16,32] });
          active = built.scene; release = built.release; holder.add(active);
          root.querySelector('#typeStats').textContent = `${built.loaded.map(x => x.lod.toUpperCase()).join(' → ')} • troca automática por distância`;
        } catch (error) {
          console.warn('Asset GLB indisponível; usando fallback procedural.', error);
          active = createProceduralContainer(THREE, { quality:config.effective, reefer:id === 'reefer-40hc' });
          active.scale.setScalar(id === 'container-20dv' ? .48 : .52);
          holder.add(active);
          root.querySelector('#typeStats').textContent = 'Fallback procedural ativo';
        }
        controls.target.set(0,0,0);
      };
      await showType(selected);
      return { showType, update(){ if (active) active.rotation.y += .0016; }, dispose(){ release?.(); release = null; } };
    }
  });
  if (!sceneHandle) root.querySelector('#types3d').innerHTML = '<div class="fallback-stage"><div class="equipment-fallback">▣<strong>TIPOS DE CONTÊINER</strong></div><p>Modo de compatibilidade: use as fichas e desafios no painel.</p></div>';

  const next = () => { state.challenge = (state.challenge + 1) % typeChallenges.length; save(); renderChallenge(); };
  root.querySelector('#nextTypeChallenge').addEventListener('click', next);
  cleanupFns.push(() => root.querySelector('#nextTypeChallenge')?.removeEventListener('click', next));
  renderInfo(); renderChallenge();
}

export async function unmount() { sceneHandle?.dispose?.(); sceneHandle = null; cleanupFns.forEach(fn => fn?.()); cleanupFns = []; }
