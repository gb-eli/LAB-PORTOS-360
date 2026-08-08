const KEY = 'operation:integrated-flow';
const STEPS = [
  { id: 'gate', moduleId: 'gate-portuario', label: 'Gate' },
  { id: 'balanca', moduleId: 'balanca-vgm', label: 'Balança' },
  { id: 'patio', moduleId: 'patio-operacional', label: 'Pátio' },
  { id: 'navio', moduleId: 'navio-operacao', label: 'Navio' }
];

export class OperationFlow {
  constructor({ storage, eventBus } = {}) {
    this.storage = storage;
    this.eventBus = eventBus;
    this.state = this.storage.get(KEY, { active: false, startedAt: null, completed: {}, unit: 'LPRT 402608 7' });
  }
  start() {
    this.state = { active: true, startedAt: new Date().toISOString(), completed: {}, unit: 'LPRT 402608 7' };
    this.#save();
    this.eventBus?.emit('flow:changed', this.snapshot());
    return this.snapshot();
  }
  reset() { return this.start(); }
  complete(moduleId, payload = {}) {
    if (!this.state.active) return this.snapshot();
    const step = STEPS.find(s => s.moduleId === moduleId);
    if (!step) return this.snapshot();
    const next = this.nextStep();
    if (next && next.moduleId !== moduleId) {
      this.eventBus?.emit('flow:blocked', { attempted: step.id, expected: next.id });
      return this.snapshot();
    }
    this.state.completed[step.id] = { at: new Date().toISOString(), payload };
    this.#save();
    this.eventBus?.emit('flow:changed', this.snapshot());
    return this.snapshot();
  }
  isComplete(id) { return Boolean(this.state.completed?.[id]); }
  nextStep() { return STEPS.find(s => !this.isComplete(s.id)) || null; }
  getSteps() { return STEPS.map(s => ({ ...s, complete: this.isComplete(s.id) })); }
  snapshot() { return { ...this.state, completed: { ...this.state.completed }, steps: this.getSteps(), next: this.nextStep() }; }
  #save() { this.storage.set(KEY, this.state); }
}
