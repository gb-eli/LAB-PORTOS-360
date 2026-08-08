const KEY='terminal:berths:v017';
const clone=v=>JSON.parse(JSON.stringify(v));
export const BERTHS=[{id:'B1',label:'Berço 1',maxLengthM:370},{id:'B2',label:'Berço 2',maxLengthM:350},{id:'B3',label:'Berço 3',maxLengthM:300}];
export const VESSELS=[
{id:'V01',name:'MV Aurora Sul',eta:60,duration:300,lengthM:335,moves:720,priority:'janela regular'},
{id:'V02',name:'MV Atlântico Azul',eta:210,duration:240,lengthM:290,moves:510,priority:'exportação'},
{id:'V03',name:'MV Costa Norte',eta:360,duration:330,lengthM:345,moves:840,priority:'conexão longa distância'},
{id:'V04',name:'MV Mar do Sul',eta:510,duration:210,lengthM:265,moves:420,priority:'feeder'}
];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),assignments:[]});
export const fmtTime=min=>{const m=Math.max(0,Math.round(Number(min)||0));const day=Math.floor(m/1440),r=m%1440,h=Math.floor(r/60),mm=r%60;return`${day?`D+${day} `:''}${String(h).padStart(2,'0')}:${String(mm).padStart(2,'0')}`;};
export class BerthScheduler{
 constructor({storage,eventBus}={}){this.storage=storage;this.eventBus=eventBus;if(storage.get(KEY,null)===null)storage.set(KEY,fresh());}
 get(){return clone(this.storage.get(KEY,fresh()));}
 reset(){this.storage.set(KEY,fresh());this.emit('reset');return this.get();}
 emit(source='schedule'){this.eventBus?.emit('berth:changed',{source,state:this.get(),summary:this.summary()});}
 vessel(id){return VESSELS.find(v=>v.id===id);}
 berth(id){return BERTHS.find(b=>b.id===id);}
 conflictFor({vesselId,berthId,start,end},ignoreVessel=null){return this.get().assignments.find(a=>a.berthId===berthId&&a.vesselId!==ignoreVessel&&Math.max(start,a.start)<Math.min(end,a.end));}
 assign(vesselId,berthId,startMinute){const v=this.vessel(vesselId),b=this.berth(berthId);if(!v||!b)return{ok:false,reason:'Navio ou berço inválido.'};const start=Math.max(v.eta,Number(startMinute)||v.eta),end=start+v.duration;if(v.lengthM>b.maxLengthM)return{ok:false,reason:`${v.name} excede o comprimento didático suportado por ${b.label}.`};const conflict=this.conflictFor({vesselId,berthId,start,end},vesselId);if(conflict)return{ok:false,reason:`Conflito com ${this.vessel(conflict.vesselId)?.name||conflict.vesselId} em ${b.label}.`};const s=this.get();s.assignments=s.assignments.filter(a=>a.vesselId!==vesselId);s.assignments.push({vesselId,berthId,start,end});s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);this.emit('assign');return{ok:true,assignment:s.assignments.find(a=>a.vesselId===vesselId)};}
 autoPlan(){this.storage.set(KEY,fresh());for(const v of [...VESSELS].sort((a,b)=>a.eta-b.eta)){let placed=false;for(let start=v.eta;start<1440&&!placed;start+=30){for(const b of BERTHS){if(v.lengthM>b.maxLengthM)continue;const end=start+v.duration;if(!this.conflictFor({vesselId:v.id,berthId:b.id,start,end},v.id)){const s=this.get();s.assignments.push({vesselId:v.id,berthId:b.id,start,end});this.storage.set(KEY,s);placed=true;break;}}}}const s=this.get();s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);this.emit('auto');return this.summary();}
 unassign(vesselId){const s=this.get();s.assignments=s.assignments.filter(a=>a.vesselId!==vesselId);this.storage.set(KEY,s);this.emit('unassign');}
 conflicts(){const a=this.get().assignments,out=[];for(let i=0;i<a.length;i++)for(let j=i+1;j<a.length;j++){if(a[i].berthId===a[j].berthId&&Math.max(a[i].start,a[j].start)<Math.min(a[i].end,a[j].end))out.push([a[i],a[j]]);}return out;}
 statusAt(minute=0){const now=Number(minute)||0;return BERTHS.map(b=>{const active=this.get().assignments.find(a=>a.berthId===b.id&&a.start<=now&&a.end>now);return{...b,active:active?{...active,vessel:this.vessel(active.vesselId)}:null};});}
 summary(){const assignments=this.get().assignments.map(a=>({...a,vessel:this.vessel(a.vesselId),berth:this.berth(a.berthId)})).sort((a,b)=>a.start-b.start);return{berths:clone(BERTHS),vessels:clone(VESSELS),assignments,conflicts:this.conflicts().length,scheduled:assignments.length};}
}
