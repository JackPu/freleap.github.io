
var ww = window.innerWidth,
    wh = window.innerHeight;

var renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas'),
  antialias: true
});
renderer.setSize(ww, wh);

var center = new THREE.Vector3(0,0,0);

var camera = new THREE.PerspectiveCamera(45, ww/wh, 0.1, 1000);
camera.position.z = 90;
camera.position.y = 10;
var controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.dynamicDampingFactor = 0.1;
controls.rotateSpeed = 2;
controls.noPan = true;
controls.noZoom = true;

var scene = new THREE.Scene();

function createIsland(){
  
  // Setup lights
  var light = new THREE.HemisphereLight(0x713f71, 0x2f526d, 1);
  scene.add(light);
  
  // pink color
  light = new THREE.PointLight( 0xd263c6, 3, 100 );
  light.position.set( 40, -60, 20 );
  scene.add(light);
  
  // Basic lights from threex.basiclighting
  var container	= new THREE.Object3D();
  scene.add(container);
  light	= new THREE.AmbientLight(0x252525);
	container.add(light);

	light	= new THREE.DirectionalLight('white', 0.2);
	light.position.set(2.6,1,3);
	container.add(light);

	light	= new THREE.DirectionalLight('white', 0.2);
	light.position.set(-2, -1, 0);
	container.add(light);

	light	= new THREE.DirectionalLight('white', 0.25);
	light.position.set(3, 3, 2);
	container.add(light);

  // Gradient texture
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = 256;
  canvas.height = 256;
  var gradient = ctx.createLinearGradient(0, 0, 0, 256);
  gradient.addColorStop(0, '#00F260');
  // gradient.addColorStop(0.2, '#ff93fc');
  gradient.addColorStop(1, '#0575E6');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);
  
  // Fake sky
  var globeGeom = new THREE.SphereGeometry(80);
  var globeMat = new THREE.MeshBasicMaterial({
    map: new THREE.CanvasTexture(canvas),
    side: THREE.BackSide
  });
  var globe = new THREE.Mesh(globeGeom, globeMat);
  scene.add(globe);
  
  // Island 2
   geometry = new THREE.IcosahedronGeometry(30, 3);
  for (var i = 0; i < geometry.vertices.length; i ++ ) {
    var vector = geometry.vertices[i];
    if(vector.y > 0){
      vector.y = 0;
    } else {
      var random = Math.abs(noise.simplex2(vector.x*0.025+13, vector.y*0.025));
      vector.origin = new THREE.Vector3(vector.x, vector.y, vector.z);
      vector.y = 0;
      vector.scale = (35 - vector.distanceTo(center)) / 20;
      vector.y = -random*40 * vector.scale;
      vector.y = Math.min(-2, vector.y);
    }
  }
  var material = new THREE.MeshPhongMaterial({
      shading: THREE.FlatShading,
      color: 0xffffff
    });
  rock = new THREE.Mesh( geometry, material);
  scene.add(rock);
  
  // Create gums
  var gum = new Gum();
  scene.add(gum.mesh);
}
var gums = new THREE.Object3D();
scene.add(gums);
var gumsArray = [];

var gravity = -0.01;
var slow = 0.99;
var gumGeom = new THREE.SphereGeometry(1, 8, 8);
var colors = [0xff3155, 0xffaf42, 0xffed5e, 0x49f770, 0x2daefd];
function Gum(){
  var color = colors[Math.floor(Math.random()*5)];
  var mat = new THREE.MeshPhongMaterial({
    shading: THREE.FlatShading,
    emissive: color,
    emissiveIntensity:0.4,
    color: color
  });
  this.mesh = new THREE.Mesh(gumGeom, mat);
  this.mesh.position.y = 30;
  this.vel = new THREE.Vector3((Math.random()-0.5)*0.5,0,(Math.random()-0.5)*0.5);
  this.vel.x = Math.min(0.1, this.vel.x);
  this.rotVel = new THREE.Vector3((Math.random()-0.5)*0.1,(Math.random()-0.5)*0.1,(Math.random()-0.5)*0.1);
  this.size = Math.random()*1.5 + 0.3;
  this.mesh.scale.set(this.size, this.size, this.size);
}
Gum.prototype.update = function(){
  this.vel.y += gravity;
  this.vel.y *= slow;
  this.mesh.position.x += this.vel.x;
  this.mesh.position.y += this.vel.y;
  this.mesh.position.z += this.vel.z;
  
  this.mesh.rotation.x += this.vel.x * 0.2;
  this.mesh.rotation.y += this.vel.y * 0.2;
  this.mesh.rotation.z += this.vel.z * 0.2;
  // Check if in range or not
  if(this.mesh.position.distanceTo(center) < 30){
    if (this.mesh.position.y - this.size <= 0 ){
      this.mesh.position.y = this.size;
      this.vel.y = -this.vel.y;
    }
  }
};

window.addEventListener('resize', onResize);

function onResize() {
  ww = window.innerWidth;
  wh = window.innerHeight;
  camera.aspect = ww / wh;
  camera.updateProjectionMatrix();
  renderer.setSize(ww, wh);
}
var prevA = 0;
function render(a){
  
  controls.update();
  
  if(a - prevA > 50){
    prevA = a;
    gum = new Gum();
    gums.add(gum.mesh);
    gumsArray.push(gum);
  }
  
  for(var i = 0; i < gumsArray.length; i++){
    gumsArray[i].update();
    if(gumsArray[i].mesh.position.y < -100){
      gums.remove(gumsArray[i].mesh);
      gumsArray.splice(i, 1); i--;
    }
  }

  var center = new THREE.Vector3(0,0,0);
  for (i = 0; i < rock.geometry.vertices.length; i ++ ) {
    var vector = rock.geometry.vertices[i];
    if(vector.y < 0){
      var random = Math.abs(noise.simplex3(vector.origin.x*0.02, vector.origin.y*0.02,(a*0.00005)));
      vector.y = -random*30 * vector.scale;
      vector.y = Math.min(-0.5, vector.y);
    }
  }
  rock.geometry.verticesNeedUpdate = true;
  
  rock.rotation.y += 0.001;
  
  renderer.render(scene, camera);
  
  requestAnimationFrame(render);
}

function init(){
  createIsland();
  requestAnimationFrame(render);
}

init();
