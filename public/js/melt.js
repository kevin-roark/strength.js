
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

  this.melting = true; // bone shaking
}

Character.prototype.addTo = function(scene) {
  this.scene = scene;

  console.log('ADDING CHARACTATER');

  // need to load a ton of models here

  var self = this;
  modelNames.loadModel(modelNames.FOOTBALL_PLAYER, function (geometry, materials) {
    // console.log('wooooooooo all loaded up football');
    console.log(geometry);
    self.bodyGeometry = geometry;
    self.bodyMaterials = materials;

    self.bodyMesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));

    self.bodyMesh.scale.set(self.scale, self.scale, self.scale);

    self.verts = geometry.vertices;
    self.vertexStack = {};
    self.lastVertexModified = -1;
    self.maxMelt = 50;
    self.meltCount = 0;
    self.meltUp = true;
    self.step = 1000;
    self.startI = 0;
    self.pp = [Math.random()/1000, -Math.random()/1000, -Math.random()/1000];

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
  // console.log('heyey');
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

  if (this.melting && this.bodyGeometry) {
    // short names
    var v = this.verts;

    // LOL U SHOULD MAKE ANOTEHR ARRAY OF VERTICES FROM 0-1000* THING THEN POP ENTRIES OF THAT!!


    if (this.meltUp) {
      for (var i = this.startI; i < v.length; i += this.step) {
        if (!this.vertexStack[i]) this.vertexStack[i] = [];

        var vert = v[i];
        this.vertexStack[i].push({x: vert.x, y: vert.y, z: vert.z});

        vert.x += this.pp[0];
        vert.y += this.pp[1];
        vert.z += this.pp[2];

        var chance = Math.random();
        if (chance < 0.2) {
          this.pp[0] /= 1.1;
          this.pp[1] /= 1.1;
          this.pp[2] /= 1.1;
        } else if (chance < 0.4) {
          this.pp[0] *= 1.1;
          this.pp[1] *= 1.1;
          this.pp[2] *= 1.1;
        } else if (chance < 0.6) {
          this.pp[0] *= -1;
        } else if (chance < 0.8) {
          this.pp[1] *= -1;
        } else {
          this.pp[2] *= -1;
        }

        if (i + this.step >= v.length) {
          this.lastVertexModified = i;
        }
      }
    } else {
      for (var i = this.lastVertexModified; i >= this.startI; i -= this.step) {
        if (!this.vertexStack[i]) this.vertexStack[i] = [];
        var vert = this.vertexStack[i].pop();
        v[i].x = vert.x;
        v[i].y = vert.y;
        v[i].z = vert.z;
      }
    }

    if (++this.meltCount == this.maxMelt) {
      this.meltCount = 0;
      this.meltUp = !this.meltUp;
      if (!this.meltUp) {
        if (this.pp[0] < .0001 || this.pp[1] < .0001 || this.pp[2] < .0001) {
          self.pp = [Math.random()/1, -Math.random()/1, -Math.random()/1];
          console.log('shit');
        }
      }
    }

    this.bodyGeometry.verticesNeedUpdate = true;
  }
}
