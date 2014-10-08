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

BodyPart.prototype.scaleMultiply = function(s) {
  if (!this.mesh) return;

  this.mesh.scale.set(this.initialScale.x * s, this.initialScale.y * s, this.initialScale.z * s);
}

BodyPart.prototype.swell = function(s) {
  var self = this;

  this.scaleMultiply(s);

  this.materials.forEach(function(material, index) {
    var initialColor = self.initialMaterialColors[index];

    var red = initialColor.r;
    if (s > 1.05) {
      red = Math.max(Math.min(1.0, initialColor.r * s), initialColor.r);
    }

    var swellColor = {r: red, g: initialColor.g, b: initialColor.b};
    material.color = swellColor;
  });
}

BodyPart.prototype.reset = function() {
  this.moveTo(this.initialPosition.x, this.initialPosition.y, this.initialPosition.z);

  this.mesh.rotation.x = this.initialRotation.x;
  this.mesh.rotation.y = this.initialRotation.y;
  this.mesh.rotation.z = this.initialRotation.z;

  this.swell(1.0);
}

BodyPart.prototype.addTo = function(scene) {
  var self = this;

  self.modelName = self.specificModelName || kt.choice(self.modelChoices);

  modelNames.loadModel(self.modelName, function (geometry, materials) {
    self.gometry = geometry;
    self.materials = materials;

    console.log(materials);

    self.mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));

    self.scaleBody(self.scale);

    self.moveTo(self.startX, self.startY, self.startZ);

    self.additionalInit();

    self.initialPosition = {x: self.mesh.position.x, y: self.mesh.position.y, z: self.mesh.position.z};
    self.initialScale = {x: self.mesh.scale.x, y: self.mesh.scale.y, z: self.mesh.scale.z};
    self.initialRotation = {x: self.mesh.rotation.x, y: self.mesh.rotation.y, z: self.mesh.rotation.z};

    self.initialMaterialColors = [];
    self.materials.forEach(function(mat) {
      self.initialMaterialColors.push(mat.color);
    });

    console.log(self.initialMaterialColors);

    scene.add(self.mesh);
  });
}

BodyPart.prototype.render = function() {

}

BodyPart.prototype.additionalInit = function() {};
