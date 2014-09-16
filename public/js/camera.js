
var element = document.body;

var cam = {};

var kt = require('./lib/kutility');

function onWindowResize() {
	cam.aspect = window.innerWidth / window.innerHeight;
	cam.updateProjectionMatrix();
}

module.exports = exports = Camera;

function Camera(window, scene) {
  this.cam = new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 1, 3000);
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
