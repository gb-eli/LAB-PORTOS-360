const STEPS=[
 ['berthReady','Navio atracado / berço pronto','#/lab/operacao-berco-integrada'],
 ['stsLift','STS retira a unidade','#/lab/ciclo-sts-descarga-3d'],
 ['tractorLoaded','Terminal Tractor recebe a unidade','#/lab/terminal-tractor-3d'],
 ['tractorDispatched','Deslocamento interno','#/lab/terminal-tractor-3d'],
 ['yardArrived','Chegada à faixa do RTG','#/lab/terminal-tractor-3d'],
 ['rtgHandoff','Handoff Terminal Tractor → RTG','#/lab/transferencia-rtg-patio-3d'],
 ['yardPlaced','Slot final Block/Bay/Row/Tier','#/lab/transferencia-rtg-patio-3d']
];
let clean=[];
export async function mount({root,eventBus,toast,quayYardOperation}){
 root.innerHTML=`<section class="lab-wide"><header class="lab-heading"><div><span class="eyebrow">Missão integrada v0.34</span><h1>Uma Unidade — Navio → STS → Terminal Tractor → RTG → Pátio</h1><p>Execute os laboratórios reais da cadeia e retorne aqui para acompanhar a mesma unidade até o slot final.</p></div><a class="button button--ghost" href="#/">← Central</a></header><div class="equipment-layout"><section class="panel"><div id="steps" class="process-track process-track--vertical"></div></section><section class="panel"><div id="summary" class="feedback-box"></div><div id="nextBox"></div><div class="actions"><button id="reset" class="button button--ghost">Reiniciar missão</button><a class="button" href="#/lab/descarga-sequencial-bays">Plano por Bay</a></div></section></div></section>`;
 const render=()=>{const s=quayYardOperation.get(),sum=quayYardOperation.summary();let next=null;root.querySelector('#steps').innerHTML=STEPS.map(([key,label,href],i)=>{const done=Boolean(s.steps[key]);if(!done&&!next)next={key,label,href};return `<div class="process-node ${done?'is-complete':(!next&&i===0?'is-active':'')}"><span>${done?'✓':i+1}</span><strong>${label}</strong><small>${done?'Concluído':'Pendente'}</small></div>`;}).join('');const done=STEPS.filter(([k])=>s.steps[k]).length;root.querySelector('#summary').innerHTML=`<strong>${done}/${STEPS.length} etapas • ${Math.round(done/STEPS.length*100)}%</strong><p>Unidade ${s.activeContainer||'—'} • Bay ${s.activeBay} • veículo ${s.activeTractor||'—'} • endereço ${sum.address}</p>`;root.querySelector('#nextBox').innerHTML=next?`<a class="button button--primary" href="${next.href}">Próxima etapa: ${next.label} →</a>`:`<div class="feedback-box" data-tone="success"><strong>Missão concluída</strong><p>A unidade chegou ao endereço ${sum.address}. Prepare a próxima Bay para continuar a descarga.</p></div>`;if(done===STEPS.length)eventBus.emit('simulation:complete',{moduleId:'missao-navio-patio'});};
 const reset=()=>{quayYardOperation.reset();toast('Missão Navio → Pátio reiniciada.');render();};
 const off=eventBus.on('quay-yard:changed',render);root.querySelector('#reset').addEventListener('click',reset);clean=[off,()=>root.querySelector('#reset')?.removeEventListener('click',reset)];render();
}
export async function unmount(){clean.forEach(f=>f?.());clean=[];}
