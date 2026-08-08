const clamp=(n,min,max)=>Math.max(min,Math.min(max,n));
const round=(n,d=0)=>Number(Number(n||0).toFixed(d));

function webglCapabilities() {
  if (typeof document === 'undefined') return { available:false };
  const canvas=document.createElement('canvas');
  canvas.width=256; canvas.height=256;
  const gl=canvas.getContext('webgl2',{antialias:false,powerPreference:'high-performance'})||canvas.getContext('webgl',{antialias:false,powerPreference:'high-performance'});
  if(!gl)return{available:false};
  const debug=gl.getExtension('WEBGL_debug_renderer_info');
  const renderer=debug?gl.getParameter(debug.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER);
  const vendor=debug?gl.getParameter(debug.UNMASKED_VENDOR_WEBGL):gl.getParameter(gl.VENDOR);
  return{
    available:true,
    version:(typeof WebGL2RenderingContext!=='undefined'&&gl instanceof WebGL2RenderingContext)?'WebGL 2':'WebGL 1',
    renderer:String(renderer||'GPU não identificada'),
    vendor:String(vendor||''),
    maxTextureSize:Number(gl.getParameter(gl.MAX_TEXTURE_SIZE)||0),
    maxRenderbufferSize:Number(gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)||0),
    maxSamples:typeof gl.MAX_SAMPLES!=='undefined'?Number(gl.getParameter(gl.MAX_SAMPLES)||0):0,
    gl
  };
}

function cpuProbe() {
  const started=performance.now();
  let x=0.1234567;
  const loops=260000;
  for(let i=0;i<loops;i+=1){x=Math.sin(x+i*.00001)*Math.cos(x*.91)+Math.sqrt((i%101)+1);}
  const ms=Math.max(.1,performance.now()-started);
  return{ms:round(ms,1),opsPerMs:round(loops/ms,0),checksum:round(x,3)};
}

function gpuProbe(cap) {
  const gl=cap.gl;
  if(!gl)return{ms:null,draws:0};
  const vert=gl.createShader(gl.VERTEX_SHADER); gl.shaderSource(vert,'attribute vec2 p; void main(){gl_Position=vec4(p,0.0,1.0);}'); gl.compileShader(vert);
  const frag=gl.createShader(gl.FRAGMENT_SHADER); gl.shaderSource(frag,'precision mediump float; void main(){gl_FragColor=vec4(0.12,0.45,0.58,1.0);}'); gl.compileShader(frag);
  const program=gl.createProgram(); gl.attachShader(program,vert); gl.attachShader(program,frag); gl.linkProgram(program); gl.useProgram(program);
  const buffer=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buffer); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,0,1]),gl.STATIC_DRAW);
  const loc=gl.getAttribLocation(program,'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  gl.viewport(0,0,256,256);
  const draws=60;
  const started=performance.now();
  for(let i=0;i<draws;i+=1){gl.clearColor((i%11)/20,.12,.18,1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.drawArrays(gl.TRIANGLES,0,3);}
  gl.finish();
  const ms=Math.max(.1,performance.now()-started);
  gl.deleteBuffer(buffer); gl.deleteProgram(program); gl.deleteShader(vert); gl.deleteShader(frag);
  return{ms:round(ms,1),draws,drawsPerMs:round(draws/ms,2)};
}

function recommend(metrics){
  if(!metrics.webgl.available)return'MINIMUM';
  let score=0;
  const memory=metrics.device.memoryGB;
  const cores=metrics.device.cores;
  const tex=metrics.webgl.maxTextureSize;
  const cpu=metrics.cpu.opsPerMs;
  const gpu=metrics.gpu.drawsPerMs||0;
  if(memory>=8)score+=24; else if(memory>=4)score+=15; else if(memory>=3)score+=8;
  if(cores>=8)score+=20; else if(cores>=6)score+=15; else if(cores>=4)score+=9;
  if(tex>=16384)score+=16; else if(tex>=8192)score+=11; else if(tex>=4096)score+=6;
  if(cpu>=16000)score+=20; else if(cpu>=9000)score+=13; else if(cpu>=4500)score+=7;
  if(gpu>=12)score+=20; else if(gpu>=5)score+=13; else if(gpu>=2)score+=7;
  const megapixels=metrics.device.screenMegapixels;
  if(megapixels>5)score-=8;
  score=clamp(score,0,100);
  if(score<28)return'MINIMUM';
  if(score<53)return'MEDIUM';
  if(score<78)return'HIGH';
  return'ULTRA';
}

export class GraphicsBenchmark {
  constructor({storage,eventBus,qualityManager}={}){this.storage=storage;this.eventBus=eventBus;this.qualityManager=qualityManager;this.key='graphics:benchmark:v032';}
  getLast(){return this.storage?.get?.(this.key,null)||null;}
  async run(){
    this.eventBus?.emit('graphics:benchmark-start',{});
    await new Promise(r=>requestAnimationFrame(()=>r()));
    const cap=webglCapabilities();
    const device={
      memoryGB:Number(navigator.deviceMemory||4),
      cores:Number(navigator.hardwareConcurrency||4),
      dpr:round(window.devicePixelRatio||1,2),
      screenMegapixels:round(((screen.width||1)*(screen.height||1))/1_000_000,2),
      platform:navigator.userAgentData?.platform||navigator.platform||'N/D'
    };
    const cpu=cpuProbe();
    const gpu=gpuProbe(cap);
    const webgl={available:cap.available,version:cap.version||'Sem WebGL',renderer:cap.renderer||'N/D',vendor:cap.vendor||'',maxTextureSize:cap.maxTextureSize||0,maxRenderbufferSize:cap.maxRenderbufferSize||0,maxSamples:cap.maxSamples||0};
    const result={version:1,at:new Date().toISOString(),device,cpu,gpu,webgl};
    result.recommended=recommend(result);
    result.scoreLabel={MINIMUM:'Compatibilidade',MEDIUM:'Equilíbrio',HIGH:'Qualidade',ULTRA:'Detalhista'}[result.recommended];
    this.storage?.set?.(this.key,result);
    this.qualityManager?.setRecommendation?.(result.recommended,result);
    this.eventBus?.emit('graphics:benchmark-complete',result);
    return result;
  }
}
