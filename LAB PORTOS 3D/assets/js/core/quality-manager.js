import { Storage } from './storage.js';

export const GRAPHICS_MODES = ['AUTO', 'MINIMUM', 'MEDIUM', 'HIGH', 'ULTRA'];
export const GRAPHICS_LABELS = {
  AUTO: 'Automático',
  MINIMUM: 'Mínimo',
  MEDIUM: 'Médio',
  HIGH: 'Alto',
  ULTRA: 'Ultra'
};

const MODE_TO_Q = { MINIMUM: 'Q1', MEDIUM: 'Q2', HIGH: 'Q3', ULTRA: 'Q4' };
const Q_TO_MODE = { Q1: 'MINIMUM', Q2: 'MEDIUM', Q3: 'HIGH', Q4: 'ULTRA' };
const LEGACY_KEY = 'quality';
const MODE_KEY = 'graphics:mode:v032';
const BENCHMARK_KEY = 'graphics:benchmark:v032';

function normalizeMode(value) {
  if (GRAPHICS_MODES.includes(value)) return value;
  if (Q_TO_MODE[value]) return Q_TO_MODE[value];
  return 'AUTO';
}

function hardwareFallback() {
  if (typeof navigator === 'undefined') return 'MEDIUM';
  const memory = Number(navigator.deviceMemory || 4);
  const cores = Number(navigator.hardwareConcurrency || 4);
  const pixels = typeof screen !== 'undefined' ? Number(screen.width || 1280) * Number(screen.height || 720) : 921600;
  if (memory <= 2 || cores <= 2) return 'MINIMUM';
  if (memory <= 4 || cores <= 4 || pixels > 4_500_000) return 'MEDIUM';
  if (memory >= 8 && cores >= 8 && pixels <= 4_500_000) return 'ULTRA';
  return 'HIGH';
}

export class QualityManager {
  constructor(eventBus) {
    this.eventBus = eventBus;
    const legacy = Storage.get(LEGACY_KEY, 'AUTO');
    this.mode = normalizeMode(Storage.get(MODE_KEY, normalizeMode(legacy)));
    this.benchmark = Storage.get(BENCHMARK_KEY, null);
    this.recommendation = normalizeMode(this.benchmark?.recommended || hardwareFallback());
    if (this.recommendation === 'AUTO') this.recommendation = hardwareFallback();
    this.profile = this.mode; // compatibilidade com código antigo da interface.
  }

  next() {
    const current = GRAPHICS_MODES.indexOf(this.mode);
    this.set(GRAPHICS_MODES[(current + 1) % GRAPHICS_MODES.length]);
  }

  set(mode) {
    this.mode = normalizeMode(mode);
    this.profile = this.mode;
    Storage.set(MODE_KEY, this.mode);
    Storage.set(LEGACY_KEY, this.mode === 'AUTO' ? 'AUTO' : MODE_TO_Q[this.mode]);
    this.eventBus?.emit('quality:changed', this.describe());
  }

  setRecommendation(mode, benchmark = null) {
    const normalized = normalizeMode(mode);
    this.recommendation = normalized === 'AUTO' ? hardwareFallback() : normalized;
    if (benchmark) {
      this.benchmark = { ...benchmark, recommended: this.recommendation };
      Storage.set(BENCHMARK_KEY, this.benchmark);
    }
    this.eventBus?.emit('quality:recommendation', this.describe());
    if (this.mode === 'AUTO') this.eventBus?.emit('quality:changed', this.describe());
  }

  useRecommended() {
    this.set(this.recommendation || hardwareFallback());
  }

  describe() {
    const config = this.getConfig();
    return {
      mode: this.mode,
      label: GRAPHICS_LABELS[this.mode],
      recommended: this.recommendation,
      recommendedLabel: GRAPHICS_LABELS[this.recommendation],
      effective: config.effective,
      effectiveMode: config.effectiveMode,
      effectiveLabel: GRAPHICS_LABELS[config.effectiveMode],
      benchmark: this.benchmark
    };
  }

  getConfig() {
    const effectiveMode = this.mode === 'AUTO' ? (this.recommendation || hardwareFallback()) : this.mode;
    const effective = MODE_TO_Q[effectiveMode] || 'Q2';
    const settings = {
      Q1: {
        pixelRatio: 0.78, antialias: false, shadows: false, shadowMapSize: 512,
        effects: false, highTextures: false, assetLod: 'lod2', decals: false,
        animationDetail: 1, anisotropy: 1, ibl: false, fogQuality: 0,
        environmentDetail: 1, particles: 0, maxDynamicLights: 1
      },
      Q2: {
        pixelRatio: 1, antialias: true, shadows: true, shadowMapSize: 1024,
        effects: false, highTextures: false, assetLod: 'lod1', decals: false,
        animationDetail: 2, anisotropy: 2, ibl: false, fogQuality: 1,
        environmentDetail: 2, particles: 0.35, maxDynamicLights: 2
      },
      Q3: {
        pixelRatio: 1.35, antialias: true, shadows: true, shadowMapSize: 2048,
        effects: true, highTextures: false, assetLod: 'lod0', decals: true,
        animationDetail: 3, anisotropy: 8, ibl: true, fogQuality: 2,
        environmentDetail: 3, particles: 0.7, maxDynamicLights: 4
      },
      Q4: {
        pixelRatio: 1.85, antialias: true, shadows: true, shadowMapSize: 4096,
        effects: true, highTextures: true, assetLod: 'lod0', decals: true,
        animationDetail: 4, anisotropy: 16, ibl: true, fogQuality: 3,
        environmentDetail: 4, particles: 1, maxDynamicLights: 8
      }
    }[effective];

    return {
      requested: this.mode,
      requestedLabel: GRAPHICS_LABELS[this.mode],
      recommended: this.recommendation,
      recommendedLabel: GRAPHICS_LABELS[this.recommendation],
      effectiveMode,
      effectiveLabel: GRAPHICS_LABELS[effectiveMode],
      effective,
      ...settings
    };
  }
}
