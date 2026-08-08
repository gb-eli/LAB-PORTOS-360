import { vesselScenarios, bayChoices } from './data.js';
import { mountThreeScene } from '../../services/three-engine.js';
import { createContainerShip, createPortainer, createWaterPlane, createContainerUnit, createTruck } from '../../services/port-scene-kit.js';
import { createRealisticTerminalPad, addSafetyLane, addLightPoles } from '../../services/terminal-environment.js';
import { enhancePortainerRig } from '../../services/quay-crane-rig.js';

let sceneHandle = null;
let cleanupFns = [];
let fallbackTimer = null;

export async function mount({ root, quality, eventBus, toast, storage, operationFlow, instructorControl }) {
  const saved = storage.get('progress:navio-operacao', { scenario: 0, completed: [] });
  const state = { scenario: saved.scenario % vesselScenarios.length, completed: Array.isArray(saved.completed) ? saved.completed : [] };

  root.innerHTML = `
  <section class="lab-wide">
    <header class="lab-heading"><div><span class="eyebrow">Navios • Operação de cais</span><h1>Navio 3D — Ciclo de Carga e Descarga</h1><p>Leia a ordem operacional, confirme o sentido da movimentação e execute um ciclo simplificado de portêiner.</p></div><a class="button button--ghost" href="#/">← Central</a></header>
    <div class="ship-layout">
      <section class="panel panel--stage terminal-visual">
        <div id="ship3d" class="three-host three-host--terminal"><div class="stage-loading"><span class="loader-ring"></span><strong>Preparando cais, navio e portêiner…</strong></div></div>
        <div class="stage-toolbar"><span class="stage-badge">CAIS 3D</span><span id="shipScenarioTag" class="stage-badge stage-badge--secondary">ORDEM N1</span></div>
        <div id="shipStats" class="graphics-stats">Ciclo de guindaste pronto</div>
      </section>
      <section class="panel ship-console">
        <div class="panel__title"><h2>Ordem de operação</h2><span class="tag">Navio</span></div>
        <div class="scenario-banner"><small id="shipScenarioId">N1</small><strong id="shipScenarioTitle"></strong><span id="shipScenarioNote"></span></div>
        <div class="document-grid ship-facts"><div class="doc-tile"><span>UNIDADE</span><strong id="shipUnit"></strong></div><div class="doc-tile"><span>DESTINO</span><strong id="shipDestination"></strong></div></div>
        <label class="field"><span>Operação</span><select id="shipOperation"><option value="">Selecione…</option><option value="descarga">Descarga — navio → cais</option><option value="embarque">Embarque — cais → navio</option></select></label>
        <label class="field"><span>Bay informada</span><select id="shipBay"><option value="">--</option>${bayChoices.map(b => `<option>${b}</option>`).join('')}</select></label>
        <div class="crane-sequence"><span data-crane-step="1">1. Conferir ordem</span><span data-crane-step="2">2. Elevar</span><span data-crane-step="3">3. Transladar</span><span data-crane-step="4">4. Depositar</span></div>
        <div class="actions"><button id="runCraneCycle" class="button button--primary" type="button">Executar ciclo</button><button id="nextShipScenario" class="button" type="button">Próxima ordem</button></div>
        <div id="shipHold" class="crane-hold" hidden></div><div id="shipFeedback" class="feedback-box" hidden></div>
        <p class="legal-note">A animação resume conceitos de fluxo. Operações reais exigem planejamento de bordo, sinalização, isolamento, comunicação e procedimentos do terminal/navio.</p>
      </section>
    </div>
  </section>`;

  let busy = false;
  const hold = () => instructorControl?.craneHold?.() || { active:false };
  const save = () => storage.set('progress:navio-operacao', state);
  const setSequence = step => root.querySelectorAll('[data-crane-step]').forEach((el, i) => el.classList.toggle('is-active', i + 1 <= step));
  const renderScenario = () => {
    const s = vesselScenarios[state.scenario];
    root.querySelector('#shipScenarioId').textContent = s.id;
    root.querySelector('#shipScenarioTag').textContent = `ORDEM ${s.id}`;
    root.querySelector('#shipScenarioTitle').textContent = s.title;
    root.querySelector('#shipScenarioNote').textContent = s.note;
    root.querySelector('#shipUnit').textContent = s.unit;
    root.querySelector('#shipDestination').textContent = s.destination;
    root.querySelector('#shipOperation').value = '';
    root.querySelector('#shipBay').value = '';
    root.querySelector('#shipFeedback').hidden = true;
    const h=hold(),holdBox=root.querySelector('#shipHold');holdBox.hidden=!h.active;holdBox.innerHTML=h.active?`<strong>OPERAÇÃO SUSPENSA</strong><span>Alerta meteorológico didático • ${h.windKts} kt. O ciclo permanece bloqueado enquanto a exceção estiver ativa.</span>`:'';
    setSequence(0);
    sceneHandle?.built?.resetCycle?.(s.operation);
  };

  const cycleDone = () => {
    busy = false;
    setSequence(4);
    const s = vesselScenarios[state.scenario];
    const box = root.querySelector('#shipFeedback');
    box.hidden = false; box.dataset.tone = 'success';
    box.innerHTML = `<strong>Ciclo concluído</strong><p>${s.operation === 'descarga' ? 'A unidade chegou ao cais e pode seguir para o fluxo terrestre.' : 'A unidade foi posicionada a bordo no exercício.'}</p>`;
    if (!state.completed.includes(s.id)) state.completed.push(s.id);
    save();
    toast(`Ordem ${s.id} concluída.`);
    eventBus.emit('simulation:complete', { moduleId: 'navio-operacao', scenario: s.id, moves:1, minutes:3 });
    operationFlow?.complete('navio-operacao', { scenario: s.id, operation: s.operation, bay: s.bay });
  };

  sceneHandle = await mountThreeScene({
    host: root.querySelector('#ship3d'), qualityManager: quality, eventBus,
    cameraPosition: [35, 22, 35], target: [2, 2.5, 1],
    environment: { ground: false, fogNear: 35, fogFar: 120, cameraFar: 220, background: 0x082130, sunPosition: [26, 35, 18], sunIntensity: 5.1 },
    buildScene: async ({ THREE, scene, config }) => {
      const water = createWaterPlane(THREE, { width: 90, depth: 36, y: -1.25 });
      water.position.z = 11;
      scene.add(water);
      const quay = createRealisticTerminalPad(THREE, { width: 62, depth: 18, y: -1.36, repeat: 10 });
      quay.position.z = -17;
      scene.add(quay);
      addSafetyLane(THREE, scene, { z: -9.2, length: 58, y: -1.24, color: 0xf2c94c });
      if (config.effective !== 'Q1') addLightPoles(THREE, scene, { enabled: ['Q3','Q4'].includes(config.effective), positions: [[-24,-17],[24,-17]] });
      const edge = new THREE.Mesh(new THREE.BoxGeometry(62, 1.7, 1.1), new THREE.MeshStandardMaterial({ color: 0x6f7d82, roughness: 0.86 }));
      edge.position.set(0, -0.65, -8.1);
      scene.add(edge);

      const ship = createContainerShip(THREE, { length: 37, color: 0x2b596d });
      ship.position.set(1, -0.25, 5.8);
      scene.add(ship);

      const crane1 = createPortainer(THREE, { color: 0xdce2e4 });
      crane1.scale.setScalar(1.08);
      crane1.position.set(3, -0.75, -7.3);
      scene.add(crane1);
      const hoistRig = enhancePortainerRig(THREE, crane1);
      if (!['Q0','Q1'].includes(config.effective)) {
        const crane2 = createPortainer(THREE, { color: 0xcbd6da });
        crane2.scale.setScalar(0.95);
        crane2.position.set(15, -0.85, -7.2);
        scene.add(crane2);
      }

      const truck = createTruck(THREE, { loaded: false, color: 0xc7d4d9 });
      truck.scale.setScalar(0.72);
      truck.position.set(-12, -0.8, -14.5);
      truck.rotation.y = Math.PI;
      scene.add(truck);

      const unit = createContainerUnit(THREE, { color: 0xd88f2f, scale: 1.0 });
      unit.scale.setScalar(0.88);
      scene.add(unit);
      const aboard = new THREE.Vector3(4, 3.0, 5.0);
      const ashore = new THREE.Vector3(4, -0.25, -14.0);
      let direction = 'descarga';
      let motion = null;

      const resetCycle = op => {
        direction = op || 'descarga';
        motion = null;
        unit.position.copy(direction === 'descarga' ? aboard : ashore);
        unit.rotation.set(0,0,0);
      };
      const runCycle = op => {
        if (motion) return false;
        direction = op;
        const from = (op === 'descarga' ? aboard : ashore).clone();
        const to = (op === 'descarga' ? ashore : aboard).clone();
        unit.position.copy(from);
        motion = { from, to, t: 0 };
        return true;
      };
      resetCycle('descarga');
      return {
        resetCycle, runCycle,
        update() {
          if (!motion) { hoistRig?.update?.(); return; }
          motion.t = Math.min(1, motion.t + 0.009);
          const t = motion.t;
          const liftY = 8.2;
          if (t < 0.28) {
            const k = t / 0.28;
            unit.position.set(motion.from.x, THREE.MathUtils.lerp(motion.from.y, liftY, k), motion.from.z);
            setSequence(2);
          } else if (t < 0.72) {
            const k = (t - 0.28) / 0.44;
            unit.position.set(THREE.MathUtils.lerp(motion.from.x, motion.to.x, k), liftY, THREE.MathUtils.lerp(motion.from.z, motion.to.z, k));
            setSequence(3);
          } else {
            const k = (t - 0.72) / 0.28;
            unit.position.set(motion.to.x, THREE.MathUtils.lerp(liftY, motion.to.y, k), motion.to.z);
            setSequence(4);
          }
          hoistRig?.followWorldTarget?.(unit.position, { offsetY: 1.65 });
          if (t >= 1) {
            motion = null;
            unit.position.copy(direction === 'descarga' ? ashore : aboard);
            cycleDone();
          }
        },
        dispose(){hoistRig?.dispose?.();}
      };
    }
  });

  if (!sceneHandle) {
    root.querySelector('#ship3d').innerHTML = '<div class="fallback-stage"><div class="ship-fallback">◭<strong>NAVIO / CAIS</strong></div><p>Modo leve: valide a ordem e execute o ciclo pelo painel.</p></div>';
  } else {
    const offStats = eventBus.on('graphics:stats', stats => {
      const el = root.querySelector('#shipStats');
      if (el) el.textContent = `${stats.calls} draw calls • ${stats.triangles.toLocaleString('pt-BR')} triângulos • ${stats.textures} texturas`;
    });
    cleanupFns.push(offStats);
  }

  const run = () => {
    if (busy) return;
    const s = vesselScenarios[state.scenario];
    const h=hold();
    if(h.active){const box=root.querySelector('#shipFeedback');box.hidden=false;box.dataset.tone='warning';box.innerHTML=`<strong>Ciclo bloqueado</strong><p>O alerta de vento (${h.windKts} kt no cenário) precisa ser removido/reavaliado antes da movimentação.</p>`;eventBus.emit('simulation:step',{moduleId:'navio-operacao',hold:'wind',windKts:h.windKts});return;}
    const op = root.querySelector('#shipOperation').value;
    const bay = root.querySelector('#shipBay').value;
    const box = root.querySelector('#shipFeedback');
    if (!op || !bay) {
      box.hidden = false; box.dataset.tone = 'warning'; box.innerHTML = '<strong>Ordem incompleta</strong><p>Informe o sentido da operação e a Bay antes de iniciar o ciclo.</p>';
      return;
    }
    if (op !== s.operation || bay !== s.bay) {
      box.hidden = false; box.dataset.tone = 'warning'; box.innerHTML = '<strong>Conferência divergente</strong><p>Revise a ordem apresentada. Um ciclo não deve começar com sentido ou posição incorretos.</p>';
      toast('Revise a ordem de operação.');
      return;
    }
    busy = true;
    setSequence(1);
    box.hidden = false; box.dataset.tone = 'success'; box.innerHTML = '<strong>Ordem conferida</strong><p>Portêiner virtual executando o ciclo…</p>';
    const started = sceneHandle?.built?.runCycle?.(op);
    if (!started) {
      clearTimeout(fallbackTimer);
      fallbackTimer = setTimeout(cycleDone, 900);
    }
  };
  const next = () => {
    if (busy) return;
    state.scenario = (state.scenario + 1) % vesselScenarios.length;
    save();
    renderScenario();
  };
  root.querySelector('#runCraneCycle').addEventListener('click', run);
  root.querySelector('#nextShipScenario').addEventListener('click', next);
  cleanupFns.push(() => root.querySelector('#runCraneCycle')?.removeEventListener('click', run), () => root.querySelector('#nextShipScenario')?.removeEventListener('click', next));
  renderScenario();
}

export async function unmount() {
  clearTimeout(fallbackTimer);
  fallbackTimer = null;
  sceneHandle?.dispose?.();
  sceneHandle = null;
  cleanupFns.forEach(fn => fn?.());
  cleanupFns = [];
}
