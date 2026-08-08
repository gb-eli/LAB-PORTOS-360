function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export class MissionEngine {
  constructor({ storage, eventBus, key = 'mission:exceptions' } = {}) {
    this.storage = storage;
    this.eventBus = eventBus;
    this.key = key;
  }

  load(defaultState) {
    return this.storage.get(this.key, clone(defaultState));
  }

  save(state) {
    this.storage.set(this.key, state);
    this.eventBus?.emit('mission:changed', clone(state));
    return state;
  }

  reset(defaultState) {
    return this.save(clone(defaultState));
  }

  evaluate({ selected, expected }) {
    const correct = Array.isArray(expected)
      ? expected.every(item => selected.includes(item)) && selected.every(item => expected.includes(item))
      : selected === expected;
    return { correct };
  }
}
