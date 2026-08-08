import { createContainerUnit, createPortainer, createRTG, createContainerShip } from './port-scene-kit.js';

const mat=(THREE,color,rough=.58,metal=.22)=>new THREE.MeshStandardMaterial({color,roughness:rough,metalness:metal});
const box=(THREE,x,y,z,color,rough=.58,metal=.22)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(x,y,z),mat(THREE,color,rough,metal));m.castShadow=true;m.receiveShadow=true;return m;};
const qualityOnly=(obj,q)=>{obj.userData.minQuality=q;return obj;};

export function createTerminalTractor(THREE,{color=0xe2a52b,loaded=true,containerColor=0x2d7080}={}){
  const g=new THREE.Group();g.userData.kind='terminal-tractor';
  const frame=box(THREE,5.3,.25,1.55,0x2c3438,.58,.5);frame.position.y=.2;g.add(frame);
  const cab=box(THREE,1.45,1.75,1.55,color,.42,.25);cab.position.set(1.75,1.05,0);g.add(cab);
  const nose=box(THREE,.8,.62,1.62,color,.48,.22);nose.position.set(2.55,.55,0);g.add(nose);
  const glass=box(THREE,.08,.7,1.15,0x183e4b,.22,.14);glass.position.set(2.5,1.3,0);g.add(glass);
  const fifth=box(THREE,.8,.12,.9,0x151d21,.55,.65);fifth.position.set(.55,.45,0);g.add(fifth);
  const deck=box(THREE,2.8,.12,1.5,0x4b555a,.6,.55);deck.position.set(-1.15,.45,0);g.add(deck);
  const wheelMat=mat(THREE,0x111618,.9,.03);[-1.65,1.8].forEach(x=>[-.82,.82].forEach(z=>{const w=new THREE.Mesh(new THREE.CylinderGeometry(.42,.42,.28,18),wheelMat);w.rotation.x=Math.PI/2;w.position.set(x,.1,z);g.add(w);}));
  const beacon=qualityOnly(new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,.18,12),new THREE.MeshStandardMaterial({color:0xffb12e,emissive:0xff8a00,emissiveIntensity:.35})), 'Q2');beacon.position.set(1.75,2.02,0);g.add(beacon);
  if(loaded){const c=createContainerUnit(THREE,{color:containerColor,scale:.9});c.scale.set(1.45,1.08,1.08);c.position.set(-1.3,1.2,0);g.add(c);}
  return g;
}

export function createQuayYardScene(THREE,{withShip=true,withSTS=true,withTractor=true,withRTG=true,loaded=true}={}){
  const group=new THREE.Group();
  const quay=box(THREE,58,.28,18,0x59666b,.88,.08);quay.position.set(0,-1.2,-10);group.add(quay);
  const water=box(THREE,58,.12,22,0x0c5270,.34,.05);water.position.set(0,-1.35,9);group.add(water);
  const yard=box(THREE,58,.22,22,0x303b40,.9,.05);yard.position.set(0,-1.22,-30);group.add(yard);
  if(withShip){const ship=createContainerShip(THREE,{length:38,color:0x2d5c70});ship.position.set(0,-.3,7);group.add(ship);}
  if(withSTS){const sts=createPortainer(THREE,{color:0xd8e0e3});sts.position.set(2,-.7,-6.8);sts.scale.setScalar(1.05);group.add(sts);group.userData.sts=sts;}
  if(withTractor){const tractor=createTerminalTractor(THREE,{loaded});tractor.position.set(-8,-.8,-17);tractor.rotation.y=Math.PI;group.add(tractor);group.userData.tractor=tractor;}
  if(withRTG){const rtg=createRTG(THREE,{color:0xcbd7db});rtg.position.set(9,-.75,-29);rtg.scale.setScalar(.78);group.add(rtg);group.userData.rtg=rtg;}
  for(let i=0;i<4;i++){const stack=createContainerUnit(THREE,{color:[0x2e7080,0xb55043,0x497a4e,0xb28532][i],scale:.72});stack.position.set(-16+i*4.2,-.1,-30);group.add(stack);}
  [-20,-10,0,10,20].forEach(x=>{const line=qualityOnly(box(THREE,2.8,.025,.12,0xe5c84d,.72,.04),'Q2');line.position.set(x,-1.05,-19.5);group.add(line);});
  return group;
}

export function createYardSlotStack(THREE,{address='A-01-A-01',height=3,color=0x2d7080}={}){
  const g=new THREE.Group();for(let i=0;i<height;i++){const c=createContainerUnit(THREE,{color:i===height-1?color:[0x567f88,0xa84f44,0x4e7654][i%3],scale:.72});c.position.y=i*1.05;g.add(c);}g.userData.address=address;return g;
}
