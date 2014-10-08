(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var kt = require('./lib/kutility');

var modelNames = require('./model_names');

var BodyPart = require('./bodypart');

module.exports = Arm;

function Arm(startPos, scale, side) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.scale = scale || 1;
  this.scale *= 0.33;

  this.side = side || 'left';

  this.modelChoices = [modelNames.BABY_ARM, modelNames.FOOTBALL_ARM, modelNames.LOWPOLY_ARM];
}

Arm.prototype.__proto__ = BodyPart.prototype;

Arm.prototype.additionalInit = function() {
  //this.rotate(0, -Math.PI / 2, 0);

  if (this.modelName == modelNames.BABY_ARM) {
    this.rotate(0, Math.PI / 2, 0);
    this.move(0, 19, -20);
    if (this.side == 'left') {
      this.move(20, 0, 0);
    } else {
      this.move(11.5, 0, 0);
    }
  } else if (this.modelName == modelNames.FOOTBALL_ARM) {
    this.scale *= 15;
    this.scaleBody(this.scale);
    this.move(0, -10, 0);
    if (this.side == 'left') {
      this.move(16, 0, 0);
    } else {
      this.move(-10, 0, 0);
      this.mesh.scale.x *= -1;
    }
  } else if (this.modelName == modelNames.LOWPOLY_ARM) {
    this.move(0, 10, 0);
    if (this.side == 'left') {
      this.move(13, 0, 0);
      this.mesh.scale.x *= -1;
    } else {
      this.move(-13, 0, 0);
    }
  }
};

},{"./bodypart":3,"./lib/kutility":11,"./model_names":13}],2:[function(require,module,exports){

var kt = require('./lib/kutility');

var modelNames = require('./model_names');

var BodyPart = require('./bodypart');

module.exports = Body;

function Body(startPos, scale) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.scale = scale || 1;
  this.scale *= 0.5;

  this.modelChoices = [modelNames.BABY_TORSO, modelNames.FOOTBALL_TORSO, modelNames.LOWPOLY_TORSO];
}

Body.prototype.__proto__ = BodyPart.prototype;

Body.prototype.additionalInit = function() {
  var self = this;

  if (self.modelName == modelNames.BABY_TORSO) {
    self.scale *= 0.75;
    self.scaleBody(self.scale);
    self.move(1.5, 6, 0);
  } else if (self.modelName == modelNames.FOOTBALL_TORSO) {
    self.scale *= 7.5;
    self.scaleBody(self.scale);
    self.move(-2, -24, 0);
  } else if (self.modelName == modelNames.LOWPOLY_TORSO) {
    self.move(0, -15, 0);
  }
};

},{"./bodypart":3,"./lib/kutility":11,"./model_names":13}],3:[function(require,module,exports){
var kt = require('./lib/kutility');

var modelNames = require('./model_names');

module.exports = BodyPart;

function BodyPart(startPos, scale) {
  this.modelChoices = [];
}

BodyPart.prototype.move = function(x, y, z) {
  if (!this.mesh) return;

  this.mesh.position.x += x;
  this.mesh.position.y += y;
  this.mesh.position.z += z;
}

BodyPart.prototype.rotate = function(rx, ry, rz) {
  if (!this.mesh) return;

  this.mesh.rotation.x += rx;
  this.mesh.rotation.y += ry;
  this.mesh.rotation.z += rz;
}

BodyPart.prototype.moveTo = function(x, y, z) {
  if (!this.mesh) return;

  this.mesh.position.set(x, y, z);

  this.move(0, 0, 0);
}

BodyPart.prototype.scaleBody = function(s) {
  if (!this.mesh) return;

  this.mesh.scale.set(s, s, s);
}

BodyPart.prototype.addTo = function(scene) {
  var self = this;

  self.modelName = self.specificModelName || kt.choice(self.modelChoices);

  console.log('ADDING MODEL ' + self.modelName);

  modelNames.loadModel(self.modelName, function (geometry, materials) {
    self.gometry = geometry;
    self.materials = materials;
    console.log(materials);

    self.mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));

    self.scaleBody(self.scale);

    self.moveTo(self.startX, self.startY, self.startZ);

    self.additionalInit();

    scene.add(self.mesh);
  });
}

BodyPart.prototype.render = function() {

}

BodyPart.prototype.additionalInit = function() {};

},{"./lib/kutility":11,"./model_names":13}],4:[function(require,module,exports){

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

},{"./lib/kutility":11}],5:[function(require,module,exports){

var kt = require('./lib/kutility');

var modelNames = require('./model_names');
var Arm = require('./arm');
var Leg = require('./leg');
var Head = require('./head');
var Body = require('./body');
var Hand = require('./hand');
var Foot = require('./foot');

module.exports = Character;

function Character(startPos, scale) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.position = startPos;

  this.scale = scale || 5;

  this.leftArm = new Arm({x: this.startX - scale, y: this.startY - scale, z: this.startZ}, scale, 'left');

  this.rightArm = new Arm({x: this.startX + scale, y: this.startY - scale, z: this.startZ}, scale, 'right');

  this.leftHand = new Hand({x: this.startX - scale, y: this.startY - scale, z: this.startZ}, scale, 'left');

  this.rightHand = new Hand({x: this.startX + scale, y: this.startY - scale, z: this.startZ}, scale, 'right');

  this.leftLeg = new Leg({x: this.startX - scale * 0.4, y: this.startY - scale * 0.75, z: this.startZ}, scale);

  this.rightLeg = new Leg({x: this.startX + scale * 0.4, y: this.startY - scale * 0.75, z: this.startZ}, scale);

  this.leftFoot = new Foot({x: this.startX - scale * 0.5, y: this.startY - scale * 1.5, z: this.startZ}, scale, 'left');

  this.rightFoot = new Foot({x: this.startX + scale * 0.5, y: this.startY - scale * 1.5, z: this.startZ}, scale, 'right');

  this.torso = new Body({x: this.startX, y: this.startY, z: this.startZ}, scale);

  this.head = new Head({x: this.startX, y: this.startY + 0.25 * scale, z: this.startZ}, scale);

  this.bodyParts = [this.leftArm, this.rightArm,
                    this.leftHand, this.rightHand,
                    this.leftLeg, this.rightLeg,
                    this.leftFoot, this.rightFoot,
                    this.torso, this.head];

  this.twitching = false; // random motion and rotation

  this.melting = false; // bone shaking
}

Character.prototype.addTo = function(scene) {
  this.scene = scene;

  this.bodyParts.forEach(function(part) {
    part.addTo(scene);
  });
}

Character.prototype.move = function(x, y, z) {
  this.position.x += x;
  this.position.y += y;
  this.position.z += z;

  this.bodyParts.forEach(function(part) {
    part.move(x, y, z);
  });
}

Character.prototype.moveTo = function(x, y, z) {
  var dx = x - this.position.x;
  var dy = y - this.position.y;
  var dz = z - this.position.z;

  this.move(dx, dy, dz);
}

Character.prototype.rotate = function(rx, ry, rz) {
  this.bodyParts.forEach(function(part) {
    part.rotate(rx, ry, rz);
  });
}

Character.prototype.scale = function(s) {
  this.bodyParts.forEach(function(part) {
    part.scale(s);
  });
}

Character.prototype.render = function() {
  if (this.twitching) {
    var x = (Math.random() - 0.5) * 2;
    var y = 0;
    var z = (Math.random() - 0.5) * 2;
    this.move(x, y, z);

    var rx = (Math.random() - 0.5) * 0.0001;
    var ry = (Math.random() - 0.5) * 0.4;
    var rz = (Math.random() - 0.5) * 0.0001;
    this.rotate(rx, ry, rz);
  }

  if (this.melting) {
    // perform some bone shaking
  }
}

},{"./arm":1,"./body":2,"./foot":6,"./hand":7,"./head":8,"./leg":10,"./lib/kutility":11,"./model_names":13}],6:[function(require,module,exports){

var kt = require('./lib/kutility');

var modelNames = require('./model_names');

var BodyPart = require('./bodypart');

module.exports = Foot;

function Foot(startPos, scale, side) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.scale = scale || 1;
  this.scale *= 0.1;

  this.side == side || 'left';

  this.modelChoices = [modelNames.FOOT, modelNames.FOOTBALL_FOOT];
}

Foot.prototype.__proto__ = BodyPart.prototype;

Foot.prototype.additionalInit = function() {
  if (this.modelName == modelNames.FOOT) {
    this.rotate(0, -Math.PI / 2, 0);
    this.scale *= 1.5;
    this.scaleBody(this.scale);
    this.move(0, -5, 0);

    if (this.side == 'right') {
      this.mesh.scale.x *= -1;
    }
  } else if (this.modelName == modelNames.FOOTBALL_FOOT) {
    this.scale *= 60;
    this.scaleBody(this.scale);
    this.move(0, -13, 0);

    if (this.side == 'right') {
      this.mesh.scale.x *= -1;
    }
  }
};

},{"./bodypart":3,"./lib/kutility":11,"./model_names":13}],7:[function(require,module,exports){

var kt = require('./lib/kutility');

var modelNames = require('./model_names');

var BodyPart = require('./bodypart');

module.exports = Hand;

function Hand(startPos, scale, side) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.side = side || 'left';

  this.scale = scale || 1;
  this.scale *= 0.1;

  this.modelChoices = [modelNames.HAND, modelNames.FOOTBALL_HAND];
}

Hand.prototype.__proto__ = BodyPart.prototype;

Hand.prototype.additionalInit = function() {


  if (this.modelName == modelNames.HAND) {
    this.move(0, 9, 0);

    if (this.side == 'left') {
      this.rotate(-Math.PI / 2, Math.PI / 2, 0);
    } else {
      this.rotate(-Math.PI / 2, Math.PI / 2, 0);
    }
  } else if (this.modelName == modelNames.FOOTBALL_HAND) {
    this.scale *= 45;
    this.scaleBody(this.scale);
    this.move(0, -6, 0);

    if (this.side == 'left') {
      this.move(8, 0, 0);
    } else {
      this.move(-10, 0, 0);
      this.mesh.scale.x *= -1;
    }
  }
};

},{"./bodypart":3,"./lib/kutility":11,"./model_names":13}],8:[function(require,module,exports){

var kt = require('./lib/kutility');

var modelNames = require('./model_names');

var BodyPart = require('./bodypart');

module.exports = Head;

function Head(startPos, scale) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.scale = scale || 1;
  this.scale *= 0.3;

  this.modelChoices = [modelNames.HEAD, modelNames.BABY_HEAD, modelNames.FOOTBALL_HEAD, modelNames.LOWPOLY_HEAD];
}

Head.prototype.__proto__ = BodyPart.prototype;

Head.prototype.additionalInit = function() {
  var self = this;

  if (self.modelName == modelNames.HEAD) {
    self.scale *= 0.35;
    self.scaleBody(self.scale);
    self.move(0, 12, 0);
  } else if (self.modelName == modelNames.BABY_HEAD) {
    self.scale *= 1.2;
    self.scaleBody(self.scale);
  } else if (self.modelName == modelNames.FOOTBALL_HEAD) {
    self.scale *= 25;
    self.scaleBody(self.scale);
    self.move(1.5, -63, 0);
  } else if (self.modelName == modelNames.LOWPOLY_HEAD) {
    self.scale *= 1.5;
    self.scaleBody(self.scale);
    self.move(0, -15, 0);
  }
};

},{"./bodypart":3,"./lib/kutility":11,"./model_names":13}],9:[function(require,module,exports){
var socket = io('http://localhost:8888');

var previousPositions = {};
var positionDeltas = {};
var wrestler1, wrestler2;

module.exports.begin = function(w1, w2) {
  wrestler1 = w1;
  wrestler2 = w2;

  socket.on('leftHand', function(data) {
    if (data.wrestler == 1) {
      leftHand1(data.position);
    } else {
      leftHand2(data.position);
    }
  });

  socket.on('rightHand', function(data) {
    if (data.wrestler == 1) {
      rightHand1(data.position);
    } else {
      rightHand2(data.position);
    }
  });

  socket.on('closestHand', function(data) {
    if (data.wrestler == 1) {
      closestHand1(data.position);
    } else {
      closestHand2(data.position);
    }
  });

  socket.on('head', function(data) {
    if (data.wrestler == 1) {
      head1(data.position);
    } else {
      head2(data.position);
    }
  });

  socket.on('leftKnee', function(data) {
    if (data.wrestler == 1) {
      leftKnee1(data.position);
    } else {
      leftKnee2(data.position);
    }
  });

  socket.on('rightKnee', function(data) {
    if (data.wrestler == 1) {
      rightKnee1(data.position);
    } else {
      rightKnee2(data.position);
    }
  });

  socket.on('leftElbow', function(data) {
    if (data.wrestler == 1) {
      leftElbow1(data.position);
    } else {
      leftElbow2(data.position);
    }
  });

  socket.on('rightElbow', function(data) {
    if (data.wrestler == 1) {
      rightElbow1(data.position);
    } else {
      rightElbow2(data.position);
    }
  });

  socket.on('torso', function(data) {
    if (data.wrestler == 1) {
      torso1(data.position);
    } else {
      torso2(data.position);
    }
  });
}

function moveDelta(wrestler, position, lastPos, divisor) {
  var deltaX = (position.x - lastPos.x) / divisor;
  var deltaZ = (position.z - lastPos.z) / -divisor;

  wrestler.move(deltaX, 0, deltaZ);
}

function rightHand1(position) {

  previousPositions.rightHand1 = position;
}

function leftHand1(position) {
  if (previousPositions.rightHand1) {
    var rh = previousPositions.rightHand1;
    positionDeltas.hand1 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    hand1DeltaAction();
  }

  previousPositions.leftHand1 = position;
}

function closestHand1(position) {

}

function head1(position) {

  previousPositions.head1 = position;
}

function leftKnee1(position) {
  if (previousPositions.rightKnee1) {
    var rh = previousPositions.rightKnee1;
    positionDeltas.knee2 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    knee1DeltaAction();
  }

  previousPositions.leftKnee1 = position;
}

function rightKnee1(position) {

  previousPositions.rightKnee1 = position;
}

function leftElbow1(position) {
  if (previousPositions.rightElbow1) {
    var rh = previousPositions.rightElbow1;
    positionDeltas.knee2 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    elbow1DeltaAction();
  }

  previousPositions.leftElbow1 = position;
}

function rightElbow1(position) {
  previousPositions.rightElbow1 = position;
}

function torso1(position) {
  if (previousPositions.torso1) {
    moveDelta(wrestler1, position, previousPositions.torso1, 8);
  }

  previousPositions.torso1 = position;
}

function rightHand2(position)  {

  previousPositions.rightHand2 = position;
}

function leftHand2(position) {
  if (previousPositions.rightHand2) {
    var rh = previousPositions.rightHand2;
    positionDeltas.hand2 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    hand2DeltaAction();
  }

  previousPositions.leftHand2 = position;
}

function closestHand2(position) {

}

function head2(position) {

  previousPositions.head2 = position;
}

function leftKnee2(position) {
  if (previousPositions.rightKnee2) {
    var rh = previousPositions.rightKnee2;
    positionDeltas.knee2 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    knee2DeltaAction();
  }

  previousPositions.leftKnee2 = position;
}

function rightKnee2(position) {

  previousPositions.rightKnee2 = position;
}

function leftElbow2(position) {
  if (previousPositions.rightElbow2) {
    var rh = previousPositions.rightElbow2;
    positionDeltas.knee2 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    elbow2DeltaAction();
  }

  previousPositions.leftElbow2 = position;
}

function rightElbow2(position) {
  previousPositions.rightElbow2 = position;
}

function torso2(position) {
  if (previousPositions.torso2) {
    moveDelta(wrestler2, position, previousPositions.torso2, 8);
  }

  previousPositions.torso2 = position;
}

function hand1DeltaAction() {

}

function hand2DeltaAction() {

}

function knee1DeltaAction() {

}

function knee2DeltaAction() {

}

function elbow1DeltaAction() {

}

function elbow2DeltaAction() {

}

},{}],10:[function(require,module,exports){

var kt = require('./lib/kutility');

var modelNames = require('./model_names');

var BodyPart = require('./bodypart');

module.exports = Leg;

function Leg(startPos, scale) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.scale = scale || 1;
  this.scale *= 0.25;

  this.modelChoices = [modelNames.FOOTBALL_LEG,/* modelNames.LOWPOLY_LEG*/];
}

Leg.prototype.__proto__ = BodyPart.prototype;

Leg.prototype.additionalInit = function() {
  var self = this;

  if (self.modelName == modelNames.FOOTBALL_LEG) {
    self.scale *= 15;
    self.scaleBody(self.scale);
    self.move(3, -20, 0);
  } else if (self.modelName == modelNames.LOWPOLY_LEG) {

  }
};

},{"./bodypart":3,"./lib/kutility":11,"./model_names":13}],11:[function(require,module,exports){
/* export something */
module.exports = new Kutility;

/* constructor does nothing at this point */
function Kutility() {

}

/**
 * get a random object from the array arr
 *
 * @api public
 */

Kutility.prototype.choice = function(arr) {
    var i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

/**
 * return shuffled version of an array.
 *
 * adapted from css tricks
 *
 * @api public
 */
Kutility.prototype.shuffle = function(arr) {
  var newArray = new Array(arr.length);
  for (var i = 0; i < arr.length; i++)
    newArray[i] = arr[i];

  newArray.sort(function() { return 0.5 - Math.random() });
  return newArray;
}

/**
 * returns a random color as an 'rgb(x, y, z)' string
 *
 * @api public
 */
Kutility.prototype.randColor = function() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

Kutility.prototype.randInt = function(max, min) {
  if (min)
    return Math.floor(Math.random() * (max - min)) + min;
  else
    return Math.floor(Math.random() * (max));
}

/**
 * Color wheel 1 -> 1536.
 *
 * Written by Henry Van Dusen, all attribution to the big boy.
 * Slightly modified by Kev.
 *
 * @api public
 */
 Kutility.prototype.colorWheel = function(num) {
    var text = "rgb(";
    var entry = num % 1536;
    var num = entry % 256;

    if(entry < 256 * 1)
    	return text + "0,255," + num + ")";
    else if(entry < 256 * 2)
    	return text + "0," + (255 - num) + ",255)";
    else if(entry < 256 * 3)
      return text + num + ",0,255)";
    else if(entry < 256 * 4)
      return text + "255,0," + (255 - num) + ")";
    else if(entry < 256 * 5)
      return text + "255," + num + ",0)";
    else
      return text + (255 - num) + ",255,0)";
 }

 /**
  * Make an rbg() color string an rgba() color string
  *
  * @api public
  */
Kutility.prototype.alphize = function(color, alpha) {
  color.replace('rgb', 'rgba');
  color.replace(')', ', ' + alpha + ')');
  return color;
}

/**
 * Get an array of two random contrasting colors.
 *
 * @api public
 */
Kutility.prototype.contrasters = function() {
  var num = Math.floor(Math.random() * 1536);
  var fg = this.colorWheel(num);
  var bg = this.colorWheel(num + 650);
  return [fg, bg];
}

/**
 * Add a random shadow to a jquery element
 *
 * @api public
 */
Kutility.prototype.randomShadow = function(el, size) {
  var s = size + 'px';
  var shadow = '0px 0px ' + s + ' ' + s + ' ' + this.randColor();
  addShadow(el, shadow);
}

/**
 * Add shadow with offset x and y pixels, z pixels of blur radius,
 * w pizels of spread radius, and cool color
 *
 * @api public
 */
Kutility.prototype.shadow = function(el, x, y, z, w, color) {
  var xp = x + "px";
  var yp = y + "px";
  var zp = z + "px";
  var wp = w + "px";

  var shadow = xp + " " + yp + " " + zp + " " + wp + " " + color;
  addShadow(el, shadow);
}

function addShadow(el, shadow) {
  el.css('-webkit-box-shadow', shadow);
  el.css('-moz-box-shadow', shadow);
  el.css('box-shadow', shadow);
}

/**
 * Add transform to element with all the lame browser prefixes.
 *
 * @api public
 */
Kutility.prototype.addTransform = function(el, transform) {
  var curTransform = this.getTransform(el);
  curTransform = curTransform.replace('none', '');
  var newTransform = curTransform + transform;
  this.setTransform(el, newTransform);
}

/**
 * Set transform of element with all the lame browser prefixes.
 *
 * @api public
 */
Kutility.prototype.setTransform = function(el, transform) {
  el.css('-webkit-transform', transform);
  el.css('-moz-transform', transform);
  el.css('-ms-transform', transform);
  el.css('-o-transform', transform);
  el.css('transform', transform);
}

/**
 * Check an elements tansform.
 *
 * @api public
 */
Kutility.prototype.getTransform = function(el) {
  var possible = ['transform', '-webkit-transform', '-moz-transform', '-ms-transform', '-o-transform'];

  for (var i = 0; i < possible.length; i++) {
    var f = el.css(possible[i]);
    if (f == 'none' && i + 1 < possible.length) {
      var pf = el.css(possible[i + 1]);
      if (pf)
        continue;
    }
    return f;
  }
}

/**
 * Remove all transforms from element.
 *
 * @api public
 */
Kutility.prototype.clearTransforms = function(el) {
  el.css('-webkit-transform', '');
  el.css('-moz-transform', '');
  el.css('-ms-transform', '');
  el.css('-o-transform', '');
  el.css('transform', '');
}

/**
 * Rotate an element by x degrees.
 *
 * @api public
 */
Kutility.prototype.rotate = function(el, x) {
  var ct = this.getTransform(el);
  ct = ct.replace(/matrix\(.*?\)/, '').replace('none', '');

  var t = ' rotate(' + x + 'deg)';
  this.setTransform(el, ct  + t);
}

/**
 * Scale an element by x (no units);
 *
 * @api public
 */
Kutility.prototype.scale = function(el, x) {
  var ct = this.getTransform(el);
  ct = ct.replace(/matrix\(.*?\)/, '').replace('none', '');

  var t = ' scale(' + x + ',' + x + ')';
  this.setTransform(el, ct + t);
}

/**
 * Translate an element by x, y (include your own units);
 *
 * @api public
 */
Kutility.prototype.translate = function(el, x, y) {
  var ct = this.getTransform(el);
  console.log(ct);
  ct = ct.replace(/matrix\(.*?\)/, '').replace('none', '');

  var t = ' translate(' + x + ', '  + y + ')';
  this.setTransform(el, ct + t);
}

/**
 * Skew an element by x, y degrees;
 *
 * @api public
 */
Kutility.prototype.skew = function(el, x, y) {
  var ct = this.getTransform(el);
  ct = ct.replace(/skew\(.*?\)/, '').replace(/matrix\(.*?\)/, '').replace('none', '');

  var xd = x + 'deg';
  var yd = y + 'deg';
  var t = ' skew(' + xd + ', ' + yd + ')';
  this.setTransform(el, ct + t);
}

/**
 * Warp an element by rotating and skewing it.
 *
 * @api public
 */
Kutility.prototype.warp = function(el, d, x, y) {
  var ct = this.getTransform(el);
  ct = ct.replace(/matrix\(.*?\)/, '').replace('none', '');

  var r = ' rotate(' + d + 'deg)';
  var xd = x + 'deg';
  var yd = y + 'deg';
  var s = ' skew(' + xd + ', ' + yd + ')';

  this.setTransform(el, ct + r + s);
}

/**
 * scale by w, translate x y
 *
 * @api public
 */
Kutility.prototype.slaw = function(el, w, x, y) {
  var ct = this.getTransform(el);
  ct = ct.replace(/matrix\(.*?\)/, '').replace('none', '');

  var s = ' scale(' + w + ',' + w + ')';
  var t = ' translate(' + x + ', '  + y + ')';
  this.setTransform(el, ct + s + t);
}

/**
 * scale by w, rotate by x
 *
 * @api public
 */
Kutility.prototype.straw = function(el, w, x) {
  var ct = this.getTransform(el);
  ct = ct.replace(/matrix\(.*?\)/, '').replace('none', '');

  var s = ' scale(' + w + ',' + w + ')';
  var r = ' rotate(' + x + 'deg)';
  this.setTransform(el, ct + s + r);
}

/**
 * Set perspective to x pixels
 *
 * @api public
 */
Kutility.prototype.perp = function(el, x) {
  var p = x + 'px';
  el.css('-webkit-perspective', p);
  el.css('-moz-perspective', p);
  el.css('-ms-perspective', p);
  el.css('-o-perspective', p);
  el.css('perspective', p);
}

/**
 * Set perspective-origin to x and y percents.
 *
 * @api public
 */
Kutility.prototype.perpo = function(el, x, y) {
  var p = x + "% " + y + "%";
  el.css('-webkit-perspective-origin', p);
  el.css('-moz-perspective-origin', p);
  el.css('-ms-perspective-origin', p);
  el.css('-o-perspective-origin', p);
  el.css('perspective-origin', p);
}

/**
 * Translate an element by x, y, z pixels
 *
 * @api public
 */
Kutility.prototype.trans3d = function(el, x, y, z) {
  var ct = this.getTransform(el);
  ct = ct.replace(/matrix3d\(.*?\)/, '').replace('none', '');

  var t = ' translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)';
  this.setTransform(el, ct + t);
}

/**
 * Scale an element by x (no units)
 *
 * @api public
 */
Kutility.prototype.scale3d = function(el, x) {
  var ct = this.getTransform(el);
  ct = ct.replace(/matrix3d\(.*?\)/, '').replace('none', '');

  var t = ' scale3d(' + x + ', ' + x + ', ' + z + ')';
  this.setTransform(el, ct + t);
}

/**
 * Rotate an element about <x, y, z> by d degrees
 *
 * @api public
 */
Kutility.prototype.rotate3d = function(el, x, y, z, d) {
  var ct = this.getTransform(el);
  ct = ct.replace(/matrix3d\(.*?\)/, '').replace('none', '');

  var t = ' rotate3d(' + x + ', ' + y + ', ' + z + ', ' + d + 'deg)';
  this.setTransform(el, ct + t);
}

/**
 * Rotate an element about x axis by d degrees
 *
 * @api public
 */
Kutility.prototype.rotate3dx = function(el, d) {
  this.rotate3d(el, 1, 0, 0, d);
}

/**
 * Rotate an element about y axis by d degrees
 *
 * @api public
 */
Kutility.prototype.rotate3dy = function(el, d) {
  this.rotate3d(el, 0, 1, 0, d);
}

/**
 * Rotate an element about z axis by d degrees
 *
 * @api public
 */
Kutility.prototype.rotate3dz = function(el, d) {
  this.rotate3d(el, 0, 0, 1, d);
}

/**
 * Add filter to element with all the lame browser prefixes.
 *
 * @api public
 */
Kutility.prototype.addFilter = function(el, filter) {
  var curFilter = this.getFilter(el);
  curFilter = curFilter.replace('none', '');
  var newFilter = curFilter + ' ' + filter;
  this.setFilter(el, newFilter);
}

/**
 * Set filter to element with all lame prefixes.
 *
 * @api public
 */
Kutility.prototype.setFilter = function(el, filter) {
  el.css('-webkit-filter', filter);
  el.css('-moz-filter', filter);
  el.css('-ms-filter', filter);
  el.css('-o-filter', filter);
  el.css('filter', filter);
}

/**
 * Check an elements filter.
 *
 * @api public
 */
Kutility.prototype.getFilter = function(el) {
  var possible = ['filter', '-webkit-filter', '-moz-filter', '-ms-filter', '-o-filter'];

  for (var i = 0; i < possible.length; i++) {
    var f = el.css(possible[i]);
    if (f == 'none' && i + 1 < possible.length) {
      var pf = el.css(possible[i + 1]);
      if (pf)
        continue;
    }
    return f;
  }
}

/**
 * Remove all filters from element.
 *
 * @api public
 */
Kutility.prototype.clearFilters = function(el) {
  el.css('-webkit-filter', '');
  el.css('-moz-filter', '');
  el.css('-ms-filter', '');
  el.css('-o-filter', '');
  el.css('filter', '');
}

/**

/**
 * Grayscale an element by x percent.
 *
 * @api public
 */
Kutility.prototype.grayscale = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/grayscale\(.*?\)/, '').replace('none', '');

  var f = ' grayscale(' + x + '%)';
  this.setFilter(el, cf  + f);
}

/**
 * Sepia an element by x percent.
 *
 * @api public
 */
Kutility.prototype.sepia = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/sepia\(.*?\)/, '').replace('none', '');

  var f = ' sepia(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Saturate an element by x percent.
 *
 * @api public
 */
Kutility.prototype.saturate = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/saturate\(.*?\)/, '').replace('none', '');

  var f = ' saturate(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Invert an element by x percent.
 *
 * @api public
 */
Kutility.prototype.invert = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/invert\(.*?\)/, '').replace('none', '');

  var f = ' invert(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Hue-rotate an element by x degrees.
 *
 * @api public
 */
Kutility.prototype.hutate = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/hue-rotate\(.*?\)/, '').replace('none', '');

  var f = ' hue-rotate(' + x + 'deg)';
  this.setFilter(el, cf + f);
}

/**
 * Set opacity of an element to x percent.
 *
 * @api public
 */
Kutility.prototype.opace = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/opacity\(.*?\)/, '').replace('none', '');

  var f = ' opacity(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Set brightness of an element to x percent.
 *
 * @api public
 */
Kutility.prototype.brightness = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/brightness\(.*?\)/, '').replace('none', '');

  var f = ' brightness(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Set contrast of an element to x percent.
 *
 * @api public
 */
Kutility.prototype.contrast = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/contrast\(.*?\)/, '').replace('none', '');

  var f = ' contrast(' + x + '%)';
  this.setFilter(el, cf + f);
}

/**
 * Blur an element by x pixels.
 *
 * @api public
 */
Kutility.prototype.blur = function(el, x) {
  var cf = this.getFilter(el);
  cf = cf.replace(/blur\(.*?\)/, '').replace('none', '');

  var f = ' blur(' + x + 'px)';
  this.setFilter(el, cf + f);
}

},{}],12:[function(require,module,exports){
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

},{"./camera":4,"./character":5,"./io":9,"./lib/kutility":11,"./skybox":14}],13:[function(require,module,exports){

var prefix = '/js/models/';

function pre(text) {
  return prefix + text;
}

/* LEGS */

module.exports.ANIMAL_LEGS = pre('animal_legs.js');

module.exports.BABY_LEG = pre('baby_leg.js');

module.exports.FOOTBALL_LEG = pre('football_leg.js');

module.exports.LOWPOLY_LEG = pre('low_poly_leg.js');

/* HEADS */

module.exports.ANIME_HEAD = pre('anime_heads.js');

module.exports.HEAD = pre('head.js');

module.exports.BABY_HEAD = pre('baby_head.js');

module.exports.FOOTBALL_HEAD = pre('football_head.js');

module.exports.LOWPOLY_HEAD = pre('low_poly_head.js');

/* ARMS */

module.exports.ARM = pre('arm.js');

module.exports.ARMS = pre('arms.js');

module.exports.BABY_ARM = pre('baby_arm.js');

module.exports.FOOTBALL_ARM = pre('football_arm.js');

module.exports.LOWPOLY_ARM = pre('low_poly_arm.js');

/* BODIES */

module.exports.CHILD = pre('child.js');

module.exports.FEMALE = pre('female.js');

module.exports.MALE = pre('male.js');

module.exports.TORSO = pre('torso.js');

module.exports.FOOTBALL_PLAYER = pre('football_player.js');

module.exports.BABY_TORSO = pre('baby_torso.js');

module.exports.FOOTBALL_TORSO = pre('football_torso.js');

module.exports.LOWPOLY_TORSO = pre('low_poly_torso.js');

/* HANDS */

module.exports.HAND = pre('hand.js');

module.exports.FOOTBALL_HAND = pre('football_hand.js');

/* FEET */

module.exports.FOOT = pre('foot.js');

module.exports.FOOTBALL_FOOT = pre('football_foot.js');

/* OBJECTS */

module.exports.BOXING_RING = pre('boxing_ring.js');

module.exports.FITNESS_TOWER = pre('fitness_tower.js');

module.exports.IPHONE = pre('iPhone.js');

module.exports.LAPTOP = pre('laptop.js');

/* FUNCTIONS */

module.exports.loadModel = function(modelName, callback) {
  var loader = new THREE.JSONLoader;

  loader.load(modelName, function (geometry, materials) {
    callback(geometry, materials);
  });
}

},{}],14:[function(require,module,exports){


module.exports = Skybox;

function Skybox() {
  var size = 15000;
  var sections = 22;
  this.geometry = new THREE.BoxGeometry(size, size, size, sections, sections, sections);

  this.material = new THREE.MeshBasicMaterial({
    color: 0xababab,
    wireframe: true,
    wireframeLinewidth: 0.2,
    opacity: 0.2,
    transparent: true
  });

  this.mesh = new THREE.Mesh(this.geometry, this.material);
}

Skybox.prototype.addTo = function(scene) {
  scene.add(this.mesh);
}

},{}]},{},[12])