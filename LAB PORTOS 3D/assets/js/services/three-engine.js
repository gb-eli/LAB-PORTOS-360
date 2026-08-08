let runtimePromise = null;

export async function getThreeRuntime() {
  if (!runtimePromise) {
    runtimePromise = Promise.all([
      import('three'),
      import('three/addons/controls/OrbitControls.js'),
      import('three/addons/environments/RoomEnvironment.js')
    ]).then(([THREE, controls, room]) => ({ THREE, OrbitControls: controls.OrbitControls, RoomEnvironment: room.RoomEnvironment }))
      .catch((error) => {
        console.warn('Three.js indisponível; usando fallback leve.', error);
        return null;
      });
  }
  return runtimePromise;
}

function disposeMaterial(material) {
  if (!material) return;
  Object.values(material).forEach((value) => { if (value?.isTexture) value.dispose?.(); });
  material.dispose?.();
}

function disposeObject(root) {
  root.traverse?.((obj) => {
    if (obj.userData?.assetManaged) return;
    obj.geometry?.dispose?.();
    if (Array.isArray(obj.material)) obj.material.forEach(disposeMaterial);
    else disposeMaterial(obj.material);
  });
}


const QUALITY_RANK = { Q0: 0, Q1: 1, Q2: 2, Q3: 3, Q4: 4 };

function applySceneQuality(scene, config, renderer) {
  const rank = QUALITY_RANK[config.effective] ?? 2;
  const maxAnisotropy = Math.min(config.anisotropy || 1, renderer?.capabilities?.getMaxAnisotropy?.() || 1);
  scene.traverse?.((obj) => {
    const minQuality = obj.userData?.minQuality;
    if (minQuality) obj.visible = rank >= (QUALITY_RANK[minQuality] ?? 1);
    if (!obj.isMesh) return;
    if (!obj.userData?.keepShadowState) {
      if (typeof obj.userData._baseCastShadow === 'undefined') obj.userData._baseCastShadow = Boolean(obj.castShadow);
      if (typeof obj.userData._baseReceiveShadow === 'undefined') obj.userData._baseReceiveShadow = Boolean(obj.receiveShadow);
      obj.castShadow = Boolean(config.shadows && obj.userData._baseCastShadow && obj.userData?.noCastShadow !== true);
      obj.receiveShadow = Boolean(obj.userData._baseReceiveShadow && obj.userData?.noReceiveShadow !== true);
    }
    const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
    materials.filter(Boolean).forEach((material) => {
      Object.values(material).forEach((value) => {
        if (value?.isTexture) {
          value.anisotropy = maxAnisotropy;
          value.needsUpdate = true;
        }
      });
    });
  });
}

function makeBox(THREE, size, color, roughness = 0.68, metalness = 0.12) {
  return new THREE.Mesh(
    new THREE.BoxGeometry(size.x, size.y, size.z),
    new THREE.MeshStandardMaterial({ color, roughness, metalness })
  );
}

function addContainerFrame(THREE, group, dims, color) {
  const beam = 0.1;
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.42 });
  const horizontal = [
    [dims.x, beam, beam, 0, dims.y / 2, dims.z / 2],
    [dims.x, beam, beam, 0, dims.y / 2, -dims.z / 2],
    [dims.x, beam, beam, 0, -dims.y / 2, dims.z / 2],
    [dims.x, beam, beam, 0, -dims.y / 2, -dims.z / 2]
  ];
  const vertical = [
    [beam, dims.y, beam, dims.x / 2, 0, dims.z / 2],
    [beam, dims.y, beam, dims.x / 2, 0, -dims.z / 2],
    [beam, dims.y, beam, -dims.x / 2, 0, dims.z / 2],
    [beam, dims.y, beam, -dims.x / 2, 0, -dims.z / 2]
  ];
  [...horizontal, ...vertical].forEach(([x, y, z, px, py, pz]) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(x, y, z), mat);
    mesh.position.set(px, py, pz);
    mesh.castShadow = true;
    group.add(mesh);
  });
}

export function createProceduralContainer(THREE, { quality = 'Q2', color = 0x1d6572, reefer = false } = {}) {
  const group = new THREE.Group();
  group.name = reefer ? 'reefer-container' : 'container-40hc';
  const dims = { x: 12.2, y: 2.9, z: 2.45 };
  const wallMat = new THREE.MeshStandardMaterial({ color, roughness: 0.66, metalness: 0.24 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x24323a, roughness: 0.58, metalness: 0.52 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(dims.x - 0.16, dims.y - 0.16, dims.z - 0.16), wallMat);
  body.castShadow = true; body.receiveShadow = true;
  group.add(body);
  addContainerFrame(THREE, group, dims, 0xd7a735);

  const ribCount = quality === 'Q0' || quality === 'Q1' ? 18 : quality === 'Q2' ? 30 : 44;
  const ribGeo = new THREE.BoxGeometry(0.055, dims.y - 0.32, 0.055);
  const ribMat = new THREE.MeshStandardMaterial({ color: 0x75a0a6, roughness: 0.58, metalness: 0.3 });
  for (let i = 0; i < ribCount; i += 1) {
    const x = -dims.x / 2 + 0.32 + (i / Math.max(1, ribCount - 1)) * (dims.x - 0.64);
    [-1, 1].forEach((side) => {
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.set(x, 0, side * (dims.z / 2 + 0.035));
      group.add(rib);
    });
  }

  const doorMat = new THREE.MeshStandardMaterial({ color: reefer ? 0xe7eef0 : 0x184d58, roughness: 0.6, metalness: 0.28 });
  const doorGeo = new THREE.BoxGeometry(0.12, dims.y - 0.3, dims.z / 2 - 0.16);
  [-1, 1].forEach((side) => {
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(dims.x / 2 + 0.035, 0, side * (dims.z / 4));
    group.add(door);
    [-0.28, 0.28].forEach((offset) => {
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, dims.y - 0.48, 10), darkMat);
      bar.position.set(dims.x / 2 + 0.115, 0, side * (dims.z / 4) + offset);
      group.add(bar);
    });
  });

  if (reefer) {
    const unit = makeBox(THREE, { x: 0.3, y: 2.25, z: 2.05 }, 0xdde8ea, 0.42, 0.3);
    unit.position.set(-dims.x / 2 - 0.05, 0, 0);
    group.add(unit);
    const fanMat = new THREE.MeshStandardMaterial({ color: 0x263943, roughness: 0.4, metalness: 0.52 });
    for (const y of [-0.55, 0.55]) {
      const fan = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.08, quality === 'Q4' ? 32 : 18), fanMat);
      fan.rotation.z = Math.PI / 2;
      fan.position.set(-dims.x / 2 - 0.22, y, 0);
      group.add(fan);
    }
  }

  return group;
}

export async function mountThreeScene({ host, qualityManager, eventBus, buildScene, cameraPosition = [10, 7, 15], target = [0, 0, 0], onPointer, environment = {} }) {
  const initialConfig = qualityManager.getConfig();
  if (initialConfig.effective === 'Q0') return null;
  const runtime = await getThreeRuntime();
  if (!runtime) return null;
  const { THREE, OrbitControls, RoomEnvironment } = runtime;
  const config = initialConfig;
  const scene = new THREE.Scene();
  const background = environment.background ?? 0x07131d;
  scene.background = new THREE.Color(background);
  scene.fog = environment.fog === false ? null : new THREE.Fog(background, environment.fogNear ?? 18, environment.fogFar ?? 75);

  const camera = new THREE.PerspectiveCamera(environment.fov ?? 48, 1, 0.1, environment.cameraFar ?? 180);
  camera.position.set(...cameraPosition);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: config.antialias, powerPreference: 'high-performance' });
  } catch (error) {
    console.warn('WebGL 2 indisponível; ativando fallback do laboratório.', error);
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, config.pixelRatio));
  renderer.shadowMap.enabled = config.shadows;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = config.effective === 'Q4' ? 1.16 : config.effective === 'Q3' ? 1.1 : 1.04;

  let pmremGenerator = null;
  let environmentTexture = null;
  const setIbl = (enabled) => {
    if (environment.ibl === false || !RoomEnvironment) return;
    if (enabled && !environmentTexture) {
      try {
        pmremGenerator ||= new THREE.PMREMGenerator(renderer);
        const room = new RoomEnvironment();
        environmentTexture = pmremGenerator.fromScene(room, 0.04).texture;
        room.dispose?.();
        scene.environment = environmentTexture;
      } catch (error) {
        console.warn('IBL procedural indisponível; mantendo iluminação direta.', error);
        environmentTexture?.dispose?.();
        environmentTexture = null;
        pmremGenerator?.dispose?.();
        pmremGenerator = null;
      }
    } else if (!enabled && environmentTexture) {
      scene.environment = null;
      environmentTexture.dispose?.();
      environmentTexture = null;
    }
  };
  setIbl(Boolean(config.ibl));
  renderer.domElement.className = 'three-canvas';
  renderer.domElement.setAttribute('aria-label', 'Cena tridimensional interativa');
  host.replaceChildren(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.target.set(...target);
  controls.minDistance = 5;
  controls.maxDistance = 35;
  controls.maxPolarAngle = Math.PI * 0.48;

  const hemi = new THREE.HemisphereLight(environment.skyColor ?? 0xb7ddff, environment.groundLightColor ?? 0x17222a, environment.hemiIntensity ?? 2.2);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(environment.sunColor ?? 0xfff1d5, environment.sunIntensity ?? 4.2);
  sun.position.set(...(environment.sunPosition ?? [8, 14, 8]));
  sun.castShadow = config.shadows;
  sun.shadow.mapSize.set(config.shadowMapSize || 1024, config.shadowMapSize || 1024);
  scene.add(sun);

  if (environment.ground !== false) {
    const groundSize = environment.groundSize ?? 60;
    const groundY = environment.groundY ?? -1.53;
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(groundSize, groundSize),
      new THREE.MeshStandardMaterial({ color: environment.groundColor ?? 0x1b2a31, roughness: 0.94, metalness: 0.05 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = groundY;
    ground.receiveShadow = true;
    scene.add(ground);

    if (environment.grid !== false) {
      const gridSize = environment.gridSize ?? groundSize;
      const gridDivisions = environment.gridDivisions ?? Math.max(10, Math.round(gridSize));
      const grid = new THREE.GridHelper(gridSize, gridDivisions, environment.gridMajorColor ?? 0x2e6870, environment.gridMinorColor ?? 0x233943);
      grid.position.y = groundY + 0.03;
      scene.add(grid);
    }
  }

  const built = await buildScene({ THREE, scene, camera, renderer, controls, config, lights: { hemi, sun } });
  applySceneQuality(scene, config, renderer);
  const clickables = built?.clickables || [];
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  const pointerHandler = (event) => {
    if (!onPointer || !clickables.length) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(clickables, true);
    if (hits[0]) onPointer(hits[0].object, hits[0]);
  };
  renderer.domElement.addEventListener('pointerup', pointerHandler);

  const resize = () => {
    const width = Math.max(1, host.clientWidth);
    const height = Math.max(1, host.clientHeight);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };
  const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
  observer?.observe(host);
  if (!observer) window.addEventListener('resize', resize);
  resize();

  let frame = 0;
  renderer.setAnimationLoop(() => {
    controls.update();
    built?.update?.();
    renderer.render(scene, camera);
    frame += 1;
    if (frame % 90 === 0) {
      eventBus?.emit('graphics:stats', {
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        geometries: renderer.info.memory.geometries,
        textures: renderer.info.memory.textures,
        quality: qualityManager.getConfig().effectiveLabel,
        pixelRatio: renderer.getPixelRatio()
      });
    }
  });

  const offQuality = eventBus?.on('quality:changed', () => {
    const next = qualityManager.getConfig();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, next.pixelRatio));
    renderer.shadowMap.enabled = next.shadows;
    renderer.toneMappingExposure = next.effective === 'Q4' ? 1.18 : next.effective === 'Q3' ? 1.11 : 1.04;
    setIbl(Boolean(next.ibl));
    sun.castShadow = next.shadows;
    sun.shadow.mapSize.set(next.shadowMapSize || 1024, next.shadowMapSize || 1024);
    sun.shadow.map?.dispose?.();
    sun.shadow.map = null;
    applySceneQuality(scene, next, renderer);
    built?.onQualityChange?.(next);
    resize();
  });

  return {
    THREE, scene, camera, renderer, controls, built,
    dispose() {
      offQuality?.();
      observer?.disconnect();
      if (!observer) window.removeEventListener('resize', resize);
      renderer.domElement.removeEventListener('pointerup', pointerHandler);
      renderer.setAnimationLoop(null);
      controls.dispose();
      built?.dispose?.();
      disposeObject(scene);
      environmentTexture?.dispose?.();
      pmremGenerator?.dispose?.();
      renderer.dispose();
      host.replaceChildren();
    }
  };
}
