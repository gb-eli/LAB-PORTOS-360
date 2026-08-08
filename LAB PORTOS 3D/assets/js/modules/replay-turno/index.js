let clean=[];
export async function mount({root,shiftReplay,eventBus,toast}){
 root.innerHTML=`<section class="lab-wide"><header class="lab-heading"><div><span class="eyebrow">Manutenção • v0.27</span><h1>Replay do Turno — Linha do Tempo Completa</h1><p>Reveja despacho, progresso, materiais, transferências, emergências, interrupções e handover em uma linha do tempo do turno.</p></div><a class="button button--ghost" href="#/">← Central</a></header><section class="panel"><div class="panel__title"><h2>Replay do Turno</h2><button id="act" class="button button--primary">Atualizar / executar</button></div><div id="metrics" class="metric-grid"></div><div id="body" class="v020-table"></div></section></section>`;

 const render=()=>{const s=shiftReplay.summary();root.querySelector('#metrics').innerHTML=`<div><small>Gravação</small><strong>${s.recording?'ON':'OFF'}</strong></div><div><small>Eventos</small><strong>${s.events}</strong></div><div><small>Snapshots</small><strong>${s.snapshots}</strong></div>`;root.querySelector('#body').innerHTML=s.rows.length?[...s.rows].reverse().slice(0,80).map(e=>`<article><strong>T+${e.minute} • ${e.label}</strong><span>${e.source}</span><span>${e.type}</span><b>${e.id}</b></article>`).join(''):'<div class="empty-inline">A linha do tempo será preenchida conforme o turno é executado.</div>';};root.querySelector('#act').onclick=()=>{shiftReplay.setRecording(!shiftReplay.summary().recording);render();};clean.push(eventBus.on('shift-replay:changed',render));render();

}
export async function unmount(){clean.forEach(f=>f?.());clean=[];}
