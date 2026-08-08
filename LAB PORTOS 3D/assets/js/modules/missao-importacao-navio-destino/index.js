const STEPS=[
 ['yardReady','Unidade descarregada e posicionada no pátio','#/lab/missao-navio-patio'],
 ['inspection','Inspeção da unidade no pátio','#/lab/liberacao-importacao-patio'],
 ['released','Documentação / liberação','#/lab/documentos-entrega-importacao'],
 ['appointment','Agendamento da retirada','#/lab/agendamento-retirada-importacao'],
 ['truckLoaded','Carregamento no caminhão','#/lab/retirada-patio-caminhao-3d'],
 ['eirOut','EIR de saída','#/lab/gate-out-importacao-3d'],
 ['gateOut','Gate Out','#/lab/gate-out-importacao-3d'],
 ['roadTransit','Transporte rodoviário','#/lab/viagem-rodoviaria-importacao-3d'],
 ['delivered','Recebimento no importador','#/lab/recebimento-importador']
];
let clean=[];
export async function mount({root,eventBus,toast,importDeliveryOperation}){
 root.innerHTML=`<section class="lab-wide"><header class="lab-heading"><div><span class="eyebrow">Missão integrada v0.35</span><h1>Importação Completa — Navio → Terminal → Gate Out → Destino</h1><p>Continue exatamente da unidade posicionada no pátio pela v0.34 e acompanhe a mesma carga até o recebedor final.</p></div><a class="button button--ghost" href="#/">← Central</a></header><div class="equipment-layout"><section class="panel"><div id="track" class="process-track process-track--vertical"></div></section><section class="panel"><div id="summary" class="feedback-box"></div><div id="next"></div><div class="actions"><button id="reset" class="button button--ghost">Reiniciar retirada</button><a class="button" href="#/lab/documentos-vivos">Documentos vivos</a></div></section></div></section>`;
 const render=()=>{importDeliveryOperation.bootstrap();const s=importDeliveryOperation.get(),sum=importDeliveryOperation.summary();let next=null;root.querySelector('#track').innerHTML=STEPS.map(([key,label,href],i)=>{const done=Boolean(s.steps[key]);if(!done&&!next)next={key,label,href};return `<div class="process-node ${done?'is-complete':''}"><span>${done?'✓':i+1}</span><strong>${label}</strong><small>${done?'Concluído':'Pendente'}</small></div>`;}).join('');const done=STEPS.filter(([k])=>s.steps[k]).length;root.querySelector('#summary').dataset.tone=s.steps.delivered?'success':'';root.querySelector('#summary').innerHTML=`<strong>${done}/${STEPS.length} etapas • ${Math.round(done/STEPS.length*100)}%</strong><p>${sum.containerNo} • pátio ${sum.yardAddress} • protocolo ${sum.releaseProtocol} • rodovia ${sum.roadPct}%</p>`;root.querySelector('#next').innerHTML=next?`<a class="button button--primary" href="${next.href}">Próxima etapa: ${next.label} →</a>`:`<div class="feedback-box" data-tone="success"><strong>Importação concluída ponta a ponta</strong><p>A mesma unidade foi rastreada do navio ao importador.</p></div>`;if(s.steps.delivered)eventBus.emit('simulation:complete',{moduleId:'missao-importacao-navio-destino'});};
 const reset=()=>{importDeliveryOperation.reset();toast('Fluxo de retirada reiniciado, preservando a unidade disponível no pátio.');render();};root.querySelector('#reset').addEventListener('click',reset);const off=eventBus.on('import-delivery:changed',render);clean=[off,()=>root.querySelector('#reset')?.removeEventListener('click',reset)];render();
}
export async function unmount(){clean.forEach(f=>f?.());clean=[];}
