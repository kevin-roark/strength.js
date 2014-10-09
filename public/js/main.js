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

  var hueLight = new THREE.SpotLight(0xffffff, 1.0);
  hueLight.castShadow = true;
  hueLight.position.set(0, 100, -25);
  scene.add(hueLight);

  // soft blue light //\\ can modify this sucker to change mood
  var ambientLight = new THREE.AmbientLight(0xeeeeff);
  ambientLight.intensity = 0.4;
  //scene.add(ambientLight);

  var active = {wrestlers: true, lighting: true, sliding: false, camera: false};
  var history = {};

  var kevinWrestler;
  var dylanWrestler;
  var wrestlers = [];

  var slideOb = {left: true, moveCount: 0};
  var cameraOb = {};

  start();

  function start() {
    kevinWrestler = new Character({x: -25, y: 5, z: -25}, 20);
    dylanWrestler = new Character({x: 25, y: 5, z: -25}, 20);
    wrestlers = [kevinWrestler, dylanWrestler];

    for (var i = 0; i < wrestlers.length; i++) {
      wrestlers[i].addTo(scene);
    }

    camera.cam.position.set(0, 6, 110);

    io.begin(kevinWrestler, dylanWrestler, camera.cam, hueLight);

    render();

    $('body').keypress(function(ev) {
      console.log(ev.which);
      if (ev.which == 32) { // spacebar
        resetWrestlerPositions();
      }
      else if (ev.which == 113) { // q
        initiateShower();
      }
      else if (ev.which == 122) { // z
        active.camera = !active.camera;
      }
      else if (ev.which == 120) { // x
        kevinWrestler.melting = !kevinWrestler.melting;
        dylanWrestler.melting = !dylanWrestler.melting;
      }
    });
  }

  function render() {
    requestAnimationFrame(render);

    if (active.wrestlers) {
      // render the wrestlers
      wrestlers.forEach(function(wrestler) {
        wrestler.render();
      });
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

    if (active.camera) {
      changeCamera();
    }

    camera.render();

    renderer.render(scene, camera.cam);
  }

  function resetWrestlerPositions() {
    wrestlers.forEach(function(wrestler) {
      wrestler.reset();
    });

    camera.cam.position.set(0, 6, 110);
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

  function changeCamera() {
    var dx = (Math.random() - 0.5) * 1;
    var dy = (Math.random() - 0.5) * 0.5;
    var dz = (Math.random() - 0.5) * 1;

    camera.cam.position.x += dx;
    camera.cam.position.y += dy;
    camera.cam.position.z += dz;
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

  function initiateShower() {
    if (history.startedShower) return;

    history.startedShower = true;

    dylanWrestler.discombobulate(function() {

    });

    kevinWrestler.discombobulate(function() {
      var backCameraAwayInterval = setInterval(function() {
        camera.cam.position.z += 0.85;
        if (camera.cam.position.z > 566) {
          clearInterval(backCameraAwayInterval);
          fadeToWhite();
        }
      }, 20);
    });

    function fadeToWhite() {
      $('.overlay').fadeIn(9000);
    }
  }

});
