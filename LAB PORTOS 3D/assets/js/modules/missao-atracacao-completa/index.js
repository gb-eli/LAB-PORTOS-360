const STEPS=[
 ['anchorage','Chegada / estação de praticagem','#/lab/chegada-navio-3d'],
 ['pilot','Prático a bordo','#/lab/praticagem-3d'],
 ['tugs','Rebocadores designados','#/lab/rebocadores-atracacao-3d'],
 ['turning','Manobra de giro','#/lab/manobra-giro-3d'],
 ['berthApproach','Aproximação ao berço','#/lab/aproximacao-berco-3d'],
 ['mooring','Amarração','#/lab/amarracao-navio-3d'],
 ['berthed','Navio atracado','#/lab/amarracao-navio-3d']
];
let clean=[];
export async function mount({root,eventBus,toast,portArrivalOperation}){const render=()=>{const s=portArrivalOperation.get();const progress=portArrivalOperation.progress();const next=STEPS.find(([id])=>!s.steps[id]);root.innerHTML=`<section class="lab-wide"><header class="lab-heading"><div><span class="eyebrow">Navios • Missão integrada</span><h1>Missão Completa — Chegada e Atracação</h1><p>Execute a sequência inteira do navio desde a aproximação até ficar atracado.</p></div><a class="button button--ghost" href="#/">← Central</a></header><section class="panel"><div class="hero-pipeline">${STEPS.map(([id,label])=>`<span class="${s.steps[id]?'is-complete':''}">${label}${s.steps[id]?' ✓':''}</span>`).join('<i>→</i>')}</div><div class="stat-card stat-card--accent"><strong>${progress.percent}%</strong><span>${progress.done}/${progress.total} etapas</span></div><div class="actions">${next?`<a class="button button--primary" href="${next[2]}">Abrir próxima etapa: ${next[1]}</a>`:'<button class="button button--primary" id="done">Missão concluída</button>'}<button class="button" id="reset">Reiniciar missão</button></div><div class="feedback-box" data-tone="info"><strong>${s.vesselName}</strong><p>Status: ${s.status} • Berço ${s.berth} • ${s.speedKn.toFixed(1)} kn</p></div></section></section>`;wire();};const wire=()=>{const reset=root.querySelector('#reset');const done=root.querySelector('#done');const r=()=>{portArrivalOperation.reset();toast('Missão reiniciada.');render();};reset?.addEventListener('click',r);clean.push(()=>reset?.removeEventListener('click',r));if(done){const d=()=>{eventBus.emit('simulation:complete',{moduleId:'missao-atracacao-completa'});toast('Missão de chegada e atracação concluída.');};done.addEventListener('click',d);clean.push(()=>done.removeEventListener('click',d));}};render();}
export async function unmount(){clean.forEach(f=>f());clean=[];}
