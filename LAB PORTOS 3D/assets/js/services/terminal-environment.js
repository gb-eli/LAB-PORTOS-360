function makeCanvasTexture(THREE, painter, size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  painter(ctx, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export function createAsphaltTexture(THREE, { repeat = 10, seed = 17 } = {}) {
  const tex = makeCanvasTexture(THREE, (ctx, size) => {
    ctx.fillStyle = '#252d31'; ctx.fillRect(0, 0, size, size);
    let n = seed;
    const rand = () => ((n = (n * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < 1600; i += 1) {
      const v = 32 + Math.floor(rand() * 36);
      ctx.fillStyle = `rgba(${v},${v + 3},${v + 5},${0.05 + rand() * 0.14})`;
      const x = rand() * size, y = rand() * size, r = 0.4 + rand() * 2.2;
      ctx.fillRect(x, y, r, r);
    }
    ctx.strokeStyle = 'rgba(255,255,255,.025)'; ctx.lineWidth = 1;
    for (let y = 0; y < size; y += 64) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(size,y); ctx.stroke(); }
  });
  tex.repeat.set(repeat, repeat);
  return tex;
}

export function createRealisticTerminalPad(THREE, { width = 70, depth = 50, y = -1.48, repeat = 12 } = {}) {
  const texture = createAsphaltTexture(THREE, { repeat });
  const material = new THREE.MeshStandardMaterial({ map: texture, color: 0xaeb5b7, roughness: 0.94, metalness: 0.03 });
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, 0.16, depth), material);
  mesh.position.y = y;
  mesh.receiveShadow = true;
  mesh.userData.terminalTexture = texture;
  return mesh;
}

export function addSafetyLane(THREE, scene, { x = 0, z = 0, length = 40, axis = 'x', color = 0xf2c94c, dashed = true, y = -1.36 } = {}) {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.02 });
  const segments = dashed ? Math.max(1, Math.floor(length / 3.5)) : 1;
  for (let i = 0; i < segments; i += 1) {
    const size = dashed ? 1.9 : length;
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? size : 0.13, 0.025, axis === 'x' ? 0.13 : size), mat);
    const p = dashed ? -length / 2 + (i + 0.5) * (length / segments) : 0;
    stripe.position.set(x + (axis === 'x' ? p : 0), y, z + (axis === 'z' ? p : 0));
    scene.add(stripe);
  }
}

export function addTerminalFence(THREE, scene, { width = 66, depth = 46, y = -1.25 } = {}) {
  const group = new THREE.Group();
  const steel = new THREE.MeshStandardMaterial({ color: 0x6f7e82, roughness: 0.58, metalness: 0.62 });
  const postGeo = new THREE.CylinderGeometry(0.045, 0.045, 2.5, 8);
  const railGeoX = new THREE.BoxGeometry(width, 0.035, 0.035);
  const railGeoZ = new THREE.BoxGeometry(0.035, 0.035, depth);
  const addPost = (x,z) => { const p = new THREE.Mesh(postGeo, steel); p.position.set(x, y + 1.25, z); group.add(p); };
  for (let x = -width/2; x <= width/2; x += 4) { addPost(x, -depth/2); addPost(x, depth/2); }
  for (let z = -depth/2; z <= depth/2; z += 4) { addPost(-width/2, z); addPost(width/2, z); }
  [-0.25, 0.55].forEach(offset => {
    const a = new THREE.Mesh(railGeoX, steel); a.position.set(0, y + 1.25 + offset, -depth/2); group.add(a);
    const b = a.clone(); b.position.z = depth/2; group.add(b);
    const c = new THREE.Mesh(railGeoZ, steel); c.position.set(-width/2, y + 1.25 + offset, 0); group.add(c);
    const d = c.clone(); d.position.x = width/2; group.add(d);
  });
  scene.add(group);
  return group;
}

export function addLightPoles(THREE, scene, { positions = [[-26,-18],[26,-18],[-26,18],[26,18]], enabled = true } = {}) {
  const group = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x7c8589, roughness: 0.52, metalness: 0.66 });
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xf6f1d8, emissive: 0xf1d88a, emissiveIntensity: enabled ? 1.7 : 0.15 });
  positions.forEach(([x,z]) => {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09,0.12,8,10), poleMat); pole.position.set(x,2.5,z); group.add(pole);
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.3,0.18,0.45), lampMat); head.position.set(x,6.45,z); head.userData.nightLamp = true; group.add(head);
    if (enabled) {
      const light = new THREE.PointLight(0xffe7b5, 12, 20, 2); light.position.set(x,6.2,z); light.userData.nightLight = true; group.add(light);
    }
  });
  scene.add(group);
  return group;
}

export function createRailTrack(THREE, { length = 58, gauge = 1.45, y = -1.3 } = {}) {
  const group = new THREE.Group();
  const steel = new THREE.MeshStandardMaterial({ color: 0x717b80, roughness: 0.35, metalness: 0.82 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x5a4436, roughness: 0.9, metalness: 0.02 });
  [-gauge/2, gauge/2].forEach(z => {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(length,0.09,0.09), steel); rail.position.set(0,y,z); group.add(rail);
  });
  for (let x=-length/2; x<=length/2; x+=1.1) {
    const sleeper = new THREE.Mesh(new THREE.BoxGeometry(0.25,0.08,2.4), wood); sleeper.position.set(x,y-0.05,0); group.add(sleeper);
  }
  return group;
}

export function createRailWagon(THREE, { color = 0x7a3e35, loaded = true } = {}) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color, roughness:0.7, metalness:0.34 });
  const dark = new THREE.MeshStandardMaterial({ color:0x1c2529, roughness:0.9, metalness:0.2 });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(8.5,0.3,2.4), mat); deck.position.y=0.2; group.add(deck);
  [-3.1,3.1].forEach(x => [-0.9,0.9].forEach(z => {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.38,.38,.18,14), dark); wheel.rotation.x=Math.PI/2; wheel.position.set(x,-0.05,z); group.add(wheel);
  }));
  if (loaded) {
    const box = new THREE.Mesh(new THREE.BoxGeometry(6.2,1.7,2.25), new THREE.MeshStandardMaterial({ color:0x356d7a, roughness:.68, metalness:.2 })); box.position.y=1.2; group.add(box);
  }
  group.userData.kind='rail-wagon';
  return group;
}


export function createLocomotive(THREE, { color = 0xd99c2b } = {}) {
  const group = new THREE.Group(); group.userData.kind='locomotive';
  const bodyMat=new THREE.MeshStandardMaterial({color,roughness:.55,metalness:.3}); const dark=new THREE.MeshStandardMaterial({color:0x1b252a,roughness:.82,metalness:.25});
  const base=new THREE.Mesh(new THREE.BoxGeometry(7.4,.5,2.45),bodyMat);base.position.y=.45;group.add(base);
  const hood=new THREE.Mesh(new THREE.BoxGeometry(4.5,1.7,2.2),bodyMat);hood.position.set(.8,1.45,0);group.add(hood);
  const cab=new THREE.Mesh(new THREE.BoxGeometry(2.1,2.7,2.25),bodyMat);cab.position.set(-2.3,1.9,0);group.add(cab);
  const glass=new THREE.MeshStandardMaterial({color:0x153a4a,roughness:.2,metalness:.08});[-1,1].forEach(z=>{const w=new THREE.Mesh(new THREE.BoxGeometry(1.15,.65,.06),glass);w.position.set(-2.3,2.45,z*1.14);group.add(w);});
  [-2.6,2.35].forEach(x=>[-.95,.95].forEach(z=>{const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.52,.52,.28,18),dark);wheel.rotation.x=Math.PI/2;wheel.position.set(x,.12,z);group.add(wheel);}));
  const lampMat=new THREE.MeshStandardMaterial({color:0xfff0bf,emissive:0xffd36f,emissiveIntensity:.12});const lamp=new THREE.Mesh(new THREE.SphereGeometry(.16,12,8),lampMat);lamp.position.set(3.72,1.25,0);lamp.userData.nightLamp=true;group.add(lamp);
  const light=new THREE.PointLight(0xffdf9d,0,16,2);light.position.set(4,1.3,0);light.userData.nightLight=true;group.add(light);return group;
}

export function createTruckTractorAndChassis(THREE, { cabColor=0xd0dbe0, chassisColor=0x3a4448 }={}) {
  const rig=new THREE.Group(), tractor=new THREE.Group(), chassis=new THREE.Group();
  const steel=new THREE.MeshStandardMaterial({color:chassisColor,roughness:.62,metalness:.42}),paint=new THREE.MeshStandardMaterial({color:cabColor,roughness:.48,metalness:.18}),rubber=new THREE.MeshStandardMaterial({color:0x111619,roughness:.92});
  const frame=new THREE.Mesh(new THREE.BoxGeometry(3.6,.24,1.55),steel);frame.position.y=.3;tractor.add(frame);const cab=new THREE.Mesh(new THREE.BoxGeometry(1.8,1.8,1.55),paint);cab.position.set(1.0,1.2,0);tractor.add(cab);
  [-.9,1.1].forEach(x=>[-.8,.8].forEach(z=>{const wh=new THREE.Mesh(new THREE.CylinderGeometry(.43,.43,.27,16),rubber);wh.rotation.x=Math.PI/2;wh.position.set(x,.15,z);tractor.add(wh);}));
  const deck=new THREE.Mesh(new THREE.BoxGeometry(6.4,.22,1.5),steel);deck.position.y=.35;chassis.add(deck);[-2.4,2.25].forEach(x=>[-.8,.8].forEach(z=>{const wh=new THREE.Mesh(new THREE.CylinderGeometry(.4,.4,.25,16),rubber);wh.rotation.x=Math.PI/2;wh.position.set(x,.15,z);chassis.add(wh);}));
  const fifth=new THREE.Mesh(new THREE.CylinderGeometry(.48,.56,.1,24),dark);fifth.rotation.x=Math.PI/2;fifth.position.set(-.55,.56,0);tractor.add(fifth);
  const kingpin=new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,.36,12),steel);kingpin.position.set(2.55,.14,0);chassis.add(kingpin);
  const legMat=new THREE.MeshStandardMaterial({color:0x6f7b80,roughness:.65,metalness:.5});const legs=[];[-.7,.7].forEach(z=>{const leg=new THREE.Mesh(new THREE.BoxGeometry(.12,.95,.12),legMat);leg.position.set(1.55,-.1,z);chassis.add(leg);legs.push(leg);});
  tractor.position.x=3.8;chassis.position.x=-1.2;rig.add(tractor,chassis);rig.userData={kind:'tractor-chassis',tractor,chassis,coupled:true,fifthWheel:fifth,kingpin,landingLegs:legs,legsRaised:true,setLegsRaised(value){this.legsRaised=value;legs.forEach(l=>l.scale.y=value?.35:1);}};return rig;
}

export function coupleTruckRig(rig, coupled=true) { if(!rig?.userData?.tractor||!rig?.userData?.chassis)return;rig.userData.coupled=coupled;rig.userData.tractor.position.x=coupled?3.8:7.1; }
