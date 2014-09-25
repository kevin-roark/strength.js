
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

  this.scale = scale || 5;

  this.leftArm = new Arm({x: this.startX - scale, y: this.startY - scale, z: this.startZ}, scale);

  this.rightArm = new Arm({x: this.startX + scale, y: this.startY - scale, z: this.startZ}, scale);

  this.leftHand = new Hand({x: this.startX - scale, y: this.startY + scale * 0.5, z: this.startZ}, scale, 'left');

  this.rightHand = new Hand({x: this.startX + scale, y: this.startY + scale * 0.5, z: this.startZ}, scale, 'right');

  this.legs = new Leg({x: this.startX, y: this.startY - 2 * scale, z: this.startZ}, scale);

  this.leftFoot = new Foot({x: this.startX - scale * 0.5, y: this.startY - scale * 1.5, z: this.startZ}, scale);

  this.rightFoot = new Foot({x: this.startX + scale * 0.5, y: this.startY - scale * 1.5, z: this.startZ}, scale);

  this.body = new Body({x: this.startX, y: this.startY, z: this.startZ}, scale);

  this.head = new Head({x: this.startX, y: this.startY + 5 * scale, z: this.startZ}, scale);

  this.bodyParts = [this.leftArm, this.rightArm,
                    this.leftHand, this.rightHand,
                    this.legs,
                    this.leftFoot, this.rightFoot,
                    this.body, this.head];

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
  this.bodyParts.forEach(function(part) {
    part.move(x, y, z);
  });
}

Character.prototype.rotate = function(rx, ry, rz) {
  this.bodyParts.forEach(function(part) {
    part.rotate(rx, ry, rz);
  });
}

Character.prototype.moveTo = function(x, y, z) {
  this.bodyParts.forEach(function(part) {
    part.moveTo(x, y, z);
  });

  this.move(0, 0, 0);
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
