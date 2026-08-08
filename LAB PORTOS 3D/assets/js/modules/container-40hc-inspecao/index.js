import { labData } from './data.js';
import { ContainerInspectionSimulation } from './simulation.js';
import { createProceduralContainer, mountThreeScene } from '../../services/three-engine.js';
import { addContainerDecals } from '../../services/pbr-details.js';

let cleanupFns = [];
let sceneHandle = null;

export async function mount(context) {
  const { root, eventBus, storage, toast, quality, assets } = context;
  const previous = storage.get('progress:container-40hc-inspecao', { found: [] });
  const simulation = new ContainerInspectionSimulation(labData);
  previous.found?.forEach((id) => simulation.registerFinding(id));

  root.innerHTML = `
    <section class="lab-shell lab-shell--immersive" aria-label="Laboratório de inspeção de contêiner 40 HC">
      <aside class="panel lab-panel">
        <div class="panel__title"><h2>Missão</h2><span class="tag">Guiado</span></div>
        <p>${labData.mission}</p>
        <div class="progress" aria-label="Progresso da inspeção"><span id="labProgress"></span></div>
        <p><strong id="labProgressText">0%</strong> concluído</p>
        <ul class="checklist">${labData.findings.map(item => `<li><button type="button" data-check="${item.id}" data-done="false">○ ${item.label}</button></li>`).join('')}</ul>
        <div class="tip-box"><strong>Controles 3D</strong><span>Arraste para girar • roda/pinça para zoom • clique nos marcadores</span></div>
        <div class="actions"><a class="button button--ghost" href="#/">← Central</a></div>
      </aside>

      <section class="lab-stage panel panel--stage" aria-label="Área de inspeção tridimensional">
        <div id="threeHost" class="three-host"><div class="stage-loading"><span class="loader-ring"></span><strong>Carregando asset 3D…</strong><small>GLB com LOD e fallback procedural.</small></div></div>
        <div class="stage-toolbar"><span id="assetBadge" class="stage-badge">GLB + LOD</span><button id="resetCamera" class="mini-button" type="button">⌂ Recentrar</button></div>
        <div class="graphics-stats" id="graphicsStats">Cena carregando…</div>
      </section>

      <aside class="panel lab-panel">
        <div class="panel__title"><h2>Ficha técnica</h2><span class="tag tag--ready">Ativo</span></div>
        <div class="info-list">
          <div class="info-row"><span>Tipo</span><strong>${labData.container.type}</strong></div>
          <div class="info-row"><span>Comprimento</span><strong>${labData.container.length}</strong></div>
          <div class="info-row"><span>Altura</span><strong>${labData.container.height}</strong></div>
          <div class="info-row"><span>Lacre</span><strong>${labData.container.seal}</strong></div>
          <div class="info-row"><span>Asset</span><strong id="assetStatus">Selecionando LOD…</strong></div>
          <div class="info-row"><span>Status</span><strong id="labStatus">${labData.container.status}</strong></div>
        </div>
        <div class="finding-log" id="findingLog"><strong>Registro de inspeção</strong><p>Nenhuma avaria registrada nesta sessão.</p></div>
        <div class="actions"><button id="resetLab" class="button" type="button">Reiniciar inspeção</button></div>
      </aside>
    </section>`;

  const progressBar = root.querySelector('#labProgress');
  const progressText = root.querySelector('#labProgressText');
  const status = root.querySelector('#labStatus');
  const log = root.querySelector('#findingLog');
  const stats = root.querySelector('#graphicsStats');
  const assetStatus = root.querySelector('#assetStatus');
  const assetBadge = root.querySelector('#assetBadge');

  const save = () => storage.set('progress:container-40hc-inspecao', { found: [...simulation.found] });

  function renderState() {
    const progress = simulation.progress();
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
    labData.findings.forEach((item) => {
      const done = simulation.found.has(item.id);
      const button = root.querySelector(`[data-check="${item.id}"]`);
      if (button) { button.dataset.done = String(done); button.textContent = `${done ? '✓' : '○'} ${item.label}`; }
      const marker = sceneHandle?.built?.markers?.get(item.id);
      if (marker) marker.material.color.set(done ? 0x70d89a : 0xff6574);
    });
    status.textContent = simulation.isComplete() ? 'Inspeção concluída' : 'Aguardando inspeção';
    const foundItems = labData.findings.filter(item => simulation.found.has(item.id));
    log.innerHTML = `<strong>Registro de inspeção</strong>${foundItems.length ? `<ul>${foundItems.map(item => `<li>${item.label}</li>`).join('')}</ul>` : '<p>Nenhuma avaria registrada nesta sessão.</p>'}`;
  }

  function registerFinding(id) {
    const item = labData.findings.find(f => f.id === id);
    if (!item) return;
    const wasNew = !simulation.found.has(id);
    simulation.registerFinding(id); save(); renderState();
    toast(wasNew ? `Avaria registrada: ${item.label}` : `Avaria já registrada: ${item.label}`);
    eventBus.emit('simulation:finding', { moduleId: labData.id, id });
    if (simulation.isComplete()) { toast('Inspeção concluída. Todos os pontos foram registrados.'); eventBus.emit('simulation:complete', { moduleId: labData.id }); }
  }

  sceneHandle = await mountThreeScene({
    host: root.querySelector('#threeHost'), qualityManager: quality, eventBus,
    cameraPosition: [13, 7.5, 15], target: [0, 0, 0],
    buildScene: async ({ THREE, scene, renderer, config }) => {
      const markers = new Map();
      const clickables = [];
      let currentContainer = null;
      let currentAsset = null;
      let swapSerial = 0;

      const replaceContainer = async () => {
        const serial = ++swapSerial;
        const effective = quality.getConfig().effective;
        let next = null;
        let handle = null;
        try {
          if (assets && effective !== 'Q0') {
            handle = await assets.loadModel('container-40hc', { renderer, quality: effective });
            if (serial !== swapSerial) { handle.release?.(); return; }
            next = handle.scene;
            next.rotation.y = -0.08;
            await addContainerDecals(THREE, next, { quality: effective });
            assetStatus.textContent = `${handle.lod.toUpperCase()} • GLB`;
            assetBadge.textContent = `${handle.lod.toUpperCase()} • GLB`;
          }
        } catch (error) {
          console.warn('GLB indisponível; usando contêiner procedural.', error);
        }
        if (!next) {
          next = createProceduralContainer(THREE, { quality: effective, color: 0x1b6570 });
          next.rotation.y = -0.08;
          assetStatus.textContent = 'Fallback procedural';
          assetBadge.textContent = 'PROCEDURAL';
        }
        if (serial !== swapSerial) { handle?.release?.(); return; }
        if (currentContainer) {
          currentContainer.traverse?.((obj) => {
            if (obj.userData?.assetManaged) return;
            obj.geometry?.dispose?.();
            if (Array.isArray(obj.material)) obj.material.forEach(m => { m.map?.dispose?.(); m.dispose?.(); });
            else { obj.material?.map?.dispose?.(); obj.material?.dispose?.(); }
          });
          scene.remove(currentContainer);
        }
        currentAsset?.release?.();
        currentAsset = handle;
        currentContainer = next;
        scene.add(currentContainer);
      };

      await replaceContainer();

      for (const finding of labData.findings) {
        const marker = new THREE.Mesh(
          new THREE.SphereGeometry(0.28, config.effective === 'Q1' ? 10 : 16, config.effective === 'Q1' ? 8 : 12),
          new THREE.MeshStandardMaterial({ color: simulation.found.has(finding.id) ? 0x70d89a : 0xff6574, emissive: 0x42131a, emissiveIntensity: 0.55, roughness: 0.35 })
        );
        marker.position.set(...finding.position); marker.userData.findingId = finding.id;
        scene.add(marker); markers.set(finding.id, marker); clickables.push(marker);
      }

      const offAssetQuality = eventBus.on('quality:changed', () => replaceContainer());
      let t = 0;
      return {
        clickables, markers,
        update() { t += 0.018; markers.forEach(marker => marker.scale.setScalar(1 + Math.sin(t * 3 + marker.position.x) * 0.08)); },
        dispose() { offAssetQuality?.(); currentAsset?.release?.(); currentAsset = null; }
      };
    },
    onPointer: (object) => registerFinding(object.userData.findingId)
  });

  if (!sceneHandle) {
    const host = root.querySelector('#threeHost');
    host.innerHTML = `<div class="fallback-stage"><div class="container-visual"><div class="container-lines"></div>${labData.findings.map((f, i) => `<button class="hotspot hotspot--${i + 1}" data-fallback-hotspot="${f.id}" aria-label="${f.label}">!</button>`).join('')}</div><p>Modo leve 2D ativo.</p></div>`;
    host.querySelectorAll('[data-fallback-hotspot]').forEach((button) => {
      const handler = () => registerFinding(button.dataset.fallbackHotspot);
      button.addEventListener('click', handler); cleanupFns.push(() => button.removeEventListener('click', handler));
    });
    assetStatus.textContent = 'Compatibilidade / 2D'; assetBadge.textContent = 'FALLBACK 2D'; stats.textContent = 'Fallback 2D • sem WebGL';
  }

  const offStats = eventBus.on('graphics:stats', (data) => {
    const a = assets?.getStats?.();
    stats.textContent = `Draw calls ${data.calls} • ${data.triangles.toLocaleString('pt-BR')} triângulos • ${data.geometries} geometrias${a ? ` • cache ${a.cachedVariants}` : ''}`;
  });
  cleanupFns.push(offStats);

  root.querySelectorAll('[data-check]').forEach((button) => {
    const handler = () => toast(labData.findings.find(f => f.id === button.dataset.check)?.hint || 'Observe o modelo.');
    button.addEventListener('click', handler); cleanupFns.push(() => button.removeEventListener('click', handler));
  });

  const resetHandler = () => { simulation.found.clear(); save(); renderState(); toast('Inspeção reiniciada.'); };
  root.querySelector('#resetLab').addEventListener('click', resetHandler);
  cleanupFns.push(() => root.querySelector('#resetLab')?.removeEventListener('click', resetHandler));

  const cameraHandler = () => {
    if (!sceneHandle) return toast('O modo 3D não está ativo.');
    sceneHandle.camera.position.set(13, 7.5, 15); sceneHandle.controls.target.set(0, 0, 0); sceneHandle.controls.update();
  };
  root.querySelector('#resetCamera').addEventListener('click', cameraHandler);
  cleanupFns.push(() => root.querySelector('#resetCamera')?.removeEventListener('click', cameraHandler));
  renderState();
}

export async function unmount() {
  sceneHandle?.dispose?.(); sceneHandle = null;
  cleanupFns.forEach(fn => fn()); cleanupFns = [];
}
