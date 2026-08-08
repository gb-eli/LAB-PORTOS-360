function mat(THREE,color,rough=.62,metal=.22){return new THREE.MeshStandardMaterial({color,roughness:rough,metalness:metal});}
function box(THREE,x,y,z,color){const m=new THREE.Mesh(new THREE.BoxGeometry(x,y,z),mat(THREE,color));m.castShadow=true;m.receiveShadow=true;return m;}
export const VESSEL_PARTS=[
 {id:'bow',name:'Proa',note:'Extremidade dianteira do navio.'},{id:'stern',name:'Popa',note:'Extremidade traseira, próxima à propulsão e superestrutura em muitos porta-contêineres.'},
 {id:'port',name:'Bombordo',note:'Lado esquerdo olhando da popa para a proa.'},{id:'starboard',name:'Boreste',note:'Lado direito olhando da popa para a proa.'},
 {id:'bridge',name:'Superestrutura / passadiço',note:'Área de comando e navegação.'},{id:'hatch',name:'Porões / hatch covers',note:'Aberturas de carga e tampas de porão.'},
 {id:'deck',name:'Convés',note:'Área superior onde também podem ser estivados contêineres.'},{id:'lashing',name:'Lashing bridge',note:'Estrutura de apoio ao acesso e travamento das unidades.'}
];
export const VESSEL_TYPES=[
 {id:'container',name:'Porta-contêineres',use:'Carga conteinerizada em bays/rows/tiers.',scale:[1,1,1]},
 {id:'bulk',name:'Graneleiro',use:'Granéis sólidos em porões.',scale:[1.06,.86,.94]},
 {id:'tanker',name:'Navio-tanque',use:'Granéis líquidos em tanques dedicados.',scale:[1.02,.72,.9]},
 {id:'roro',name:'Ro-Ro',use:'Veículos/carga rolante por rampas.',scale:[.9,1.08,1.02]},
 {id:'multipurpose',name:'Multipropósito',use:'Cargas variadas, projeto e geral.',scale:[.88,.92,.88]}
];
export function createDetailedContainerShip(THREE,{length=34}={}){
 const g=new THREE.Group();g.userData.kind='detailed-container-ship';
 const hull=box(THREE,length,3.2,8.8,0x255267);hull.position.y=-.15;g.add(hull);
 const bow=box(THREE,3.2,2.7,8.2,0x315f70);bow.position.set(length/2-1.2,.2,0);bow.rotation.z=-.08;bow.userData.part='bow';g.add(bow);
 const deck=box(THREE,length-1,.32,8.1,0x3a484e);deck.position.y=1.58;deck.userData.part='deck';g.add(deck);
 const bridge=box(THREE,5.2,4.9,6.2,0xdde5e8);bridge.position.set(-length/2+4.4,4.05,0);bridge.userData.part='bridge';g.add(bridge);
 const hatchMat=mat(THREE,0x65757b,.75,.16);for(let i=0;i<6;i++){const h=new THREE.Mesh(new THREE.BoxGeometry(3.6,.18,6.9),hatchMat);h.position.set(-5.5+i*4.5,1.86,0);h.userData.part='hatch';g.add(h);}
 const lashMat=mat(THREE,0xc9d1d3,.44,.5);for(let i=0;i<4;i++){const x=-3+i*6;const frame=new THREE.Group();[-3.3,3.3].forEach(z=>{const p=new THREE.Mesh(new THREE.BoxGeometry(.18,3.8,.18),lashMat);p.position.set(x,3.6,z);frame.add(p)});const top=new THREE.Mesh(new THREE.BoxGeometry(.2,.18,6.8),lashMat);top.position.set(x,5.4,0);frame.add(top);frame.userData.part='lashing';g.add(frame)}
 const colors=[0x2e7182,0xa94c3b,0xc28b32,0x397553];for(let b=0;b<6;b++)for(let r=0;r<4;r++)for(let t=0;t<2;t++){const c=box(THREE,2.6,.86,1.04,colors[(b+r+t)%colors.length]);c.position.set(-5.5+b*4.5,2.55+t*.94,-2.1+r*1.4);c.userData.part='deck';g.add(c)}
 const sternMarker=box(THREE,.5,1.2,7.9,0x6a3d37);sternMarker.position.set(-length/2+.2,.8,0);sternMarker.userData.part='stern';g.add(sternMarker);
 return g;
}
export function createVesselType3D(THREE,id){const spec=VESSEL_TYPES.find(x=>x.id===id)||VESSEL_TYPES[0],g=createDetailedContainerShip(THREE,{length:32});g.scale.set(...spec.scale);if(id!=='container'){g.traverse(o=>{if(o.userData?.part==='lashing'||(o.userData?.part==='deck'&&o.geometry?.parameters?.width<3))o.visible=false;});}return g;}
