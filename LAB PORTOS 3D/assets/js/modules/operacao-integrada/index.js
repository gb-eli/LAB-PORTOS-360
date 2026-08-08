let cleanupFns = [];
const stepLinks = { gate:'#/lab/gate-portuario', balanca:'#/lab/balanca-vgm', patio:'#/lab/patio-operacional', navio:'#/lab/navio-operacao' };

export async function mount({ root, operationFlow, toast }) {
  const render = () => {
    const snap = operationFlow.snapshot();
    const done = snap.steps.filter(s => s.complete).length;
    root.innerHTML = `
    <section class="lab-wide integrated-flow-page">
      <header class="lab-heading"><div><span class="eyebrow">Operação integrada • Jornada</span><h1>Gate → Balança → Pátio → Navio</h1><p>Execute uma mesma jornada didática atravessando quatro laboratórios. O progresso é salvo localmente no navegador.</p></div><a class="button button--ghost" href="#/">← Central</a></header>
      <section class="panel flow-overview">
        <div class="panel__title"><h2>Unidade ${snap.unit}</h2><span class="tag">${done}/4 etapas</span></div>
        <div class="flow-progress-track"><i style="width:${done * 25}%"></i></div>
        <div class="flow-step-grid">${snap.steps.map((s,i) => `<a class="flow-step-card ${s.complete ? 'is-complete' : ''} ${snap.next?.id === s.id ? 'is-next' : ''}" href="${stepLinks[s.id]}"><span>${String(i+1).padStart(2,'0')}</span><strong>${s.label}</strong><small>${s.complete ? 'Concluído ✓' : snap.next?.id === s.id ? 'Próxima etapa' : 'Pendente'}</small></a>`).join('')}</div>
        <div class="actions"><button id="startIntegrated" class="button button--primary" type="button">${snap.active ? 'Reiniciar jornada' : 'Iniciar jornada'}</button>${snap.next ? `<a class="button" href="${stepLinks[snap.next.id]}">Continuar em ${snap.next.label}</a>` : '<span class="tag tag--ready">Jornada concluída</span>'}</div>
        <div class="concept-box"><strong>Como funciona</strong><p>Ao concluir corretamente um laboratório operacional, a etapa correspondente é registrada no fluxo integrado. Os laboratórios continuam funcionando de forma independente quando você não inicia esta jornada.</p></div>
      </section>
    </section>`;
    const start = () => { operationFlow.start(); toast('Nova jornada integrada iniciada.'); render(); };
    root.querySelector('#startIntegrated')?.addEventListener('click', start);
    cleanupFns.push(() => root.querySelector('#startIntegrated')?.removeEventListener('click', start));
  };
  render();
}
export async function unmount(){ cleanupFns.forEach(fn => fn?.()); cleanupFns=[]; }
