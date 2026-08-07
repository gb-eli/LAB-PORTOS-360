import { labData } from './data.js';
import { ContainerInspectionSimulation } from './simulation.js';

let cleanupFns = [];

export async function mount(context) {
  const { root, eventBus, storage, toast } = context;
  const previous = storage.get('progress:container-40hc-inspecao', { found: [] });
  const simulation = new ContainerInspectionSimulation(labData);
  previous.found?.forEach((id) => simulation.registerFinding(id));

  root.innerHTML = `
    <section class="lab-shell" aria-label="Laboratório de inspeção de contêiner 40 HC">
      <aside class="panel">
        <div class="panel__title"><h2>Missão</h2><span class="tag">Guiado</span></div>
        <p>${labData.mission}</p>
        <div class="progress" aria-label="Progresso da inspeção"><span id="labProgress"></span></div>
        <p><strong id="labProgressText">0%</strong> concluído</p>
        <ul class="checklist" id="checklist">
          ${labData.findings.map(item => `<li><button type="button" data-check="${item.id}" data-done="false">○ ${item.label}</button></li>`).join('')}
        </ul>
        <div class="actions"><a class="button button--ghost" href="#/">← Voltar à central</a></div>
      </aside>

      <section class="lab-stage" aria-label="Área de inspeção visual">
        <div class="stage-canvas">
          <div class="container-visual" aria-label="Representação simplificada de contêiner 40 High Cube">
            <div class="container-lines"></div>
            <button class="hotspot hotspot--1" data-hotspot="lateral" aria-label="Inspecionar lateral">!</button>
            <button class="hotspot hotspot--2" data-hotspot="base" aria-label="Inspecionar base">!</button>
            <button class="hotspot hotspot--3" data-hotspot="porta" aria-label="Inspecionar porta">!</button>
          </div>
          <div class="stage-label">Protótipo 2D interativo • preparado para evolução 3D/360</div>
        </div>
      </section>

      <aside class="panel">
        <div class="panel__title"><h2>Ficha técnica</h2><span class="tag tag--ready">Ativo</span></div>
        <div class="info-list">
          <div class="info-row"><span>Tipo</span><strong>${labData.container.type}</strong></div>
          <div class="info-row"><span>Comprimento</span><strong>${labData.container.length}</strong></div>
          <div class="info-row"><span>Altura</span><strong>${labData.container.height}</strong></div>
          <div class="info-row"><span>Lacre</span><strong>${labData.container.seal}</strong></div>
          <div class="info-row"><span>Status</span><strong id="labStatus">${labData.container.status}</strong></div>
        </div>
        <div class="actions"><button id="resetLab" class="button" type="button">Reiniciar inspeção</button></div>
      </aside>
    </section>`;

  const progressBar = root.querySelector('#labProgress');
  const progressText = root.querySelector('#labProgressText');
  const status = root.querySelector('#labStatus');

  function renderState() {
    const progress = simulation.progress();
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
    labData.findings.forEach((item) => {
      const done = simulation.found.has(item.id);
      const button = root.querySelector(`[data-check="${item.id}"]`);
      const hotspot = root.querySelector(`[data-hotspot="${item.id}"]`);
      if (button) { button.dataset.done = String(done); button.textContent = `${done ? '✓' : '○'} ${item.label}`; }
      if (hotspot) hotspot.dataset.found = String(done);
    });
    status.textContent = simulation.isComplete() ? 'Inspeção concluída' : 'Aguardando inspeção';
  }

  function save() {
    storage.set('progress:container-40hc-inspecao', { found: [...simulation.found] });
  }

  root.querySelectorAll('[data-hotspot]').forEach((button) => {
    const handler = () => {
      const id = button.dataset.hotspot;
      const item = labData.findings.find((finding) => finding.id === id);
      simulation.registerFinding(id);
      save(); renderState();
      toast(`Registro realizado: ${item.label}`);
      eventBus.emit('simulation:finding', { moduleId: labData.id, id });
      if (simulation.isComplete()) {
        toast('Inspeção concluída. Todos os pontos foram registrados.');
        eventBus.emit('simulation:complete', { moduleId: labData.id });
      }
    };
    button.addEventListener('click', handler);
    cleanupFns.push(() => button.removeEventListener('click', handler));
  });

  root.querySelectorAll('[data-check]').forEach((button) => {
    const handler = () => {
      const item = labData.findings.find((finding) => finding.id === button.dataset.check);
      toast(item.hint);
    };
    button.addEventListener('click', handler);
    cleanupFns.push(() => button.removeEventListener('click', handler));
  });

  const reset = root.querySelector('#resetLab');
  const resetHandler = () => {
    simulation.found.clear(); save(); renderState(); toast('Inspeção reiniciada.');
  };
  reset.addEventListener('click', resetHandler);
  cleanupFns.push(() => reset.removeEventListener('click', resetHandler));

  renderState();
}

export async function unmount() {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
}
