import { VESSELS } from './berth-scheduler.js';
const KEY='terminal:quay-resources:v018';
const clone=v=>JSON.parse(JSON.stringify(v));
export const TEAMS=['EQUIPE-A','EQUIPE-B','EQUIPE-C','EQUIPE-D'];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),assignments:{}});
export class QuayResourcePlanner{
 constructor({storage,eventBus,berthScheduler,equipmentMaintenance,liveState}={}){Object.assign(this,{storage,eventBus,berthScheduler,equipmentMaintenance,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(state,source='resources'){state.updatedAt=new Date().toISOString();this.storage.set(KEY,state);const summary=this.summary(state);this.liveState?.updateResources?.(summary,source);this.eventBus?.emit('quay-resources:changed',{source,state:clone(state),summary});return clone(state);}
 reset(){return this.save(fresh(),'reset');}
 vessel(id){return VESSELS.find(v=>v.id===id);}
 window(vesselId){return this.berthScheduler.summary().assignments.find(a=>a.vesselId===vesselId)||null;}
 conflict(vesselId,cranes=[],teams=[]){const win=this.window(vesselId);if(!win)return null;const state=this.get();for(const [otherId,a] of Object.entries(state.assignments)){if(otherId===vesselId)continue;const otherWin=this.window(otherId);if(!otherWin||Math.max(win.start,otherWin.start)>=Math.min(win.end,otherWin.end))continue;const crane=cranes.find(x=>a.cranes?.includes(x));if(crane)return`O ${crane} já está alocado a ${this.vessel(otherId)?.name||otherId} na mesma janela.`;const team=teams.find(x=>a.teams?.includes(x));if(team)return`A ${team} já está alocada a ${this.vessel(otherId)?.name||otherId} na mesma janela.`;}return null;}
 assign(vesselId,{cranes=[],teams=[]}={}){const v=this.vessel(vesselId),win=this.window(vesselId);if(!v)return{ok:false,reason:'Navio inválido.'};if(!win)return{ok:false,reason:'Programe primeiro o navio em um berço.'};cranes=[...new Set(cranes)].filter(Boolean);teams=[...new Set(teams)].filter(Boolean);if(!cranes.length||!teams.length)return{ok:false,reason:'Selecione ao menos um portêiner e uma equipe.'};const unavailable=cranes.find(id=>!this.equipmentMaintenance.isAvailable(id));if(unavailable)return{ok:false,reason:`${unavailable} está indisponível.`};const c=this.conflict(vesselId,cranes,teams);if(c)return{ok:false,reason:c};const s=this.get();s.assignments[vesselId]={cranes,teams};this.save(s,'assign');return{ok:true,forecast:this.forecast(vesselId)};}
 clear(vesselId){const s=this.get();delete s.assignments[vesselId];return this.save(s,'clear');}
 forecast(vesselId,state=this.get()){const v=this.vessel(vesselId),a=state.assignments[vesselId]||{cranes:[],teams:[]},win=this.window(vesselId);const cranes=Math.max(1,a.cranes.length||1),teams=Math.max(1,a.teams.length||1),teamFactor=Math.min(1,teams/cranes),effectiveRate=cranes*28*teamFactor,durationMinutes=Math.ceil((v?.moves||0)/Math.max(1,effectiveRate)*60+30);return{vesselId,cranes:a.cranes||[],teams:a.teams||[],effectiveRate,durationMinutes,scheduledStart:win?.start??null,forecastEnd:win?win.start+durationMinutes:null};}
 availableCranes(){return this.equipmentMaintenance.available('STS').map(e=>e.id);}
 summary(state=this.get()){const assignments=VESSELS.map(v=>({vessel:v,window:this.window(v.id),allocation:state.assignments[v.id]||null,forecast:this.forecast(v.id,state)}));const allocated=assignments.filter(x=>x.allocation).length;return{allocated,total:VESSELS.length,availableCranes:this.availableCranes(),teams:[...TEAMS],assignments};}
 syncLive(source='resources'){this.liveState?.updateResources?.(this.summary(),source);}
}
