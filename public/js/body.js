
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
