export const SECURING_SEQUENCE=[
 {id:'align',label:'Alinhar spreader',hint:'Posicione o spreader sobre os quatro cantos superiores da unidade.'},
 {id:'lock',label:'Travar twistlocks',hint:'Confirme o engate nos quatro corner castings antes da elevação.'},
 {id:'lift',label:'Elevar unidade',hint:'A elevação só é liberada após indicação de travamento.'},
 {id:'lower',label:'Baixar e liberar',hint:'Deposite a unidade, alivie carga e destrave antes de afastar o spreader.'}
];
export function createSpreaderRig(THREE,{length=8.8,width=2.3,color=0xe3b23a}={}){
 const group=new THREE.Group();group.name='spreader-rig';const frameMat=new THREE.MeshStandardMaterial({color,roughness:.45,metalness:.46});const dark=new THREE.MeshStandardMaterial({color:0x263136,roughness:.58,metalness:.58});
 const center=new THREE.Mesh(new THREE.BoxGeometry(1,.22,.28),frameMat);group.add(center);const sideA=new THREE.Mesh(new THREE.BoxGeometry(1,.13,.15),frameMat),sideB=sideA.clone();sideA.position.z=width/2;sideB.position.z=-width/2;group.add(sideA,sideB);
 const heads=[];[-1,1].forEach(x=>[-1,1].forEach(z=>{const h=new THREE.Mesh(new THREE.BoxGeometry(.38,.32,.38),dark);h.position.z=z*(width/2-.08);h.userData.lockHead=true;group.add(h);heads.push(h)}));
 const cableMat=new THREE.MeshStandardMaterial({color:0xb9c3c7,roughness:.5,metalness:.58});const cables=[];[-1,1].forEach(x=>{const c=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,3.3,8),cableMat);c.position.y=1.65;group.add(c);cables.push(c)});
 const setSpan=span=>{const L=Math.max(4.35,Math.min(8.8,Number(span)||8.8));center.scale.x=L;sideA.scale.x=L*.88;sideB.scale.x=L*.88;heads.forEach((h,i)=>h.position.x=(i<2?-1:1)*(L/2-.42));cables[0].position.x=-L*.32;cables[1].position.x=L*.32;group.userData.span=L;};
 group.userData={kind:'spreader',heads,cables,locked:false,span:length,size:'40',setLocked(value){this.locked=value;heads.forEach(h=>h.material.color.setHex(value?0x42c98b:0x263136));},setCableLength(value){const len=Math.max(.4,Number(value)||3.3);cables.forEach(c=>{c.scale.y=len/3.3;c.position.y=len/2;});},setSpan,setContainerSize(feet){const f=String(feet).startsWith('20')?'20':'40';this.size=f;setSpan(f==='20'?4.4:8.8);}};setSpan(length);return group;
}
export function createTwistlockMarkers(THREE,{length=8.8,width=2.3}={}){const group=new THREE.Group();const items=[];const geo=new THREE.CylinderGeometry(.11,.11,.32,12);geo.rotateX(Math.PI/2);[-1,1].forEach(x=>[-1,1].forEach(z=>{const m=new THREE.MeshStandardMaterial({color:0xd46652,roughness:.45,metalness:.5,emissive:0x381008,emissiveIntensity:.2});const pin=new THREE.Mesh(geo,m);pin.position.set(x*(length/2-.42),1.55,z*(width/2-.08));group.add(pin);items.push(pin)}));group.userData={items,locked:false,setLocked(value){this.locked=value;items.forEach(i=>{i.material.color.setHex(value?0x43c88b:0xd46652);i.material.emissive.setHex(value?0x0c3b28:0x381008);i.rotation.z=value?Math.PI/2:0;});},setSpan(span){const L=Math.max(4.35,Math.min(8.8,span));items.forEach((i,idx)=>i.position.x=(idx<2?-1:1)*(L/2-.42));}};return group;}
export function canLift({aligned,locked}){return Boolean(aligned&&locked);}
