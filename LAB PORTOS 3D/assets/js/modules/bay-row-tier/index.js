import { challenges, bayOptions, rowOptions, tierOptions } from './data.js';
import { mountThreeScene } from '../../services/three-engine.js';
let cleanupFns = [];
let sceneHandle = null;

export async function mount({ root, quality, eventBus, toast, storage }) {
  let index = storage.get('progress:bay-row-tier', { index: 0 }).index % challenges.length;
  root.innerHTML = `
  <section class="lab-wide">
    <header class="lab-heading"><div><span class="eyebrow">Navios • Plano de estivagem</span><h1>Bay / Row / Tier</h1><p>Observe a posição destacada na matriz tridimensional e identifique seu endereço.</p></div><a class="button button--ghost" href="#/">← Central</a></header>
    <div class="bay-layout">
      <section class="panel panel--stage"><div id="bay3d" class="three-host"><div class="stage-loading"><span class="loader-ring"></span><strong>Montando bloco de estivagem…</strong></div></div><div class="stage-toolbar"><span class="stage-badge">INSTANCING 3D</span><span id="bayChallengeTag" class="stage-badge stage-badge--secondary">Desafio B1</span></div></section>
      <section class="panel">
        <div class="panel__title"><h2>Identifique a posição</h2><span class="tag">Treino</span></div>
        <p>A unidade em destaque representa uma posição de treinamento. Selecione Bay, Row e Tier.</p>
        <div class="coordinate-selects">
          <label class="field"><span>Bay</span><select id="baySelect"><option value="">--</option>${bayOptions.map(v => `<option>${v}</option>`).join('')}</select></label>
          <label class="field"><span>Row</span><select id="rowSelect"><option value="">--</option>${rowOptions.map(v => `<option>${v}</option>`).join('')}</select></label>
          <label class="field"><span>Tier</span><select id="tierSelect"><option value="">--</option>${tierOptions.map(v => `<option>${v}</option>`).join('')}</select></label>
        </div>
        <div class="coordinate-code"><small>POSIÇÃO INFORMADA</small><strong id="coordinatePreview">-- / -- / --</strong></div>
        <div class="actions"><button id="checkBay" class="button button--primary" type="button">Conferir posição</button><button id="nextBay" class="button" type="button">Outro desafio</button></div>
        <div id="bayFeedback" class="feedback-box" hidden></div>
        <div class="concept-box"><strong>Leitura didática</strong><p><b>Bay</b> indica a seção longitudinal, <b>Row</b> a posição transversal e <b>Tier</b> o nível vertical. A convenção real depende do plano de estivagem e deve ser lida conforme a documentação operacional.</p></div>
      </section>
    </div>
  </section>`;

  const createScene = async () => {
    sceneHandle?.dispose?.();
    const c = challenges[index];
    sceneHandle = await mountThreeScene({
      host: root.querySelector('#bay3d'), qualityManager: quality, eventBus, cameraPosition: [12, 10, 17], target: [0, 1, 0],
      buildScene: async ({ THREE, scene }) => {
        const geometry = new THREE.BoxGeometry(3.45, 1.15, 1.35);
        const material = new THREE.MeshStandardMaterial({ color: 0x2d7183, roughness: 0.72, metalness: 0.18 });
        const positions = [];
        for (let bx = -2; bx <= 2; bx += 1) for (let rz = -1; rz <= 1; rz += 1) for (let ty = 0; ty <= 2; ty += 1) positions.push([bx * 4, ty * 1.35, rz * 1.65]);
        const mesh = new THREE.InstancedMesh(geometry, material, positions.length);
        const dummy = new THREE.Object3D();
        positions.forEach((pos, i) => { dummy.position.set(...pos); dummy.updateMatrix(); mesh.setMatrixAt(i, dummy.matrix); });
        mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh);
        const highlight = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ color: 0xffc857, emissive: 0x6a3d00, emissiveIntensity: 0.7, roughness: 0.4 }));
        highlight.position.set(c.x, c.y * 1.35, c.z * 0.825);
        highlight.scale.set(1.03, 1.06, 1.06); scene.add(highlight);
        const deck = new THREE.Mesh(new THREE.BoxGeometry(24, 0.45, 8), new THREE.MeshStandardMaterial({ color: 0x26343d, roughness: 0.88 }));
        deck.position.y = -0.9; scene.add(deck);
        let t = 0; return { update(){ t += .02; highlight.material.emissiveIntensity = .55 + Math.sin(t*3)*.18; } };
      }
    });
    if (!sceneHandle) root.querySelector('#bay3d').innerHTML = '<div class="fallback-stage"><div class="bay-fallback">▦<strong>Bloco de estivagem</strong></div><p>Modo leve sem WebGL.</p></div>';
  };

  const preview = () => { root.querySelector('#coordinatePreview').textContent = `${root.querySelector('#baySelect').value || '--'} / ${root.querySelector('#rowSelect').value || '--'} / ${root.querySelector('#tierSelect').value || '--'}`; };
  const render = async () => {
    root.querySelector('#bayChallengeTag').textContent = `Desafio ${challenges[index].id}`;
    ['#baySelect','#rowSelect','#tierSelect'].forEach(sel => root.querySelector(sel).value = ''); preview(); root.querySelector('#bayFeedback').hidden = true;
    await createScene();
  };
  const check = () => {
    const c = challenges[index];
    const answer = [root.querySelector('#baySelect').value, root.querySelector('#rowSelect').value, root.querySelector('#tierSelect').value];
    const ok = answer[0] === c.bay && answer[1] === c.row && answer[2] === c.tier;
    const box = root.querySelector('#bayFeedback'); box.hidden = false; box.dataset.tone = ok ? 'success' : 'warning';
    box.innerHTML = ok ? `<strong>Posição correta</strong><p>Endereço: Bay ${c.bay}, Row ${c.row}, Tier ${c.tier}.</p>` : '<strong>Ainda não</strong><p>Observe a posição destacada e compare os três eixos do exercício.</p>';
    toast(ok ? 'Posição identificada.' : 'Revise Bay, Row e Tier.');
    if (ok) eventBus.emit('simulation:complete', { moduleId: 'bay-row-tier', challenge: c.id });
  };
  const next = async () => { index = (index + 1) % challenges.length; storage.set('progress:bay-row-tier', { index }); await render(); };
  ['#baySelect','#rowSelect','#tierSelect'].forEach(sel => { const el = root.querySelector(sel); el.addEventListener('change', preview); cleanupFns.push(() => el.removeEventListener('change', preview)); });
  root.querySelector('#checkBay').addEventListener('click', check); root.querySelector('#nextBay').addEventListener('click', next);
  cleanupFns.push(() => root.querySelector('#checkBay')?.removeEventListener('click', check), () => root.querySelector('#nextBay')?.removeEventListener('click', next));
  await render();
}

export async function unmount() { sceneHandle?.dispose?.(); sceneHandle = null; cleanupFns.forEach(fn => fn()); cleanupFns = []; }
