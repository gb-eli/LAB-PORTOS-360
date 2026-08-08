const KEY='terminal:live:v027';
const LEGACY='terminal:live:v026';
const fresh=()=>({version:12,updatedAt:new Date().toISOString(),elapsedMinutes:0,
 queue:{lanes:2,arrivalRate:36,serviceMinutes:3,queue:0,served:0,avgWait:0,utilization:0,maxQueue:0},
 gate:{processed:0,totalTurnMinutes:0,lastDecision:null},
 yard:{occupancyPct:65,moves:0,rehandles:0,lastBlock:null,lastAddress:null,blockOccupancy:{A:62,B:70,C:61,D:36}},
 quay:{moves:0,activeMinutes:0},
 rail:{cycles:0},
 anchorage:{waiting:0,delayed:0,avgDelay:0,maxWait:0,nextVessel:null},
 resources:{allocated:0,totalVessels:0,stsAvailable:4,stsTotal:4},
 equipment:{availabilityPct:100,unavailable:0,total:14},
 vesselCalls:{berthed:0,departed:0,avgBerthVariance:0,next:null},
 productivity:{overallRate:0,totalMoves:0,totalMinutes:0,activeRecords:0},
 workOrders:{open:0,inProgress:0,high:0,closed:0},
 optimization:{runs:0,avoidedTotal:0,last:null},
 forecast:{active:false,maxRisk:0,peakQueue:0,peakYard:0,final:null},
 reliability:{failures:0,openFailures:0,mtbf:0,mttr:0,topCause:null},
 inventory:{critical:0,attention:0,totalValue:0},
 hatchProductivity:{overallRate:0,bottleneck:null,totalMoves:0},
 shiftResources:{planned:0,shortageCount:0,shortageAreas:[]},
 forecastAccuracy:{count:0,avgAccuracy:0,last:null},
 recovery:{runs:0,improved:false,last:null},
 maintenanceMaterials:{total:0,reserved:0,issued:0,pending:0},
 plannedMaintenance:{clock:0,total:0,active:0,upcoming:0,next:null},
 reliabilityFamily:{rows:[],worst:null,snapshots:0},
 maintenanceCosts:{budget:0,total:0,remaining:0,utilization:0},
 maintenanceCrews:{total:0,busy:0,available:0},
 failureImpact:{runs:0,last:null,totalEtdDelay:0,totalYardDelay:0},
 recommendations:{count:0,priority1:0,last:null},
 maintenanceReadiness:{total:0,ready:0,blocked:0,last:null},
 maintenanceCalendar:{total:0,active:0,scheduled:0,next:null},
 assetCriticality:{critical:0,high:0,criticalUnavailable:0,top:null},
 futureAvailability:{minPct:100,lowShifts:0,nextRisk:null,days:7},
 maintenanceProgramImpact:{runs:0,totalDelay:0,affectedCalls:0,highWindows:0,last:null},
 maintenanceWindowAdvice:{equipmentId:null,best:null,candidates:0,generatedAt:null},
 maintenanceDependencies:{linked:0,blocked:0,withDependencies:0},
 maintenancePriorities:{priority1:0,priority2:0,top:null},
 maintenanceBacklog:{open:0,ready:0,blocked:0,aging:0,clockHours:0},
 maintenanceSLA:{overdue:0,dueSoon:0,compliancePct:100,clockHours:0},
 maintenanceDelayRisk:{high:0,medium:0,top:null},
 maintenanceGantt:{maintenanceWindows:0,vesselWindows:0,hardConflicts:0},
 maintenanceDeferral:{runs:0,last:null,deferred:0},
 maintenanceCriticalPath:{totalDurationHours:0,criticalCount:0,path:[]},
 maintenanceCapacity:{pressureShifts:0,maxLoadPct:0,minCapacityHours:0},
 maintenanceDurationPerformance:{count:0,late:0,avgVariancePct:0,last:null},
 maintenanceDelayCauses:{totalMinutes:0,totalEvents:0,topCause:null},
 maintenanceAutoScheduler:{runs:0,planned:0,blocked:0,usedHours:0},
 maintenanceResourceLeveler:{runs:0,leveled:0,conflicts:0,maxFinish:0},
 maintenanceSkills:{total:0,multiSpecialty:0,totalTechnicians:0,demand:{}},
 technicianAvailability:{availableNow:0,minAvailable:0,reserved:0,total:0},
 materialLeadTime:{open:0,arriving24h:0,totalUnitsOpen:0,next:null},
 maintenanceParallel:{runs:0,planned:0,blocked:0,maxConcurrent:0,utilizationPct:0},
 maintenanceEmergency:{active:false,orderId:null,equipmentId:null,interrupted:0,runs:0},
 maintenanceReschedule:{runs:0,moved:0,dropped:0,added:0,remaining:0},
 maintenanceExecution:{running:0,paused:0,completed:0,avgProgress:0,productiveMinutes:0,pausedMinutes:0},
 technicianTransfer:{total:0,causedPause:0,last:null},
 materialDelivery:{total:0,received:0,open:0,delayed:0,onTimePct:100,avgVariance:0},
 technicianDispatch:{runs:0,totalDispatches:0,blocked:0,last:null},
 maintenanceShiftRuntime:{clockMinute:0,status:'idle',remainingMinutes:480,emergencyEvents:0,running:0,paused:0,completed:0,avgProgress:0},
 maintenanceETA:{runs:0,lateRisk:0,maxEta:0,next:null},
 technicianProductivity:{technicians:0,productiveMinutes:0,completed:0,avgIndex:100},
 shiftHandover:{total:0,pending:0,accepted:0,last:null},
 dispatchQueue:{queued:0,ready:0,blocked:0,maxWait:0},
 maintenanceInterruptions:{active:0,total:0,totalMinutes:0,safetyActive:0},
 overtime:{approved:0,totalMinutes:0,technicians:0},
 fatigue:{high:0,attention:0,maxScore:0},
 shiftReplay:{recording:true,events:0,snapshots:0,last:null},
 terminal:{status:'normal',weather:'clear',activeEvent:null},
 shift:null
});
const clone=v=>JSON.parse(JSON.stringify(v));
export class TerminalLiveState{
 constructor({storage,eventBus,key=KEY}={}){this.storage=storage;this.eventBus=eventBus;this.key=key;this.off=[];this.migrate();}
 migrate(){if(this.storage.get(this.key,null)!==null)return;const old=this.storage.get(LEGACY,null),base=fresh();if(old){Object.assign(base,old);base.version=12;base.yard={...fresh().yard,...(old.yard||{})};base.terminal={...fresh().terminal,...(old.terminal||{})};base.anchorage={...fresh().anchorage,...(old.anchorage||{})};base.resources={...fresh().resources,...(old.resources||{})};base.equipment={...fresh().equipment,...(old.equipment||{})};base.vesselCalls={...fresh().vesselCalls,...(old.vesselCalls||{})};base.productivity={...fresh().productivity,...(old.productivity||{})};base.workOrders={...fresh().workOrders,...(old.workOrders||{})};base.optimization={...fresh().optimization,...(old.optimization||{})};base.forecast={...fresh().forecast,...(old.forecast||{})};base.reliability={...fresh().reliability,...(old.reliability||{})};base.inventory={...fresh().inventory,...(old.inventory||{})};base.hatchProductivity={...fresh().hatchProductivity,...(old.hatchProductivity||{})};base.shiftResources={...fresh().shiftResources,...(old.shiftResources||{})};base.forecastAccuracy={...fresh().forecastAccuracy,...(old.forecastAccuracy||{})};base.recovery={...fresh().recovery,...(old.recovery||{})};base.maintenanceMaterials={...fresh().maintenanceMaterials,...(old.maintenanceMaterials||{})};base.plannedMaintenance={...fresh().plannedMaintenance,...(old.plannedMaintenance||{})};base.reliabilityFamily={...fresh().reliabilityFamily,...(old.reliabilityFamily||{})};base.maintenanceCosts={...fresh().maintenanceCosts,...(old.maintenanceCosts||{})};base.maintenanceCrews={...fresh().maintenanceCrews,...(old.maintenanceCrews||{})};base.failureImpact={...fresh().failureImpact,...(old.failureImpact||{})};base.recommendations={...fresh().recommendations,...(old.recommendations||{})};base.maintenanceReadiness={...fresh().maintenanceReadiness,...(old.maintenanceReadiness||{})};base.maintenanceCalendar={...fresh().maintenanceCalendar,...(old.maintenanceCalendar||{})};base.assetCriticality={...fresh().assetCriticality,...(old.assetCriticality||{})};base.futureAvailability={...fresh().futureAvailability,...(old.futureAvailability||{})};base.maintenanceProgramImpact={...fresh().maintenanceProgramImpact,...(old.maintenanceProgramImpact||{})};base.maintenanceWindowAdvice={...fresh().maintenanceWindowAdvice,...(old.maintenanceWindowAdvice||{})};base.maintenanceDependencies={...fresh().maintenanceDependencies,...(old.maintenanceDependencies||{})};base.maintenancePriorities={...fresh().maintenancePriorities,...(old.maintenancePriorities||{})};base.maintenanceBacklog={...fresh().maintenanceBacklog,...(old.maintenanceBacklog||{})};base.maintenanceSLA={...fresh().maintenanceSLA,...(old.maintenanceSLA||{})};base.maintenanceDelayRisk={...fresh().maintenanceDelayRisk,...(old.maintenanceDelayRisk||{})};base.maintenanceGantt={...fresh().maintenanceGantt,...(old.maintenanceGantt||{})};base.maintenanceDeferral={...fresh().maintenanceDeferral,...(old.maintenanceDeferral||{})};base.maintenanceCriticalPath={...fresh().maintenanceCriticalPath,...(old.maintenanceCriticalPath||{})};base.maintenanceCapacity={...fresh().maintenanceCapacity,...(old.maintenanceCapacity||{})};base.maintenanceDurationPerformance={...fresh().maintenanceDurationPerformance,...(old.maintenanceDurationPerformance||{})};base.maintenanceDelayCauses={...fresh().maintenanceDelayCauses,...(old.maintenanceDelayCauses||{})};base.maintenanceAutoScheduler={...fresh().maintenanceAutoScheduler,...(old.maintenanceAutoScheduler||{})};base.maintenanceResourceLeveler={...fresh().maintenanceResourceLeveler,...(old.maintenanceResourceLeveler||{})};base.maintenanceSkills={...fresh().maintenanceSkills,...(old.maintenanceSkills||{})};base.technicianAvailability={...fresh().technicianAvailability,...(old.technicianAvailability||{})};base.materialLeadTime={...fresh().materialLeadTime,...(old.materialLeadTime||{})};base.maintenanceParallel={...fresh().maintenanceParallel,...(old.maintenanceParallel||{})};base.maintenanceEmergency={...fresh().maintenanceEmergency,...(old.maintenanceEmergency||{})};base.maintenanceReschedule={...fresh().maintenanceReschedule,...(old.maintenanceReschedule||{})};base.maintenanceExecution={...fresh().maintenanceExecution,...(old.maintenanceExecution||{})};base.technicianTransfer={...fresh().technicianTransfer,...(old.technicianTransfer||{})};base.materialDelivery={...fresh().materialDelivery,...(old.materialDelivery||{})};base.technicianDispatch={...fresh().technicianDispatch,...(old.technicianDispatch||{})};base.maintenanceShiftRuntime={...fresh().maintenanceShiftRuntime,...(old.maintenanceShiftRuntime||{})};base.maintenanceETA={...fresh().maintenanceETA,...(old.maintenanceETA||{})};base.technicianProductivity={...fresh().technicianProductivity,...(old.technicianProductivity||{})};base.shiftHandover={...fresh().shiftHandover,...(old.shiftHandover||{})};base.dispatchQueue={...fresh().dispatchQueue,...(old.dispatchQueue||{})};base.maintenanceInterruptions={...fresh().maintenanceInterruptions,...(old.maintenanceInterruptions||{})};base.overtime={...fresh().overtime,...(old.overtime||{})};base.fatigue={...fresh().fatigue,...(old.fatigue||{})};base.shiftReplay={...fresh().shiftReplay,...(old.shiftReplay||{})};}this.storage.set(this.key,base);}
 get(){return clone(this.storage.get(this.key,fresh()));}
 save(state,source='system'){state.updatedAt=new Date().toISOString();this.storage.set(this.key,state);this.eventBus?.emit('terminal-live:changed',{source,state:clone(state)});return clone(state);}
 patch(patch={},source='patch'){const s=this.get();Object.entries(patch).forEach(([k,v])=>{s[k]=v&&typeof v==='object'&&!Array.isArray(v)?{...(s[k]||{}),...clone(v)}:clone(v);});return this.save(s,source);}
 install(){if(this.off.length||!this.eventBus)return;this.off=[this.eventBus.on('terminal:queue',p=>this.updateQueue(p)),this.eventBus.on('simulation:complete',p=>this.captureCompletion(p)),this.eventBus.on('shift:tick',p=>this.applyShiftSnapshot(p))];}
 uninstall(){this.off.forEach(f=>f?.());this.off=[];}
 reset(){return this.save(fresh(),'reset');}
 advanceClock(minutes=0){const s=this.get();s.elapsedMinutes=Math.max(0,s.elapsedMinutes+(Number(minutes)||0));return this.save(s,'clock');}
 updateQueue(snapshot={}){const s=this.get();s.queue={...s.queue,...clone(snapshot)};if(Number.isFinite(snapshot.clock))s.elapsedMinutes=Math.max(s.elapsedMinutes,snapshot.clock);return this.save(s,'queue');}
 recordGate({decision='autorizar',turnMinutes}={}){const s=this.get();s.gate.processed+=1;s.gate.lastDecision=decision;const turn=Number.isFinite(turnMinutes)?turnMinutes:(Number(s.queue.avgWait)||0)+(Number(s.queue.serviceMinutes)||3);s.gate.totalTurnMinutes+=Math.max(0,turn);return this.save(s,'gate');}
 recordYard({occupancyPct,lastBlock,address,lastAddress}={}){const s=this.get();s.yard.moves+=1;if(Number.isFinite(occupancyPct))s.yard.occupancyPct=Math.max(0,Math.min(100,occupancyPct));if(lastBlock)s.yard.lastBlock=lastBlock;if(address||lastAddress)s.yard.lastAddress=address||lastAddress;return this.save(s,'yard');}
 recordRehandles(total=0,source='rehandle'){const s=this.get();s.yard.rehandles=Math.max(0,Number(total)||0);return this.save(s,source);}
 recordQuay({moves=1,minutes=3}={}){const s=this.get();s.quay.moves+=Math.max(0,Number(moves)||0);s.quay.activeMinutes+=Math.max(0,Number(minutes)||0);return this.save(s,'quay');}
 recordRail({cycles}={}){const s=this.get();s.rail.cycles=Number.isFinite(cycles)?cycles:s.rail.cycles+1;return this.save(s,'rail');}
 updateAnchorage(summary={},source='anchorage'){const s=this.get();s.anchorage={...s.anchorage,waiting:summary.waiting||0,delayed:summary.delayed||0,avgDelay:summary.avgDelay||0,maxWait:summary.maxWait||0,nextVessel:summary.nextVessel||null};return this.save(s,source);}
 updateResources(summary={},source='resources'){const s=this.get();s.resources={...s.resources,allocated:summary.allocated||0,totalVessels:summary.total||0,stsAvailable:summary.availableCranes?.length??s.resources.stsAvailable,stsTotal:4};return this.save(s,source);}
 updateEquipment(summary={},source='equipment'){const s=this.get();s.equipment={...s.equipment,availabilityPct:summary.availabilityPct??100,unavailable:summary.unavailable||0,total:summary.total||14};return this.save(s,source);}
 updateVesselCalls(summary={},source='vessel-calls'){const s=this.get();s.vesselCalls={...s.vesselCalls,berthed:summary.berthed||0,departed:summary.departed||0,avgBerthVariance:summary.avgBerthVariance||0,next:summary.next?.vessel?.name||null};return this.save(s,source);}
 updateProductivity(summary={},source='productivity'){const s=this.get();s.productivity={...s.productivity,overallRate:summary.overallRate||0,totalMoves:summary.totalMoves||0,totalMinutes:summary.totalMinutes||0,activeRecords:summary.records?.length||0};return this.save(s,source);}
 updateWorkOrders(summary={},source='work-orders'){const s=this.get();s.workOrders={...s.workOrders,open:summary.open||0,inProgress:summary.inProgress||0,high:summary.high||0,closed:summary.closed||0};return this.save(s,source);}
 updateOptimization(summary={},source='optimization'){const s=this.get();s.optimization={...s.optimization,runs:summary.runs||0,avoidedTotal:summary.avoidedTotal||0,last:summary.last||null};return this.save(s,source);}
 updateForecast(result,source='forecast'){const s=this.get();s.forecast=result?{active:true,maxRisk:result.maxRisk||0,peakQueue:result.peakQueue||0,peakYard:result.peakYard||0,final:result.final||null}:{...fresh().forecast};return this.save(s,source);}
 updateReliability(summary={},source='reliability'){const s=this.get();s.reliability={...s.reliability,failures:summary.failures||0,openFailures:summary.openFailures||0,mtbf:summary.mtbf||0,mttr:summary.mttr||0,topCause:summary.topCause||null};return this.save(s,source);}
 updateInventory(summary={},source='inventory'){const s=this.get();s.inventory={...s.inventory,critical:summary.critical||0,attention:summary.attention||0,totalValue:summary.totalValue||0};return this.save(s,source);}
 updateHatchProductivity(summary={},source='hatch-productivity'){const s=this.get();s.hatchProductivity={...s.hatchProductivity,overallRate:summary.overallRate||0,bottleneck:summary.bottleneck?.id||null,totalMoves:summary.totalMoves||0};return this.save(s,source);}
 updateShiftResources(summary={},source='shift-resources'){const s=this.get();s.shiftResources={...s.shiftResources,planned:summary.planned||0,shortageCount:summary.shortageCount||0,shortageAreas:summary.shortageAreas||[]};return this.save(s,source);}
 updateForecastAccuracy(summary={},source='forecast-actual'){const s=this.get();s.forecastAccuracy={...s.forecastAccuracy,count:summary.count||0,avgAccuracy:summary.avgAccuracy||0,last:summary.last||null};return this.save(s,source);}
 updateRecovery(summary={},source='recovery'){const s=this.get();s.recovery={...s.recovery,runs:summary.runs||0,improved:Boolean(summary.improved),last:summary.last||null};return this.save(s,source);}

 updateMaintenanceMaterials(summary={},source='maintenance-materials'){const s=this.get();s.maintenanceMaterials={...s.maintenanceMaterials,total:summary.total||0,reserved:summary.reserved||0,issued:summary.issued||0,pending:summary.pending||0};return this.save(s,source);}
 updatePlannedMaintenance(summary={},source='planned-maintenance'){const s=this.get();s.plannedMaintenance={...s.plannedMaintenance,clock:summary.clock||0,total:summary.total||0,active:summary.active||0,upcoming:summary.upcoming||0,next:summary.next||null};return this.save(s,source);}
 updateReliabilityFamily(summary={},source='reliability-family'){const s=this.get();s.reliabilityFamily={...s.reliabilityFamily,rows:summary.rows||[],worst:summary.worst||null,snapshots:summary.snapshots||0};return this.save(s,source);}
 updateMaintenanceCosts(summary={},source='maintenance-costs'){const s=this.get();s.maintenanceCosts={...s.maintenanceCosts,budget:summary.budget||0,total:summary.total||0,remaining:summary.remaining||0,utilization:summary.utilization||0};return this.save(s,source);}
 updateMaintenanceCrews(summary={},source='maintenance-crews'){const s=this.get();s.maintenanceCrews={...s.maintenanceCrews,total:summary.total||0,busy:summary.busy||0,available:summary.available||0};return this.save(s,source);}
 updateFailureImpact(summary={},source='failure-impact'){const s=this.get();s.failureImpact={...s.failureImpact,runs:summary.runs||0,last:summary.last||null,totalEtdDelay:summary.totalEtdDelay||0,totalYardDelay:summary.totalYardDelay||0};return this.save(s,source);}
 updateRecommendations(summary={},source='recommendations'){const s=this.get();s.recommendations={...s.recommendations,count:summary.count||0,priority1:summary.priority1||0,last:summary.last||null};return this.save(s,source);}
 updateMaintenanceReadiness(summary={},source='maintenance-readiness'){const s=this.get();s.maintenanceReadiness={...s.maintenanceReadiness,total:summary.total||0,ready:summary.ready||0,blocked:summary.blocked||0,last:summary.last||null};return this.save(s,source);}
 updateMaintenanceCalendar(summary={},source='maintenance-calendar'){const s=this.get();s.maintenanceCalendar={...s.maintenanceCalendar,total:summary.total||0,active:summary.active||0,scheduled:summary.scheduled||0,next:summary.next||null};return this.save(s,source);}
 updateAssetCriticality(summary={},source='asset-criticality'){const s=this.get();s.assetCriticality={...s.assetCriticality,critical:summary.critical||0,high:summary.high||0,criticalUnavailable:summary.criticalUnavailable||0,top:summary.top||null};return this.save(s,source);}
 updateFutureAvailability(summary={},source='future-availability'){const s=this.get();s.futureAvailability={...s.futureAvailability,minPct:summary.minPct??100,lowShifts:summary.lowShifts||0,nextRisk:summary.nextRisk||null,days:summary.days||7};return this.save(s,source);}
 updateMaintenanceProgramImpact(summary={},source='maintenance-impact'){const s=this.get();s.maintenanceProgramImpact={...s.maintenanceProgramImpact,runs:summary.runs||0,totalDelay:summary.totalDelay||0,affectedCalls:summary.affectedCalls||0,highWindows:summary.highWindows||0,last:summary.last||null};return this.save(s,source);}
 updateMaintenanceWindowAdvice(summary={},source='maintenance-window-advice'){const s=this.get();s.maintenanceWindowAdvice={...s.maintenanceWindowAdvice,equipmentId:summary.equipmentId||null,best:summary.best||null,candidates:summary.candidates||0,generatedAt:summary.generatedAt||null};return this.save(s,source);}
 updateMaintenanceDependencies(summary={},source='maintenance-dependencies'){const s=this.get();s.maintenanceDependencies={linked:summary.linked||0,blocked:summary.blocked||0,withDependencies:summary.withDependencies||0};return this.save(s,source);}
 updateMaintenancePriorities(summary={},source='maintenance-priority'){const s=this.get();s.maintenancePriorities={priority1:summary.priority1||0,priority2:summary.priority2||0,top:summary.top||null};return this.save(s,source);}
 updateMaintenanceBacklog(summary={},source='maintenance-backlog'){const s=this.get();s.maintenanceBacklog={open:summary.open||0,ready:summary.ready||0,blocked:summary.blocked||0,aging:summary.aging||0,clockHours:summary.clockHours||0};return this.save(s,source);}
 updateMaintenanceSLA(summary={},source='maintenance-sla'){const s=this.get();s.maintenanceSLA={overdue:summary.overdue||0,dueSoon:summary.dueSoon||0,compliancePct:summary.compliancePct??100,clockHours:summary.clockHours||0};return this.save(s,source);}
 updateMaintenanceDelayRisk(summary={},source='maintenance-delay-risk'){const s=this.get();s.maintenanceDelayRisk={high:summary.high||0,medium:summary.medium||0,top:summary.top||null};return this.save(s,source);}
 updateMaintenanceGantt(summary={},source='maintenance-gantt'){const s=this.get();s.maintenanceGantt={maintenanceWindows:summary.maintenanceWindows||0,vesselWindows:summary.vesselWindows||0,hardConflicts:summary.hardConflicts||0};return this.save(s,source);}
 updateMaintenanceDeferral(summary={},source='maintenance-deferral'){const s=this.get();s.maintenanceDeferral={runs:summary.runs||0,last:summary.last||null,deferred:summary.deferred||0};return this.save(s,source);}
 updateMaintenanceCriticalPath(summary={},source='maintenance-critical-path'){const s=this.get();s.maintenanceCriticalPath={totalDurationHours:summary.totalDurationHours||0,criticalCount:summary.criticalCount||0,path:summary.path||[]};return this.save(s,source);}
 updateMaintenanceCapacity(summary={},source='maintenance-capacity'){const s=this.get();s.maintenanceCapacity={pressureShifts:summary.pressureShifts||0,maxLoadPct:summary.maxLoadPct||0,minCapacityHours:summary.minCapacityHours||0};return this.save(s,source);}
 updateMaintenanceDurationPerformance(summary={},source='maintenance-duration'){const s=this.get();s.maintenanceDurationPerformance={count:summary.count||0,late:summary.late||0,avgVariancePct:summary.avgVariancePct||0,last:summary.last||null};return this.save(s,source);}
 updateMaintenanceDelayCauses(summary={},source='maintenance-delay-causes'){const s=this.get();s.maintenanceDelayCauses={totalMinutes:summary.totalMinutes||0,totalEvents:summary.totalEvents||0,topCause:summary.topCause||null};return this.save(s,source);}
 updateMaintenanceAutoScheduler(summary={},source='maintenance-auto-scheduler'){const s=this.get();s.maintenanceAutoScheduler={runs:summary.runs||0,planned:summary.planned||0,blocked:summary.blocked||0,usedHours:summary.usedHours||0};return this.save(s,source);}
 updateMaintenanceResourceLeveler(summary={},source='maintenance-resource-leveler'){const s=this.get();s.maintenanceResourceLeveler={runs:summary.runs||0,leveled:summary.leveled||0,conflicts:summary.conflicts||0,maxFinish:summary.maxFinish||0};return this.save(s,source);}
 updateMaintenanceSkills(summary={},source='maintenance-skills'){const s=this.get();s.maintenanceSkills={total:summary.total||0,multiSpecialty:summary.multiSpecialty||0,totalTechnicians:summary.totalTechnicians||0,demand:summary.demand||{}};return this.save(s,source);}
 updateTechnicianAvailability(summary={},source='technician-availability'){const s=this.get();s.technicianAvailability={availableNow:summary.availableNow||0,minAvailable:summary.minAvailable||0,reserved:summary.reserved||0,total:summary.total||0};return this.save(s,source);}
 updateMaterialLeadTime(summary={},source='material-lead-time'){const s=this.get();s.materialLeadTime={open:summary.open||0,arriving24h:summary.arriving24h||0,totalUnitsOpen:summary.totalUnitsOpen||0,next:summary.next||null};return this.save(s,source);}
 updateMaintenanceParallel(summary={},source='maintenance-parallel'){const s=this.get();s.maintenanceParallel={runs:summary.runs||0,planned:summary.planned||0,blocked:summary.blocked||0,maxConcurrent:summary.maxConcurrent||0,utilizationPct:summary.utilizationPct||0};return this.save(s,source);}
 updateMaintenanceEmergency(summary={},source='maintenance-emergency'){const s=this.get();s.maintenanceEmergency={active:Boolean(summary.active),orderId:summary.orderId||null,equipmentId:summary.equipmentId||null,interrupted:summary.interrupted||0,runs:summary.runs||0};return this.save(s,source);}
 updateMaintenanceReschedule(summary={},source='maintenance-rescheduler'){const s=this.get();s.maintenanceReschedule={runs:summary.runs||0,moved:summary.moved||0,dropped:summary.dropped||0,added:summary.added||0,remaining:summary.remaining||0};return this.save(s,source);}
 updateMaintenanceExecutionProgress(summary={},source='maintenance-execution-progress'){const s=this.get();s.maintenanceExecution={running:summary.running||0,paused:summary.paused||0,completed:summary.completed||0,avgProgress:summary.avgProgress||0,productiveMinutes:summary.productiveMinutes||0,pausedMinutes:summary.pausedMinutes||0};return this.save(s,source);}
 updateTechnicianTransfer(summary={},source='technician-transfer'){const s=this.get();s.technicianTransfer={total:summary.total||0,causedPause:summary.causedPause||0,last:summary.last||null};return this.save(s,source);}
 updateMaterialDeliveryPerformance(summary={},source='material-delivery-performance'){const s=this.get();s.materialDelivery={total:summary.total||0,received:summary.received||0,open:summary.open||0,delayed:summary.delayed||0,onTimePct:summary.onTimePct??100,avgVariance:summary.avgVariance||0};return this.save(s,source);}
 updateTechnicianDispatcher(summary={},source='technician-dispatcher'){const s=this.get();s.technicianDispatch={runs:summary.runs||0,totalDispatches:summary.totalDispatches||0,blocked:summary.blocked||0,last:summary.last||null};return this.save(s,source);}
 updateMaintenanceShiftRuntime(summary={},source='maintenance-shift-runtime'){const s=this.get();s.maintenanceShiftRuntime={clockMinute:summary.clockMinute||0,status:summary.status||'idle',remainingMinutes:summary.remainingMinutes??480,emergencyEvents:summary.emergencyEvents||0,running:summary.running||0,paused:summary.paused||0,completed:summary.completed||0,avgProgress:summary.avgProgress||0};return this.save(s,source);}
 updateMaintenanceETA(summary={},source='maintenance-eta'){const s=this.get();s.maintenanceETA={runs:summary.runs||0,lateRisk:summary.lateRisk||0,maxEta:summary.maxEta||0,next:summary.next||null};return this.save(s,source);}
 updateTechnicianProductivity(summary={},source='technician-productivity'){const s=this.get();s.technicianProductivity={technicians:summary.technicians||0,productiveMinutes:summary.productiveMinutes||0,completed:summary.completed||0,avgIndex:summary.avgIndex??100};return this.save(s,source);}
 updateShiftHandover(summary={},source='shift-handover'){const s=this.get();s.shiftHandover={total:summary.total||0,pending:summary.pending||0,accepted:summary.accepted||0,last:summary.last||null};return this.save(s,source);}
 updateDispatchQueue(summary={},source='dispatch-queue'){const s=this.get();s.dispatchQueue={queued:summary.queued||0,ready:summary.ready||0,blocked:summary.blocked||0,maxWait:summary.maxWait||0};return this.save(s,source);}
 updateMaintenanceInterruptions(summary={},source='maintenance-interruptions'){const s=this.get();s.maintenanceInterruptions={active:summary.active||0,total:summary.total||0,totalMinutes:summary.totalMinutes||0,safetyActive:summary.safetyActive||0};return this.save(s,source);}
 updateOvertime(summary={},source='overtime'){const s=this.get();s.overtime={approved:summary.approved||0,totalMinutes:summary.totalMinutes||0,technicians:summary.technicians||0};return this.save(s,source);}
 updateFatigue(summary={},source='fatigue'){const s=this.get();s.fatigue={high:summary.high||0,attention:summary.attention||0,maxScore:summary.maxScore||0};return this.save(s,source);}
 updateShiftReplay(summary={},source='shift-replay'){const s=this.get();s.shiftReplay={recording:Boolean(summary.recording),events:summary.events||0,snapshots:summary.snapshots||0,last:summary.last||null};return this.save(s,source);}
 captureCompletion(payload={}){switch(payload.moduleId){case'gate-portuario':return this.recordGate(payload);case'patio-operacional':return this.recordYard(payload);case'navio-operacao':return this.recordQuay(payload);case'terminal-ferroviario':return this.recordRail(payload);default:return this.get();}}
 applyShiftSnapshot(snapshot={}){if(!snapshot||!Number.isFinite(snapshot.minute))return this.get();const s=this.get();s.shift=clone(snapshot);s.elapsedMinutes=Math.max(s.elapsedMinutes,snapshot.minute);if(snapshot.queue)s.queue={...s.queue,...snapshot.queue};if(Number.isFinite(snapshot.gateProcessed)){s.gate.processed=snapshot.gateProcessed;s.gate.totalTurnMinutes=snapshot.totalTurnMinutes||s.gate.totalTurnMinutes;}if(Number.isFinite(snapshot.yardOccupancyPct))s.yard.occupancyPct=snapshot.yardOccupancyPct;if(Number.isFinite(snapshot.quayMoves)){s.quay.moves=snapshot.quayMoves;s.quay.activeMinutes=snapshot.minute;}if(Number.isFinite(snapshot.railMoves))s.rail.cycles=snapshot.railMoves;return this.save(s,'shift');}
 setTerminalStatus({status,weather,activeEvent}={}){const s=this.get();if(status!==undefined)s.terminal.status=status;if(weather!==undefined)s.terminal.weather=weather;if(activeEvent!==undefined)s.terminal.activeEvent=activeEvent;return this.save(s,'terminal-status');}
 kpiInput(){const s=this.get(),gateHours=Math.max(1/60,s.elapsedMinutes/60),craneHours=Math.max(1/60,s.quay.activeMinutes/60),trucks=Math.max(1,s.gate.processed);return{moves:s.quay.moves,craneHours,truckMinutes:s.gate.totalTurnMinutes,trucks,yardSlots:1000,occupied:Math.round(s.yard.occupancyPct*10),dwellHours:Math.max(0,24*trucks),containers:trucks,gateProcessed:s.gate.processed,gateHours};}
 summary(){const s=this.get(),k=this.kpiInput();return{...s,derived:{gateTrucksPerHour:k.gateProcessed/k.gateHours,craneMovesPerHour:k.moves/k.craneHours,truckTurnMinutes:k.truckMinutes/k.trucks}};}
}
