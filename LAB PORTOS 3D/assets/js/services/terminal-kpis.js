export const KPI_SCENARIOS={
 balanced:{label:'Operação balanceada',moves:92,craneHours:3,truckMinutes:1320,trucks:40,yardSlots:1200,occupied:780,dwellHours:1536,containers:80,gateProcessed:88,gateHours:2},
 congested:{label:'Pico / congestionamento',moves:72,craneHours:3,truckMinutes:2460,trucks:40,yardSlots:1200,occupied:1032,dwellHours:2320,containers:80,gateProcessed:62,gateHours:2},
 optimized:{label:'Janela otimizada',moves:108,craneHours:3,truckMinutes:920,trucks:40,yardSlots:1200,occupied:690,dwellHours:1180,containers:80,gateProcessed:104,gateHours:2}
};
export function calculateTerminalKPIs(v={}){const safe=(a,b)=>b? a/b:0;return {
 craneMovesPerHour:safe(v.moves,v.craneHours),
 truckTurnMinutes:safe(v.truckMinutes,v.trucks),
 yardOccupancy:safe(v.occupied,v.yardSlots)*100,
 dwellHours:safe(v.dwellHours,v.containers),
 gateTrucksPerHour:safe(v.gateProcessed,v.gateHours)
};}
export function evaluateKPI(name,value){const bands={craneMovesPerHour:[25,32],truckTurnMinutes:[45,30],yardOccupancy:[80,65],dwellHours:[30,20],gateTrucksPerHour:[35,45]};const [warn,good]=bands[name]||[0,0];const inverse=['truckTurnMinutes','yardOccupancy','dwellHours'].includes(name);if(inverse)return value<=good?'good':value<=warn?'attention':'risk';return value>=good?'good':value>=warn?'attention':'risk';}
