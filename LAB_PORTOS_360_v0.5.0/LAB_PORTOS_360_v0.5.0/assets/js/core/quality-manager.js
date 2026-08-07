import { Storage } from './storage.js';

const PROFILES = ['AUTO', 'Q0', 'Q1', 'Q2', 'Q3', 'Q4'];

export class QualityManager {
  constructor(eventBus) {
    this.eventBus = eventBus;
    this.profile = Storage.get('quality', 'AUTO');
  }

  next() {
    const current = PROFILES.indexOf(this.profile);
    this.set(PROFILES[(current + 1) % PROFILES.length]);
  }

  set(profile) {
    this.profile = PROFILES.includes(profile) ? profile : 'AUTO';
    Storage.set('quality', this.profile);
    this.eventBus.emit('quality:changed', { profile: this.profile });
  }

  getConfig() {
    const effective = this.profile === 'AUTO' ? this.#autoProfile() : this.profile;
    return {
      requested: this.profile,
      effective,
      pixelRatio: { Q0: .75, Q1: 1, Q2: 1.25, Q3: 1.5, Q4: 2 }[effective] ?? 1,
      shadows: ['Q2','Q3','Q4'].includes(effective),
      effects: ['Q3','Q4'].includes(effective),
      highTextures: effective === 'Q4'
    };
  }

  #autoProfile() {
    const memory = navigator.deviceMemory || 4;
    const cores = navigator.hardwareConcurrency || 4;
    if (memory <= 2 || cores <= 2) return 'Q1';
    if (memory <= 4 || cores <= 4) return 'Q2';
    return 'Q3';
  }
}
