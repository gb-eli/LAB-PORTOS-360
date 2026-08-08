import { EQUIPMENT } from './equipment-maintenance.js';
const KEY='terminal:failure-impact:v021';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),runs:[],last:null});
export class FailureImpact{
 constructor({storage,eventBus,equipmentMaintenance,resourcePlanner,portCallTimeline,liveState}={}){Object.assign(this,{storage,eventBus,equipmentMaintenance,resourcePlanner,portCallTimeline,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 evaluate({equipmentId,downtimeMinutes=120}={}){const e=EQUIPMENT.find(x=>x.id===equipmentId);if(!e)return{ok:false,reason:'Equipamento inválido.'};downtimeMinutes=Math.max(15,Number(downtimeMinutes)||120);let impact={area:e.area,productivityLossPct:0,etdDelayMinutes:0,yardDelayMinutes:0,railDelayMinutes:0,detail:''};if(e.type==='STS'){const allocations=this.resourcePlanner.summary().assignments.filter(a=>a.allocation?.cranes?.includes(equipmentId));const affected=Math.max(1,allocations.length),before=allocations.reduce((n,a)=>n+(a.forecast?.effectiveRate||28),0)||28,after=Math.max(0,before-28),loss=before?Math.min(100,(before-after)/before*100):100;impact={...impact,productivityLossPct:loss,etdDelayMinutes:Math.round(downtimeMinutes*affected*(loss/100)),detail:`${affected} escala(s) potencialmente afetada(s) pela perda de 1 STS.`};}
 else if(e.type==='RTG'){impact={...impact,productivityLossPct:18,yardDelayMinutes:Math.round(downtimeMinutes*.55),detail:'Redução didática da capacidade de transferência no pátio.'};}
 else if(e.type==='RS'){impact={...impact,productivityLossPct:12,yardDelayMinutes:Math.round(downtimeMinutes*.35),detail:'Atividades de apoio e exceção no pátio ficam mais lentas.'};}
 else if(e.type==='LOCO'){impact={...impact,productivityLossPct:20,railDelayMinutes:downtimeMinutes,detail:'Janela ferroviária sofre atraso equivalente à indisponibilidade simulada.'};}
 const row={id:`IMP-${Date.now()}`,at:new Date().toISOString(),equipmentId,type:e.type,downtimeMinutes,...impact};const s=this.get();s.runs.unshift(row);s.runs=s.runs.slice(0,30);s.last=row;s.updatedAt=row.at;this.storage.set(KEY,s);this.syncLive('evaluate');this.eventBus?.emit('failure-impact:changed',{row:clone(row)});return{ok:true,row};}
 summary(state=this.get()){return{runs:state.runs.length,last:state.last,totalEtdDelay:state.runs.reduce((n,r)=>n+(r.etdDelayMinutes||0),0),totalYardDelay:state.runs.reduce((n,r)=>n+(r.yardDelayMinutes||0),0)};}
 syncLive(source='failure-impact'){this.liveState?.updateFailureImpact?.(this.summary(),source);}
}
