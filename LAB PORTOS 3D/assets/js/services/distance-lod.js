export async function createDistanceLodAsset({ THREE, assets, assetId, renderer, quality = 'Q2', scale = 1, distances = [0, 18, 40] }) {
  const levelsByQuality = {
    Q0: ['lod2'], Q1: ['lod2'], Q2: ['lod1', 'lod2'], Q3: ['lod0', 'lod1', 'lod2'], Q4: ['lod0', 'lod1', 'lod2']
  };
  const requested = levelsByQuality[quality] || levelsByQuality.Q2;
  const lod = new THREE.LOD();
  const releases = [];
  const loaded = [];
  for (let i = 0; i < requested.length; i += 1) {
    try {
      const handle = await assets.loadModel(assetId, { renderer, quality, scale, lod: requested[i] });
      handle.scene.traverse(obj => { if (obj.isMesh) { obj.castShadow = quality !== 'Q1'; obj.receiveShadow = true; } });
      lod.addLevel(handle.scene, distances[Math.min(i, distances.length - 1)] || i * 20);
      releases.push(handle.release);
      loaded.push({ lod: requested[i], url: handle.url });
    } catch (error) {
      console.warn(`LOD ${requested[i]} não carregado para ${assetId}.`, error);
    }
  }
  if (!lod.levels.length) throw new Error(`Nenhum LOD carregado: ${assetId}`);
  return { scene: lod, loaded, release: () => releases.forEach(fn => fn?.()) };
}
