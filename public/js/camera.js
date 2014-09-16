
var element = document.body;

var cam = {};

var kt = require('./lib/kutility');

function onWindowResize() {
	cam.aspect = window.innerWidth / window.innerHeight;
	cam.updateProjectionMatrix();
}

module.exports = exports = Camera;

function Camera(window, scene, config) {
	if (!config) config = {};
	if (!config.near) config.near = 0.1;
	if (!config.far) config.far = 20000;


  this.cam = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, config.near, config.far);
	cam = this.cam;

  window.addEventListener('resize', onWindowResize, false);

  this.window = window;

	this.objects = [];
}

Camera.prototype.addObject = function(object) {
	this.objects.push(object);
}

Camera.prototype.render = function() {
	// doesn't actually need to do anything yet
}
