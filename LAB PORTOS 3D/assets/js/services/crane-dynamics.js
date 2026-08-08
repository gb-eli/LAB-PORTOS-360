const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export class AntiSwayController{
 constructor({x=-6,target=6,cableLength=5,assist=false}={}){this.x=x;this.v=0;this.target=target;this.angle=0;this.angularVelocity=0;this.cableLength=cableLength;this.assist=assist;this.command=0;}
 setAssist(v){this.assist=Boolean(v);} setCommand(v){this.command=clamp(Number(v)||0,-1,1);} setTarget(x){this.target=clamp(x,-7,7);} setCableLength(v){this.cableLength=clamp(Number(v)||5,2.5,8);}
 step(dt=.016){dt=clamp(dt,.005,.05);const kp=this.assist?1.35:.9,kd=this.assist?1.25:.55;const auto=clamp((this.target-this.x)*kp-this.v*kd,-2.4,2.4);const accel=this.command?this.command*2.7:auto;this.v=clamp(this.v+accel*dt,-3.2,3.2);this.x=clamp(this.x+this.v*dt,-7.5,7.5);if(Math.abs(this.x)>=7.45)this.v*=.4;const g=9.81,L=this.cableLength;const swayAcc=-(g/L)*Math.sin(this.angle)-(accel/L)*Math.cos(this.angle)-(this.assist?.95:.16)*this.angularVelocity;this.angularVelocity+=swayAcc*dt;this.angle=clamp(this.angle+this.angularVelocity*dt,-.42,.42);return this.snapshot();}
 snapshot(){return {x:this.x,v:this.v,target:this.target,angle:this.angle,swayDegrees:this.angle*180/Math.PI,cableLength:this.cableLength,assist:this.assist};}
 stable({positionTolerance=.55,swayTolerance=2.5}={}){const s=this.snapshot();return Math.abs(s.x-s.target)<=positionTolerance&&Math.abs(s.swayDegrees)<=swayTolerance&&Math.abs(s.v)<.45;}
 reset(){this.x=-6;this.v=0;this.angle=0;this.angularVelocity=0;this.command=0;}
}
