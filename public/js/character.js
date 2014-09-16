
var kt = require('./lib/kutility');

var modelNames = require('./model_names');

module.exports = Character;

function Character(startPos, scale) {
  if (!startPos) startPos = {x: 0, y: 0, z: 0};
  this.startX = startPos.x;
  this.startY = startPos.y;
  this.startZ = startPos.z;

  this.scale = scale || 5;

  this.twitching = false; // random motion and rotation

  this.melting = false; // bone shaking
}

Character.prototype.addTo = function(scene) {
  this.scene = scene;

  console.log('ADDING CHARACTATER');

  // need to load a ton of models here

  var self = this;
  modelNames.loadModel(modelNames.FOOTBALL_PLAYER, function (geometry, materials) {
    console.log('wooooooooo all loaded up football');
    console.log(geometry);
    console.log(materials);

    self.bodyGeometry = geometry;
    self.bodyMaterials = materials;

    self.bodyMesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));

    self.bodyMesh.scale.set(self.scale, self.scale, self.scale);

    self.moveTo(self.startX, self.startY, self.startZ);

    scene.add(self.bodyMesh);
  });
}

Character.prototype.move = function(x, y, z) {
  if (!this.bodyMesh) return;

  this.bodyMesh.position.x += x;
  this.bodyMesh.position.y += y;
  this.bodyMesh.position.z += z;
}

Character.prototype.rotate = function(rx, ry, rz) {
  if (!this.bodyMesh) return;

  this.bodyMesh.rotation.x += rx;
  this.bodyMesh.rotation.y += ry;
  this.bodyMesh.rotation.z += rz;
}

Character.prototype.moveTo = function(x, y, z) {
  if (!this.bodyMesh) return;

  this.bodyMesh.position.set(x, y, z);

  this.move(0, 0, 0);
}

Character.prototype.scale = function(s) {
  this.bodyMesh.scale.set(s, s, s);
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
