
var kt = require('./lib/kutility');

var modelNames = require('./model_names');

var BodyPart = require('./bodypart');

module.exports = Locker;

function Locker(startPos, scale) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.scale = scale || 1;

  this.specificModelName = modelNames.LOCKER;
}

Locker.prototype.__proto__ = BodyPart.prototype;

Locker.prototype.additionalInit = function() {

};
