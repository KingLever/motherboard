import * as THREE from 'three';
import {OrbitControls} from './OrbitControls.js';
const slides=[
  {
    "name": "Overview",
    "title": "One board.\nA whole system.",
    "cat": "01 / Computer anatomy",
    "desc": "The motherboard is the main circuit board inside a computer. It connects the processor, memory, storage, and other devices so they can communicate and work together.",
    "label": "How it connects everything",
    "detail": "Copper tracks carry signals between components, while power circuits distribute electricity. Rotate the model, click a component, or use the arrows to explore each part.",
    "loc": "12 slides · Explore freely",
    "pos": [
      0,
      0,
      0
    ]
  },
  {
    "name": "CPU",
    "title": "The processing\ncenter",
    "cat": "02 / CPU and socket",
    "desc": "The CPU, or central processing unit, carries out program instructions. It performs calculations and processes the data needed to run applications and the operating system.",
    "label": "What the socket does",
    "detail": "The socket holds the CPU in place and connects it electrically to the motherboard. The CPU must match the socket and firmware. Its cooler is hidden here so you can see the processor.",
    "loc": "Upper center of the board",
    "pos": [
      -1.3,
      0,
      -2.6
    ]
  },
  {
    "name": "VRM",
    "title": "Steady power\nfor the CPU",
    "cat": "03 / Voltage regulation",
    "desc": "The VRM, or voltage regulator module, converts power from the power supply into the lower, stable voltage the CPU needs. It adjusts the supply as the processor's workload changes.",
    "label": "Keeping the power circuits cool",
    "detail": "Inductors and capacitors help smooth the electrical output. Metal heatsinks carry heat away from the power circuits, and their fins provide more surface area for cooling.",
    "loc": "Around the CPU socket",
    "pos": [
      -3.4,
      0,
      -3.5
    ]
  },
  {
    "name": "Memory",
    "title": "A workspace\nfor active data",
    "cat": "04 / RAM and DIMM slots",
    "desc": "RAM, or random access memory, temporarily holds the data and instructions the CPU is using. It provides fast access while you open applications, browse the web, or play games.",
    "label": "What the slots do",
    "detail": "DIMM slots hold the memory modules and connect them to the system. RAM loses its contents when power is removed. The memory generation and slot arrangement must match the motherboard.",
    "loc": "To the right of the CPU",
    "pos": [
      2.1,
      0,
      -2.6
    ]
  },
  {
    "name": "Power",
    "title": "Power enters\nthe board",
    "cat": "05 / ATX and EPS connectors",
    "desc": "Power connectors bring electricity from the power supply to the motherboard. The 24-pin ATX connector supplies the board, while the EPS connector feeds the CPU's power circuits.",
    "label": "Two different connections",
    "detail": "This model shows a 24-pin ATX connector and an 8-pin EPS connector. They have different roles and shapes. CPU power cables and graphics card power cables are not interchangeable.",
    "loc": "Right edge and upper corner",
    "pos": [
      4.2,
      0,
      -1.7
    ]
  },
  {
    "name": "PCIe",
    "title": "Room to\nadd more",
    "cat": "06 / Expansion slots",
    "desc": "PCI Express slots let you add hardware such as a graphics card, a network card, or a capture card. They provide a fast data connection between an expansion card and the computer.",
    "label": "What the long slot is for",
    "detail": "The upper long slot is usually used for a graphics card. PCIe lanes carry data; more lanes can provide more bandwidth. A slot's physical length does not always tell you how many lanes are connected.",
    "loc": "Lower half of the board",
    "pos": [
      -1.5,
      0,
      2
    ]
  },
  {
    "name": "M.2",
    "title": "Storage on\nthe board",
    "cat": "07 / M.2 storage connector",
    "desc": "An M.2 connector lets you install a compact solid-state drive directly on the motherboard. The SSD stores the operating system, applications, and files, even when the computer is off.",
    "label": "How it transfers data",
    "detail": "NVMe SSDs communicate through PCI Express. M.2 describes the physical format, so the drive must also match the connector's supported length, key, and SATA or NVMe interface.",
    "loc": "Between the CPU and PCIe slots",
    "pos": [
      -0.7,
      0,
      0.15
    ]
  },
  {
    "name": "Chipset",
    "title": "Connecting\nmore devices",
    "cat": "08 / Chipset",
    "desc": "The chipset manages communication for many of the motherboard's connections, including some USB ports, SATA ports, and expansion slots. It links these devices to the processor.",
    "label": "Different paths to the CPU",
    "detail": "RAM and some PCIe devices connect directly to the CPU. Other devices communicate through the chipset. The exact layout depends on the processor and motherboard.",
    "loc": "Lower-right area",
    "pos": [
      2.4,
      0,
      2.5
    ]
  },
  {
    "name": "SATA",
    "title": "Connections\nfor more storage",
    "cat": "09 / SATA ports",
    "desc": "SATA ports connect hard drives and 2.5-inch SATA SSDs to the motherboard. A data cable carries files and commands between each drive and the computer.",
    "label": "Data and power are separate",
    "detail": "A SATA data cable plugs into the motherboard. The drive also needs a separate power cable from the power supply. These drives keep stored files after the computer is turned off.",
    "loc": "Right edge of the board",
    "pos": [
      4,
      0,
      3.3
    ]
  },
  {
    "name": "Rear I/O",
    "title": "A connection\nto the outside",
    "cat": "10 / External ports and audio",
    "desc": "The rear input/output panel connects external devices. USB ports connect keyboards and mice, Ethernet connects a wired network, and audio ports connect speakers or microphones.",
    "label": "Video and sound",
    "detail": "Video outputs can connect a monitor when the platform and processor support them. Onboard audio circuits handle sound input and output. Available ports vary by motherboard.",
    "loc": "Left edge of the board",
    "pos": [
      -4.5,
      0,
      -2.5
    ]
  },
  {
    "name": "UEFI & battery",
    "title": "Before the\nsystem starts",
    "cat": "11 / Firmware and clock",
    "desc": "UEFI firmware initializes the hardware and starts loading the operating system when you turn on the computer. It also provides settings for options such as the boot device.",
    "label": "What the battery does",
    "detail": "The coin-cell battery keeps the real-time clock running when external power is disconnected and may support retained settings. The firmware itself is stored in flash memory; the battery does not store it.",
    "loc": "Lower-center area",
    "pos": [
      0.4,
      0,
      4.4
    ]
  },
  {
    "name": "Headers",
    "title": "Connecting\nthe case",
    "cat": "12 / Internal headers",
    "desc": "Internal headers connect the motherboard to case fans, front USB ports, audio jacks, the power button, and indicator lights. They make the case controls and connections work.",
    "label": "Each connection has a purpose",
    "detail": "Fan headers provide power and can support speed monitoring and control. Front-panel headers connect buttons and LEDs. USB and audio headers connect the case ports; each uses a specific pin layout.",
    "loc": "Upper and lower edges",
    "pos": [
      1.7,
      0,
      5.6
    ]
  }
];
let current=0,exploded=false,tween=null;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=id=>document.getElementById(id),vp=$('viewport');
const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(37,1,.1,100);camera.position.set(12,16,15);
let renderer;try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}catch(e){$('loading').textContent='The browser could not start 3D. Enable hardware acceleration and reload.';throw e;}
renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;vp.appendChild(renderer.domElement);$('loading').remove();
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.08;controls.minDistance=5;controls.maxDistance=35;controls.maxPolarAngle=Math.PI*.86;controls.autoRotateSpeed=.55;
scene.add(new THREE.HemisphereLight(0xd6efff,0x182019,2.8));const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(-5,14,6);scene.add(light);const rim=new THREE.DirectionalLight(0xb9f977,1.6);rim.position.set(8,4,-4);scene.add(rim);
const board=new THREE.Group();scene.add(board);const groups=Array.from({length:12},()=>new THREE.Group());groups.forEach((g,i)=>{g.userData.sector=i;board.add(g)});const picks=[];
const mat=(color,metalness=.25,roughness=.5)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
const green=mat('#16403a'),black=mat('#1c252a'),silver=mat('#9ba9b0',.8,.28),gold=mat('#c6ab65',.65,.35),lime=mat('#b9f977'),dark=mat('#090f12'),blue=mat('#497d9a');
function mesh(geo,m,x,y,z,s=0){const o=new THREE.Mesh(geo,m.clone());o.position.set(x,y,z);o.userData.base=o.material.color.clone();o.userData.sector=s;groups[s].add(o);if(s)picks.push(o);return o;}
function box(x,z,w,d,h,m=black,s=0,y=0){return mesh(new THREE.BoxGeometry(w,h,d),m,x,.12+h/2+y,z,s)}
function cyl(x,z,r,h,m,s=0,y=0){return mesh(new THREE.CylinderGeometry(r,r,h,24),m,x,.12+h/2+y,z,s)}
function textLabel(text,x,z,w=1.4,s=0){const c=document.createElement('canvas');c.width=512;c.height=96;const ctx=c.getContext('2d');ctx.fillStyle='#bbcfc8';ctx.font='500 38px monospace';ctx.textAlign='center';ctx.fillText(text,256,62);const t=new THREE.CanvasTexture(c);const p=new THREE.Mesh(new THREE.PlaneGeometry(w,w*96/512),new THREE.MeshBasicMaterial({map:t,transparent:true,side:THREE.DoubleSide}));p.rotation.x=-Math.PI/2;p.position.set(x,.137,z);groups[s].add(p);}
box(0,0,9.8,12.2,.15,green,0,-.17);
// Copper traces are schematic paths, not an electrical routing diagram.
for(let i=0;i<70;i++){const x=-4.4+(i%18)*.5,z=-5.5+Math.floor(i/18)*2.9;const pts=[new THREE.Vector3(x,.128,z),new THREE.Vector3(x+.3,.128,z+.6),new THREE.Vector3(x+.3,.128,z+1.7),new THREE.Vector3(x+.8,.128,z+2.1)];const l=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:i%3===0?0x3e7862:0x28564c,transparent:true,opacity:.75}));groups[0].add(l)}
for(const x of [-4.55,4.55])for(const z of [-5.7,0,5.7]){cyl(x,z,.15,.025,silver);cyl(x,z,.085,.03,dark,0,.025)}
textLabel('ATLAS / ATX',-1.9,5.25,2.7);textLabel('CPU',-1.25,-.95,.8);textLabel('DDR · DIMM',2.2,-5.15,1.7);textLabel('PCI EXPRESS',-2.1,4.7,2.3);textLabel('M.2',-.8,.75,.7);
// Socket and exposed CPU.
box(-1.3,-2.6,2.25,2.3,.2,dark,1);box(-1.3,-2.6,1.94,1.98,.16,silver,1,.2);box(-1.3,-2.6,1.62,1.66,.16,green,1,.36);box(-1.3,-2.6,1.46,1.5,.12,silver,1,.52);box(-.16,-2.55,.06,2.15,.08,silver,1,.25);
// VRM heatsinks with real extruded fins, chokes, capacitors.
box(-3.2,-3.1,.85,3.4,.35,black,2);for(let j=0;j<13;j++)box(-3.2,-4.62+j*.25,.86,.07,.47,silver,2,.25);
box(-1.35,-4.95,2.65,.65,.35,black,2);for(let j=0;j<12;j++)box(-2.55+j*.22,-4.95,.07,.67,.4,silver,2,.25);
for(let j=0;j<7;j++){box(-2.52,-4.1+j*.43,.32,.32,.24,silver,2);cyl(-2.07,-4.1+j*.43,.11,.24,silver,2)}
for(let j=0;j<4;j++){const x=1.23+j*.52;box(x,-2.55,.24,4.2,.38,j%2?lime:black,3);box(x,-2.55,.07,3.92,.02,dark,3,.38);for(const z of [-4.68,-.42])box(x,z,.31,.18,.53,silver,3);for(let k=0;k<38;k++)box(x,-4.4+k*.1,.035,.03,.02,gold,3,.4)}
function power(x,z,w,d,n,s){box(x,z,w,d,.53,black,s);for(let j=0;j<n;j++){const xx=x-w*.32+(j%2)*w*.64,zz=z-d*.44+Math.floor(j/2)*d/(n/2);box(xx,zz,w*.23,d/(n/2)*.65,.015,dark,s,.53)}}
power(4.13,-2,.57,2.65,24,4);power(-3.1,-5.6,1,.5,8,4);
for(const z of [1.3,3.15]){box(-1.55,z,5.4,.32,.36,black,5);box(-1.55,z,5.1,.1,.02,gold,5,.36);box(1.15,z,.32,.5,.48,silver,5);for(let k=0;k<45;k++)box(-4.02+k*.11,z,.05,.1,.025,dark,5,.38)}box(-3.25,4.25,1.9,.3,.3,black,5);
box(-.7,.12,3.1,.72,.1,green,6);for(let j=0;j<3;j++)box(-1.55+j*.72,.12,.5,.5,.12,dark,6,.1);box(-2.31,.12,.2,.74,.25,black,6);cyl(.85,.12,.085,.06,silver,6,.11);
box(2.45,2.35,1.9,1.8,.23,dark,7);box(2.45,2.35,2.1,2,.27,silver,7,.23);for(let i=0;i<9;i++)box(1.56+i*.22,2.35,.075,1.95,.12,black,7,.5);
for(let i=0;i<4;i++){box(4.1,2.35+i*.65,.7,.48,.55,black,8);box(4.46,2.35+i*.65,.02,.3,.29,gold,8,.1)}
for(let i=0;i<5;i++){let z=-4.55+i*.85;box(-4.36,z,.95,.72,.9,silver,9);box(-4.85,z,.025,.5,.58,dark,9,.12);box(-4.87,z,.03,.4,.11,i<3?blue:gold,9,.27)}
box(-4.1,3.5,.65,.65,.14,dark,9);for(let i=0;i<5;i++)cyl(-4.25,1.2+i*.5,.13,.4,gold,9);textLabel('AUDIO',-4.1,4.9,1);
cyl(.1,4.25,.51,.16,black,10);cyl(.1,4.25,.44,.18,silver,10,.07);box(1.2,4.35,.52,.65,.14,dark,10);for(let i=0;i<4;i++)for(const x of [.85,1.55])box(x,4.1+i*.15,.16,.065,.07,silver,10);
for(const [x,z,w,n]of [[2.4,5.5,1.3,10],[-1.8,5.55,1.1,8],[-3.35,5.55,.8,8],[3.7,.1,.55,4],[.15,-5.6,.55,4]]){box(x,z,w,.33,.2,black,11);for(let j=0;j<n;j++)box(x-w*.4+(j%(n/2))*w*.8/(n/2-1),z+(j<n/2?-.09:.09),.045,.045,.28,gold,11,.2)}
for(let i=0;i<28;i++){const x=-3.7+(i%7)*.88,z=.8+Math.floor(i/7)*1.2;if((x>.8&&z>1.5)||z===.8)continue;box(x,z,.14,.25,.07,black);}
const tagButtons=slides.slice(1).map((s,i)=>{const b=document.createElement('button');b.className='tag';b.textContent=s.name;b.addEventListener('click',()=>select(i+1));$('labels').append(b);return b});
slides.forEach((s,i)=>{const b=document.createElement('button');b.innerHTML=`<b>${String(i+1).padStart(2,'0')}</b>${s.name}`;b.addEventListener('click',()=>select(i));$('rail').append(b)});
function focus(pos,overview=false,top=false){const t=new THREE.Vector3(...pos);const dst=overview?new THREE.Vector3(12,16,15):t.clone().add(new THREE.Vector3(7.5,11,10));if(top)dst.copy(t).add(new THREE.Vector3(0,overview?19:13,.01));tween={from:camera.position.clone(),to:dst,start:performance.now(),targetFrom:controls.target.clone(),targetTo:t};if(reduced){camera.position.copy(dst);controls.target.copy(t);tween=null;}}
function select(i){current=Math.max(0,Math.min(11,i));const s=slides[current];$('category').textContent=s.cat;$('title').innerText=s.title;$('description').textContent=s.desc;$('detailLabel').textContent=s.label;$('detail').textContent=s.detail;$('location').textContent=s.loc;$('counter').textContent=`${String(current+1).padStart(2,'0')} / 12`;$('selection').textContent=s.name;$('prev').disabled=current===0;$('next').disabled=current===11;[...$('rail').children].forEach((b,j)=>{b.classList.toggle('active',j===current);b.setAttribute('aria-current',j===current?'step':'false')});picks.forEach(o=>{o.material.emissive.setHex(o.userData.sector===current?0x385914:0x000000);o.material.emissiveIntensity=.45});tagButtons.forEach((b,j)=>b.classList.toggle('active',j+1===current));focus(s.pos,current===0);}
$('prev').onclick=()=>select(current-1);$('next').onclick=()=>select(current+1);$('home').onclick=()=>focus([0,0,0],true);$('top').onclick=()=>focus(slides[current].pos,current===0,true);$('explode').onclick=()=>{exploded=!exploded;$('explode').setAttribute('aria-pressed',exploded);$('explode').textContent=exploded?'Reassemble parts':'Separate parts'};$('rotate').onclick=()=>{controls.autoRotate=!controls.autoRotate;$('rotate').setAttribute('aria-pressed',controls.autoRotate);$('rotate').textContent=controls.autoRotate?'Pause rotation':'Rotate'};
function zoom(f){tween=null;const offset=camera.position.clone().sub(controls.target);offset.setLength(THREE.MathUtils.clamp(offset.length()*f,controls.minDistance,controls.maxDistance));camera.position.copy(controls.target).add(offset)}$('plus').onclick=()=>zoom(.8);$('minus').onclick=()=>zoom(1.25);$('full').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{$('full').textContent='Press F11 for full screen'}};document.addEventListener('fullscreenchange',()=>{$('full').textContent=document.fullscreenElement?'Exit full screen':'Full screen ⛶'});
document.addEventListener('keydown',e=>{if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;if(e.key==='ArrowRight'){e.preventDefault();select(current+1)}if(e.key==='ArrowLeft'){e.preventDefault();select(current-1)}if(e.key==='Home'){e.preventDefault();select(0)}});
controls.addEventListener('start',()=>tween=null);let down;renderer.domElement.addEventListener('pointerdown',e=>down=[e.clientX,e.clientY]);renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down[0],e.clientY-down[1])>6)return;const r=renderer.domElement.getBoundingClientRect(),mouse=new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),ray=new THREE.Raycaster();ray.setFromCamera(mouse,camera);const hit=ray.intersectObjects(picks)[0];if(hit)select(hit.object.userData.sector)});
new ResizeObserver(()=>{const w=vp.clientWidth,h=vp.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h)}).observe(vp);
function frame(t){requestAnimationFrame(frame);if(tween){const p=Math.min((t-tween.start)/850,1),k=1-Math.pow(1-p,3);camera.position.lerpVectors(tween.from,tween.to,k);controls.target.lerpVectors(tween.targetFrom,tween.targetTo,k);if(p===1)tween=null}groups.forEach((g,i)=>{const y=exploded&&i? .65+(i%3)*.42:0;g.position.y=reduced?y:THREE.MathUtils.lerp(g.position.y,y,.07)});controls.update();tagButtons.forEach((b,i)=>{const s=slides[i+1];const p=new THREE.Vector3(s.pos[0],groups[i+1].position.y+.95,s.pos[2]).project(camera);const show=(current===0?[1,3,5,7].includes(i+1):current===i+1)&&p.z<1&&Math.abs(p.x)<.9&&Math.abs(p.y)<.75;b.style.display=show?'block':'none';b.style.left=(p.x*.5+.5)*vp.clientWidth+'px';b.style.top=(-p.y*.5+.5)*vp.clientHeight+'px'});renderer.render(scene,camera)}select(0);requestAnimationFrame(frame);
