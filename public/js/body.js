
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
  this.scale *= 0.25;

  this.modelChoices = [modelNames.FOOTBALL_PLAYER, modelNames.MALE, modelNames.FEMALE, modelNames.CHILD];
}

Body.prototype.__proto__ = BodyPart.prototype;

Body.prototype.additionalInit = function() {
  var self = this;

  if (self.modelName == modelNames.FOOTBALL_PLAYER) {
    self.scale *= 5;
    self.scaleBody(self.scale);
  } else if (self.modelName == modelNames.MALE) {
    self.scale *= 2.5;
    self.scaleBody(self.scale);
  }
};
