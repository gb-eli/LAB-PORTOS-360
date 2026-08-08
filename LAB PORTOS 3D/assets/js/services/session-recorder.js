const DEFAULT_KEY = 'session:recorder:v012';

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function nowIso() { return new Date().toISOString(); }
function safeFilePart(value='session') { return String(value).normalize('NFKD').replace(/[^a-zA-Z0-9_-]+/g,'-').replace(/^-+|-+$/g,'').slice(0,48) || 'session'; }
function escapeHtml(value='') { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function downloadBlob(content, type, filename) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.append(a); a.click(); a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 800);
}

export class SessionRecorder {
  constructor({storage,eventBus,key=DEFAULT_KEY,maxEntries=500}={}) {
    this.storage=storage; this.eventBus=eventBus; this.key=key; this.maxEntries=maxEntries; this.off=[];
    this.ensure();
  }
  ensure() {
    const current=this.storage.get(this.key,null);
    if(current?.id) return current;
    const state={id:`S-${Date.now().toString(36).toUpperCase()}`,startedAt:nowIso(),updatedAt:nowIso(),identity:'',entries:[]};
    this.storage.set(this.key,state); return state;
  }
  get(){ return this.storage.get(this.key,this.ensure()); }
  setIdentity(identity=''){ const s=this.get(); s.identity=String(identity).trim().slice(0,120); s.updatedAt=nowIso(); this.storage.set(this.key,s); return s; }
  record(type,payload={}) {
    const s=this.get();
    s.entries.push({at:nowIso(),type,payload:clone(payload)});
    if(s.entries.length>this.maxEntries) s.entries=s.entries.slice(-this.maxEntries);
    s.updatedAt=nowIso(); this.storage.set(this.key,s); return s;
  }
  install() {
    if(!this.eventBus || this.off.length) return;
    const events=['simulation:step','simulation:complete','instructor:exception','instructor:cleared','quality:changed','mission:changed','extended-flow:changed','extended-flow:blocked','shift:complete'];
    this.off=events.map(name=>this.eventBus.on(name,payload=>this.record(name,payload)));
  }
  uninstall(){ this.off.forEach(fn=>fn?.()); this.off=[]; }
  clear({keepIdentity=true}={}) {
    const old=this.get();
    const fresh={id:`S-${Date.now().toString(36).toUpperCase()}`,startedAt:nowIso(),updatedAt:nowIso(),identity:keepIdentity?old.identity:'',entries:[]};
    this.storage.set(this.key,fresh); this.eventBus?.emit('session:cleared',{id:fresh.id}); return fresh;
  }
  snapshot() {
    const s=this.get();
    const completed=s.entries.filter(e=>e.type==='simulation:complete');
    const steps=s.entries.filter(e=>e.type==='simulation:step');
    const exceptions=s.entries.filter(e=>e.type==='instructor:exception');
    const modules=[...new Set(completed.map(e=>e.payload?.moduleId).filter(Boolean))];
    return {...clone(s),summary:{events:s.entries.length,completed:completed.length,steps:steps.length,exceptions:exceptions.length,modules}};
  }
  exportJson() {
    const s=this.snapshot(); const name=safeFilePart(s.identity||s.id);
    downloadBlob(JSON.stringify(s,null,2),'application/json;charset=utf-8',`lab-portos-evidencias-${name}.json`);
  }
  journeySummary(flowSnapshot={}) {
    const s=this.snapshot();
    const steps=Array.isArray(flowSnapshot.steps)?flowSnapshot.steps:[];
    return {session:s,unit:flowSnapshot.unit||'—',active:Boolean(flowSnapshot.active),startedAt:flowSnapshot.startedAt||null,steps:steps.map(step=>({id:step.id,label:step.label,moduleId:step.moduleId,complete:Boolean(step.complete),detail:flowSnapshot.completed?.[step.id]||null})),complete:steps.length>0&&steps.every(x=>x.complete)};
  }
  exportJourneyHtml(flowSnapshot={}) {
    const j=this.journeySummary(flowSnapshot),s=j.session,name=safeFilePart(s.identity||s.id);
    const cards=j.steps.map((x,i)=>`<div class="step ${x.complete?'ok':''}"><b>${i+1}. ${escapeHtml(x.label)}</b><span>${x.complete?'Concluído':'Pendente'}</span><small>${x.detail?.at?escapeHtml(new Date(x.detail.at).toLocaleString('pt-BR')):'—'}</small></div>`).join('');
    const html=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Jornada LAB PORTOS 360</title><style>body{font-family:system-ui,sans-serif;margin:32px;color:#182128}.meta{color:#52616a}.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:22px 0}.step{border:1px solid #ccd5d9;border-radius:10px;padding:12px;display:grid;gap:5px}.step.ok{border-color:#63a987;background:#f2fbf6}.step span,.step small{font-size:12px;color:#52616a}table{width:100%;border-collapse:collapse;font-size:12px}th,td{border:1px solid #d9dfe2;padding:8px;text-align:left;vertical-align:top}@media(max-width:700px){.steps{grid-template-columns:1fr 1fr}}@media print{body{margin:12mm}}</style></head><body><h1>LAB PORTOS 360 — Relatório Consolidado da Jornada</h1><p class="meta"><b>Unidade:</b> ${escapeHtml(j.unit)}<br><b>Sessão:</b> ${escapeHtml(s.id)}<br><b>Identificação:</b> ${escapeHtml(s.identity||'Não informada')}<br><b>Status:</b> ${j.complete?'Jornada concluída':'Jornada em andamento'}</p><div class="steps">${cards}</div><h2>Conclusões registradas</h2><table><thead><tr><th>Data/hora</th><th>Módulo</th><th>Dados</th></tr></thead><tbody>${s.entries.filter(e=>e.type==='simulation:complete').map(e=>`<tr><td>${escapeHtml(new Date(e.at).toLocaleString('pt-BR'))}</td><td>${escapeHtml(e.payload?.moduleId||'—')}</td><td>${escapeHtml(JSON.stringify(e.payload))}</td></tr>`).join('')||'<tr><td colspan="3">Sem conclusões registradas.</td></tr>'}</tbody></table><p>Relatório gerado localmente pelo LAB PORTOS 360 v0.16.0.</p></body></html>`;
    downloadBlob(html,'text/html;charset=utf-8',`lab-portos-jornada-${name}.html`);
  }
  exportHtml() {
    const s=this.snapshot(); const name=safeFilePart(s.identity||s.id);
    const rows=s.entries.map(e=>`<tr><td>${escapeHtml(new Date(e.at).toLocaleString('pt-BR'))}</td><td>${escapeHtml(e.type)}</td><td><pre>${escapeHtml(JSON.stringify(e.payload,null,2))}</pre></td></tr>`).join('');
    const html=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Evidências LAB PORTOS 360</title><style>body{font-family:system-ui,sans-serif;margin:32px;color:#182128}h1{margin-bottom:4px}.meta{color:#52616a;margin-bottom:24px}.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:18px 0}.card{border:1px solid #cbd3d7;border-radius:10px;padding:12px}.card strong{display:block;font-size:24px}table{width:100%;border-collapse:collapse;font-size:12px}th,td{border:1px solid #d9dfe2;padding:8px;vertical-align:top;text-align:left}pre{white-space:pre-wrap;margin:0;font:11px ui-monospace,monospace}@media print{body{margin:12mm}.no-print{display:none}}@media(max-width:700px){.cards{grid-template-columns:1fr 1fr}}</style></head><body><h1>LAB PORTOS 360 — Relatório de Sessão</h1><div class="meta"><b>Sessão:</b> ${escapeHtml(s.id)}<br><b>Identificação:</b> ${escapeHtml(s.identity||'Não informada')}<br><b>Início:</b> ${escapeHtml(new Date(s.startedAt).toLocaleString('pt-BR'))}<br><b>Atualização:</b> ${escapeHtml(new Date(s.updatedAt).toLocaleString('pt-BR'))}</div><div class="cards"><div class="card"><strong>${s.summary.events}</strong>eventos</div><div class="card"><strong>${s.summary.steps}</strong>etapas</div><div class="card"><strong>${s.summary.completed}</strong>conclusões</div><div class="card"><strong>${s.summary.modules.length}</strong>módulos concluídos</div></div><h2>Registro de evidências</h2><table><thead><tr><th>Data/hora</th><th>Evento</th><th>Dados</th></tr></thead><tbody>${rows||'<tr><td colspan="3">Ainda não há eventos registrados.</td></tr>'}</tbody></table><p>Relatório gerado localmente pelo LAB PORTOS 360 v0.16.0. Os dados permanecem no navegador até serem limpos pelo usuário.</p></body></html>`;
    downloadBlob(html,'text/html;charset=utf-8',`lab-portos-relatorio-${name}.html`);
  }
}
