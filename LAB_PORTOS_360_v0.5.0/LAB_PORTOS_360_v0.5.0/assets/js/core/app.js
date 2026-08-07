import { EventBus } from './event-bus.js';
import { ModuleRegistry } from './module-registry.js';
import { Router } from './router.js';
import { QualityManager } from './quality-manager.js';
import { Storage } from './storage.js';
import { PerformanceMonitor } from '../services/performance-monitor.js';
import { loadModule } from '../services/module-loader.js';
import { modulesCatalog } from '../data/modules.js';

const root = document.querySelector('#app');
const toastRegion = document.querySelector('#toastRegion');
const qualityButton = document.querySelector('#qualityButton');
const qualityLabel = document.querySelector('#qualityLabel');
const themeButton = document.querySelector('#themeButton');

const eventBus = new EventBus();
const registry = new ModuleRegistry();
registry.registerMany(modulesCatalog);
const quality = new QualityManager(eventBus);
const performance = new PerformanceMonitor(eventBus);

let activeModule = null;
let fps = 0;

function toast(message) {
  const item = document.createElement('div');
  item.className = 'toast';
  item.textContent = message;
  toastRegion.append(item);
  window.setTimeout(() => item.remove(), 3200);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  Storage.set('theme', theme);
}
applyTheme(Storage.get('theme', 'dark'));

qualityLabel.textContent = quality.profile;
qualityButton.addEventListener('click', () => quality.next());
themeButton.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'));
eventBus.on('quality:changed', ({ profile }) => { qualityLabel.textContent = profile; toast(`Perfil gráfico: ${profile}`); });
eventBus.on('performance:fps', ({ fps: value }) => { fps = value; });
performance.start();

function moduleCard(module) {
  const ready = module.status === 'ready';
  return `
    <article class="module-card">
      <div class="module-card__icon" aria-hidden="true">${module.icon}</div>
      <div class="module-card__meta">
        <span class="tag">${module.category}</span>
        <span class="tag">${module.level}</span>
        <span class="tag ${ready ? 'tag--ready' : 'tag--planned'}">${ready ? 'Disponível' : 'Planejado'}</span>
      </div>
      <h3>${module.title}</h3>
      <p>${module.description}</p>
      <div class="actions">
        ${ready ? `<a class="button button--primary" href="#/lab/${module.id}">Abrir laboratório</a>` : `<button class="button" disabled>Em desenvolvimento</button>`}
      </div>
    </article>`;
}

async function renderHome() {
  if (activeModule?.unmount) await activeModule.unmount();
  activeModule = null;
  const readyCount = registry.list().filter(m => m.status === 'ready').length;
  const q = quality.getConfig();

  root.innerHTML = `
    <div class="page-stack">
      <section class="hero-grid">
        <div class="hero-card">
          <span class="eyebrow">Formação técnica • Portos</span>
          <h1>Aprender operações portuárias praticando.</h1>
          <p>Base modular do LAB PORTOS 360. Cada laboratório funciona como unidade independente e poderá evoluir de 2D para 3D/360 sem alterar o núcleo pedagógico.</p>
          <div class="actions">
            <a class="button button--primary" href="#/lab/container-40hc-inspecao">Iniciar laboratório piloto</a>
            <a class="button button--ghost" href="#/sobre">Ver arquitetura</a>
          </div>
        </div>
        <aside class="hero-aside">
          <div class="stat-card"><strong>${readyCount}</strong><span>laboratório disponível</span></div>
          <div class="stat-card"><strong>${registry.list().length}</strong><span>módulos no catálogo inicial</span></div>
          <div class="stat-card"><strong>${q.requested} / ${q.effective}</strong><span>qualidade solicitada / efetiva</span></div>
          <div class="stat-card"><strong>${fps || '—'} FPS</strong><span>monitor de interface</span></div>
        </aside>
      </section>

      <section>
        <div class="section-head"><div><span class="eyebrow">Catálogo modular</span><h2>Laboratórios e ferramentas</h2></div><p>Novos módulos entram sem reescrever a aplicação.</p></div>
        <div class="cards-grid">${registry.list().map(moduleCard).join('')}</div>
      </section>
    </div>`;
}

async function renderAbout() {
  if (activeModule?.unmount) await activeModule.unmount();
  activeModule = null;
  root.innerHTML = `
    <section class="panel">
      <span class="eyebrow">Arquitetura v0.5.0</span>
      <h1 style="font-size:clamp(2rem,5vw,3.4rem);max-width:18ch">Base preparada para atualizações modulares.</h1>
      <p>O núcleo contém roteamento, registro de módulos, Event Bus, armazenamento local, Quality Manager e monitor de desempenho. Os laboratórios ficam isolados em <code>assets/js/modules/</code> e podem ter seus próprios dados, simulação e assets.</p>
      <div class="cards-grid">
        <div class="stat-card"><strong>Core</strong><span>serviços compartilhados e estáveis</span></div>
        <div class="stat-card"><strong>Modules</strong><span>laboratórios independentes</span></div>
        <div class="stat-card"><strong>Assets</strong><span>3D, imagens e áudio carregados sob demanda</span></div>
      </div>
      <div class="actions"><a class="button button--primary" href="#/">Voltar à Central</a></div>
    </section>`;
}

async function renderLab(hash) {
  const id = hash.split('/')[2];
  const metadata = registry.get(id);
  if (!metadata || metadata.status !== 'ready') return renderNotFound(hash);

  try {
    const module = await loadModule(metadata);
    activeModule = module;
    await module.mount({ root, eventBus, storage: Storage, quality, toast, metadata });
    return async () => {
      if (activeModule?.unmount) await activeModule.unmount();
      activeModule = null;
    };
  } catch (error) {
    console.error(error);
    root.innerHTML = `<section class="empty-state panel"><h2>Não foi possível carregar o laboratório.</h2><p>Verifique o console e o caminho do módulo.</p><a class="button button--primary" href="#/">Voltar</a></section>`;
  }
}

async function renderNotFound() {
  root.innerHTML = `<section class="empty-state panel"><h2>Página não encontrada</h2><p>O endereço informado não corresponde a um módulo cadastrado.</p><a class="button button--primary" href="#/">Ir para a Central</a></section>`;
}

const router = new Router([
  { match: (hash) => hash === '/', render: renderHome },
  { match: (hash) => hash === '/sobre', render: renderAbout },
  { match: (hash) => /^\/lab\/[^/]+$/.test(hash), render: renderLab }
], renderNotFound);

router.start();
