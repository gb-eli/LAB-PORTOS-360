const CONTAINER_COLORS = [0x23677a, 0xa44739, 0xc08b2d, 0x3b7457, 0x596879];

function material(THREE, color, roughness = 0.72, metalness = 0.16) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function box(THREE, x, y, z, color, roughness, metalness) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(x, y, z), material(THREE, color, roughness, metalness));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function qualityOnly(object, minQuality = 'Q3') {
  object.userData ||= {};
  object.userData.minQuality = minQuality;
  return object;
}

function cylinder(THREE, radius, depth, color, segments = 18, roughness = .58, metalness = .25) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, depth, segments), material(THREE, color, roughness, metalness));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function createContainerUnit(THREE, { color = 0x23677a, scale = 1, label = '', reefer = false } = {}) {
  const group = new THREE.Group();
  group.userData.kind = 'container';
  const body = box(THREE, 3.15 * scale, 1.05 * scale, 1.18 * scale, color, 0.7, 0.2);
  group.add(body);

  const frameMat = material(THREE, 0xd2a238, 0.48, 0.4);
  const beam = 0.055 * scale;
  const dims = { x: 3.22 * scale, y: 1.12 * scale, z: 1.24 * scale };
  const beamDefs = [
    [dims.x, beam, beam, 0, dims.y / 2, dims.z / 2], [dims.x, beam, beam, 0, dims.y / 2, -dims.z / 2],
    [dims.x, beam, beam, 0, -dims.y / 2, dims.z / 2], [dims.x, beam, beam, 0, -dims.y / 2, -dims.z / 2],
    [beam, dims.y, beam, dims.x / 2, 0, dims.z / 2], [beam, dims.y, beam, dims.x / 2, 0, -dims.z / 2],
    [beam, dims.y, beam, -dims.x / 2, 0, dims.z / 2], [beam, dims.y, beam, -dims.x / 2, 0, -dims.z / 2]
  ];
  beamDefs.forEach(([x, y, z, px, py, pz]) => {
    const b = new THREE.Mesh(new THREE.BoxGeometry(x, y, z), frameMat);
    b.position.set(px, py, pz);
    b.castShadow = true;
    group.add(b);
  });

  const ribMat = material(THREE, 0x84a8b0, 0.62, 0.25);
  for (let i = 0; i < 9; i += 1) {
    const rx = -1.25 * scale + i * 0.31 * scale;
    [-1, 1].forEach(side => {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.035 * scale, 0.88 * scale, 0.035 * scale), ribMat);
      rib.position.set(rx, 0, side * 0.61 * scale);
      group.add(rib);
    });
  }

  if (reefer) {
    const unit = box(THREE, 0.18 * scale, 0.84 * scale, 0.92 * scale, 0xe3ecef, 0.45, 0.28);
    unit.position.x = -1.67 * scale;
    group.add(unit);
  }

  group.userData.label = label;
  return group;
}

export function createAsphaltPad(THREE, { width = 55, depth = 45, y = -1.48 } = {}) {
  const group = new THREE.Group();
  const slab = box(THREE, width, 0.16, depth, 0x253137, 0.96, 0.02);
  slab.position.y = y;
  group.add(slab);
  return group;
}

export function addLaneMarkings(THREE, scene, { zValues = [-12, -4, 4, 12], width = 48, y = -1.37 } = {}) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xd5c45b, roughness: 0.75, metalness: 0.02 });
  zValues.forEach(z => {
    for (let x = -width / 2; x < width / 2; x += 4) {
      const dash = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.025, 0.12), mat);
      dash.position.set(x, y, z);
      scene.add(dash);
    }
  });
}

export function createTruck(THREE, { color = 0xd0dbe0, containerColor = 0x2c7182, loaded = true } = {}) {
  const group = new THREE.Group();
  group.userData.kind = 'truck';

  const chassis = box(THREE, 7.1, 0.22, 1.55, 0x242d31, 0.62, 0.52);
  chassis.position.y = 0.1;
  group.add(chassis);

  // Cavalo mecânico cab-over, mais próximo dos conjuntos rodoviários vistos em terminais brasileiros.
  const cab = box(THREE, 1.72, 1.72, 1.62, color, 0.42, 0.24);
  cab.position.set(2.72, 1.0, 0);
  group.add(cab);
  const cabLower = box(THREE, 1.84, .5, 1.68, color, .5, .28);
  cabLower.position.set(2.66, .2, 0); group.add(cabLower);
  const roof = qualityOnly(box(THREE, 1.58, .16, 1.55, color, .4, .22), 'Q2');
  roof.position.set(2.72, 1.92, 0); group.add(roof);
  const airDeflector = qualityOnly(box(THREE, .65, .45, 1.45, color, .46, .2), 'Q3');
  airDeflector.position.set(2.23, 2.12, 0); airDeflector.rotation.z = -.22; group.add(airDeflector);

  const glassMat = material(THREE, 0x173a4a, 0.18, 0.12);
  const windshield = new THREE.Mesh(new THREE.BoxGeometry(.075, .66, 1.25), glassMat);
  windshield.position.set(3.59, 1.28, 0); group.add(windshield);
  [-1, 1].forEach(side => {
    const sideGlass = qualityOnly(new THREE.Mesh(new THREE.BoxGeometry(.72, .58, .055), glassMat), 'Q2');
    sideGlass.position.set(2.92, 1.34, side * .835); group.add(sideGlass);
    const mirrorArm = qualityOnly(box(THREE, .08, .08, .42, 0x30383c, .5, .55), 'Q3');
    mirrorArm.position.set(3.38, 1.48, side * 1.0); group.add(mirrorArm);
    const mirror = qualityOnly(box(THREE, .08, .32, .2, 0x11191d, .25, .55), 'Q3');
    mirror.position.set(3.38, 1.48, side * 1.2); group.add(mirror);
  });

  const grille = qualityOnly(box(THREE, .075, .52, .86, 0x2b3438, .38, .7), 'Q2');
  grille.position.set(3.62, .72, 0); group.add(grille);
  const bumper = qualityOnly(box(THREE, .18, .28, 1.72, 0xb9c1c4, .35, .75), 'Q2');
  bumper.position.set(3.69, .1, 0); group.add(bumper);
  [-.55,.55].forEach(z => {
    const lamp = qualityOnly(new THREE.Mesh(new THREE.BoxGeometry(.07,.22,.3),new THREE.MeshStandardMaterial({color:0xf6e8bd,emissive:0xffd77a,emissiveIntensity:.18,roughness:.22})), 'Q2');
    lamp.position.set(3.73,.48,z); group.add(lamp);
  });

  // Tanques, quinta-roda e detalhes do chassi.
  [-.93,.93].forEach(z => {
    const tank = qualityOnly(cylinder(THREE,.31,1.2,0x7a858a,20,.3,.72),'Q3');
    tank.rotation.x=Math.PI/2; tank.position.set(1.62,.28,z); group.add(tank);
  });
  const fifth = qualityOnly(cylinder(THREE,.46,.09,0x1d2427,22,.7,.52),'Q3');
  fifth.position.set(.85,.38,0); group.add(fifth);
  const exhaust = qualityOnly(cylinder(THREE,.08,1.3,0x555f63,12,.34,.75),'Q4');
  exhaust.position.set(1.85,1.08,-.72); group.add(exhaust);

  if (loaded) {
    const unit = createContainerUnit(THREE, { color: containerColor, scale: 1.05 });
    unit.scale.set(1.7, 1.25, 1.25);
    unit.position.set(-0.85, 1.25, 0);
    group.add(unit);
  }

  const wheelMat = material(THREE, 0x111619, 0.92, 0.04);
  const hubMat = material(THREE,0x7d878b,.38,.72);
  [-2.25, 1.95, 2.95].forEach(x => [-0.78, 0.78].forEach(z => {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.43, 0.43, 0.28, 20), wheelMat);
    wheel.rotation.x = Math.PI / 2; wheel.position.set(x, 0, z); wheel.castShadow = true; group.add(wheel);
    const hub=qualityOnly(new THREE.Mesh(new THREE.CylinderGeometry(.18,.18,.3,16),hubMat),'Q3');
    hub.rotation.x=Math.PI/2; hub.position.set(x,0,z); group.add(hub);
  }));
  return group;
}

export function createReachStacker(THREE, { color = 0xe3a72e } = {}) {
  const group = new THREE.Group();
  group.userData.kind = 'reach-stacker';
  const body = box(THREE, 4.8, 0.8, 2.25, color, 0.48, 0.35);
  body.position.y = 0.75;
  group.add(body);
  const cabin = box(THREE, 1.25, 1.65, 1.8, 0x2e4a55, 0.32, 0.22);
  cabin.position.set(-1.45, 1.75, 0);
  group.add(cabin);

  const boom = box(THREE, 5.2, 0.34, 0.48, color, 0.42, 0.46);
  boom.position.set(1.45, 2.85, 0);
  boom.rotation.z = -0.28;
  group.add(boom);
  const spreader = box(THREE, 1.9, 0.18, 1.2, 0x303a3e, 0.55, 0.5);
  spreader.position.set(4.0, 2.05, 0);
  group.add(spreader);

  const wheelMat = material(THREE, 0x111619, 0.92, 0.03);
  [-1.55, 1.45].forEach(x => [-1.05, 1.05].forEach(z => {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.66, 0.44, 18), wheelMat);
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(x, 0.38, z);
    group.add(wheel);
  }));
  const counter = qualityOnly(box(THREE, 1.0, 1.05, 2.15, 0x3e494e, .48, .42), 'Q2');
  counter.position.set(-2.2, .95, 0); group.add(counter);
  const glassMat = material(THREE,0x193d4a,.2,.16);
  [-1,1].forEach(side=>{const pane=qualityOnly(new THREE.Mesh(new THREE.BoxGeometry(.78,.82,.05),glassMat),'Q3');pane.position.set(-1.12,1.85,side*.91);group.add(pane);});
  const cylinderBar = qualityOnly(box(THREE, 2.5, .12, .12, 0xbfc5c7, .28, .78), 'Q3');
  cylinderBar.position.set(1.55,2.45,.32); cylinderBar.rotation.z=-.28; group.add(cylinderBar);
  [-.6,.6].forEach(z=>{const twist=qualityOnly(box(THREE,.13,.14,.13,0xd8ae39,.38,.66),'Q4');twist.position.set(4.0,1.92,z);group.add(twist);});
  group.userData.rig = { boom, spreader };
  return group;
}

export function createRTG(THREE, { color = 0xc8d5da } = {}) {
  const group = new THREE.Group();
  group.userData.kind = 'rtg';
  const steel = material(THREE, color, 0.45, 0.48);
  const dark = material(THREE, 0x38474d, 0.56, 0.45);
  const legX = 5.6;
  const legZ = 3.6;
  [-1, 1].forEach(xSide => [-1, 1].forEach(zSide => {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.34, 6.8, 0.42), steel);
    leg.position.set(xSide * legX, 2.4, zSide * legZ);
    leg.castShadow = true;
    group.add(leg);
  }));
  const topA = new THREE.Mesh(new THREE.BoxGeometry(12.1, 0.42, 0.55), steel);
  topA.position.set(0, 5.7, legZ);
  const topB = topA.clone(); topB.position.z = -legZ;
  group.add(topA, topB);
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.38, 7.6), dark);
  bridge.position.set(0, 5.45, 0);
  group.add(bridge);
  const trolley = box(THREE, 1.2, 0.5, 1.5, 0xe6a82e, 0.48, 0.35);
  trolley.position.set(0, 5.05, 0);
  group.add(trolley);
  const ropeMat = material(THREE, 0x262d31, 0.55, 0.52);
  [-0.45, 0.45].forEach(z => {
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.6, 8), ropeMat);
    rope.position.set(0, 3.6, z);
    group.add(rope);
  });
  const spreader = box(THREE, 2.7, 0.18, 1.15, 0x30393d, 0.55, 0.5);
  spreader.position.set(0, 2.25, 0);
  group.add(spreader);
  group.userData.rig = { bridge, trolley, spreader, ropes: group.children.filter(o => o.geometry?.type === 'CylinderGeometry') };
  return group;
}

export function createPortainer(THREE, { color = 0xd7dde0 } = {}) {
  const group = new THREE.Group();
  group.userData.kind = 'portainer';
  const steel = material(THREE, color, 0.43, 0.48);
  const red = material(THREE, 0xc64a43, 0.48, 0.4);
  [-4.1, 4.1].forEach(x => {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.55, 8.5, 0.65), steel);
    leg.position.set(x, 3.2, 0);
    group.add(leg);
  });
  const girder = new THREE.Mesh(new THREE.BoxGeometry(9.2, 0.55, 0.75), steel);
  girder.position.set(0, 7.2, 0);
  group.add(girder);
  const boom = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.55, 14), red);
  boom.position.set(0, 7.1, 4.9);
  group.add(boom);
  const trolley = box(THREE, 1.2, 0.5, 1.5, 0x2f3a40, 0.5, 0.5);
  trolley.position.set(0, 6.6, 2.5);
  group.add(trolley);
  const spreader = box(THREE, 2.7, 0.18, 1.18, 0x2d363a, 0.5, 0.52);
  spreader.position.set(0, 2.8, 2.5);
  group.add(spreader);
  group.userData.rig = { boom, trolley, spreader };
  return group;
}

export function createContainerShip(THREE, { length = 32, color = 0x31596b } = {}) {
  const group = new THREE.Group();
  group.userData.kind = 'ship';
  const hull = box(THREE, length, 3.2, 8.5, color, 0.68, 0.22);
  hull.position.y = -0.15;
  group.add(hull);
  const deck = box(THREE, length - 1.2, 0.35, 7.8, 0x39474d, 0.8, 0.12);
  deck.position.y = 1.6;
  group.add(deck);
  const bridge = box(THREE, 5, 4.6, 6.2, 0xd7e1e4, 0.56, 0.16);
  bridge.position.set(-length / 2 + 4.2, 4.0, 0);
  group.add(bridge);
  const glass = box(THREE, 0.14, 0.75, 4.8, 0x1f4757, 0.28, 0.16);
  glass.position.set(-length / 2 + 6.75, 4.65, 0);
  group.add(glass);

  const rows = 4;
  const bays = Math.max(4, Math.floor(length / 4.2));
  for (let b = 0; b < bays; b += 1) {
    for (let r = 0; r < rows; r += 1) {
      const unit = createContainerUnit(THREE, { color: CONTAINER_COLORS[(b + r) % CONTAINER_COLORS.length], scale: 0.72 });
      unit.position.set(-length / 2 + 9 + b * 3.1, 2.25, -2.5 + r * 1.65);
      unit.scale.set(0.9, 0.9, 0.9);
      group.add(unit);
    }
  }
  // Detalhes náuticos progressivos: linha d'água, proa, mastros, radar e defensas visuais.
  const waterline = qualityOnly(box(THREE, length + .2, .42, 8.62, 0x9a3b35, .6, .24), 'Q2');
  waterline.position.y=-1.48; group.add(waterline);
  const bow = qualityOnly(new THREE.Mesh(new THREE.ConeGeometry(4.25, 5.8, 4), material(THREE,color,.62,.24)),'Q2');
  bow.rotation.z=-Math.PI/2; bow.rotation.y=Math.PI/4; bow.position.set(length/2+1.25,-.15,0); bow.scale.z=.72; group.add(bow);
  const mast = qualityOnly(cylinder(THREE,.09,3.4,0xd5dfe2,12,.4,.6),'Q3'); mast.position.set(-length/2+4.1,7.4,0); group.add(mast);
  const radar = qualityOnly(box(THREE,1.6,.08,.14,0xf0f3f4,.3,.3),'Q3'); radar.position.set(-length/2+4.1,9.05,0); group.add(radar);
  const funnel = qualityOnly(box(THREE,1.0,2.0,1.35,0x303c42,.55,.36),'Q3'); funnel.position.set(-length/2+1.8,6.4,0); group.add(funnel);
  [-3.65,3.65].forEach(z=>{for(let x=-length/2+8;x<length/2-2;x+=5){const rail=qualityOnly(box(THREE,3.8,.06,.06,0xd7dfe1,.38,.65),'Q4');rail.position.set(x,1.95,z);group.add(rail);}});
  return group;
}

export function createWaterPlane(THREE, { width = 80, depth = 50, y = -1.15 } = {}) {
  const geometry = new THREE.PlaneGeometry(width, depth, 20, 12);
  const mat = new THREE.MeshStandardMaterial({ color: 0x0e5268, roughness: 0.28, metalness: 0.12, transparent: true, opacity: 0.92 });
  const mesh = new THREE.Mesh(geometry, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = y;
  mesh.receiveShadow = true;
  mesh.userData.kind = 'water';
  return mesh;
}

export function createYardBlock(THREE, { id = 'A', x = 0, z = 0, cols = 4, rows = 2, tiers = 3, occupancy = 0.65, quality = 'Q2' } = {}) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.userData.kind = 'yard-block';
  group.userData.blockId = id;
  const total = cols * rows * tiers;
  const occupied = Math.max(1, Math.min(total, Math.round(total * occupancy)));
  const geo = new THREE.BoxGeometry(3.05, 1.02, 1.14);
  const mats = CONTAINER_COLORS.slice(0, quality === 'Q1' ? 2 : 4).map(c => material(THREE, c, 0.72, 0.16));
  const meshes = mats.map(m => new THREE.InstancedMesh(geo, m, Math.ceil(occupied / mats.length)));
  const counts = mats.map(() => 0);
  const dummy = new THREE.Object3D();
  const slots = [];
  let n = 0;
  for (let t = 0; t < tiers && n < occupied; t += 1) {
    for (let r = 0; r < rows && n < occupied; r += 1) {
      for (let c = 0; c < cols && n < occupied; c += 1) {
        const px = (c - (cols - 1) / 2) * 3.35;
        const py = -0.83 + t * 1.12;
        const pz = (r - (rows - 1) / 2) * 1.35;
        const mi = n % mats.length;
        dummy.position.set(px, py, pz);
        dummy.updateMatrix();
        meshes[mi].setMatrixAt(counts[mi]++, dummy.matrix);
        slots.push({ x: px + x, y: py, z: pz + z, tier: t + 1 });
        n += 1;
      }
    }
  }
  meshes.forEach((mesh, i) => {
    mesh.count = counts[i];
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = quality !== 'Q1';
    mesh.receiveShadow = true;
    group.add(mesh);
  });
  const marker = box(THREE, cols * 3.4 + 0.5, 0.07, rows * 1.55 + 0.7, 0x3b4c52, 0.9, 0.02);
  marker.position.y = -1.38;
  group.add(marker);
  return { group, slots, occupied, total };
}

export function createBlockSign(THREE, { textId = 'A', x = 0, z = 0, color = 0x2a6977 } = {}) {
  const group = new THREE.Group();
  const post = box(THREE, 0.18, 2.2, 0.18, 0x7b8d94, 0.6, 0.45);
  post.position.y = -0.25;
  group.add(post);
  const sign = box(THREE, 2.1, 0.9, 0.16, color, 0.55, 0.28);
  sign.position.y = 1.1;
  sign.userData.blockId = textId;
  group.add(sign);
  group.position.set(x, 0, z);
  return group;
}
