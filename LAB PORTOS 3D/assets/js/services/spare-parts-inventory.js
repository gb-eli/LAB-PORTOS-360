const KEY='terminal:spares:v020';
const clone=v=>JSON.parse(JSON.stringify(v));
export const SPARES=[
 {id:'BRK-STS',label:'Pastilha de freio — hoist STS',area:'Cais',unit:'kit',min:2,initial:5,unitCost:1800},
 {id:'SNS-TWL',label:'Sensor de twistlock/spreader',area:'Cais',unit:'un',min:4,initial:9,unitCost:650},
 {id:'HOS-HYD',label:'Mangueira hidráulica',area:'Pátio',unit:'un',min:3,initial:7,unitCost:480},
 {id:'TIR-RTG',label:'Pneu RTG',area:'Pátio',unit:'un',min:4,initial:6,unitCost:4200},
 {id:'FLT-ENG',label:'Kit de filtros',area:'Geral',unit:'kit',min:5,initial:12,unitCost:320},
 {id:'LMP-LED',label:'Módulo LED industrial',area:'Terminal',unit:'un',min:6,initial:10,unitCost:210}
];
const fresh=()=>({version:1,updatedAt:new Date().toISOString(),items:Object.fromEntries(SPARES.map(p=>[p.id,{qty:p.initial,reserved:0}])),movements:[]});
export class SparePartsInventory{
 constructor({storage,eventBus,liveState}={}){Object.assign(this,{storage,eventBus,liveState});if(storage.get(KEY,null)===null)storage.set(KEY,fresh());this.syncLive('init');}
 get(){return clone(this.storage.get(KEY,fresh()));}
 save(s,source='spares'){s.updatedAt=new Date().toISOString();this.storage.set(KEY,s);const summary=this.summary(s);this.liveState?.updateInventory?.(summary,source);this.eventBus?.emit('spares:changed',{source,state:clone(s),summary});return clone(s);}
 reset(){return this.save(fresh(),'reset');}
 receive(id,qty=1){const p=SPARES.find(x=>x.id===id);if(!p)return{ok:false,reason:'Peça inválida.'};qty=Math.max(1,Number(qty)||1);const s=this.get();s.items[id].qty+=qty;s.movements.unshift({at:new Date().toISOString(),id,type:'entrada',qty});this.save(s,'receive');return{ok:true};}
 consume(id,qty=1,{reference='OT didática'}={}){const p=SPARES.find(x=>x.id===id);if(!p)return{ok:false,reason:'Peça inválida.'};qty=Math.max(1,Number(qty)||1);const s=this.get(),item=s.items[id];if(item.qty-item.reserved<qty)return{ok:false,reason:'Estoque disponível insuficiente.'};item.qty-=qty;s.movements.unshift({at:new Date().toISOString(),id,type:'consumo',qty,reference});this.save(s,'consume');return{ok:true};}
 reserve(id,qty=1){const p=SPARES.find(x=>x.id===id);if(!p)return{ok:false,reason:'Peça inválida.'};qty=Math.max(1,Number(qty)||1);const s=this.get(),item=s.items[id];if(item.qty-item.reserved<qty)return{ok:false,reason:'Saldo livre insuficiente.'};item.reserved+=qty;s.movements.unshift({at:new Date().toISOString(),id,type:'reserva',qty});this.save(s,'reserve');return{ok:true};}
 release(id,qty=1){const s=this.get();if(!s.items[id])return{ok:false,reason:'Peça inválida.'};qty=Math.max(1,Number(qty)||1);s.items[id].reserved=Math.max(0,s.items[id].reserved-qty);s.movements.unshift({at:new Date().toISOString(),id,type:'liberação',qty});this.save(s,'release');return{ok:true};}
 summary(state=this.get()){const rows=SPARES.map(p=>{const i=state.items[p.id]||{qty:0,reserved:0},available=i.qty-i.reserved,status=i.qty<=p.min?'critical':i.qty<=p.min*1.5?'attention':'ok';return{...p,qty:i.qty,reserved:i.reserved,available,status,value:i.qty*p.unitCost};});return{rows,critical:rows.filter(x=>x.status==='critical').length,attention:rows.filter(x=>x.status==='attention').length,totalValue:rows.reduce((n,x)=>n+x.value,0),movements:state.movements};}
 syncLive(source='spares'){this.liveState?.updateInventory?.(this.summary(),source);}
}
