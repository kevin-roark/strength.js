
var kt = require('./lib/kutility');

var modelNames = require('./model_names');

var BodyPart = require('./bodypart');

module.exports = Foot;

function Foot(startPos, scale) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.scale = scale || 1;
  this.scale *= 0.1;

  this.modelChoices = [modelNames.FOOT];
}

Foot.prototype.__proto__ = BodyPart.prototype;

Foot.prototype.additionalInit = function() {
  this.rotate(0, -Math.PI / 2, 0);

  if (this.side == 'right') {
    this.mesh.scale.y = - this.mesh.scale.y;
  }
};
