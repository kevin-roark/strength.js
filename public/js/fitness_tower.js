
var kt = require('./lib/kutility');

var modelNames = require('./model_names');

var BodyPart = require('./bodypart');

module.exports = FitnessTower;

function FitnessTower(startPos, scale) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.scale = scale || 1;

  this.specificModelName = modelNames.FITNESS_TOWER;
}

FitnessTower.prototype.__proto__ = BodyPart.prototype;

FitnessTower.prototype.additionalInit = function() {

};

FitnessTower.prototype.additionalRender = function() {
  this.move(posNegRandom(0.04), posNegRandom(0.04), posNegRandom(0.04));
};

function posNegRandom(max) {
  if (!max) max = 1;

  return (Math.random() - 0.5) * 2 * max;
}
