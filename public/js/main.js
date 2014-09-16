$(function() {

  var kt = require('./lib/kutility');
  var Camera = require('./camera');
  var Character = require('./character');

  var scene = new THREE.Scene();

  var renderer;
  var rendermode = 'webgl';
  try {
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff, 1);
  } catch(e) {
    $('.error').show();
    setTimeout(function() {
      $('.error').fadeOut();
    }, 6666);
    renderer = new THREE.CanvasRenderer();
    renderer.setClearColor(0xffffff, 1);
    rendermode = 'canvas';
  }

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

  var canvas = document.querySelector('canvas');
  var $canvas = $(canvas);

  var camera = new Camera(window, scene);

  // spotlight shinin from above casting shadows and the like
  var spotlight = new THREE.SpotLight(0xffffff, 0.25);
  spotlight.position.set(0, 1000, 0);
  spotlight.castShadow = true;
  spotlight.angle = Math.PI / 2;
  spotlight.exponent = 2.0;
  spotlight.shadowDarkness = 0.5;
  scene.add(spotlight);

  // soft blue light //\\ can modify this sucker to change mood
  var ambientLight = new THREE.AmbientLight(0xeeeeff);
  ambientLight.intensity = 0.4;
  scene.add(ambientLight);

  var active = {wrestlers: true};

  start();

  function start() {
    render();
  }

  function render() {
    requestAnimationFrame(render);

    if (active.wrestlers) {
      // render the wrestlers
    }

    if (active.character) {
      mainCharacterModel.render();
    }

    camera.render();

    renderer.render(scene, camera.cam);
  }

  function landscapeWarp() {
    active.landscape = true;
    warp();

    function warp() {
      if (!active.landscape) return;

      kt.brightness($canvas, kt.randInt(350, 150));
      kt.hutate($canvas, kt.randInt(360));

      setTimeout(function() {
        kt.brightness($canvas, 100);
        kt.hutate($canvas, 0);
        setTimeout(warp, kt.randInt(1200, 600));
      }, kt.randInt(350, 100));
    }
  }

});
