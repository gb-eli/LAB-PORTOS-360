let clean=[];
export async function mount({root,maintenanceETA,eventBus,toast}){
 root.innerHTML=`<section class="lab-wide"><header class="lab-heading"><div><span class="eyebrow">Manutenção • v0.27</span><h1>Tempo Restante da OT — ETA Dinâmico</h1><p>Combine progresso, produtividade da equipe e fadiga didática para estimar o tempo restante das OTs em execução.</p></div><a class="button button--ghost" href="#/">← Central</a></header><section class="panel"><div class="panel__title"><h2>ETA Restante</h2><button id="act" class="button button--primary">Atualizar / executar</button></div><div id="metrics" class="metric-grid"></div><div id="body" class="v020-table"></div></section></section>`;

 const render=()=>{const s=maintenanceETA.calculate();root.querySelector('#body').innerHTML=s.rows.length?s.rows.map(r=>`<article><strong>${r.orderId} • ${r.equipmentId}</strong><span>${r.progressPct.toFixed(0)}% concluído</span><span>${r.etaMinutes} min restantes</span><b>T+${r.estimatedFinishMinute} min</b><small style="grid-column:1/-1">fator equipe ${r.productivityFactor.toFixed(2)} • fadiga ${r.fatigueFactor.toFixed(2)} • taxa efetiva ${r.effectiveRate.toFixed(2)}</small></article>`).join(''):'<div class="empty-inline">Inicie uma OT no laboratório de progresso ou no simulador do turno.</div>';root.querySelector('#metrics').innerHTML=`<div><small>OTs estimadas</small><strong>${s.rows.length}</strong></div><div><small>Risco de ritmo</small><strong>${s.lateRisk}</strong></div><div><small>Maior ETA</small><strong>${s.maxEta} min</strong></div>`;};
 root.querySelector('#act').onclick=render;clean.push(eventBus.on('maintenance-execution:changed',render),eventBus.on('fatigue:changed',render));render();

}
export async function unmount(){clean.forEach(f=>f?.());clean=[];}
