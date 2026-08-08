export function enhancePortainerRig(THREE, crane){
  const rig=crane?.userData?.rig;
  if(!rig?.trolley||!rig?.spreader) return null;
  const cables=new THREE.Group(); cables.name='hoist-cables'; crane.add(cables);
  const mat=new THREE.MeshStandardMaterial({color:0x20282c,roughness:.5,metalness:.65});
  const items=[];
  [-.38,.38].forEach(x=>[-.38,.38].forEach(z=>{const c=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,1,8),mat);c.position.set(x,4.7,z);c.userData.hoistCable=true;cables.add(c);items.push(c);}));
  const update=()=>{
    const top=rig.trolley.position.y-.25, bottom=rig.spreader.position.y+.12, len=Math.max(.2,top-bottom);
    cables.position.z=rig.spreader.position.z;
    items.forEach(c=>{c.position.y=(top+bottom)/2;c.scale.y=len;});
  };
  const followWorldTarget=(worldPosition,{offsetY=1.85}={})=>{
    const local=crane.worldToLocal(worldPosition.clone());
    rig.trolley.position.z=THREE.MathUtils.clamp(local.z,-1.8,11.4);
    rig.spreader.position.z=rig.trolley.position.z;
    rig.spreader.position.y=THREE.MathUtils.clamp(local.y+offsetY,1.9,6.15);
    update();
  };
  update();
  return {update,followWorldTarget,dispose(){items.forEach(c=>c.geometry.dispose());mat.dispose();crane.remove(cables);}};
}
