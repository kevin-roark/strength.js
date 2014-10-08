$(function() {

  var kt = require('./lib/kutility');
  var Camera = require('./camera');
  var Character = require('./character');
  var Skybox = require('./skybox');
  var io = require('./io');

  var scene = new THREE.Scene();

  var renderer;
  var rendermode = 'webgl';
  try {
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x222222, 1);
  } catch(e) {
    $('.error').show();
  }

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

  var canvas = document.querySelector('canvas');
  var $canvas = $(canvas);

  var skybox = new Skybox();
  skybox.addTo(scene);

  var camera = new Camera(window, scene);

  // spotlight shinin from above casting shadows and the like
  var spotlight = new THREE.SpotLight(0xffffff, 5.0);
  spotlight.position.set(0, 200, -25);
  spotlight.castShadow = true;
  scene.add(spotlight);

  // soft blue light //\\ can modify this sucker to change mood
  var ambientLight = new THREE.AmbientLight(0xeeeeff);
  ambientLight.intensity = 0.4;
  //scene.add(ambientLight);

  var active = {wrestlers: true, lighting: true, sliding: false};

  var kevinWrestler;
  var dylanWrestler;
  var wrestlers = [];

  var slideOb = {left: true, moveCount: 0};

  start();

  function start() {
    kevinWrestler = new Character({x: -25, y: 5, z: -25}, 20);
    dylanWrestler = new Character({x: 25, y: 5, z: -25}, 20);
    wrestlers = [kevinWrestler, dylanWrestler];

    io.begin(kevinWrestler, dylanWrestler);

    camera.cam.position.set(0, 6, 100);

    for (var i = 0; i < wrestlers.length; i++) {
      wrestlers[i].addTo(scene);
    }

    render();

    $('body').keypress(function(ev) {
      if (ev.which == 32) { // spacebar
        resetWrestlerPositions();
      }
    });
  }

  function render() {
    requestAnimationFrame(render);

    if (active.wrestlers) {
      // render the wrestlers
      for (var i = 0; i < wrestlers.count; i++) wrestlers[i].render();
    }

    if (active.character) {
      mainCharacterModel.render();
    }

    if (active.sliding) {
      slideWrestlers();
    }

    if (active.lighting) {
      changeLights();
    }

    camera.render();

    renderer.render(scene, camera.cam);
  }

  function resetWrestlerPositions() {
    dylanWrestler.moveTo(25, 5, -25);
    kevinWrestler.moveTo(-25, 5, -25);

    wrestlers.forEach(function(wrestler) {
      wrestler.scaleMultiply(1);
    });
  }

  var lightOb = {};
  function changeLights() {
    if (!lightOb) lightOb = {};

    if (lightOb.movingUp) {
      spotlight.position.y += 1;
      if (spotlight.position.z > 400) {
        lightOb.movingUp = false;
      }
    } else {
      spotlight.position.y -= 1;
      if (spotlight.position.z < 50) {
        lightOb.movingUp = true;
      }
    }

    spotlight.intensity = Math.random() * 5.0;

    spotlight.position.x += (Math.random() - 0.5) * 20;
    spotlight.position.z += (Math.random() - 0.5) * 20;

    var gray = Math.random();
    spotlight.color.setRGB(gray, gray, gray);
  }

  function slideWrestlers() {
    wrestlers.forEach(function(wrestler) {
      if (slideOb.left) {
        wrestler.move(-1, 0, 0);
      } else {
        wrestler.move(1, 0, 0);
      }
    });

    slideOb.moveCount++;
    if (slideOb.moveCount > 40) {
      slideOb.moveCount = 0;
      slideOb.left = !slideOb.left;
    }
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
