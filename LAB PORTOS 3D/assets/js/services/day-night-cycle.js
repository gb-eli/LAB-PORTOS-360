export const DAY_PHASES = [
  {id:'dawn',label:'Amanhecer',bg:0x496575,fog:0x496575,sky:0x9ec3d4,ground:0x283238,sun:0xffbd7a,intensity:2.8,hemi:1.7,exposure:1.04,pos:[-18,8,12]},
  {id:'day',label:'Dia',bg:0x8eb9ca,fog:0x8eb9ca,sky:0xccecff,ground:0x45545a,sun:0xfff0cf,intensity:5.0,hemi:2.3,exposure:1.08,pos:[16,28,12]},
  {id:'sunset',label:'Entardecer',bg:0x5b4550,fog:0x5b4550,sky:0xe2a077,ground:0x33282b,sun:0xff874e,intensity:3.2,hemi:1.55,exposure:1.02,pos:[20,7,-12]},
  {id:'night',label:'Noite',bg:0x06111c,fog:0x06111c,sky:0x19395a,ground:0x071018,sun:0x8ab9ff,intensity:.5,hemi:.8,exposure:.86,pos:[-12,18,-16]}
];
export function applyDayPhase({THREE,scene,renderer,sun,hemi}, phase) {
  const p=typeof phase==='string'?DAY_PHASES.find(x=>x.id===phase):phase;if(!p)return;
  scene.background=new THREE.Color(p.bg); if(scene.fog) scene.fog.color=new THREE.Color(p.fog);
  hemi.color.setHex(p.sky); hemi.groundColor.setHex(p.ground); hemi.intensity=p.hemi;
  sun.color.setHex(p.sun); sun.intensity=p.intensity; sun.position.set(...p.pos); renderer.toneMappingExposure=p.exposure;
  scene.traverse(o=>{if(o.userData?.nightLamp && o.material?.emissive){o.material.emissiveIntensity=p.id==='night'?2.2:p.id==='sunset'?1.0:.12;} if(o.userData?.nightLight)o.intensity=p.id==='night'?14:p.id==='sunset'?5:0;});
}
export function createStarField(THREE,{count=260,radius=65}={}){const g=new THREE.BufferGeometry();const a=new Float32Array(count*3);for(let i=0;i<count;i++){const th=Math.random()*Math.PI*2,ph=Math.random()*Math.PI*.45;const r=radius*(.75+Math.random()*.25);a[i*3]=Math.cos(th)*Math.cos(ph)*r;a[i*3+1]=Math.sin(ph)*r+10;a[i*3+2]=Math.sin(th)*Math.cos(ph)*r;}g.setAttribute('position',new THREE.BufferAttribute(a,3));const m=new THREE.PointsMaterial({color:0xd9e8ff,size:.22,transparent:true,opacity:.85});const pts=new THREE.Points(g,m);pts.userData.stars=true;return pts;}
