import { equipmentInfo, equipmentChallenges } from './data.js';
import { mountThreeScene } from '../../services/three-engine.js';
import { createAsphaltPad, createReachStacker, createRTG, createPortainer, createContainerUnit } from '../../services/port-scene-kit.js';

let sceneHandle = null;
let cleanupFns = [];

export async function mount({ root, quality, eventBus, toast, storage, assets }) {
  const saved = storage.get('progress:equipamentos-portuarios', { challenge: 0, correct: 0 });
  const state = { challenge: saved.challenge % equipmentChallenges.length, correct: saved.correct || 0 };
  let selected = 'reach';

  root.innerHTML = `
  <section class="lab-wide">
    <header class="lab-heading"><div><span class="eyebrow">Equipamentos • Reconhecimento técnico</span><h1>Equipamentos Portuários 3D</h1><p>Compare Reach Stacker, RTG e Portêiner em uma vitrine tridimensional e relacione cada equipamento à sua função.</p></div><a class="button button--ghost" href="#/">← Central</a></header>
    <div class="equipment-layout">
      <section class="panel panel--stage terminal-visual">
        <div id="equipment3d" class="three-host three-host--terminal"><div class="stage-loading"><span class="loader-ring"></span><strong>Montando equipamentos…</strong></div></div>
        <div class="stage-toolbar"><span class="stage-badge">SHOWROOM 3D</span><span id="equipmentSceneTag" class="stage-badge stage-badge--secondary">REACH STACKER</span></div>
      </section>
      <section class="panel equipment-console">
        <div class="panel__title"><h2>Ficha do equipamento</h2><span class="tag">3D</span></div>
        <div id="equipmentTabs" class="equipment-tabs"></div>
        <div class="equipment-fact"><small>FUNÇÃO PRINCIPAL</small><strong id="equipmentName"></strong><p id="equipmentRole"></p><span id="equipmentCue"></span></div>
        <div class="challenge-card"><small id="equipmentChallengeId">DESAFIO E1</small><strong id="equipmentQuestion"></strong><div id="equipmentAnswers" class="equipment-answer-grid"></div></div>
        <div id="equipmentFeedback" class="feedback-box" hidden></div>
        <div class="actions"><button id="demoEquipment" class="button button--primary" type="button">▶ Demonstrar movimento</button><button id="nextEquipmentChallenge" class="button" type="button">Outro desafio</button></div>
        <p class="legal-note">Modelos procedurais simplificados para reconhecimento visual. Geometria, capacidade e procedimentos variam conforme fabricante e terminal.</p>
      </section>
    </div>
  </section>`;

  const save = () => storage.set('progress:equipamentos-portuarios', state);
  const renderInfo = () => {
    const info = equipmentInfo.find(e => e.id === selected);
    root.querySelector('#equipmentSceneTag').textContent = info.name.toUpperCase();
    root.querySelector('#equipmentName').textContent = info.name;
    root.querySelector('#equipmentRole').textContent = info.role;
    root.querySelector('#equipmentCue').textContent = info.cue;
    root.querySelector('#equipmentTabs').innerHTML = equipmentInfo.map(e => `<button type="button" class="equipment-tab ${e.id === selected ? 'is-selected' : ''}" data-equipment="${e.id}">${e.name}</button>`).join('');
    root.querySelectorAll('[data-equipment]').forEach(btn => {
      const handler = () => {
        selected = btn.dataset.equipment;
        renderInfo();
        sceneHandle?.built?.focusEquipment?.(selected);
      };
      btn.addEventListener('click', handler);
      cleanupFns.push(() => btn.removeEventListener('click', handler));
    });
  };

  const renderChallenge = () => {
    const c = equipmentChallenges[state.challenge];
    root.querySelector('#equipmentChallengeId').textContent = `DESAFIO ${c.id}`;
    root.querySelector('#equipmentQuestion').textContent = c.question;
    root.querySelector('#equipmentAnswers').innerHTML = equipmentInfo.map(e => `<button type="button" class="decision-card" data-answer="${e.id}"><strong>${e.name}</strong><span>${e.cue}</span></button>`).join('');
    root.querySelector('#equipmentFeedback').hidden = true;
    root.querySelectorAll('[data-answer]').forEach(btn => {
      const handler = () => checkAnswer(btn.dataset.answer);
      btn.addEventListener('click', handler);
      cleanupFns.push(() => btn.removeEventListener('click', handler));
    });
  };

  const checkAnswer = answer => {
    const c = equipmentChallenges[state.challenge];
    const ok = answer === c.answer;
    selected = answer;
    renderInfo();
    sceneHandle?.built?.focusEquipment?.(answer);
    const box = root.querySelector('#equipmentFeedback');
    box.hidden = false; box.dataset.tone = ok ? 'success' : 'warning';
    const info = equipmentInfo.find(e => e.id === c.answer);
    box.innerHTML = ok ? `<strong>Correto</strong><p>${info.name}: ${info.role}</p>` : `<strong>Compare a aplicação</strong><p>Pense onde o equipamento trabalha e qual alcance ele precisa ter.</p>`;
    if (ok) {
      state.correct += 1; save(); toast('Equipamento identificado.');
      eventBus.emit('simulation:complete', { moduleId: 'equipamentos-portuarios', challenge: c.id });
    }
  };

  sceneHandle = await mountThreeScene({
    host: root.querySelector('#equipment3d'), qualityManager: quality, eventBus,
    cameraPosition: [28, 17, 31], target: [0, 2.2, 0],
    environment: { ground: false, fogNear: 28, fogFar: 95, cameraFar: 180, background: 0x071a24, sunPosition: [20, 28, 16], sunIntensity: 4.7 },
    buildScene: async ({ THREE, scene, controls, renderer, config }) => {
      scene.add(createAsphaltPad(THREE, { width: 58, depth: 36, y: -1.46 }));
      const equipment = new Map();
      const assetReleases = [];
      const loadEquipment = async (key, assetId, fallbackFactory, scale, position, rotationY = 0) => {
        let group;
        try {
          const handle = await assets.loadModel(assetId, { renderer, quality: config.effective, scale });
          group = handle.scene; assetReleases.push(handle.release);
          group.userData.assetLod = handle.lod;
          group.traverse(obj => { if (obj.isMesh) { obj.castShadow = config.effective !== 'Q1'; obj.receiveShadow = true; } });
        } catch (error) {
          console.warn(`Fallback procedural: ${assetId}`, error);
          group = fallbackFactory(); group.scale.setScalar(scale);
        }
        group.position.set(...position); group.rotation.y = rotationY; group.userData.kind = key;
        const find = name => group.getObjectByName(name) || group.children.find(o => o.name?.startsWith(name));
        if (key === 'reach') group.userData.rig = { boom: find('boom'), spreader: find('spreader') };
        if (key === 'rtg') group.userData.rig = { trolley: find('trolley'), spreader: find('spreader'), ropes: group.children.filter(o => o.name?.startsWith('rope')) };
        if (key === 'portainer') group.userData.rig = { trolley: find('trolley'), spreader: find('spreader'), boom: find('boom') };
        scene.add(group); equipment.set(key, group); return group;
      };
      const reach = await loadEquipment('reach','reach-stacker',() => createReachStacker(THREE),0.92,[-15,-0.82,0]);
      const rtg = await loadEquipment('rtg','rtg',() => createRTG(THREE),0.72,[0,-0.72,0]);
      const portainer = await loadEquipment('portainer','portainer',() => createPortainer(THREE),0.72,[15,-0.72,-1.8],Math.PI/2);
      const sample = createContainerUnit(THREE, { color: 0x2f7485 }); sample.position.set(-8, -0.78, -5); scene.add(sample);
      const sample2 = createContainerUnit(THREE, { color: 0xa94f42 }); sample2.position.set(4, -0.78, 4); scene.add(sample2);

      const baseScales = new Map([...equipment.entries()].map(([key, group]) => [key, group.scale.clone()]));
      const targets = { reach: new THREE.Vector3(-15, 1.4, 0), rtg: new THREE.Vector3(0, 2.2, 0), portainer: new THREE.Vector3(15, 2.6, -1.8) };
      const cameraTargets = { reach: [ -5, 9, 16 ], rtg: [ 12, 12, 18 ], portainer: [ 28, 13, 18 ] };
      let desiredTarget = targets.reach.clone();
      let desiredCamera = new THREE.Vector3(...cameraTargets.reach);
      let demo = { active: false, id: 'reach', t: 0 };
      const focusEquipment = id => {
        desiredTarget = targets[id]?.clone() || targets.reach.clone();
        desiredCamera = new THREE.Vector3(...(cameraTargets[id] || cameraTargets.reach));
        equipment.forEach((group, key) => group.scale.copy(baseScales.get(key)).multiplyScalar(key === id ? 1.035 : 1));
      };
      const startDemo = id => { demo = { active: true, id, t: 0 }; focusEquipment(id); };
      return {
        focusEquipment, startDemo,
        dispose(){ assetReleases.forEach(fn => fn?.()); },
        update() {
          controls.target.lerp(desiredTarget, 0.04);
          controls.object.position.lerp(desiredCamera, 0.025);
          if (!demo.active) return;
          demo.t += 0.018;
          const phase = (Math.sin(demo.t * 2.2) + 1) / 2;
          const group = equipment.get(demo.id);
          const rig = group?.userData?.rig;
          if (demo.id === 'reach' && rig) {
            rig.boom.rotation.z = -0.28 - phase * 0.23;
            rig.spreader.position.y = 2.05 + phase * 1.0;
          }
          if (demo.id === 'rtg' && rig) {
            rig.trolley.position.z = -2.25 + phase * 4.5;
            rig.spreader.position.y = 2.0 + phase * 1.75;
            rig.ropes?.forEach(rope => { rope.scale.y = 1 - phase * 0.38; rope.position.y = 3.6 + phase * 0.48; });
          }
          if (demo.id === 'portainer' && rig) {
            rig.trolley.position.z = 0.4 + phase * 5.0;
            rig.spreader.position.z = rig.trolley.position.z;
            rig.spreader.position.y = 2.5 + phase * 1.8;
          }
          if (demo.t > Math.PI * 2.1) demo.active = false;
        }
      };
    }
  });
  if (!sceneHandle) root.querySelector('#equipment3d').innerHTML = '<div class="fallback-stage"><div class="equipment-fallback">⚙<strong>EQUIPAMENTOS PORTUÁRIOS</strong></div><p>Modo leve com fichas e desafios.</p></div>';

  const demoHandler = () => {
    sceneHandle?.built?.startDemo?.(selected);
    toast(`Demonstração: ${equipmentInfo.find(e => e.id === selected)?.name || 'equipamento'}.`);
  };
  root.querySelector('#demoEquipment').addEventListener('click', demoHandler);
  cleanupFns.push(() => root.querySelector('#demoEquipment')?.removeEventListener('click', demoHandler));

  const next = () => {
    state.challenge = (state.challenge + 1) % equipmentChallenges.length;
    save(); renderChallenge();
  };
  root.querySelector('#nextEquipmentChallenge').addEventListener('click', next);
  cleanupFns.push(() => root.querySelector('#nextEquipmentChallenge')?.removeEventListener('click', next));
  renderInfo(); renderChallenge();
}

export async function unmount() {
  sceneHandle?.dispose?.(); sceneHandle = null;
  cleanupFns.forEach(fn => fn?.()); cleanupFns = [];
}
