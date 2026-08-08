const KEY='terminal:forecast-actual:v020';
const clone=v=>JSON.parse(JSON.stringify(v));
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),comparisons:[]});
export class ForecastVsActual{
 constructor({storage,eventBus,operationalForecast,liveState}={}){Object.assign(this,{storage,eventBus,operationalForecast,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='forecast-actual'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateForecastAccuracy?.(summary,source);this.eventBus?.emit('forecast-actual:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 compare({forecastHour=1,actualQueue,actualYard,actualAnchorage}={}){const fc=this.operationalForecast.latest();if(!fc)return{ok:false,reason:'Gere primeiro uma previsão operacional.'};const p=fc.points.find(x=>x.hour===Number(forecastHour))||fc.points[0],live=this.liveState.summary();actualQueue=Number.isFinite(Number(actualQueue))?Number(actualQueue):live.queue.queue;actualYard=Number.isFinite(Number(actualYard))?Number(actualYard):live.yard.occupancyPct;actualAnchorage=Number.isFinite(Number(actualAnchorage))?Number(actualAnchorage):live.anchorage.waiting;const err={queue:actualQueue-p.queue,yard:actualYard-p.yardPct,anchorage:actualAnchorage-p.anchorage},abs=Math.abs(err.queue)+Math.abs(err.yard)+Math.abs(err.anchorage)*5,score=Math.max(0,100-Math.min(100,abs));const row={id:`FA-${Date.now()}`,at:new Date().toISOString(),forecastHour:p.hour,forecast:{queue:p.queue,yard:p.yardPct,anchorage:p.anchorage},actual:{queue:actualQueue,yard:actualYard,anchorage:actualAnchorage},error:err,accuracy:score};const s=this.get();s.comparisons.unshift(row);this.save(s,'compare');return{ok:true,row};}
 summary(state=this.get()){const rows=state.comparisons,avg=rows.length?rows.reduce((n,x)=>n+x.accuracy,0)/rows.length:0,last=rows[0]||null;return{count:rows.length,avgAccuracy:avg,last,rows};}
 syncLive(source='forecast-actual'){this.liveState?.updateForecastAccuracy?.(this.summary(),source);}
}
