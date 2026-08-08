import { mountThreeScene } from '../../services/three-engine.js';
import { createContainerUnit } from '../../services/port-scene-kit.js';
import { createRealisticTerminalPad, createRailTrack, createRailWagon, createLocomotive, addLightPoles } from '../../services/terminal-environment.js';

let sceneHandle = null;
let cleanupFns = [];

export async function mount({ root, quality, eventBus, toast, storage, assets, instructorControl }) {
  const state = storage.get('progress:terminal-ferroviario', { cycles: 0, delayHandled: false, delayToken: null });
  const delay = () => instructorControl?.railDelay?.() || {active:false,minutes:0};
  root.innerHTML = `
  <section class="lab-wide">
    <header class="lab-heading">
      <div><span class="eyebrow">Intermodal • Ferrovia</span><h1>Terminal Ferroviário — Formação e Transferência</h1><p>Movimente a composição e execute uma transferência simplificada vagão ↔ pátio.</p></div>
      <a class="button button--ghost" href="#/">← Central</a>
    </header>
    <div class="intermodal-layout">
      <section class="panel panel--stage terminal-visual">
        <div id="rail3d" class="three-host three-host--terminal"></div>
        <div class="stage-toolbar"><span class="stage-badge">COMPOSIÇÃO 3D</span><span id="railStatus" class="stage-badge stage-badge--secondary">PARADA</span></div>
      </section>
      <section class="panel intermodal-console">
        <div class="panel__title"><h2>Controle da composição</h2><span id="railCycles" class="tag">0 ciclos</span></div>
        <div class="rail-sequence"><span data-rs="1">1. Posicionar trem</span><span data-rs="2">2. Travar área</span><span data-rs="3">3. Elevar unidade</span><span data-rs="4">4. Depositar</span></div>
        <div id="railDelayBox" class="rail-delay-box" hidden></div><div class="actions"><button id="moveTrain" class="button">Mover composição</button><button id="replanRail" class="button" hidden>Replanejar janela</button><button id="transferRail" class="button button--primary">Transferir unidade</button></div>
        <div id="railFeedback" class="feedback-box" hidden></div>
        <p class="legal-note">Cinemática didática. Procedimentos reais dependem de operador ferroviário, terminal, sinalização e plano operacional.</p>
      </section>
    </div>
  </section>`;

  let motion = 'idle';
  let t = 0;
  let trainGroup = null;
  let unit = null;
  let railOrigin = null;
  const renderDelay=()=>{const d=delay(),box=root.querySelector('#railDelayBox'),btn=root.querySelector('#replanRail');if(d.active&&state.delayToken!==d.token){state.delayHandled=false;state.delayToken=d.token;storage.set('progress:terminal-ferroviario',state);}if(!d.active&&state.delayToken){state.delayHandled=false;state.delayToken=null;storage.set('progress:terminal-ferroviario',state);}if(d.active&&!state.delayHandled){box.hidden=false;btn.hidden=false;box.innerHTML=`<strong>ATRASO INJETADO</strong><span>Composição com +${d.minutes} min. Replaneje a janela antes da transferência.</span>`;}else{box.hidden=true;btn.hidden=true;}};
  const setSteps = (n) => root.querySelectorAll('[data-rs]').forEach((el, i) => el.classList.toggle('is-active', i < n));

  sceneHandle = await mountThreeScene({
    host: root.querySelector('#rail3d'),
    qualityManager: quality,
    eventBus,
    cameraPosition: [32, 18, 28],
    target: [0, 0, 2],
    environment: { ground: false, fogNear: 35, fogFar: 120 },
    buildScene: async ({ THREE, scene, renderer, config }) => {
      scene.add(createRealisticTerminalPad(THREE, { width: 72, depth: 38, y: -1.45, repeat: 13 }));
      if (config.effective !== 'Q1') addLightPoles(THREE, scene, { enabled: ['Q3', 'Q4'].includes(config.effective) });
      const track = createRailTrack(THREE, { length: 68, y: -1.24 });
      track.position.z = 7;
      scene.add(track);

      trainGroup = new THREE.Group();
      let locomotive = null;
      let release = null;
      try {
        const handle = await assets.loadModel('locomotive', { renderer, quality: config.effective, scale: 0.9 });
        locomotive = handle.scene;
        release = handle.release;
      } catch {
        locomotive = createLocomotive(THREE);
      }
      locomotive.position.x = -20;
      trainGroup.add(locomotive);
      [-11, -2, 7, 16].forEach((x, i) => {
        const wagon = createRailWagon(THREE, { loaded: i !== 1 });
        wagon.position.set(x, 0, 0);
        trainGroup.add(wagon);
      });
      trainGroup.position.z = 7;
      scene.add(trainGroup);

      unit = createContainerUnit(THREE, { color: 0xd08b2f, scale: 1 });
      unit.position.set(-2, 0.8, 7);
      railOrigin = unit.position.clone();
      scene.add(unit);

      return {
        update() {
          if (motion === 'train') {
            t = Math.min(1, t + 0.008);
            trainGroup.position.x = -10 + Math.sin(t * Math.PI) * 10;
            if (t >= 1) {
              motion = 'idle'; t = 0;
              root.querySelector('#railStatus').textContent = 'POSICIONADO';
            }
            return;
          }
          if (motion !== 'transfer') return;

          t = Math.min(1, t + 0.009);
          const destination = new THREE.Vector3(-2, 0.2, -8);
          const lift = 7;
          if (t < 0.3) {
            unit.position.set(railOrigin.x, THREE.MathUtils.lerp(railOrigin.y, lift, t / 0.3), railOrigin.z);
          } else if (t < 0.72) {
            const k = (t - 0.3) / 0.42;
            unit.position.set(THREE.MathUtils.lerp(railOrigin.x, destination.x, k), lift, THREE.MathUtils.lerp(railOrigin.z, destination.z, k));
            setSteps(3);
          } else {
            const k = (t - 0.72) / 0.28;
            unit.position.set(destination.x, THREE.MathUtils.lerp(lift, destination.y, k), destination.z);
            setSteps(4);
          }
          if (t >= 1) {
            motion = 'idle'; t = 0;
            state.cycles += 1;
            storage.set('progress:terminal-ferroviario', state);
            root.querySelector('#railCycles').textContent = `${state.cycles} ciclos`;
            root.querySelector('#railStatus').textContent = 'TRANSFERIDO';
            const box = root.querySelector('#railFeedback');
            box.hidden = false; box.dataset.tone = 'success';
            box.innerHTML = '<strong>Transferência concluída</strong><p>A unidade deixou o vagão e foi depositada na área de transferência.</p>';
            toast('Ciclo ferroviário concluído.');
            eventBus.emit('simulation:complete', { moduleId: 'terminal-ferroviario', cycles: state.cycles });
          }
        },
        resetUnit() { unit.position.copy(railOrigin); },
        dispose() { release?.(); }
      };
    }
  });

  if (!sceneHandle) root.querySelector('#rail3d').innerHTML = '<div class="fallback-stage"><strong>FERROVIA</strong><p>Modo leve disponível.</p></div>';

  const move = () => {
    if (motion !== 'idle') return;
    motion = 'train'; t = 0; setSteps(1);
    root.querySelector('#railStatus').textContent = 'EM MOVIMENTO';
  };
  const transfer = () => {
    if (motion !== 'idle') return;
    const d=delay();if(d.active&&!state.delayHandled){const box=root.querySelector('#railFeedback');box.hidden=false;box.dataset.tone='warning';box.innerHTML=`<strong>Transferência bloqueada</strong><p>A janela possui atraso de ${d.minutes} min. Replaneje antes de iniciar.</p>`;return;}
    sceneHandle?.built?.resetUnit?.();
    motion = 'transfer'; t = 0; setSteps(2);
    root.querySelector('#railStatus').textContent = 'TRANSFERINDO';
  };
  const replan=()=>{state.delayHandled=true;storage.set('progress:terminal-ferroviario',state);renderDelay();eventBus.emit('simulation:step',{moduleId:'terminal-ferroviario',exception:'rail-delay',action:'replanejado'});toast('Janela ferroviária replanejada no cenário.');};
  root.querySelector('#moveTrain').addEventListener('click', move);
  root.querySelector('#replanRail').addEventListener('click', replan);
  root.querySelector('#transferRail').addEventListener('click', transfer);
  cleanupFns.push(() => root.querySelector('#moveTrain')?.removeEventListener('click', move), () => root.querySelector('#replanRail')?.removeEventListener('click', replan), () => root.querySelector('#transferRail')?.removeEventListener('click', transfer));
  root.querySelector('#railCycles').textContent = `${state.cycles} ciclos`;renderDelay();
}

export async function unmount() {
  sceneHandle?.dispose?.();
  sceneHandle = null;
  cleanupFns.forEach((fn) => fn?.());
  cleanupFns = [];
}
