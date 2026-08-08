let clean=[];
export async function mount({root,technicianProductivity,eventBus,toast}){
 root.innerHTML=`<section class="lab-wide"><header class="lab-heading"><div><span class="eyebrow">Manutenção • v0.27</span><h1>Produtividade por Técnico e Equipe</h1><p>Observe carga produtiva, OTs concluídas e um índice didático por técnico e pela equipe.</p></div><a class="button button--ghost" href="#/">← Central</a></header><section class="panel"><div class="panel__title"><h2>Produtividade Técnicos</h2><button id="act" class="button button--primary">Atualizar / executar</button></div><div id="metrics" class="metric-grid"></div><div id="body" class="v020-table"></div></section></section>`;

 const render=()=>{const s=technicianProductivity.capture('lab');root.querySelector('#metrics').innerHTML=`<div><small>Técnicos</small><strong>${s.technicians}</strong></div><div><small>Min produtivos</small><strong>${s.productiveMinutes}</strong></div><div><small>Índice equipe</small><strong>${s.avgIndex.toFixed(0)}</strong></div><div><small>Conclusões</small><strong>${s.completed}</strong></div>`;root.querySelector('#body').innerHTML=s.rows.length?s.rows.map(r=>`<article><strong>${r.techId}</strong><span>${r.productiveMinutes} min</span><span>${r.completed} conclusões</span><b>índice ${r.index.toFixed(0)}</b></article>`).join(''):'<div class="empty-inline">Ainda não há execução com técnicos atribuídos.</div>';};root.querySelector('#act').onclick=render;clean.push(eventBus.on('maintenance-execution:changed',render));render();

}
export async function unmount(){clean.forEach(f=>f?.());clean=[];}
