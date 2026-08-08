const ROWS=['A','B','C','D'];
export const STOWAGE_CARGO=[
 {id:'GEN-12',label:'Dry 12 t',kind:'dry',weight:12,color:0x2d7183},
 {id:'HVY-29',label:'Carga pesada 29 t',kind:'heavy',weight:29,color:0xd19b35},
 {id:'RFR-18',label:'Reefer -18 °C',kind:'reefer',weight:21,color:0x4ea9c7},
 {id:'DG3-16',label:'DG Classe 3',kind:'dg3',weight:16,color:0xd05e4e},
 {id:'OOG-14',label:'OOG / Open Top',kind:'oog',weight:14,color:0x9c75d8},
 {id:'EXP-10',label:'Dry exportação 10 t',kind:'dry',weight:10,color:0x4eae78}
];
export function createStowageSlots(){const out=[];for(let bay=1;bay<=4;bay++)for(let r=0;r<ROWS.length;r++)for(let tier=1;tier<=3;tier++)out.push({id:`B${bay}-${ROWS[r]}-T${tier}`,bay,row:ROWS[r],rowIndex:r,tier,powered:(bay===2||bay===4)&&r<2});return out;}
export function validateStowagePlacement(cargo,slot,assignments={}){
 if(!cargo||!slot)return {ok:false,reason:'Selecione carga e posição.'};
 if(assignments[slot.id])return {ok:false,reason:'Posição já ocupada.'};
 if(cargo.kind==='heavy'&&slot.tier!==1)return {ok:false,reason:'Neste exercício, a unidade pesada deve ficar no tier inferior.'};
 if(cargo.kind==='reefer'&&!slot.powered)return {ok:false,reason:'Reefer precisa de posição energizada.'};
 if(cargo.kind==='oog'&&slot.tier!==3)return {ok:false,reason:'OOG deve ficar no tier superior neste cenário didático.'};
 const sameBay=Object.values(assignments).filter(a=>a.slot.bay===slot.bay);
 if(cargo.kind==='dg3'&&sameBay.some(a=>a.cargo.kind==='reefer'))return {ok:false,reason:'Neste cenário, DG Classe 3 deve ficar em bay distinto do Reefer.'};
 if(cargo.kind==='reefer'&&sameBay.some(a=>a.cargo.kind==='dg3'))return {ok:false,reason:'Neste cenário, Reefer deve ficar em bay distinto da DG Classe 3.'};
 return {ok:true,reason:'Posição aceita pelas regras didáticas atuais.'};
}
export function scoreStowagePlan(assignments={}){const placed=Object.keys(assignments).length;return {placed,total:STOWAGE_CARGO.length,complete:placed===STOWAGE_CARGO.length,score:Math.round(placed/STOWAGE_CARGO.length*100)};}
