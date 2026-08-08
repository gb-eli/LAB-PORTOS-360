const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export class TruckQueueSimulation{
 constructor({lanes=2,arrivalRate=36,serviceMinutes=3}={}){this.configure({lanes,arrivalRate,serviceMinutes});this.reset();}
 configure({lanes=this.lanes,arrivalRate=this.arrivalRate,serviceMinutes=this.serviceMinutes}={}){this.lanes=clamp(Math.round(lanes),1,4);this.arrivalRate=clamp(Number(arrivalRate),6,120);this.serviceMinutes=clamp(Number(serviceMinutes),.5,10);}
 reset(){this.clock=0;this.queue=[];this.servers=Array.from({length:this.lanes},()=>null);this.arrivalCarry=0;this.served=0;this.totalWait=0;this.maxQueue=0;this.nextId=1;}
 step(minutes=1){for(let m=0;m<minutes;m++){this.clock+=1;this.arrivalCarry+=this.arrivalRate/60;while(this.arrivalCarry>=1){this.queue.push({id:this.nextId++,arrived:this.clock});this.arrivalCarry-=1;}this.servers.forEach((s,i)=>{if(s){s.remaining-=1;if(s.remaining<=0){this.served++;this.servers[i]=null;}}});this.servers.forEach((s,i)=>{if(!s&&this.queue.length){const t=this.queue.shift();this.totalWait+=Math.max(0,this.clock-t.arrived);this.servers[i]={...t,remaining:this.serviceMinutes};}});this.maxQueue=Math.max(this.maxQueue,this.queue.length);}return this.snapshot();}
 snapshot(){return {clock:this.clock,queue:this.queue.length,lanes:this.lanes,busy:this.servers.filter(Boolean).length,served:this.served,avgWait:this.served?this.totalWait/this.served:0,maxQueue:this.maxQueue,arrivalRate:this.arrivalRate,serviceMinutes:this.serviceMinutes,utilization:Math.min(100,(this.arrivalRate*this.serviceMinutes/60)/this.lanes*100)};}
}
