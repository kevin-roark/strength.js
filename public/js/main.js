$(function() {

  var kt = require('./lib/kutility');
  var Camera = require('./camera');
  var Character = require('./character');
  var Skybox = require('./skybox');
  var io = require('./io');

  var Shower = require('./shower');
  var Locker = require('./locker');
  var Phone = require('./phone');
  var Computer = require('./computer');
  var BoxingRing = require('./boxing_ring');
  var FitnessTower = require('./fitness_tower');
  var Weights = require('./weights');

  var scene = new THREE.Scene();

  var renderer;
  var rendermode = 'webgl';
  try {
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x111111, 1);
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

  var boxingRing;
  var fitnessTowers = [];
  var weights = [];

  var slideOb = {left: true, moveCount: 0};
  var cameraOb = {};

  var shower;
  var lockers = [];
  var computers = [];

  var particleEngine;

  start();

  function start() {
    kevinWrestler = new Character({x: -25, y: 5, z: -25}, 20);
    dylanWrestler = new Character({x: 25, y: 5, z: -25}, 20);
    wrestlers = [kevinWrestler, dylanWrestler];

    for (var i = 0; i < wrestlers.length; i++) {
      wrestlers[i].addTo(scene);
    }

    boxingRing = new BoxingRing({x: 0, y: -70, z: -140}, 18);
    boxingRing.addTo(scene, function() {
      boxingRing.mesh.scale.x *= 1.5;
    });

    for (var i = 0; i < 2; i++) {
      var pos;
      if (i == 0) {
        pos = {x: -50, y: 20, z: 0};
      } else if (i == 1) {
        pos = {x: 50, y: 20, z: 0};
      }

      var tower = new FitnessTower(pos, 10);
      tower.addTo(scene);
      fitnessTowers.push(tower);
    }

    for (var i = 0; i < 3; i++) {
      var pos;
      if (i == 0) {
        pos = {x: 0, y: 68, z: -100};
      } else if (i == 1) {
        pos = {x: -130, y: -66, z: -150};
      } else if (i == 2) {
        pos = {x: 130, y: -66, z: -150};
      }

      var weight = new Weights(pos, 10);
      weight.addTo(scene, function(w) {
        if (w.mesh.position.y < 0) {
          w.rotate(0, Math.PI / 2, 0);
        }
      });
      weights.push(weight);
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
      else if (ev.which == 99) { // c
        active.lighting = !active.lighting;
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

    fitnessTowers.forEach(function(tower) {
      tower.render();
    });

    computers.forEach(function(computer) {
      computer.render();
    });

    if (particleEngine) {
      particleEngine.update(0.01 * 0.5);
    }

    camera.render();

    renderer.render(scene, camera.cam);
  }

  function clearScene() {
    for (i = scene.children.length - 1; i >= 0; i--) {
      var obj = scene.children[ i ];
      if (obj !== camera.cam && obj !== spotlight && obj !== hueLight) {
        scene.remove(obj);
      }
    }
  }

  function resetWrestlerPositions() {
    wrestlers.forEach(function(wrestler) {
      wrestler.reset();
    });

    if (history.startedShower) {
      camera.cam.position.set(0, 1, 0);
    } else {
      camera.cam.position.set(0, 6, 110);
    }
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
        if (camera.cam.position.z > 555) {
          clearInterval(backCameraAwayInterval);
          fadeToWhite();
        }
      }, 20);
    });

    var otherObjects = [boxingRing];
    fitnessTowers.forEach(function(tower) { otherObjects.push(tower); });
    weights.forEach(function(weight) { otherObjects.push(weight); });
    otherObjects.forEach(function(otherObject) {
      otherObject.fallToFloor(-200, 5);
    });

    function fadeToWhite() {
      $('.overlay').fadeIn(9000, function() {
          changeToShowerMode();
      });
    }

    function changeToShowerMode() {
      clearScene();
      renderer.setClearColor(0xffff99, 1);
      camera.cam.position.set(0, 1, 0);

      shower = new Shower({x: 0, y: 0, z: -10}, 1.15);
      shower.addTo(scene);

      for (var i = 0; i < 4; i++) {
        var x = 0;
        if (i < 2) {
          x = (i - 2) * 4;
        } else {
          x = (i - 1) * 4;
        }

        var locker = new Locker({x: x, y: 2, z: -25}, 0.35);
        locker.addTo(scene);
        lockers.push(locker);
      }

      $('.overlay').fadeOut(5000, function() {
        startAddingComputers();
      });
    }

    function startAddingComputers() {
      addComputer();

      function addComputer() {
        var skyPos = {x: (Math.random() - 0.5) * 10, y: kt.randInt(12, 8), z: Math.random() * -10 - 2};
        var scale = 1;
        var computer;

        if (Math.random() < 0.99999) {
          scale = Math.random() * 0.3 + 0.05;
          computer = new Phone(skyPos, scale);
        } else {
          scale = 0.2;
          computer = new Computer(skyPos, scale);
        }

        computer.addTo(scene);
        computer.fallToFloor();
        computers.push(computer);

        if (computers.length < 44) {
          setTimeout(addComputer, 1000);
        } else {
          growComputersForever();
        }
      }
    }

    function growComputersForever() {
      computers.forEach(function(computer) {
        computer.melting = true;
      });

      var scale = 1.05;
      scaleComputers();
      function scaleComputers() {
        scale *= 1.03;
        computers.forEach(function(computer) {
          computer.scaleMultiply(scale);
          computer.move(0.03 * scale, 0.025 * scale, 0);
        });

        camera.cam.position.z = Math.min(60, camera.cam.position.z + 0.05);

        if (scale < 666) {
          setTimeout(scaleComputers, 30);
        } else {
          enterEndgameState();
        }
      }
    }

    function enterEndgameState() {
      setTimeout(function() {
        fadeToRed();
      }, 10000);

      function fadeToRed() {
        $('.overlay').css('background-color', 'rgb(160, 10, 10)');
        $('.overlay').fadeIn(5000, function() {
          makeItRain();
        });
      }

      function makeItRain() {
        clearScene();
        renderer.setClearColor(0x000000, 1);
        camera.cam.position.set(0, 0, 0);

        var particleSettings = {
          positionStyle    : Type.CUBE,
          positionBase     : new THREE.Vector3( 0, 50, 0 ),
          positionSpread   : new THREE.Vector3( 200, 200, 200 ),

          velocityStyle    : Type.CUBE,
          velocityBase     : new THREE.Vector3( 0, -400, 0),
          velocitySpread   : new THREE.Vector3( 50, 50, 50 ),
          accelerationBase : new THREE.Vector3( 0, -5, 0 ),

          particleTexture : THREE.ImageUtils.loadTexture( 'images/raindrop2flip.png' ),

          sizeBase    : 4.0,
          sizeSpread  : 2.0,
          colorBase   : new THREE.Vector3(0.66, 1.0, 0.7), // H,S,L
          colorSpread : new THREE.Vector3(0.00, 0.0, 0.2),
          opacityBase : 0.6,

          particlesPerSecond : 3600,
          particleDeathAge   : 1.0,
          emitterDeathAge    : 60
        };

        particleEngine = new ParticleEngine();
        particleEngine.setValues(particleSettings);
        particleEngine.initialize(scene);

        var phone = new Phone({x: 0, y: 5, z: -64}, 3);
        phone.addTo(scene);
        setInterval(function() {
          phone.rotate(0, 0.02, 0);
        }, 20);

        var weight = new Weights({x: 0, y: 0, z: -50}, 4);
        weight.addTo(scene);

        active.lighting = false;

        $('.overlay').fadeOut(5000);
      }
    }

  }

});
