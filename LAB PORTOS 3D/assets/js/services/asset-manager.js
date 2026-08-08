const DEFAULT_MANIFEST_URL = './assets/models/manifest.json';

let loaderRuntimePromise = null;

async function getLoaderRuntime() {
  if (!loaderRuntimePromise) {
    loaderRuntimePromise = Promise.all([
      import('three'),
      import('three/addons/loaders/GLTFLoader.js'),
      import('three/addons/loaders/DRACOLoader.js'),
      import('three/addons/loaders/KTX2Loader.js'),
      import('three/addons/libs/meshopt_decoder.module.js')
    ]).then(([THREE, gltf, draco, ktx2, meshopt]) => ({
      THREE,
      GLTFLoader: gltf.GLTFLoader,
      DRACOLoader: draco.DRACOLoader,
      KTX2Loader: ktx2.KTX2Loader,
      MeshoptDecoder: meshopt.MeshoptDecoder
    })).catch((error) => {
      console.warn('Loaders 3D indisponíveis.', error);
      return null;
    });
  }
  return loaderRuntimePromise;
}

function disposeMaterial(material) {
  if (!material) return;
  for (const value of Object.values(material)) {
    if (value?.isTexture) value.dispose?.();
  }
  material.dispose?.();
}

function disposeRoot(root) {
  root?.traverse?.((obj) => {
    obj.geometry?.dispose?.();
    if (Array.isArray(obj.material)) obj.material.forEach(disposeMaterial);
    else disposeMaterial(obj.material);
  });
}


function applyIndustrialMaterialProfile(root, assetId) {
  root?.traverse?.((obj) => {
    if (!obj.isMesh || !obj.material) return;
    const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
    materials.forEach((mat) => {
      if (!mat?.isMeshStandardMaterial) return;
      const name = `${obj.name || ''} ${mat.name || ''}`.toLowerCase();
      if (name.includes('wheel')) { mat.roughness = 0.96; mat.metalness = 0.02; }
      else if (name.includes('glass') || name.includes('windshield')) { mat.roughness = 0.22; mat.metalness = 0.12; }
      else if (assetId.includes('container') || assetId.includes('reefer') || assetId.includes('open-top') || assetId.includes('flat-rack')) { mat.roughness = 0.68; mat.metalness = 0.22; }
      else { mat.roughness = 0.5; mat.metalness = 0.38; }
      mat.envMapIntensity = 0.72;
      mat.needsUpdate = true;
    });
  });
}

function markManaged(root, assetKey) {
  root?.traverse?.((obj) => {
    obj.userData ||= {};
    obj.userData.assetManaged = true;
    obj.userData.assetKey = assetKey;
  });
}

export class AssetManager {
  constructor({ eventBus, qualityManager, manifestUrl = DEFAULT_MANIFEST_URL } = {}) {
    this.eventBus = eventBus;
    this.qualityManager = qualityManager;
    this.manifestUrl = manifestUrl;
    this.manifestPromise = null;
    this.cache = new Map();
    this.stats = { loads: 0, cacheHits: 0, activeRefs: 0 };
  }

  async getManifest() {
    if (!this.manifestPromise) {
      this.manifestPromise = fetch(this.manifestUrl, { cache: 'no-cache' })
        .then((response) => {
          if (!response.ok) throw new Error(`Manifesto 3D HTTP ${response.status}`);
          return response.json();
        })
        .catch((error) => {
          console.warn('Manifesto de assets indisponível.', error);
          return { version: 'fallback', assets: {} };
        });
    }
    return this.manifestPromise;
  }

  async describe(assetId) {
    const manifest = await this.getManifest();
    return manifest.assets?.[assetId] || null;
  }

  #selectLod(asset, quality, forcedLod) {
    if (forcedLod && asset?.lods?.[forcedLod]) return forcedLod;
    const profile = quality || this.qualityManager?.getConfig?.().effective || 'Q2';
    const requested = asset?.qualityMap?.[profile] || 'lod1';
    if (asset?.lods?.[requested]) return requested;
    return ['lod1', 'lod2', 'lod0'].find((key) => asset?.lods?.[key]) || null;
  }

  async #createLoader(renderer) {
    const runtime = await getLoaderRuntime();
    if (!runtime) return null;
    const { GLTFLoader, DRACOLoader, KTX2Loader, MeshoptDecoder } = runtime;
    const loader = new GLTFLoader();
    const draco = new DRACOLoader();
    draco.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.184.0/examples/jsm/libs/draco/');
    loader.setDRACOLoader(draco);
    loader.setMeshoptDecoder(MeshoptDecoder);

    let ktx2 = null;
    if (renderer) {
      try {
        ktx2 = new KTX2Loader();
        ktx2.setTranscoderPath('https://cdn.jsdelivr.net/npm/three@0.184.0/examples/jsm/libs/basis/');
        ktx2.detectSupport(renderer);
        loader.setKTX2Loader(ktx2);
      } catch (error) {
        console.warn('KTX2 indisponível; continuando sem texturas comprimidas.', error);
        ktx2?.dispose?.();
        ktx2 = null;
      }
    }
    return { loader, draco, ktx2 };
  }

  async loadModel(assetId, { renderer, quality, scale = 1, lod: forcedLod } = {}) {
    const asset = await this.describe(assetId);
    if (!asset) throw new Error(`Asset não registrado: ${assetId}`);
    const lod = this.#selectLod(asset, quality, forcedLod);
    const url = asset.lods?.[lod];
    if (!url) throw new Error(`LOD não disponível para ${assetId}`);
    const key = `${assetId}:${lod}`;

    let record = this.cache.get(key);
    if (!record) {
      const loaderSet = await this.#createLoader(renderer);
      if (!loaderSet) throw new Error('Runtime GLTF indisponível');
      const promise = loaderSet.loader.loadAsync(url).then((gltf) => {
        const root = gltf.scene;
        root.name ||= assetId;
        applyIndustrialMaterialProfile(root, assetId);
        markManaged(root, key);
        this.stats.loads += 1;
        this.eventBus?.emit('asset:loaded', { assetId, lod, url });
        return root;
      }).finally(() => {
        loaderSet.draco?.dispose?.();
        loaderSet.ktx2?.dispose?.();
      });
      record = { key, promise, root: null, refs: 0 };
      this.cache.set(key, record);
      try { record.root = await promise; }
      catch (error) { this.cache.delete(key); throw error; }
    } else {
      this.stats.cacheHits += 1;
      if (!record.root) record.root = await record.promise;
    }

    record.refs += 1;
    this.stats.activeRefs += 1;
    const clone = record.root.clone(true);
    clone.scale.setScalar(scale);
    markManaged(clone, key);
    let released = false;

    const release = () => {
      if (released) return;
      released = true;
      record.refs = Math.max(0, record.refs - 1);
      this.stats.activeRefs = Math.max(0, this.stats.activeRefs - 1);
      this.eventBus?.emit('asset:released', { assetId, lod, refs: record.refs });
    };

    return { scene: clone, assetId, lod, url, release };
  }

  getStats() {
    return { ...this.stats, cachedVariants: this.cache.size };
  }

  purgeUnused() {
    for (const [key, record] of this.cache) {
      if (record.refs === 0 && record.root) {
        disposeRoot(record.root);
        this.cache.delete(key);
      }
    }
    this.eventBus?.emit('asset:purged', this.getStats());
  }

  dispose() {
    for (const record of this.cache.values()) disposeRoot(record.root);
    this.cache.clear();
    this.stats.activeRefs = 0;
  }
}
