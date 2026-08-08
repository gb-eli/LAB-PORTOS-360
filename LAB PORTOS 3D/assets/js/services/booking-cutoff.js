const KEY='practical:booking-cutoff:v031';
const cp=v=>typeof structuredClone==='function'?structuredClone(v):JSON.parse(JSON.stringify(v));
const defaults=()=>({clockMin:0,bookings:[{id:'BK-PORTOS-3101',vessel:'MV Atlântico Sul',voyage:'AS310',cutoffMin:360,etdMin:720,status:'booked',containerNo:'LPRT4026087',history:[]}],rollovers:0,noShows:0});
export class BookingCutoff{
 constructor({storage,eventBus,practicalOperation}={}){this.storage=storage;this.eventBus=eventBus;this.practicalOperation=practicalOperation;this.state=this.storage?.get(KEY,null)||defaults();this.sync('init');}
 get(){return cp(this.state);} reset(){this.state=defaults();this.sync('reset');return this.get();}
 advance(min=60){this.state.clockMin=Math.max(0,this.state.clockMin+Number(min||0));this.refresh();this.sync('clock');return this.get();}
 add({id,vessel='Navio didático',voyage='V001',cutoffMin=360,etdMin=720,containerNo}={}){const b={id:id||`BK-${Date.now().toString(36).toUpperCase()}`,vessel,voyage,cutoffMin:Number(cutoffMin),etdMin:Number(etdMin),status:'booked',containerNo:containerNo||this.practicalOperation?.get?.().containerNo||'',history:[]};this.state.bookings.push(b);this.sync('add');return cp(b);}
 gateIn(id){const b=this.state.bookings.find(x=>x.id===id);if(!b)return {ok:false,reason:'booking'};if(this.state.clockMin>b.cutoffMin){b.status='rollover';b.history.push({type:'late-gate',at:this.state.clockMin});this.state.rollovers++;this.sync('rollover');return {ok:false,reason:'cutoff',booking:cp(b)};}b.status='gate-in';b.history.push({type:'gate-in',at:this.state.clockMin});this.practicalOperation?.setStep?.('booking',true,{booking:b.id});this.sync('gate-in');return {ok:true,booking:cp(b)};}
 noShow(id){const b=this.state.bookings.find(x=>x.id===id);if(!b)return {ok:false};b.status='no-show';b.history.push({type:'no-show',at:this.state.clockMin});this.state.noShows++;this.sync('no-show');return {ok:true,booking:cp(b)};}
 rollover(id,newVessel='MV Próxima Escala',newVoyage='NEXT-01',newCutoffMin=this.state.clockMin+480){const b=this.state.bookings.find(x=>x.id===id);if(!b)return {ok:false};b.status='rollover';b.rolloverTo={vessel:newVessel,voyage:newVoyage,cutoffMin:newCutoffMin};b.history.push({type:'rollover',at:this.state.clockMin});this.state.rollovers++;this.sync('rollover');return {ok:true,booking:cp(b)};}
 refresh(){for(const b of this.state.bookings){if(b.status==='booked'&&this.state.clockMin>b.cutoffMin){b.status='cutoff-missed';}}}
 summary(){const bs=this.state.bookings;return {clockMin:this.state.clockMin,total:bs.length,booked:bs.filter(x=>x.status==='booked').length,gateIn:bs.filter(x=>x.status==='gate-in').length,missed:bs.filter(x=>['cutoff-missed','rollover','no-show'].includes(x.status)).length,rollovers:this.state.rollovers,noShows:this.state.noShows};}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('booking-cutoff:changed',{reason,state:this.get(),summary:this.summary()});}
}
