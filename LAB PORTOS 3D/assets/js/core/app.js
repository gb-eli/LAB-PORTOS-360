import { EventBus } from './event-bus.js';
import { ModuleRegistry } from './module-registry.js';
import { Router } from './router.js';
import { QualityManager } from './quality-manager.js';
import { Storage } from './storage.js';
import { PerformanceMonitor } from '../services/performance-monitor.js';
import { GraphicsBenchmark } from '../services/graphics-benchmark.js';
import { installGraphicsSettingsUI } from '../services/graphics-settings-ui.js';
import { loadModule } from '../services/module-loader.js';
import { AssetManager } from '../services/asset-manager.js';
import { OperationFlow } from '../services/operation-flow.js';
import { ScenarioControl } from '../services/scenario-control.js';
import { SessionRecorder } from '../services/session-recorder.js';
import { ExtendedOperationFlow } from '../services/extended-operation-flow.js';
import { TerminalLiveState } from '../services/terminal-live-state.js';
import { YardOccupancyState } from '../services/yard-occupancy-state.js';
import { BerthScheduler } from '../services/berth-scheduler.js';
import { TerminalEventEngine } from '../services/terminal-event-engine.js';
import { TerminalAlarmManager } from '../services/terminal-alarm-manager.js';
import { EquipmentMaintenance } from '../services/equipment-maintenance.js';
import { QuayResourcePlanner } from '../services/quay-resource-planner.js';
import { AnchorageQueue } from '../services/anchorage-queue.js';
import { YardRehandle } from '../services/yard-rehandle.js';
import { KPIHistory } from '../services/kpi-history.js';
import { PortCallTimeline } from '../services/port-call-timeline.js';
import { QuayProductivity } from '../services/quay-productivity.js';
import { MaintenanceWorkOrders } from '../services/maintenance-work-orders.js';
import { RehandleOptimizer } from '../services/rehandle-optimizer.js';
import { OperationalForecast } from '../services/operational-forecast.js';
import { ReliabilityMetrics } from '../services/reliability-metrics.js';
import { SparePartsInventory } from '../services/spare-parts-inventory.js';
import { HatchBayProductivity } from '../services/hatch-bay-productivity.js';
import { ShiftResourcePlan } from '../services/shift-resource-plan.js';
import { ForecastVsActual } from '../services/forecast-vs-actual.js';
import { RecoveryPlanner } from '../services/recovery-planner.js';
import { MaintenanceMaterialLinks } from '../services/maintenance-material-links.js';
import { PlannedMaintenance } from '../services/planned-maintenance.js';
import { ReliabilityFamily } from '../services/reliability-family.js';
import { MaintenanceCosts } from '../services/maintenance-costs.js';
import { MaintenanceCrews } from '../services/maintenance-crews.js';
import { FailureImpact } from '../services/failure-impact.js';
import { RecoveryAdvisor } from '../services/recovery-advisor.js';
import { MaintenanceReadiness } from '../services/maintenance-readiness.js';
import { MaintenanceCalendar } from '../services/maintenance-calendar.js';
import { AssetCriticality } from '../services/asset-criticality.js';
import { FutureAvailability } from '../services/future-availability.js';
import { MaintenanceProgramImpact } from '../services/maintenance-program-impact.js';
import { MaintenanceWindowAdvisor } from '../services/maintenance-window-advisor.js';
import { MaintenanceDependencies } from '../services/maintenance-dependencies.js';
import { MaintenancePriority } from '../services/maintenance-priority.js';
import { MaintenanceBacklog } from '../services/maintenance-backlog.js';
import { MaintenanceSLA } from '../services/maintenance-sla.js';
import { MaintenanceDelayRisk } from '../services/maintenance-delay-risk.js';
import { MaintenanceGantt } from '../services/maintenance-gantt.js';
import { MaintenanceDeferralAdvisor } from '../services/maintenance-deferral-advisor.js';
import { MaintenanceCriticalPath } from '../services/maintenance-critical-path.js';
import { MaintenanceCapacity } from '../services/maintenance-capacity.js';
import { MaintenanceDurationPerformance } from '../services/maintenance-duration-performance.js';
import { MaintenanceDelayCauses } from '../services/maintenance-delay-causes.js';
import { MaintenanceAutoScheduler } from '../services/maintenance-auto-scheduler.js';
import { MaintenanceResourceLeveler } from '../services/maintenance-resource-leveler.js';
import { MaintenanceSkillMatrix } from '../services/maintenance-skill-matrix.js';
import { TechnicianAvailability } from '../services/technician-availability.js';
import { MaterialLeadTime } from '../services/material-lead-time.js';
import { MaintenanceParallelExecution } from '../services/maintenance-parallel-execution.js';
import { MaintenanceEmergency } from '../services/maintenance-emergency.js';
import { MaintenanceRescheduler } from '../services/maintenance-rescheduler.js';
import { MaintenanceExecutionProgress } from '../services/maintenance-execution-progress.js';
import { TechnicianTransfer } from '../services/technician-transfer.js';
import { MaterialDeliveryPerformance } from '../services/material-delivery-performance.js';
import { TechnicianDispatcher } from '../services/technician-dispatcher.js';
import { MaintenanceShiftRuntime } from '../services/maintenance-shift-runtime.js';
import { TechnicianProductivity } from '../services/technician-productivity.js';
import { OvertimeManager } from '../services/overtime-manager.js';
import { FatigueModel } from '../services/fatigue-model.js';
import { MaintenanceETA } from '../services/maintenance-eta.js';
import { ShiftHandover } from '../services/shift-handover.js';
import { DispatchQueue } from '../services/dispatch-queue.js';
import { MaintenanceInterruptions } from '../services/maintenance-interruptions.js';
import { ShiftReplay } from '../services/shift-replay.js';
import { PracticalOperationState } from '../services/practical-operation-state.js';
import { CustomsProcess } from '../services/customs-process.js';
import { LiveDocuments } from '../services/live-documents.js';
import { GateCycle } from '../services/gate-cycle.js';
import { EmptyDepot } from '../services/empty-depot.js';
import { ContainerCycle } from '../services/container-cycle.js';
import { CargoHandlingProcess } from '../services/cargo-handling-process.js';
import { RegionalTradeMissions } from '../services/regional-trade-missions.js';
import { TruckStaging } from '../services/truck-staging.js';
import { CFSWarehouse } from '../services/cfs-warehouse.js';
import { SpecialCargoProcess } from '../services/special-cargo-process.js';
import { ContinuousPortMission } from '../services/continuous-port-mission.js';
import { BookingCutoff } from '../services/booking-cutoff.js';
import { MultiLaneGate } from '../services/multi-lane-gate.js';
import { CustomsInspectionVisual } from '../services/customs-inspection-visual.js';
import { SpecialContainerOperations } from '../services/special-container-operations.js';
import { ReeferJourney } from '../services/reefer-journey.js';
import { CFSAdvancedOperations } from '../services/cfs-advanced-operations.js';
import { RegionalContinuousMissions } from '../services/regional-continuous-missions.js';
import { PortArrivalOperation } from '../services/port-arrival-operation.js';
import { QuayYardOperation } from '../services/quay-yard-operation.js';
import { ImportDeliveryOperation } from '../services/import-delivery-operation.js';
import { ExportShipmentOperation } from '../services/export-shipment-operation.js';
import { VesselDepartureOperation } from '../services/vessel-departure-operation.js';
import { PortCallCompletion } from '../services/port-call-completion.js';
import { PortCallReplay } from '../services/port-call-replay.js';
import { PortCallHistory } from '../services/port-call-history.js';
import { PortCallEvents } from '../services/port-call-events.js';
import { PortCallAnalytics } from '../services/port-call-analytics.js';
import { modulesCatalog } from '../data/modules.js';

const root = document.querySelector('#app');
const toastRegion = document.querySelector('#toastRegion');
const qualityButton = document.querySelector('#qualityButton');
const qualityLabel = document.querySelector('#qualityLabel');
const themeButton = document.querySelector('#themeButton');

const eventBus = new EventBus();
const registry = new ModuleRegistry();
registry.registerMany(modulesCatalog);
const quality = new QualityManager(eventBus);
const performance = new PerformanceMonitor(eventBus);
const graphicsBenchmark = new GraphicsBenchmark({ storage: Storage, eventBus, qualityManager: quality });
const assets = new AssetManager({ eventBus, qualityManager: quality });
const operationFlow = new OperationFlow({ storage: Storage, eventBus });
const instructorControl = new ScenarioControl({ storage: Storage, eventBus });
const sessionRecorder = new SessionRecorder({ storage: Storage, eventBus });
sessionRecorder.install();
const extendedFlow = new ExtendedOperationFlow({ storage: Storage, eventBus });
extendedFlow.install();
const liveState = new TerminalLiveState({ storage: Storage, eventBus });
liveState.install();
const practicalOperation = new PracticalOperationState({ storage: Storage, eventBus, liveState });
const customsProcess = new CustomsProcess({ storage: Storage, eventBus, practicalOperation });
const liveDocuments = new LiveDocuments({ practicalOperation });
const gateCycle = new GateCycle({ storage: Storage, eventBus, practicalOperation });
const emptyDepot = new EmptyDepot({ storage: Storage, eventBus, practicalOperation });
const containerCycle = new ContainerCycle({ storage: Storage, eventBus, practicalOperation });
const cargoHandling = new CargoHandlingProcess({ storage: Storage, eventBus, practicalOperation, containerCycle });
const regionalTradeMissions = new RegionalTradeMissions({ storage: Storage, eventBus, practicalOperation });
const truckStaging = new TruckStaging({ storage: Storage, eventBus, practicalOperation });
const cfsWarehouse = new CFSWarehouse({ storage: Storage, eventBus, practicalOperation });
const specialCargoProcess = new SpecialCargoProcess({ storage: Storage, eventBus, practicalOperation });
const continuousPortMission = new ContinuousPortMission({ storage: Storage, eventBus, practicalOperation });
const bookingCutoff = new BookingCutoff({ storage: Storage, eventBus, practicalOperation });
const multiLaneGate = new MultiLaneGate({ storage: Storage, eventBus, practicalOperation, gateCycle });
const customsInspectionVisual = new CustomsInspectionVisual({ storage: Storage, eventBus, practicalOperation });
const specialContainerOperations = new SpecialContainerOperations({ storage: Storage, eventBus, practicalOperation });
const reeferJourney = new ReeferJourney({ storage: Storage, eventBus, practicalOperation });
const cfsAdvancedOperations = new CFSAdvancedOperations({ storage: Storage, eventBus, cfsWarehouse, practicalOperation });
const regionalContinuousMissions = new RegionalContinuousMissions({ storage: Storage, eventBus, practicalOperation });
const portArrivalOperation = new PortArrivalOperation({ storage: Storage, eventBus, practicalOperation, berthScheduler: null, anchorageQueue: null });
const yardOccupancy = new YardOccupancyState({ storage: Storage, eventBus, liveState });
yardOccupancy.install();
const berthScheduler = new BerthScheduler({ storage: Storage, eventBus });
const equipmentMaintenance = new EquipmentMaintenance({ storage: Storage, eventBus, liveState });
const resourcePlanner = new QuayResourcePlanner({ storage: Storage, eventBus, berthScheduler, equipmentMaintenance, liveState });
const anchorageQueue = new AnchorageQueue({ storage: Storage, eventBus, berthScheduler, resourcePlanner, liveState });
const yardRehandle = new YardRehandle({ storage: Storage, eventBus, liveState });
const terminalEvents = new TerminalEventEngine({ storage: Storage, eventBus, liveState, yardOccupancy, instructorControl });
const kpiHistory = new KPIHistory({ storage: Storage, eventBus, liveState });
kpiHistory.install();
const portCallTimeline = new PortCallTimeline({ storage: Storage, eventBus, anchorageQueue, liveState });
const quayProductivity = new QuayProductivity({ storage: Storage, eventBus, resourcePlanner, liveState });
const quayYardOperation = new QuayYardOperation({ storage: Storage, eventBus, practicalOperation, portArrivalOperation, yardOccupancy, quayProductivity });
const importDeliveryOperation = new ImportDeliveryOperation({ storage: Storage, eventBus, practicalOperation, quayYardOperation, yardOccupancy, gateCycle, liveDocuments });
const exportShipmentOperation = new ExportShipmentOperation({ storage: Storage, eventBus, practicalOperation, liveDocuments, emptyDepot, bookingCutoff, gateCycle, yardOccupancy, cargoHandling, quayProductivity });
const vesselDepartureOperation = new VesselDepartureOperation({ storage: Storage, eventBus, practicalOperation, exportShipmentOperation, quayProductivity, portArrivalOperation });
const portCallCompletion = new PortCallCompletion({ storage: Storage, eventBus, practicalOperation, vesselDepartureOperation, portArrivalOperation, portCallTimeline, liveState, quayProductivity });
const portCallReplay = new PortCallReplay({ storage: Storage, eventBus, practicalOperation, portArrivalOperation, quayYardOperation, exportShipmentOperation, vesselDepartureOperation, portCallCompletion });
const portCallHistory = new PortCallHistory({ storage: Storage, eventBus, portCallCompletion, portCallTimeline, portArrivalOperation, quayProductivity });
const portCallEvents = new PortCallEvents({ storage: Storage, eventBus, portCallHistory });
const portCallAnalytics = new PortCallAnalytics({ eventBus, portCallHistory, portCallEvents });
const maintenanceWorkOrders = new MaintenanceWorkOrders({ storage: Storage, eventBus, equipmentMaintenance, liveState });
const rehandleOptimizer = new RehandleOptimizer({ storage: Storage, eventBus, liveState });
const operationalForecast = new OperationalForecast({ storage: Storage, eventBus, liveState, anchorageQueue, equipmentMaintenance });
const reliabilityMetrics = new ReliabilityMetrics({ storage: Storage, eventBus, equipmentMaintenance, maintenanceWorkOrders, liveState });
const spareParts = new SparePartsInventory({ storage: Storage, eventBus, liveState });
const hatchBayProductivity = new HatchBayProductivity({ storage: Storage, eventBus, liveState });
const shiftResourcePlan = new ShiftResourcePlan({ storage: Storage, eventBus, equipmentMaintenance, liveState });
const forecastVsActual = new ForecastVsActual({ storage: Storage, eventBus, operationalForecast, liveState });
const recoveryPlanner = new RecoveryPlanner({ storage: Storage, eventBus, operationalForecast, liveState });

const maintenanceMaterialLinks = new MaintenanceMaterialLinks({ storage: Storage, eventBus, maintenanceWorkOrders, spareParts, liveState });
const plannedMaintenance = new PlannedMaintenance({ storage: Storage, eventBus, equipmentMaintenance, liveState });
const reliabilityFamily = new ReliabilityFamily({ storage: Storage, eventBus, reliabilityMetrics, equipmentMaintenance, liveState });
reliabilityFamily.install();
const maintenanceCosts = new MaintenanceCosts({ storage: Storage, eventBus, reliabilityMetrics, spareParts, maintenanceWorkOrders, liveState });
maintenanceCosts.install();
const maintenanceCrews = new MaintenanceCrews({ storage: Storage, eventBus, maintenanceWorkOrders, liveState });
const failureImpact = new FailureImpact({ storage: Storage, eventBus, equipmentMaintenance, resourcePlanner, portCallTimeline, liveState });
const maintenanceReadiness = new MaintenanceReadiness({ storage: Storage, eventBus, maintenanceWorkOrders, maintenanceMaterialLinks, maintenanceCrews, equipmentMaintenance, liveState });
const maintenanceCalendar = new MaintenanceCalendar({ storage: Storage, eventBus, plannedMaintenance, equipmentMaintenance, liveState });
const assetCriticality = new AssetCriticality({ storage: Storage, eventBus, equipmentMaintenance, reliabilityFamily, liveState });
const futureAvailability = new FutureAvailability({ eventBus, equipmentMaintenance, plannedMaintenance, liveState });
const maintenanceProgramImpact = new MaintenanceProgramImpact({ storage: Storage, eventBus, plannedMaintenance, berthScheduler, resourcePlanner, portCallTimeline, liveState });
const maintenanceWindowAdvisor = new MaintenanceWindowAdvisor({ storage: Storage, eventBus, equipmentMaintenance, maintenanceProgramImpact, futureAvailability, plannedMaintenance, assetCriticality, liveState });
const maintenanceDependencies = new MaintenanceDependencies({ storage: Storage, eventBus, maintenanceWorkOrders, liveState });
maintenanceReadiness.maintenanceDependencies = maintenanceDependencies;
maintenanceReadiness.syncLive('dependencies-ready');
const maintenancePriority = new MaintenancePriority({ storage: Storage, eventBus, maintenanceWorkOrders, assetCriticality, maintenanceReadiness, maintenanceDependencies, liveState });
const maintenanceBacklog = new MaintenanceBacklog({ storage: Storage, eventBus, maintenanceWorkOrders, maintenanceReadiness, maintenancePriority, liveState });
const maintenanceSLA = new MaintenanceSLA({ storage: Storage, eventBus, maintenanceBacklog, maintenanceWorkOrders, liveState });
const maintenanceDelayRisk = new MaintenanceDelayRisk({ storage: Storage, eventBus, maintenanceSLA, maintenancePriority, maintenanceReadiness, maintenanceDependencies, assetCriticality, liveState });
const maintenanceGantt = new MaintenanceGantt({ storage: Storage, eventBus, maintenanceCalendar, plannedMaintenance, berthScheduler, resourcePlanner, maintenanceProgramImpact, liveState });
const maintenanceDeferral = new MaintenanceDeferralAdvisor({ storage: Storage, eventBus, plannedMaintenance, assetCriticality, maintenanceDelayRisk, maintenanceProgramImpact, maintenanceWindowAdvisor, liveState });
const maintenanceCriticalPath = new MaintenanceCriticalPath({ storage: Storage, eventBus, maintenanceWorkOrders, maintenanceDependencies, liveState });
const maintenanceCapacity = new MaintenanceCapacity({ storage: Storage, eventBus, maintenanceWorkOrders, maintenanceCrews, maintenanceBacklog, maintenanceCriticalPath, liveState });
const maintenanceDurationPerformance = new MaintenanceDurationPerformance({ storage: Storage, eventBus, maintenanceWorkOrders, maintenanceCriticalPath, liveState });
const maintenanceDelayCauses = new MaintenanceDelayCauses({ storage: Storage, eventBus, maintenanceWorkOrders, liveState });
const maintenanceAutoScheduler = new MaintenanceAutoScheduler({ storage: Storage, eventBus, maintenanceBacklog, maintenancePriority, maintenanceReadiness, maintenanceCriticalPath, maintenanceCapacity, maintenanceWindowAdvisor, liveState });
const maintenanceResourceLeveler = new MaintenanceResourceLeveler({ storage: Storage, eventBus, maintenanceAutoScheduler, maintenanceCrews, maintenanceMaterialLinks, maintenanceCapacity, liveState });
const maintenanceSkillMatrix = new MaintenanceSkillMatrix({ storage: Storage, eventBus, maintenanceWorkOrders, liveState });
const technicianAvailability = new TechnicianAvailability({ storage: Storage, eventBus, liveState });
const materialLeadTime = new MaterialLeadTime({ storage: Storage, eventBus, spareParts, maintenanceMaterialLinks, liveState });
const maintenanceParallelExecution = new MaintenanceParallelExecution({ storage: Storage, eventBus, maintenanceWorkOrders, maintenancePriority, maintenanceDependencies, maintenanceCriticalPath, maintenanceSkillMatrix, technicianAvailability, materialLeadTime, equipmentMaintenance, liveState });
const maintenanceEmergency = new MaintenanceEmergency({ storage: Storage, eventBus, equipmentMaintenance, maintenanceWorkOrders, maintenanceMaterialLinks, materialLeadTime, liveState });
const maintenanceRescheduler = new MaintenanceRescheduler({ storage: Storage, eventBus, maintenanceParallelExecution, maintenanceEmergency, liveState });
maintenanceReadiness.maintenanceSkillMatrix = maintenanceSkillMatrix;
maintenanceReadiness.technicianAvailability = technicianAvailability;
maintenanceReadiness.syncLive('technician-readiness');
const maintenanceExecutionProgress = new MaintenanceExecutionProgress({ storage: Storage, eventBus, maintenanceWorkOrders, technicianAvailability, maintenanceCriticalPath, liveState });
const technicianTransfer = new TechnicianTransfer({ storage: Storage, eventBus, technicianAvailability, maintenanceSkillMatrix, maintenanceExecutionProgress, liveState });
const materialDeliveryPerformance = new MaterialDeliveryPerformance({ storage: Storage, eventBus, materialLeadTime, liveState });
const technicianDispatcher = new TechnicianDispatcher({ storage: Storage, eventBus, maintenanceWorkOrders, maintenancePriority, maintenanceDependencies, maintenanceMaterialLinks, maintenanceSkillMatrix, technicianAvailability, maintenanceExecutionProgress, liveState });
const maintenanceShiftRuntime = new MaintenanceShiftRuntime({ storage: Storage, eventBus, maintenanceExecutionProgress, technicianAvailability, materialLeadTime, technicianDispatcher, maintenanceEmergency, maintenanceRescheduler, equipmentMaintenance, liveState });
const technicianProductivity = new TechnicianProductivity({ storage: Storage, eventBus, maintenanceExecutionProgress, liveState });
const overtimeManager = new OvertimeManager({ storage: Storage, eventBus, technicianAvailability, liveState });
const fatigueModel = new FatigueModel({ storage: Storage, eventBus, maintenanceExecutionProgress, overtimeManager, technicianTransfer, liveState });
const maintenanceETA = new MaintenanceETA({ storage: Storage, eventBus, maintenanceExecutionProgress, technicianProductivity, fatigueModel, liveState });
const shiftHandover = new ShiftHandover({ storage: Storage, eventBus, maintenanceWorkOrders, maintenanceExecutionProgress, technicianAvailability, materialLeadTime, maintenanceEmergency, liveState });
const dispatchQueue = new DispatchQueue({ storage: Storage, eventBus, maintenanceWorkOrders, maintenancePriority, maintenanceDependencies, maintenanceMaterialLinks, maintenanceSkillMatrix, technicianAvailability, maintenanceExecutionProgress, technicianDispatcher, liveState });
const maintenanceInterruptions = new MaintenanceInterruptions({ storage: Storage, eventBus, maintenanceExecutionProgress, liveState });
const shiftReplay = new ShiftReplay({ storage: Storage, eventBus, maintenanceShiftRuntime, maintenanceExecutionProgress, liveState });
const alarmManager = new TerminalAlarmManager({ storage: Storage, eventBus, liveState, yardOccupancy, berthScheduler, terminalEvents, instructorControl, anchorageQueue, equipmentMaintenance, resourcePlanner, portCallTimeline, quayProductivity, maintenanceWorkOrders, operationalForecast, reliabilityMetrics, spareParts, hatchBayProductivity, shiftResourcePlan, forecastVsActual, recoveryPlanner, maintenanceMaterialLinks, plannedMaintenance, reliabilityFamily, maintenanceCosts, maintenanceCrews, failureImpact, maintenanceReadiness, maintenanceCalendar, assetCriticality, futureAvailability, maintenanceProgramImpact, maintenanceWindowAdvisor, maintenanceDependencies, maintenancePriority, maintenanceBacklog, maintenanceSLA, maintenanceDelayRisk, maintenanceGantt, maintenanceDeferral, maintenanceCriticalPath, maintenanceCapacity, maintenanceDurationPerformance, maintenanceDelayCauses, maintenanceAutoScheduler, maintenanceResourceLeveler, maintenanceSkillMatrix, technicianAvailability, materialLeadTime, maintenanceParallelExecution, maintenanceEmergency, maintenanceRescheduler, maintenanceExecutionProgress, technicianTransfer, materialDeliveryPerformance, technicianDispatcher, maintenanceShiftRuntime });
alarmManager.install();
const recoveryAdvisor = new RecoveryAdvisor({ storage: Storage, eventBus, liveState, alarmManager, equipmentMaintenance, spareParts, maintenanceWorkOrders, recoveryPlanner, operationalForecast });
let instructorDecoration = null;
let activeModule = null;
let fps = 0;

function toast(message) {
  const item = document.createElement('div');
  item.className = 'toast';
  item.textContent = message;
  toastRegion.append(item);
  window.setTimeout(() => item.remove(), 3200);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  Storage.set('theme', theme);
}
applyTheme(Storage.get('theme', 'dark'));

installGraphicsSettingsUI({ button: qualityButton, label: qualityLabel, quality, benchmark: graphicsBenchmark, eventBus, toast });
themeButton.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'));
eventBus.on('performance:fps', ({ fps: value }) => { fps = value; });
performance.start();

function moduleCard(module) {
  const ready = module.status === 'ready';
  return `
    <article class="module-card accent--${module.accent || 'teal'}" data-module-card data-category="${module.category}" data-search="${`${module.title} ${module.description} ${module.category} ${module.level}`.toLowerCase()}">
      <div class="module-card__top"><div class="module-card__icon" aria-hidden="true">${module.icon}</div><span class="module-card__type">${module.type}</span></div>
      <div class="module-card__meta">
        <span class="tag">${module.category}</span><span class="tag">${module.level}</span>
        <span class="tag ${ready ? 'tag--ready' : 'tag--planned'}">${ready ? 'Disponível' : 'Planejado'}</span>
      </div>
      <h3>${module.title}</h3>
      <p>${module.description}</p>
      <div class="actions">${ready ? `<a class="button button--primary" href="#/lab/${module.id}">Abrir laboratório</a>` : `<button class="button" disabled>Em desenvolvimento</button>`}</div>
    </article>`;
}

async function renderHome() {
  if (activeModule?.unmount) await activeModule.unmount();
  instructorDecoration?.(); instructorDecoration = null;
  activeModule = null;
  const all = registry.list();
  const readyCount = all.filter(m => m.status === 'ready').length;
  const q = quality.getConfig();
  const categories = ['Todos', ...new Set(all.map(m => m.category))];

  root.innerHTML = `
    <div class="page-stack">
      <section class="hero-grid hero-grid--port">
        <div class="hero-card hero-card--port">
          <div class="hero-watermark" aria-hidden="true">PORT</div>
          <span class="eyebrow">Formação técnica • Operação portuária</span>
          <h1>Um terminal virtual para aprender praticando.</h1>
          <p>Laboratórios independentes para contêineres, gate, pesagem, pátio, equipamentos e navios. A v0.39 transforma port calls concluídos em histórico comparável: turnaround, espera por berço, produtividade, tempo por fase, eventos e dashboard executivo, mantendo Mínimo, Médio, Alto e Ultra.</p>
          <div class="actions"><a class="button button--primary" href="#/lab/replay-escala-completa">Replay da Escala</a><a class="button button--ghost" href="#/lab/missao-exportacao-completa-v036">Missão Exportação</a><a class="button button--ghost" href="#/lab/missao-importacao-navio-destino">Missão Importação</a><a class="button button--ghost" href="#/lab/gate-3d-operacional">Gate 3D</a><a class="button button--ghost" href="#/lab/configuracao-grafica">Gráficos</a><a class="button button--ghost" href="#/lab/relatorio-sessao">Evidências</a></div>
          <div class="hero-pipeline">${operationFlow.getSteps().map((step,i) => `${i ? '<i>→</i>' : ''}<span class="${step.complete ? 'is-complete' : ''}">${step.label.toUpperCase()}${step.complete ? ' ✓' : ''}</span>`).join('')}</div>
        </div>
        <aside class="hero-aside">
          <div class="stat-card stat-card--accent"><strong>${readyCount}</strong><span>laboratórios funcionais</span></div>
          <div class="stat-card"><strong>${all.length}</strong><span>módulos mapeados nesta base</span></div>
          <div class="stat-card"><strong>${q.requestedLabel} / ${q.effectiveLabel}</strong><span>configuração escolhida / efetiva</span></div>
          <div class="stat-card"><strong>${fps || '—'} FPS</strong><span>monitor da interface</span></div>
        </aside>
      </section>

      <section class="catalog-section">
        <div class="section-head"><div><span class="eyebrow">Catálogo modular</span><h2>Laboratórios e ferramentas</h2></div><p>Escolha uma área e entre na simulação.</p></div>
        <div class="catalog-toolbar">
          <label class="search-field"><span aria-hidden="true">⌕</span><input id="moduleSearch" type="search" placeholder="Buscar laboratório…" autocomplete="off" /></label>
          <div class="filter-chips" id="categoryFilters">${categories.map((c, i) => `<button class="filter-chip ${i === 0 ? 'is-active' : ''}" type="button" data-category-filter="${c}">${c}</button>`).join('')}</div>
        </div>
        <div class="cards-grid" id="moduleGrid">${all.map(moduleCard).join('')}</div>
        <div id="catalogEmpty" class="empty-inline" hidden>Nenhum laboratório encontrado com esse filtro.</div>
      </section>
    </div>`;

  let activeCategory = 'Todos';
  const search = root.querySelector('#moduleSearch');
  const applyFilters = () => {
    const term = search.value.trim().toLowerCase();
    let visible = 0;
    root.querySelectorAll('[data-module-card]').forEach(card => {
      const categoryOk = activeCategory === 'Todos' || card.dataset.category === activeCategory;
      const searchOk = !term || card.dataset.search.includes(term);
      const show = categoryOk && searchOk;
      card.hidden = !show;
      if (show) visible += 1;
    });
    root.querySelector('#catalogEmpty').hidden = visible !== 0;
  };
  const searchHandler = () => applyFilters();
  search.addEventListener('input', searchHandler);
  const chipHandlers = [];
  root.querySelectorAll('[data-category-filter]').forEach(btn => {
    const handler = () => {
      activeCategory = btn.dataset.categoryFilter;
      root.querySelectorAll('[data-category-filter]').forEach(b => b.classList.toggle('is-active', b === btn));
      applyFilters();
    };
    btn.addEventListener('click', handler); chipHandlers.push([btn, handler]);
  });
  return () => {
    search.removeEventListener('input', searchHandler);
    chipHandlers.forEach(([btn, handler]) => btn.removeEventListener('click', handler));
  };
}

async function renderAbout() {
  if (activeModule?.unmount) await activeModule.unmount();
  instructorDecoration?.(); instructorDecoration = null;
  activeModule = null;
  root.innerHTML = `
    <section class="panel about-panel">
      <span class="eyebrow">Arquitetura v0.39.0</span>
      <h1>Base modular com camada gráfica compartilhada.</h1>
      <p>O núcleo contém roteamento, registro de módulos, Event Bus, armazenamento local, Quality Manager e monitor de desempenho. A v0.39.0 mantém a camada gráfica adaptativa e acrescenta análise de múltiplas escalas: histórico, comparação de navios, turnaround, tempo por fase, espera por berço, eventos meteorológicos/operacionais e dashboard executivo de Port Calls. O detalhamento continua escalando por Mínimo/Médio/Alto/Ultra, preservando operação portuária prática, comércio exterior, gestão e manutenção. Esses serviços alimentam a Central de Operações por eventos e estado compartilhado, preservando a independência dos laboratórios.</p>
      <div class="architecture-flow"><span>CORE</span><i>→</i><span>MODULE</span><i>→</i><span>SIMULATION</span><i>→</i><span>ASSET MANAGER</span><i>→</i><span>PORT SCENE KIT</span><i>→</i><span>2D / 3D</span></div>
      <div class="cards-grid cards-grid--about">
        <div class="stat-card"><strong>Mínimo</strong><span>compatibilidade e LOD leve</span></div><div class="stat-card"><strong>Médio → Ultra</strong><span>detalhe progressivo e escolha manual</span></div><div class="stat-card"><strong>Benchmark</strong><span>recomendação por dispositivo</span></div>
      </div>
      <div class="actions"><a class="button button--primary" href="#/">Voltar à Central</a></div>
    </section>`;
}

async function renderLab(hash) {
  const id = hash.split('/')[2];
  const metadata = registry.get(id);
  if (!metadata || metadata.status !== 'ready') return renderNotFound(hash);
  try {
    const module = await loadModule(metadata);
    activeModule = module;
    sessionRecorder.record('module:open', { moduleId: id, title: metadata.title });
    await module.mount({ root, eventBus, storage: Storage, quality, assets, operationFlow, extendedFlow, instructorControl, sessionRecorder, liveState, yardOccupancy, berthScheduler, terminalEvents, alarmManager, equipmentMaintenance, resourcePlanner, anchorageQueue, yardRehandle, kpiHistory, portCallTimeline, quayProductivity, maintenanceWorkOrders, rehandleOptimizer, operationalForecast, reliabilityMetrics, spareParts, hatchBayProductivity, shiftResourcePlan, forecastVsActual, recoveryPlanner, maintenanceMaterialLinks, plannedMaintenance, reliabilityFamily, maintenanceCosts, maintenanceCrews, failureImpact, recoveryAdvisor, maintenanceReadiness, maintenanceCalendar, assetCriticality, futureAvailability, maintenanceProgramImpact, maintenanceWindowAdvisor, maintenanceDependencies, maintenancePriority, maintenanceBacklog, maintenanceSLA, maintenanceDelayRisk, maintenanceGantt, maintenanceDeferral, maintenanceCriticalPath, maintenanceCapacity, maintenanceDurationPerformance, maintenanceDelayCauses, maintenanceAutoScheduler, maintenanceResourceLeveler, maintenanceSkillMatrix, technicianAvailability, materialLeadTime, maintenanceParallelExecution, maintenanceEmergency, maintenanceRescheduler, maintenanceExecutionProgress, technicianTransfer, materialDeliveryPerformance, technicianDispatcher, maintenanceShiftRuntime, technicianProductivity, overtimeManager, fatigueModel, maintenanceETA, shiftHandover, dispatchQueue, maintenanceInterruptions, shiftReplay, practicalOperation, customsProcess, liveDocuments, gateCycle, emptyDepot, containerCycle, cargoHandling, regionalTradeMissions, truckStaging, cfsWarehouse, specialCargoProcess, continuousPortMission, bookingCutoff, multiLaneGate, customsInspectionVisual, specialContainerOperations, reeferJourney, cfsAdvancedOperations, regionalContinuousMissions, portArrivalOperation, quayYardOperation, importDeliveryOperation, exportShipmentOperation, vesselDepartureOperation, portCallCompletion, portCallReplay, portCallHistory, portCallEvents, portCallAnalytics, graphicsBenchmark, toast, metadata });
    instructorDecoration?.(); instructorDecoration = instructorControl.decorate(root, id);
    return async () => { instructorDecoration?.(); instructorDecoration = null; if (activeModule?.unmount) await activeModule.unmount(); activeModule = null; };
  } catch (error) {
    console.error(error);
    root.innerHTML = `<section class="empty-state panel"><h2>Não foi possível carregar o laboratório.</h2><p>Verifique o console e o caminho do módulo.</p><a class="button button--primary" href="#/">Voltar</a></section>`;
  }
}

async function renderNotFound() {
  root.innerHTML = `<section class="empty-state panel"><h2>Página não encontrada</h2><p>O endereço informado não corresponde a um módulo cadastrado.</p><a class="button button--primary" href="#/">Ir para a Central</a></section>`;
}

const router = new Router([
  { match: hash => hash === '/', render: renderHome },
  { match: hash => hash === '/sobre', render: renderAbout },
  { match: hash => /^\/lab\/[^/]+$/.test(hash), render: renderLab }
], renderNotFound);
router.start();
