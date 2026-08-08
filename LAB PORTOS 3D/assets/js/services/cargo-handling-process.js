const KEY='cargo-handling:v029';
export class CargoHandlingProcess{
 constructor({storage,eventBus,practicalOperation,containerCycle}={}){this.storage=storage;this.eventBus=eventBus;this.practical=practicalOperation;this.containerCycle=containerCycle;this.state=this.storage?.get(KEY,{stuffing:null,unstuffing:null,lashing:null})||{stuffing:null,unstuffing:null,lashing:null};}
 stuffing({packages=24,weightKg=18200,distribution='balanced',seal='SEAL-4481'}={}){const ok=packages>0&&weightKg>0&&distribution==='balanced'&&Boolean(seal);this.state.stuffing={ok,packages,weightKg,distribution,seal,at:Date.now()};if(ok){this.practical?.update({sealExpected:seal,sealRead:seal,vgmDeclaredKg:weightKg+4200},'stuffing');this.containerCycle?.complete('stuffing');this.containerCycle?.complete('seal');}this.sync('stuffing');return this.state.stuffing;}
 unstuffing({sealIntact=true,packages=24,exceptions=0}={}){const ok=sealIntact&&packages>0&&exceptions===0;this.state.unstuffing={ok,sealIntact,packages,exceptions,at:Date.now()};if(ok)this.containerCycle?.complete('unstuffing');this.sync('unstuffing');return this.state.unstuffing;}
 lashing(action='lock',locks=4){const ok=locks===4;this.state.lashing={action,locks,ok,at:Date.now()};this.sync('lashing');return this.state.lashing;}
 sync(reason){this.storage?.set(KEY,this.state);this.eventBus?.emit('cargo-handling:changed',{reason,state:structuredClone(this.state)});}
}
