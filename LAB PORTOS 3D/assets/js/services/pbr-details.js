let decalPromise = null;

async function getDecalGeometry() {
  if (!decalPromise) decalPromise = import('three/addons/geometries/DecalGeometry.js').then(m => m.DecalGeometry).catch(() => null);
  return decalPromise;
}

export function makeContainerMarking(THREE, { code = 'LPRT 402608 7', subtitle = '40 HC', accent = '#f6f0d2' } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(5,18,24,.72)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = accent; ctx.lineWidth = 8;
  ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);
  ctx.fillStyle = accent;
  ctx.font = '700 82px system-ui, sans-serif';
  ctx.fillText(code, 52, 116);
  ctx.font = '600 44px system-ui, sans-serif';
  ctx.fillText(`${subtitle} • LAB PORTOS 360`, 52, 196);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 1.2), material);
  mesh.name = 'container-marking';
  mesh.position.set(-1.1, 0.42, 1.238);
  return mesh;
}

function makeRustTexture(THREE) {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 256, 256);
  const blobs = [
    [92, 126, 58, .48], [143, 99, 38, .34], [130, 157, 45, .30], [67, 78, 29, .27]
  ];
  blobs.forEach(([x,y,r,a]) => {
    const g = ctx.createRadialGradient(x,y,4,x,y,r);
    g.addColorStop(0, `rgba(120,45,18,${a})`);
    g.addColorStop(.5, `rgba(154,66,24,${a * .75})`);
    g.addColorStop(1, 'rgba(110,40,15,0)');
    ctx.fillStyle = g; ctx.fillRect(0,0,256,256);
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export async function addContainerDecals(THREE, containerRoot, { quality = 'Q2' } = {}) {
  const added = [];
  const marking = makeContainerMarking(THREE, {});
  containerRoot.add(marking); added.push(marking);
  if (!['Q3','Q4'].includes(quality)) return { added, decalMode: 'marking' };

  const DecalGeometry = await getDecalGeometry();
  const body = containerRoot.getObjectByName('body') || containerRoot.children.find(o => o.isMesh);
  if (!DecalGeometry || !body?.isMesh) return { added, decalMode: 'marking' };

  try {
    const rustMap = makeRustTexture(THREE);
    const rustMat = new THREE.MeshStandardMaterial({ map: rustMap, transparent: true, depthWrite: false, roughness: .92, metalness: .05, polygonOffset: true, polygonOffsetFactor: -3 });
    const rust = new THREE.Mesh(
      new DecalGeometry(body, new THREE.Vector3(2.6, -0.5, 1.15), new THREE.Euler(0, 0, 0), new THREE.Vector3(1.5, 1.1, .35)),
      rustMat
    );
    rust.name = 'rust-decal';
    containerRoot.add(rust); added.push(rust);
    return { added, decalMode: 'projected' };
  } catch (error) {
    console.warn('Decal projetado não pôde ser aplicado.', error);
    return { added, decalMode: 'marking' };
  }
}
