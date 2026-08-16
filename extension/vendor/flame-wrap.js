"use strict";var CanvasUIFlameWrap=(()=>{var I=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var K=Object.prototype.hasOwnProperty;var j=(f,i)=>{for(var t in i)I(f,t,{get:i[t],enumerable:!0})},Q=(f,i,t,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let u of Y(i))!K.call(f,u)&&u!==t&&I(f,u,{get:()=>i[u],enumerable:!(n=V(i,u))||n.enumerable});return f};var J=f=>Q(I({},"__esModule",{value:!0}),f);var ae={};j(ae,{createFlameWrap:()=>oe,supportsHtmlInCanvas:()=>te});var Z={color:[.31,.54,1],intensity:.5,height:170,spread:8,radius:40,speed:.25,scale:.75,turbulence:.5,turbulenceScale:.5,turbulenceReach:25,sparks:1.5,sparkSize:.35,sparkDensity:1,sparkSpeed:1,rim:2.5,melt:4.5,distortion:10,smoke:1.5,ember:2,scorch:0},$=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aPos;
out vec2 vUv;
void main () {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,ee=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uContent;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uRectCenter;
uniform vec2 uRectHalf;
uniform float uCorner;
uniform vec3 uColor;
uniform float uIntensity;
uniform float uHeight;
uniform float uSpread;
uniform float uScale;
uniform float uTurbulence;
uniform float uTurbScale;
uniform float uTurbReach;
uniform float uSparks;
uniform float uSparkSize;
uniform float uSparkDensity;
uniform float uSparkSpeed;
uniform float uRim;
uniform float uMelt;
uniform float uDistortion;
uniform float uSmoke;
uniform float uEmber;
uniform float uScorch;
uniform float uHasContent;

#define S(a, b, t) smoothstep(a, b, t)

vec3 permute (vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise (vec2 v) {
  const vec4 C = vec4(
    0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439
  );
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(
    permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0)
  );
  vec3 m = max(
    0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)),
    0.0
  );
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm (vec2 p) {
  mat2 m = mat2(0.8, -0.6, 0.6, 0.8);
  float v = 0.5 * snoise(p);
  p = m * p * 2.03 + vec2(11.3, 7.1);
  v += 0.27 * snoise(p);
  p = m * p * 1.97 + vec2(3.7, 19.1);
  v += 0.15 * snoise(p);
  p = m * p * 2.01 + vec2(8.3, 2.9);
  v += 0.08 * snoise(p);
  return v * 0.5 + 0.5;
}

float fbm2 (vec2 p) {
  float v = 0.62 * snoise(p);
  v += 0.31 * snoise(mat2(0.8, -0.6, 0.6, 0.8) * p * 2.13 + vec2(5.2, 1.3));
  return v * 0.54 + 0.5;
}

vec2 turbulence (vec2 p) {
  float freq = 12.0 * clamp(uScale, 0.05, 1.0) * clamp(uTurbScale, 0.2, 3.0);
  mat2 rot = mat2(0.6, -0.8, 0.8, 0.6);
  for (float i = 0.0; i < 7.0; i++) {
    float phase = freq * (p * rot).y + 6.0 * uTime + i;
    p += uTurbulence * rot[0] * sin(phase) / freq;
    rot *= mat2(0.6, -0.8, 0.8, 0.6);
    freq *= 1.2;
  }
  return p;
}

vec3 hash3 (vec2 p) {
  vec3 q = vec3(
    dot(p, vec2(127.1, 311.7)),
    dot(p, vec2(269.5, 183.3)),
    dot(p, vec2(419.2, 371.9))
  );
  return fract(sin(q) * 43758.5453);
}

float sdRoundRect (vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main () {
  vec2 frag = vUv * uResolution;
  vec2 rel = frag - uRectCenter;
  float unit = max(uHeight, 24.0);
  float corner = min(uCorner, min(uRectHalf.x, uRectHalf.y));
  float spreadPx = max(uSpread, 8.0);
  float t = uTime;
  float detail = clamp(uScale, 0.05, 1.0);

  float d0 = sdRoundRect(rel, uRectHalf, corner);
  float px = rel.x / unit;
  float py = rel.y / unit;

  float yA = max(rel.y - uRectHalf.y, 0.0) / unit;
  float sway = snoise(vec2(px * 1.1, t * 0.5)) * 0.55
    + snoise(vec2(px * 2.4, t * 0.9 + 41.0)) * 0.25;
  float sx = px + yA * sway;
  float env = fbm2(vec2(sx * 1.6 * detail + 3.7, t * 0.55 - yA * 0.4));
  float env2 = fbm2(vec2(sx * 3.6 * detail, t * 0.85 + 17.0 - yA * 0.6));
  float tongue = clamp(
    0.75 * S(0.3, 0.9, env) + 0.5 * S(0.4, 0.95, env2),
    0.0,
    1.0
  );

  float meltPx = max(uMelt, 1.0);
  float biteTop = (3.0 + meltPx * 1.4) * (0.35 + 0.65 * tongue)
    + 2.0 * snoise(vec2(px * 5.0 * detail, t * 1.1 + 5.0));
  float yF = uRectHalf.y - biteTop;
  float frontTop = rel.y - yF;

  float perim = fbm2(rel * (1.9 / unit) * detail + vec2(0.0, t * 0.4) + 31.0);
  float biteSB = 3.0 + meltPx * (0.25 + 0.75 * perim);
  float frontSB = d0 + biteSB;

  float wTop = S(-0.62 * unit, -0.1 * unit, rel.y - uRectHalf.y)
    * S(10.0, -30.0, abs(rel.x) - (uRectHalf.x - corner));
  float front = mix(frontSB, frontTop, wTop);

  float reach = mix(
    spreadPx * 0.9,
    unit * (0.2 + 0.45 * tongue),
    wTop
  );
  float q = front / reach;

  vec2 np = vec2(px * 2.3, py * 1.25 - t * 1.85) * detail;
  np = turbulence(np);
  float n = fbm(np);

  float win = S(-0.08, 0.02, q);
  float root = exp(-abs(q) * 5.0);
  float ridge = 1.0 - abs(2.0 * n - 1.0);
  float flameH = mix(1.0, 0.5 + 0.6 * tongue, wTop);
  float g = max(q, 0.0) / flameH;
  float shred = fbm2(np * 1.9 + 63.0);
  g *= 1.0 + 0.7 * (shred - 0.5) * S(0.2, 0.8, g);
  float dens = n * 0.95 + ridge * 0.45 - 0.18
    + (1.0 - min(g, 1.0)) * 0.3
    - g * (0.9 + 0.25 * n);
  dens = clamp(dens * 2.4, 0.0, 1.0) * win;
  dens *= mix(1.0 - S(0.32, 1.05, q), 1.0 - S(0.9, 1.2, g), wTop);
  float body = dens * dens * (3.0 - 2.0 * dens);
  float emis = clamp(uIntensity, 0.0, 2.0);
  float e = body * (0.55 + 0.75 * root) * (0.45 + 0.55 * n)
    + win * root * (0.1 + 0.4 * n);
  e *= mix(0.45, 1.0, wTop) * max(emis, 0.001);

  vec3 hot = mix(uColor, vec3(1.0), 0.35);
  vec3 deep = mix(uColor, uColor * uColor, 0.5) * 0.9;
  float ramp = 1.0 - exp(-e * 2.4);
  vec3 fireCol = mix(deep, uColor, S(0.0, 0.55, ramp));
  float core = ramp * (0.45 + 0.55 * exp(-g * 2.2)) * (0.5 + 0.5 * n);
  fireCol = mix(fireCol, hot, S(0.7, 1.05, core));
  fireCol *= 0.8 + 0.4 * ramp;
  float fireA = clamp(1.0 - exp(-e * 3.4), 0.0, 1.0);

  float halo = exp(-max(front, 0.0) / (spreadPx * 1.2)) * S(0.0, 3.0, front)
    * (0.5 + 0.5 * n) * 0.3 * clamp(uRim, 0.0, 2.0) * mix(1.0, 0.45, wTop);
  vec3 glow = uColor * halo * clamp(uIntensity, 0.0, 2.0);

  if (uSparks > 0.001) {
    float sSpeed = max(uSparkSpeed, 0.05);
    float sCells = 5.0 * clamp(uSparkDensity, 0.3, 2.5);
    float sSize = clamp(uSparkSize, 0.2, 3.0);
    float gate = S(-0.05, 0.1, q) * (1.0 - S(1.3, 2.2, q)) * wTop;
    float spark = 0.0;
    for (float L = 0.0; L < 2.0; L++) {
      float speed = 1.5 * sSpeed * (0.75 + 0.5 * L);
      vec2 ps = vec2(px, py - t * speed);
      ps.x += 0.08 * snoise(vec2(py * 0.9 + L * 5.0, t * 0.5));
      float cells = sCells * (1.0 + 0.6 * L);
      vec2 cl = floor(ps * cells) + L * 19.0;
      vec2 fr = fract(ps * cells);
      vec3 rnd = hash3(cl);
      vec3 rnd2 = hash3(cl + 7.3);
      float on = step(rnd2.x, 0.42);
      float life = fract(rnd.z + t * sSpeed * (0.3 + 0.5 * rnd2.x));
      vec2 ppos = vec2(0.5) + 0.56 * (rnd.xy - 0.5);
      ppos.x += 0.14 * sin(t * (0.7 + rnd.z * 2.8) + rnd.y * 6.2832)
        + 0.1 * snoise(vec2(t * 0.6 + rnd.x * 9.0, cl.y * 0.7))
        + (life - 0.5) * 0.5 * (rnd2.y - 0.5);
      ppos.y += (life - 0.5) * 0.3 * rnd2.y;
      float tw = S(0.02, 0.2, life) * S(1.0, 0.55, life);
      tw *= 0.75 + 0.25 * sin(t * (6.0 + rnd2.z * 9.0) + rnd.x * 6.2832);
      vec2 pd = (fr - ppos) / cells * unit;
      pd.y *= 0.55 + 0.3 * rnd2.z;
      float dp = length(pd);
      float r = (0.004 + 0.014 * rnd.y * rnd.y) * unit * sSize
        * mix(1.15, 0.55, life);
      float bmask = S(0.5, 0.32, max(abs(fr.x - 0.5), abs(fr.y - 0.5)));
      float sbody = exp(-dp * dp / (r * r));
      float sbloom = exp(-dp * dp / (r * r * 6.0)) * 0.3;
      spark += (sbody + sbloom) * tw * tw * on * bmask * (1.0 - 0.35 * L);
    }
    spark *= gate * uSparks;
    fireCol += mix(uColor, vec3(1.0), 0.55) * spark * 1.6;
    fireA = clamp(fireA + spark * 0.85, 0.0, 1.0);
  }

  vec2 edgePx = min(frag, uResolution - frag);
  float fadeW = max(24.0, spreadPx * 0.75);
  float fade = S(0.0, fadeW, edgePx.x) * S(0.0, fadeW, edgePx.y);
  fireA *= fade;
  glow *= fade;
  halo *= fade;

  float wisp = S(0.45, 0.9, fbm2(np * 0.55 + vec2(0.0, 17.0)));
  float smoke = S(1.55, 1.05, g) * S(0.85, 1.15, g)
    * (1.0 - body) * wTop
    * wisp * 0.055 * clamp(uSmoke, 0.0, 2.0) * fade;
  vec3 smokeCol = mix(vec3(0.5), uColor, 0.5);

  if (uHasContent < 0.5) {
    float sA = clamp(smoke, 0.0, 1.0);
    float a = clamp(fireA + sA * (1.0 - fireA), 0.0, 1.0);
    outColor = vec4(
      fireCol * fireA + glow + smokeCol * sA * (1.0 - fireA),
      clamp(a + halo * 0.6, 0.0, 1.0)
    );
    return;
  }

  vec2 cUv = (rel + uRectHalf) / (2.0 * uRectHalf);
  float inRect = step(abs(cUv.x - 0.5), 0.5) * step(abs(cUv.y - 0.5), 0.5);

  float heatBand = exp(-abs(front) / max(uTurbReach, 4.0));
  vec2 wob = vec2(
    snoise(np * 1.7 + 9.0),
    snoise(np * 1.7 + 27.0)
  );
  vec2 disp = wob * min(uDistortion, 32.0) * heatBand;
  vec2 cUvD = clamp(cUv + disp / (2.0 * uRectHalf), vec2(0.002), vec2(0.998));
  vec4 content = texture(uContent, vec2(cUvD.x, 1.0 - cUvD.y));

  float burn = clamp(uIntensity, 0.0, 1.0);
  float depth = max(-front, 0.0);
  float charPatch = 0.5 + 0.5 * fbm2(rel * (2.6 / unit) * detail + 57.0);
  float charW = mix(4.0, 6.0 + meltPx * 1.6, wTop) * charPatch;
  float charT = (1.0 - S(charW, charW * 2.4, depth));
  content.rgb = mix(
    content.rgb,
    content.rgb * vec3(0.22, 0.19, 0.17),
    clamp(charT * 0.85 * burn * clamp(uScorch, 0.0, 2.0), 0.0, 1.0)
  );

  float emberW = mix(2.5, 5.5, wTop);
  float emberN = 0.3 + 0.7 * fbm2(np * 2.2 + 73.0);
  float emberK = clamp(uEmber, 0.0, 2.0);
  float ember = exp(-depth / emberW) * emberN * emberK;
  float whiteHot = exp(-depth / (emberW * 0.4)) * emberN * emberN * emberK;
  content.rgb = mix(content.rgb, uColor * 1.2, clamp(ember, 0.0, 1.0) * burn);
  content.rgb = mix(
    content.rgb,
    mix(uColor, vec3(1.0), 0.3) * 1.2,
    clamp(whiteHot, 0.0, 1.0) * burn
  );

  float dn = fbm2(rel * (3.2 / unit) * detail + vec2(0.0, t * 0.5) + 91.0);
  float dw = mix(2.0, 5.0, wTop);
  float dissolve = S(-dw, dw, front + (dn - 0.5) * dw * 2.5);
  float cA = content.a * (1.0 - dissolve) * inRect;
  float smk = smoke * (1.0 - cA);
  float baseA = min(cA + smk, 1.0);
  vec3 base = content.rgb * cA + smokeCol * smk;
  vec3 col = fireCol * fireA + base * (1.0 - fireA) + glow;
  float alpha = clamp(fireA + baseA * (1.0 - fireA) + halo * 0.5, 0.0, 1.0);
  outColor = vec4(col, alpha);
}`;function te(){if(typeof document>"u")return!1;let f=document.createElement("canvas"),i=f.getContext("2d");return!!(i&&typeof i.drawElementImage=="function"&&typeof f.requestPaint=="function")}function oe(f,i={}){let t={...Z,...i},{source:n,content:u,output:l}=f,e=l.getContext("webgl2",{alpha:!0,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!0});if(!e||e.isContextLost())return null;let b=n.getContext("2d"),g=n,v=!!(b&&typeof b.drawElementImage=="function"&&typeof g.requestPaint=="function"),y=!1,H=()=>{};v&&(g.onpaint=()=>{try{b.reset(),b.drawElementImage(u,0,0),y=!0,H()}catch{}});function _(r,c){let s=e.createShader(r);return e.shaderSource(s,c),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("FlameWrap shader error:",e.getShaderInfoLog(s)),s}let F=_(e.VERTEX_SHADER,$),L=_(e.FRAGMENT_SHADER,ee),p=e.createProgram();e.attachShader(p,F),e.attachShader(p,L),e.linkProgram(p);let o={},X=e.getProgramParameter(p,e.ACTIVE_UNIFORMS);for(let r=0;r<X;r++){let c=e.getActiveUniform(p,r);o[c.name]=e.getUniformLocation(p,c.name)}let W=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,W),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let S=e.createTexture();e.bindTexture(e.TEXTURE_2D,S),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));let d={cx:0,cy:0,hx:1,hy:1},a=1;function T(){a=Math.min(window.devicePixelRatio||1,2);let r=Math.max(1,Math.round(l.clientWidth*a)),c=Math.max(1,Math.round(l.clientHeight*a));(l.width!==r||l.height!==c)&&(l.width=r,l.height=c);let s=v?n:u,x=l.getBoundingClientRect(),m=s.getBoundingClientRect();if(x.width>0&&m.width>0&&(d.cx=(m.left+m.right)/2-x.left,d.cy=x.bottom-(m.top+m.bottom)/2,d.hx=m.width/2,d.hy=m.height/2),v){let w=Math.max(1,Math.round(n.clientWidth)),A=Math.max(1,Math.round(n.clientHeight));(n.width!==w*a||n.height!==A*a)&&(n.width=w*a,n.height=A*a),g.requestPaint()}}T();function G(){!v||!y||(y=!1,e.bindTexture(e.TEXTURE_2D,S),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),b.clearRect(0,0,n.width,n.height))}let q=0;function N(){G(),e.useProgram(p),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,S),e.uniform1i(o.uContent,0),e.uniform2f(o.uResolution,l.width,l.height),e.uniform1f(o.uTime,q),e.uniform2f(o.uRectCenter,d.cx*a,d.cy*a),e.uniform2f(o.uRectHalf,Math.max(d.hx*a,1),Math.max(d.hy*a,1)),e.uniform1f(o.uCorner,Math.max(t.radius,0)*a),e.uniform3f(o.uColor,t.color[0],t.color[1],t.color[2]),e.uniform1f(o.uIntensity,Math.max(t.intensity,0)),e.uniform1f(o.uHeight,Math.max(t.height,24)*a),e.uniform1f(o.uSpread,Math.max(t.spread,8)*a),e.uniform1f(o.uScale,Math.max(t.scale,.05)),e.uniform1f(o.uTurbulence,Math.max(t.turbulence,0)),e.uniform1f(o.uTurbScale,Math.max(t.turbulenceScale,.2)),e.uniform1f(o.uTurbReach,Math.max(t.turbulenceReach,4)*a),e.uniform1f(o.uSparks,Math.max(t.sparks,0)),e.uniform1f(o.uSparkSize,Math.max(t.sparkSize,.2)),e.uniform1f(o.uSparkDensity,Math.max(t.sparkDensity,.3)),e.uniform1f(o.uSparkSpeed,Math.max(t.sparkSpeed,.05)),e.uniform1f(o.uRim,Math.max(t.rim,0)),e.uniform1f(o.uMelt,Math.max(t.melt,0)*a),e.uniform1f(o.uDistortion,Math.max(t.distortion,0)*a),e.uniform1f(o.uSmoke,Math.max(t.smoke,0)),e.uniform1f(o.uEmber,Math.max(t.ember,0)),e.uniform1f(o.uScorch,Math.max(t.scorch,0)),e.uniform1f(o.uHasContent,v?1:0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,l.width,l.height),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let k=0,M=performance.now(),P=!1,R=!1,E=!0,C=window.matchMedia("(prefers-reduced-motion: reduce)"),U=C.matches;function z(r){if(P)return;if(!E){R=!1;return}let c=Math.min((r-M)/1e3,1/30);if(M=r,U||(q+=c*t.speed),N(),U&&!y){R=!1;return}k=requestAnimationFrame(z)}function h(){P||R||!E||(R=!0,M=performance.now(),k=requestAnimationFrame(z))}H=h,h();function B(){U=C.matches,h()}C.addEventListener("change",B);let D=new ResizeObserver(()=>{T(),h()});D.observe(l),D.observe(u);let O=new IntersectionObserver(r=>{E=r[r.length-1]?.isIntersecting??!0,E&&h()});return O.observe(l),{setOptions(r){let c=!1;for(let[s,x]of Object.entries(r)){let m=t[s];if(Array.isArray(x)&&Array.isArray(m)){if(x.length!==m.length||x.some((w,A)=>w!==m[A])){c=!0;break}}else if(m!==x){c=!0;break}}Object.assign(t,r),c&&(T(),h())},resize(){T(),h()},destroy(){P=!0,cancelAnimationFrame(k),D.disconnect(),O.disconnect(),C.removeEventListener("change",B),e.deleteTexture(S),e.deleteProgram(p),e.deleteShader(F),e.deleteShader(L),e.deleteBuffer(W),v&&(g.onpaint=null)}}}return J(ae);})();
