export const ROAD_VEHICLES=[
 {id:'container-20',name:"Porta-contêiner 20'",family:'Contêiner',use:'Transporte de unidade ISO 20 pés',length:8.2},
 {id:'container-40',name:"Porta-contêiner 40'",family:'Contêiner',use:'Transporte de 40 pés / High Cube compatível',length:13.7},
 {id:'container-ext',name:"Chassi extensível 20'/40'",family:'Contêiner',use:'Flexibilidade entre comprimentos de contêiner',length:13.7},
 {id:'sider',name:'Carreta Sider / Baú',family:'Carga geral',use:'Carga paletizada e geral protegida',length:13.6},
 {id:'reefer',name:'Carreta Refrigerada',family:'Temperatura',use:'Carga com controle térmico',length:13.6},
 {id:'grain',name:'Graneleira',family:'Granel sólido',use:'Produtos a granel em transporte rodoviário',length:12.5},
 {id:'tank',name:'Tanque',family:'Granel líquido',use:'Líquidos compatíveis com o equipamento',length:12.0},
 {id:'lowbed',name:'Prancha / Lowbed',family:'Projeto',use:'Máquinas e cargas especiais/indivisíveis',length:14.0},
 {id:'car-carrier',name:'Cegonha',family:'Veículos',use:'Transporte de automóveis',length:15.0}
];
function mat(THREE,color,metalness=.25,roughness=.55,extra={}){return new THREE.MeshStandardMaterial({color,metalness,roughness,...extra});}
function box(THREE,w,h,d,color,metalness=.25,roughness=.55){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(THREE,color,metalness,roughness));m.castShadow=true;m.receiveShadow=true;return m;}
function detail(o,q='Q3'){o.userData||={};o.userData.minQuality=q;return o;}
function wheel(THREE){const g=new THREE.Group();const tire=new THREE.Mesh(new THREE.CylinderGeometry(.42,.42,.28,22),mat(THREE,0x12181d,.08,.88));tire.rotation.z=Math.PI/2;tire.castShadow=true;g.add(tire);const hub=detail(new THREE.Mesh(new THREE.CylinderGeometry(.17,.17,.31,16),mat(THREE,0x818b8f,.72,.32)),'Q3');hub.rotation.z=Math.PI/2;g.add(hub);return g;}
function tractor(THREE){
 const g=new THREE.Group();
 const cab=box(THREE,2.5,2.45,3.05,0x1f80b9,.24,.42);cab.position.set(0,1.68,5.15);g.add(cab);
 const lower=box(THREE,2.58,.55,3.18,0x17668f,.32,.46);lower.position.set(0,.52,5.1);g.add(lower);
 const windshield=box(THREE,2.05,.72,.07,0x153b4d,.1,.18);windshield.position.set(0,2.08,6.7);g.add(windshield);
 [-1,1].forEach(s=>{const side=detail(box(THREE,.06,.7,1.0,0x153b4d,.1,.18),'Q2');side.position.set(s*1.28,2.02,5.45);g.add(side);const mirror=detail(box(THREE,.14,.35,.24,0x20292d,.55,.4),'Q3');mirror.position.set(s*1.52,2.15,6.05);g.add(mirror);});
 const grille=detail(box(THREE,1.55,.55,.08,0x273238,.72,.35),'Q2');grille.position.set(0,.95,6.72);g.add(grille);
 const bumper=detail(box(THREE,2.6,.28,.15,0xb9c2c5,.75,.28),'Q2');bumper.position.set(0,.35,6.75);g.add(bumper);
 [-.78,.78].forEach(x=>{const lamp=detail(box(THREE,.42,.22,.08,0xf5e9bd,.08,.2),'Q2');lamp.material.emissive?.setHex?.(0xffd76b);lamp.material.emissiveIntensity=.18;lamp.position.set(x,.72,6.77);g.add(lamp);});
 const roof=detail(box(THREE,2.25,.13,2.75,0x2388bf,.2,.4),'Q2');roof.position.set(0,2.95,5.1);g.add(roof);
 [-1,1].forEach(s=>{const tank=detail(new THREE.Mesh(new THREE.CylinderGeometry(.32,.32,1.2,20),mat(THREE,0x7d878b,.72,.3)),'Q3');tank.rotation.z=Math.PI/2;tank.position.set(s*.82,.58,3.65);g.add(tank);});
 return g;
}
function containerBody(THREE,len,color=0xd05b35){
 const g=new THREE.Group();const c=box(THREE,2.44,2.6,len,color,.22,.72);g.add(c);
 const frameMat=mat(THREE,0xd5a73a,.52,.42);[-1,1].forEach(x=>[-1,1].forEach(y=>{const post=new THREE.Mesh(new THREE.BoxGeometry(.08,2.68,.08),frameMat);post.position.set(x*1.22,0,y*len/2);post.rotation.y=Math.PI/2;g.add(post);}));
 for(let z=-len/2+.45;z<len/2-.3;z+=.5){[-1,1].forEach(x=>{const rib=detail(box(THREE,.035,2.25,.04,0xe07a59,.18,.65),'Q2');rib.position.set(x*1.235,0,z);g.add(rib);});}
 const door=detail(box(THREE,2.25,2.35,.07,0xa94332,.26,.62),'Q3');door.position.set(0,0,-len/2-.04);g.add(door);
 [-.62,.62].forEach(x=>{const bar=detail(new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,2.15,10),mat(THREE,0x879195,.72,.32)),'Q3');bar.position.set(x,0,-len/2-.09);g.add(bar);});
 return g;
}

export function createRoadVehicle3D(THREE,typeId='container-40'){
 const spec=ROAD_VEHICLES.find(v=>v.id===typeId)||ROAD_VEHICLES[1];const g=new THREE.Group();g.userData.spec=spec;g.userData.kind='road-vehicle';
 const tr=tractor(THREE);g.add(tr);
 const chassis=box(THREE,2.35,.28,spec.length,0x3e4b52,.48,.62);chassis.position.set(0,.72,-2);g.add(chassis);
 const axles=[4.5,2.8,-5.5,-3.6];axles.forEach(z=>[-1.22,1.22].forEach(x=>{const w=wheel(THREE);w.position.set(x,.48,z);g.add(w);}));
 const fifth=detail(new THREE.Mesh(new THREE.CylinderGeometry(.52,.52,.1,22),mat(THREE,0x20272a,.55,.68)),'Q3');fifth.position.set(0,.92,2.65);g.add(fifth);

 if(typeId.startsWith('container')){const len=typeId==='container-20'?6.0:12.2;const c=containerBody(THREE,len,0xd05b35);c.position.set(0,2.0,-2.0);g.add(c);if(typeId==='container-ext'){[-.8,.8].forEach(x=>{const rail=detail(box(THREE,.15,.12,5.5,0xf2b84b,.4,.55),'Q2');rail.position.set(x,.95,-6.2);g.add(rail);});}}
 if(typeId==='sider'||typeId==='reefer'){
   const b=box(THREE,2.5,2.8,12.3,typeId==='reefer'?0xe7eef2:0xd7dce1,.18,.7);b.position.set(0,2.2,-2);g.add(b);
   for(let z=-7.5;z<3.6;z+=1.15){const seam=detail(box(THREE,2.52,.045,.045,0x9ea9ae,.24,.7),'Q3');seam.position.set(0,2.2,z);g.add(seam);}
   if(typeId==='reefer'){const unit=box(THREE,2.1,1.6,.45,0x4f5960,.45,.42);unit.position.set(0,2.3,4.35);g.add(unit);for(let x=-.55;x<=.55;x+=.55){const fan=detail(new THREE.Mesh(new THREE.CylinderGeometry(.22,.22,.08,18),mat(THREE,0x1c2428,.55,.45)),'Q3');fan.rotation.x=Math.PI/2;fan.position.set(x,2.45,4.62);g.add(fan);}}
 }
 if(typeId==='grain'){const b=box(THREE,2.45,2.3,11.5,0x9c7a4b,.18,.72);b.position.set(0,2.0,-2);g.add(b);for(let z=-6.8;z<3.2;z+=1.5){const brace=detail(box(THREE,2.5,.08,.12,0x705637,.35,.65),'Q3');brace.position.set(0,2.0,z);g.add(brace);}}
 if(typeId==='tank'){
   const t=new THREE.Mesh(new THREE.CylinderGeometry(1.15,1.15,10.4,32),mat(THREE,0xc8d0d4,.7,.25));t.rotation.x=Math.PI/2;t.position.set(0,2.05,-2);t.castShadow=true;g.add(t);
   for(let z=-6.5;z<=2.5;z+=2.25){const ring=detail(new THREE.Mesh(new THREE.TorusGeometry(1.17,.045,8,28),mat(THREE,0x727d82,.72,.3)),'Q3');ring.rotation.x=Math.PI/2;ring.position.set(0,2.05,z);g.add(ring);}
   const walkway=detail(box(THREE,.7,.08,8.5,0x6c777c,.55,.5),'Q4');walkway.position.set(0,3.25,-2);g.add(walkway);
 }
 if(typeId==='lowbed'){
   const deck=box(THREE,2.6,.22,11.8,0x9a6a30,.35,.65);deck.position.set(0,.85,-2.2);g.add(deck);
   const machine=box(THREE,2.0,1.75,3.2,0xdca429,.28,.58);machine.position.set(0,1.85,-2.5);g.add(machine);
   const boom=detail(box(THREE,.42,.42,3.1,0xc68d1e,.38,.55),'Q3');boom.position.set(0,3.0,-2.0);boom.rotation.x=-.45;g.add(boom);
   [-1,1].forEach(x=>{const chain=detail(new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,2.2,8),mat(THREE,0x363d40,.6,.5)),'Q3');chain.position.set(x*.85,1.45,-2.5);g.add(chain);});
 }
 if(typeId==='car-carrier'){
   const lower=box(THREE,2.55,.14,12.5,0x636b70,.48,.55);lower.position.set(0,1.1,-2);g.add(lower);const upper=box(THREE,2.45,.14,10.5,0x7c858a,.48,.55);upper.position.set(0,2.75,-2);upper.rotation.x=-.04;g.add(upper);
   for(let i=0;i<5;i++){const car=box(THREE,1.7,.65,2.7,0xc94d5b+i*0x001515,.22,.55);car.position.set((i%2?-.25:.25),i<3?1.55:3.2,-6+i*2.6);g.add(car);const roof=detail(box(THREE,1.35,.35,1.45,0x36444a,.12,.35),'Q3');roof.position.set(car.position.x,car.position.y+.48,car.position.z);g.add(roof);}
   [-1,1].forEach(x=>{const rail=detail(box(THREE,.06,2.2,12.2,0xa6afb2,.62,.38),'Q3');rail.position.set(x*1.28,2.0,-2);g.add(rail);});
 }
 return g;
}
