import { yardBlocks, yardScenarios } from './data.js';
import { mountThreeScene, createProceduralContainer } from '../../services/three-engine.js';
import { createTruck, createReachStacker, createRTG, createYardBlock, createBlockSign } from '../../services/port-scene-kit.js';
import { createRealisticTerminalPad, addSafetyLane, addTerminalFence, addLightPoles } from '../../services/terminal-environment.js';
import { formatYardAddress } from '../../services/yard-addressing.js';

let sceneHandle = null;
let cleanupFns = [];
let moveDoneTimer = null;

export async function mount({ root, quality, eventBus, toast, storage, operationFlow, assets, instructorControl }) {
  const saved = storage.get('progress:patio-operacional', { scenario: 0, completed: [] });
  const state = { scenario: saved.scenario % yardScenarios.length, completed: Array.isArray(saved.completed) ? saved.completed : [] };

  root.innerHTML = `
  <section class="lab-wide">
    <header class="lab-heading"><div><span class="eyebrow">Pátio • Planejamento operacional</span><h1>Pátio 3D — Ocupação e Destinação</h1><p>Analise a condição do contêiner, compare as áreas do pátio e escolha a destinação mais coerente.</p></div><a class="button button--ghost" href="#/">← Central</a></header>
    <div class="yard-layout">
      <section class="panel panel--stage terminal-visual">
        <div id="yard3d" class="three-host three-host--terminal"><div class="stage-loading"><span class="loader-ring"></span><strong>Montando pátio operacional…</strong></div></div>
        <div class="stage-toolbar"><span class="stage-badge">TERMINAL 3D</span><span id="yardSceneTag" class="stage-badge stage-badge--secondary">CENÁRIO P1</span></div>
        <div id="yardStats" class="graphics-stats">Instancing ativo • aguardando renderer</div>
      </section>
      <section class="panel yard-console">
        <div class="panel__title"><h2>Ordem de destinação</h2><span class="tag">Operacional</span></div>
        <div class="scenario-banner"><small id="yardScenarioId">P1</small><strong id="yardScenarioTitle"></strong><span id="yardScenarioDetail"></span></div>
        <div class="cargo-chip"><span>UNIDADE</span><strong id="yardContainer"></strong></div>
        <div class="yard-block-list" id="yardBlockList"></div>
        <div class="actions"><button id="dispatchContainer" class="button button--primary" type="button">Destinar contêiner</button><button id="nextYardScenario" class="button" type="button">Próximo caso</button></div>
        <div id="yardAssigned" class="address-preview" hidden><small>ENDEREÇO DE DESTINO</small><strong>—</strong></div><div id="yardFeedback" class="feedback-box" hidden></div>
        <div class="concept-box"><strong>Objetivo didático</strong><p>O exercício usa regras simplificadas para demonstrar segregação por fluxo e necessidade operacional. Em terminais reais, endereçamento e estratégia dependem do TOS, planejamento, segurança e regras locais.</p></div>
      </section>
    </div>
  </section>`;

  let selectedBlock = '';
  let moving = false;
  const activeBlocks = () => instructorControl?.yardBlocks(yardBlocks) || yardBlocks;
  const activeScenario = () => instructorControl?.applyYardScenario(yardScenarios[state.scenario]) || yardScenarios[state.scenario];

  const save = () => storage.set('progress:patio-operacional', state);
  const renderBlocks = () => {
    root.querySelector('#yardBlockList').innerHTML = activeBlocks().map(block => `
      <button type="button" class="yard-block-choice ${selectedBlock === block.id ? 'is-selected' : ''}" data-yard-block="${block.id}">
        <span class="yard-block-choice__head"><strong>${block.name}</strong><b>${Math.round(block.occupancy * 100)}%</b></span>
        <span class="occupancy-track"><i style="width:${Math.round(block.occupancy * 100)}%"></i></span>
        <small>${block.service}</small>
      </button>`).join('');
    root.querySelectorAll('[data-yard-block]').forEach(btn => {
      const handler = () => {
        if (moving) return;
        selectedBlock = btn.dataset.yardBlock;
        renderBlocks();
        sceneHandle?.built?.focusBlock?.(selectedBlock);
      };
      btn.addEventListener('click', handler);
      cleanupFns.push(() => btn.removeEventListener('click', handler));
    });
  };

  const renderScenario = () => {
    const scenario = activeScenario();
    root.querySelector('#yardScenarioId').textContent = scenario.id;
    root.querySelector('#yardSceneTag').textContent = `CENÁRIO ${scenario.id}`;
    root.querySelector('#yardScenarioTitle').textContent = scenario.title;
    root.querySelector('#yardScenarioDetail').textContent = scenario.detail;
    root.querySelector('#yardContainer').textContent = scenario.container;
    root.querySelector('#yardFeedback').hidden = true; const assigned=root.querySelector('#yardAssigned'); if(assigned) assigned.hidden=true;
    selectedBlock = '';
    renderBlocks();
    sceneHandle?.built?.resetTarget?.();
  };

  const movementComplete = () => {
    moving = false;
    const scenario = activeScenario();
    const box = root.querySelector('#yardFeedback');
    box.hidden = false;
    box.dataset.tone = 'success';
    box.innerHTML = `<strong>Destinação concluída</strong><p>${scenario.explanation}</p>`;
    if (scenario.assignedAddress) { const a=root.querySelector('#yardAssigned'); if(a){a.hidden=false;a.querySelector('strong').textContent=formatYardAddress(scenario.assignedAddress);} }
      if (!state.completed.includes(scenario.id)) state.completed.push(scenario.id);
    save();
    toast(`Movimentação ${scenario.id} concluída.`);
    const avgOccupancy=activeBlocks().reduce((a,b)=>a+b.occupancy,0)/Math.max(1,activeBlocks().length)*100;
    eventBus.emit('simulation:complete', { moduleId: 'patio-operacional', scenario: scenario.id, lastBlock:selectedBlock, occupancyPct:avgOccupancy, address: scenario.assignedAddress ? formatYardAddress(scenario.assignedAddress) : null });
    operationFlow?.complete('patio-operacional', { scenario: scenario.id, block: selectedBlock });
  };

  sceneHandle = await mountThreeScene({
    host: root.querySelector('#yard3d'), qualityManager: quality, eventBus,
    cameraPosition: [27, 22, 31], target: [0, 1, 0],
    environment: { ground: false, fogNear: 30, fogFar: 105, cameraFar: 180, background: 0x081923, sunPosition: [24, 32, 18], sunIntensity: 4.8 },
    buildScene: async ({ THREE, scene, config, renderer }) => {
      const pad = createRealisticTerminalPad(THREE, { width: 58, depth: 46, y: -1.48, repeat: 12 });
      scene.add(pad);
      [-15, -7, 8, 16].forEach(z => addSafetyLane(THREE, scene, { z, length: 52, y: -1.36 }));
      if (config.effective !== 'Q1') {
        addTerminalFence(THREE, scene, { width: 56, depth: 44 });
        addLightPoles(THREE, scene, { enabled: ['Q3','Q4'].includes(config.effective), positions: [[-24,-18],[24,-18],[-24,18],[24,18]] });
      }

      const blockPositions = { A: [-15, -4], B: [-3, -4], C: [10, -4], D: [4, 8] };
      const blockObjects = new Map();
      activeBlocks().forEach((block, idx) => {
        const [x, z] = blockPositions[block.id];
        const built = createYardBlock(THREE, { id: block.id, x, z, cols: 4, rows: 2, tiers: config.effective === 'Q1' ? 2 : 3, occupancy: block.occupancy, quality: config.effective });
        scene.add(built.group);
        const sign = createBlockSign(THREE, { textId: block.id, x, z: z - 4.2, color: [0x4e8aa0,0xc8922f,0x4c9b8c,0x8a69bc][idx] });
        scene.add(sign);
        blockObjects.set(block.id, { ...built, sign });
      });

      const assetReleases = [];
      const addAssetOrFallback = async (assetId, fallbackFactory, scale, position, rotationY = 0) => {
        let object;
        try {
          const handle = await assets.loadModel(assetId, { renderer, quality: config.effective, scale });
          object = handle.scene; assetReleases.push(handle.release);
          object.traverse(o => { if (o.isMesh) { o.castShadow = config.effective !== 'Q1'; o.receiveShadow = true; } });
        } catch (error) {
          console.warn(`Asset ${assetId} indisponível no pátio; usando fallback.`, error);
          object = fallbackFactory(); object.scale.setScalar(scale);
        }
        object.position.set(...position); object.rotation.y = rotationY; scene.add(object); return object;
      };

      await addAssetOrFallback('truck', () => createTruck(THREE, { containerColor: 0x2c7284, loaded: false }), 0.78, [-20,-0.85,13], Math.PI);
      await addAssetOrFallback('reach-stacker', () => createReachStacker(THREE), 0.72, [-11,-0.9,12.5], -0.18);
      if (!['Q0','Q1'].includes(config.effective)) await addAssetOrFallback('rtg', () => createRTG(THREE), 0.72, [2,-0.7,0]);

      const target = createProceduralContainer(THREE, { quality: config.effective, color: 0xd68d2e, reefer: false });
      target.scale.setScalar(0.31);
      target.position.set(-18, -0.45, 13);
      scene.add(target);
      const start = target.position.clone();
      let movement = null;
      let pulse = 0;
      const destinations = {
        A: new THREE.Vector3(-13, 3.0, 0),
        B: new THREE.Vector3(1, 2.9, 0),
        C: new THREE.Vector3(10, 2.8, -4),
        D: new THREE.Vector3(4, 1.1, 8)
      };

      const focusBlock = id => {
        blockObjects.forEach((obj, key) => {
          obj.group.scale.setScalar(key === id ? 1.035 : 1);
        });
      };
      const resetTarget = () => {
        movement = null;
        target.position.copy(start);
        target.rotation.set(0,0,0);
        focusBlock('');
      };
      const startMove = id => {
        const destination = destinations[id];
        if (!destination || movement) return false;
        movement = { from: target.position.clone(), to: destination.clone(), t: 0 };
        return true;
      };
      return {
        focusBlock, resetTarget, startMove,
        dispose(){ assetReleases.forEach(fn => fn?.()); },
        update() {
          pulse += 0.02;
          if (movement) {
            movement.t = Math.min(1, movement.t + 0.012);
            const t = movement.t;
            target.position.lerpVectors(movement.from, movement.to, t);
            target.position.y += Math.sin(Math.PI * t) * 6.5;
            target.rotation.y = Math.sin(Math.PI * t) * 0.15;
            if (t >= 1) {
              const finalPosition = movement.to.clone();
              movement = null;
              target.position.copy(finalPosition);
              movementComplete();
            }
          } else {
            target.rotation.y = Math.sin(pulse) * 0.015;
          }
        }
      };
    }
  });

  if (!sceneHandle) {
    root.querySelector('#yard3d').innerHTML = '<div class="fallback-stage"><div class="yard-fallback">▥<strong>PÁTIO OPERACIONAL</strong></div><p>Modo leve: use os dados de ocupação e faça a destinação pelo painel.</p></div>';
  } else {
    const offStats = eventBus.on('graphics:stats', stats => {
      const el = root.querySelector('#yardStats');
      if (el) el.textContent = `${stats.calls} draw calls • ${stats.triangles.toLocaleString('pt-BR')} triângulos • ${stats.geometries} geometrias`;
    });
    cleanupFns.push(offStats);
  }

  const dispatch = () => {
    if (moving) return;
    const scenario = activeScenario();
    const box = root.querySelector('#yardFeedback');
    if (!selectedBlock) {
      box.hidden = false; box.dataset.tone = 'warning'; box.innerHTML = '<strong>Escolha um bloco</strong><p>Compare ocupação, fluxo e necessidade operacional antes de destinar a unidade.</p>';
      return;
    }
    if (selectedBlock !== scenario.correctBlock) {
      box.hidden = false; box.dataset.tone = 'warning'; box.innerHTML = '<strong>Destinação pouco adequada</strong><p>Revise o tipo de carga e a função de cada área antes de movimentar.</p>';
      toast('Revise a estratégia de pátio.');
      return;
    }
    moving = true;
    box.hidden = false; box.dataset.tone = 'success'; box.innerHTML = '<strong>Ordem aceita</strong><p>Executando movimentação virtual para o bloco selecionado…</p>';
    const started = sceneHandle?.built?.startMove?.(selectedBlock);
    if (!started) {
      clearTimeout(moveDoneTimer);
      moveDoneTimer = setTimeout(movementComplete, 650);
    }
  };
  const next = () => {
    if (moving) return;
    state.scenario = (state.scenario + 1) % yardScenarios.length;
    save();
    renderScenario();
  };
  root.querySelector('#dispatchContainer').addEventListener('click', dispatch);
  root.querySelector('#nextYardScenario').addEventListener('click', next);
  cleanupFns.push(() => root.querySelector('#dispatchContainer')?.removeEventListener('click', dispatch), () => root.querySelector('#nextYardScenario')?.removeEventListener('click', next));
  renderScenario();
}

export async function unmount() {
  clearTimeout(moveDoneTimer);
  moveDoneTimer = null;
  sceneHandle?.dispose?.();
  sceneHandle = null;
  cleanupFns.forEach(fn => fn?.());
  cleanupFns = [];
}
