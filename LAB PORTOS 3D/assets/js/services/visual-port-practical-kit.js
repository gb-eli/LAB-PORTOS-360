function mat(THREE,color,roughness=.65,metalness=.18,extra={}){return new THREE.MeshStandardMaterial({color,roughness,metalness,...extra});}
function box(THREE,w,h,d,color,roughness=.65,metalness=.18){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(THREE,color,roughness,metalness));m.castShadow=true;m.receiveShadow=true;return m;}
function detail(obj,minQuality='Q3'){obj.userData||={};obj.userData.minQuality=minQuality;return obj;}
function cylinder(THREE,r,h,color,segments=18,roughness=.6,metalness=.2){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,segments),mat(THREE,color,roughness,metalness));m.castShadow=true;m.receiveShadow=true;return m;}

export function createGatePortal(THREE,{width=5.8,color=0x4b93a5}={}){
  const g=new THREE.Group(); g.userData.kind='gate-portal';
  [-1,1].forEach(s=>{const p=box(THREE,.25,4.8,.25,color,.48,.45);p.position.set(s*width/2,1.0,0);g.add(p);});
  const top=box(THREE,width+.5,.25,.35,color,.48,.45);top.position.set(0,3.4,0);g.add(top);
  const camera=box(THREE,.5,.35,.5,0x202b30,.3,.45);camera.position.set(0,3.0,.45);g.add(camera);
  const lens=detail(new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,.08,20),mat(THREE,0x8ed7ff,.15,.2,{emissive:0x2b7fa7,emissiveIntensity:.28})),'Q2');
  lens.rotation.x=Math.PI/2;lens.position.set(0,3.0,.73);g.add(lens);
  [-1,1].forEach(s=>{
    const reader=detail(box(THREE,.32,.2,.22,0xd9e1e4,.4,.3),'Q3');reader.position.set(s*width*.34,3.13,.35);g.add(reader);
    const cable=detail(cylinder(THREE,.018,.9,0x22292d,8,.6,.5),'Q4');cable.position.set(s*width*.34,2.62,.16);g.add(cable);
  });
  const sign=detail(box(THREE,1.55,.46,.08,0x163844,.45,.18),'Q2');sign.position.set(0,3.85,0);g.add(sign);
  return g;
}

export function createBarrier(THREE,{color=0xe95e4b}={}){
  const g=new THREE.Group(),base=box(THREE,.6,1,.7,0x40494e,.52,.5);base.position.y=-.9;g.add(base);
  const arm=box(THREE,4.4,.12,.14,color,.5,.28);arm.position.set(2.2,-.55,0);arm.userData.barrierArm=true;g.add(arm);
  for(let x=.45;x<4.1;x+=.65){const stripe=detail(box(THREE,.28,.125,.145,0xf2f2ed,.62,.08),'Q2');stripe.position.set(x,-.55,.005);g.add(stripe);}
  const beacon=detail(new THREE.Mesh(new THREE.SphereGeometry(.12,14,10),mat(THREE,0xffb13b,.25,.1,{emissive:0xff8a1d,emissiveIntensity:.65})),'Q3');beacon.position.set(0,-.28,0);g.add(beacon);
  g.userData.arm=arm;return g;
}

export function createTrafficLight(THREE){
  const g=new THREE.Group(),body=box(THREE,.55,1.5,.45,0x20282c,.52,.4);body.position.y=.4;g.add(body);
  const mk=(c,y)=>{const m=new THREE.Mesh(new THREE.SphereGeometry(.16,20,14),new THREE.MeshStandardMaterial({color:c,emissive:c,emissiveIntensity:.18,roughness:.3}));m.position.set(0,y,.25);g.add(m);return m;};
  const red=mk(0xd84b45,.85),green=mk(0x52c985,.05);
  const hood=detail(box(THREE,.52,.08,.34,0x12191c,.6,.4),'Q3');hood.position.set(0,1.18,.3);hood.rotation.x=-.35;g.add(hood);
  g.userData={red,green,set(go){green.material.emissiveIntensity=go?2:.08;red.material.emissiveIntensity=go?.08:2;}};return g;
}

export function createWeighbridge3D(THREE){
  const g=new THREE.Group();g.userData.kind='weighbridge';
  const deck=box(THREE,10,.18,3.2,0x626d73,.68,.45);deck.position.y=-1.33;g.add(deck);
  [-1,1].forEach(s=>{const edge=box(THREE,10,.08,.12,0xd7bf52,.6,.15);edge.position.set(0,-1.18,s*1.55);g.add(edge);});
  for(let x=-4.4;x<=4.4;x+=1.1){const groove=detail(box(THREE,.05,.025,2.72,0x343c40,.82,.2),'Q3');groove.position.set(x,-1.22,0);g.add(groove);}
  const display=box(THREE,1.4,1.2,.3,0x162126,.42,.35);display.position.set(4.1,.0,-2.4);g.add(display);
  const screen=detail(box(THREE,.92,.38,.025,0x9ad8b0,.22,.08),'Q2');screen.position.set(4.1,.13,-2.565);g.add(screen);
  const post=detail(box(THREE,.16,1.65,.16,0x727d82,.5,.5),'Q2');post.position.set(4.1,-.72,-2.4);g.add(post);
  [-4.85,4.85].forEach(x=>{const sensor=detail(box(THREE,.2,.38,.18,0x283338,.42,.4),'Q3');sensor.position.set(x,-1.0,-1.85);g.add(sensor);});
  return g;
}

export function createForklift(THREE,{color=0xe4a72f}={}){
  const g=new THREE.Group();g.userData.kind='forklift';
  const body=box(THREE,2.4,1.1,1.4,color,.48,.34);body.position.y=-.55;g.add(body);
  const counter=detail(box(THREE,.65,1.0,1.38,color,.46,.35),'Q2');counter.position.set(-1.18,-.38,0);g.add(counter);
  const cabFrame=detail(box(THREE,1.2,1.6,1.28,0x2d373b,.55,.55),'Q2');cabFrame.position.set(-.35,.62,0);cabFrame.material.transparent=true;cabFrame.material.opacity=.35;g.add(cabFrame);
  const seat=detail(box(THREE,.42,.55,.45,0x20272a,.8,.05),'Q3');seat.position.set(-.45,.18,0);g.add(seat);
  const steering=detail(new THREE.Mesh(new THREE.TorusGeometry(.22,.035,8,18),mat(THREE,0x252d31,.5,.5)),'Q4');steering.rotation.y=Math.PI/2;steering.position.set(.02,.48,0);g.add(steering);
  [-.75,.75].forEach(z=>[-.65,.7].forEach(x=>{const w=new THREE.Mesh(new THREE.CylinderGeometry(.35,.35,.26,20),mat(THREE,0x111619,.9,.04));w.rotation.x=Math.PI/2;w.position.set(x,-1.0,z);g.add(w);const hub=detail(new THREE.Mesh(new THREE.CylinderGeometry(.14,.14,.28,14),mat(THREE,0x778287,.35,.7)),'Q3');hub.rotation.x=Math.PI/2;hub.position.set(x,-1,z);g.add(hub);}));
  [-.45,.45].forEach(z=>{const mast=box(THREE,.18,2.8,.18,0x444f54,.48,.65);mast.position.set(1.25,.15,z);g.add(mast);const fork=box(THREE,1.6,.08,.12,0x3a4449,.42,.68);fork.position.set(2.0,-.75,z);g.add(fork);});
  const chain=detail(cylinder(THREE,.022,2.5,0x242a2d,8,.55,.55),'Q3');chain.position.set(1.22,.15,0);g.add(chain);
  const beacon=detail(new THREE.Mesh(new THREE.SphereGeometry(.1,14,9),mat(THREE,0xffa92d,.25,.1,{emissive:0xff7a12,emissiveIntensity:.6})),'Q3');beacon.position.set(-.45,1.55,0);g.add(beacon);
  return g;
}

export function createWarehouseShell(THREE,{width=18,depth=12}={}){
  const g=new THREE.Group();g.userData.kind='warehouse';
  const floor=box(THREE,width,.16,depth,0x344047,.9,.06);floor.position.y=-1.45;g.add(floor);
  const back=box(THREE,width,5,.25,0x5d6970,.75,.18);back.position.set(0,1,-depth/2);g.add(back);
  [-1,1].forEach(s=>{const wall=box(THREE,.25,5,depth,0x515e65,.76,.16);wall.position.set(s*width/2,1,0);g.add(wall);});
  const roof=detail(box(THREE,width+.4,.18,depth+.4,0x6b777c,.62,.35),'Q2');roof.position.set(0,3.55,0);g.add(roof);
  for(let x=-6;x<=6;x+=4){const rack=box(THREE,2.8,3.6,1.3,0x718087,.62,.4);rack.position.set(x,.25,-3.8);g.add(rack);for(let y=-.7;y<=1.35;y+=.68){const shelf=detail(box(THREE,2.65,.08,1.18,0x343e42,.6,.5),'Q3');shelf.position.set(x,y,-3.8);g.add(shelf);}}
  for(let x=-7.2;x<=7.2;x+=2.4){const stripe=detail(box(THREE,1.2,.02,.09,0xe2c85a,.7,.05),'Q2');stripe.position.set(x,-1.34,2.7);g.add(stripe);}
  [-6,0,6].forEach(x=>{const lamp=detail(new THREE.PointLight(0xe8f3ff,18,8,2),'Q3');lamp.position.set(x,3.0,0);g.add(lamp);const fixture=detail(box(THREE,1.3,.08,.22,0xe7ecee,.3,.4),'Q3');fixture.position.set(x,3.05,0);g.add(fixture);});
  return g;
}
