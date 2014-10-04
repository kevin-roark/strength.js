
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
    // self.maxMelt = 5000;
    self.maxMelt = 50;
    self.meltCount = 0;
    self.meltUp = 1;
    self.prevs = [];
    self.startI = 1 //kt.randInt(99, 1);
    // self.step = 500;
    self.step = 1;
    self.vstep = .001;

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
    var p = this.prevs;
    // LOL U SHOULD MAKE ANOTEHR ARRAY OF VERTICES FROM 0-1000* THING THEN POP ENTRIES OF THAT!!
    var pp = [0.001, 0.001, 0.001]

    // go
    for (var i=0; i<v.length; i += 1000) {
      if (this.meltUp) {
        // p.push([(Math.random() - 0.5) * 0.005, (Math.random() - 0.5) * 0.005, (Math.random() - 0.5) * 0.005]);
        // var pp = [3]
        // for (var i=0; i<3; i++) {
        //   pp[i] = .001;
        // }
        p.push(pp);

        v[i].x += pp[0];
        v[i].y += pp[1];
        v[i].z += pp[2];
      }
      else {
        // p.push([(Math.random() - 0.5) * 0.005, (Math.random() - 0.5) * 0.005, (Math.random() - 0.5) * 0.005]);
        last = p.pop();
        v[i].x = last[0];
        v[i].y = last[1];
        v[i].z = last[2];
      }
    }
    this.meltCount++;
    this.prevs = p;
    this.verts = v;       // bring her back



    if (this.meltCount == this.maxMelt) {
      // console.log("meltUp", this.meltUp);
      console.log("V >>", v[0]);
      console.log("P >>", p[0]);
      this.meltCount = 0;
      if (this.meltUp) {
        this.meltUp = 0;
      }
      else
        this.meltUp = 1;
    }




    // // increment or decrement
    // if (this.meltUp)
    //   this.meltCount++;
    // else
    //   this.meltCount --;

    // if (this.meltCount == this.maxMelt && this.meltUp) {
    //   this.meltUp = 0;
    //   this.meltCount--;
    //   this.prevs *= -1;
    //   // console.log(this.prevs.length,': ',this.prevs[this.prevs.length-1]);
    // }
    // // if reached top of bottom cycle, reverse
    // else if (this.meltCount == 0 && !this.meltUp) {
    //   this.meltUp = 1;
    //   this.meltCount++;
    //   this.prevs *= -1;
    //   // console.log(this.prevs.length,': ',this.prevs[this.prevs.length-1]);
    // }

    // var indices = [];
    // for (var i=0; i<this.verts.length/this.step; i++) {
    //   indices[i] = 1 + i*this.step;
    // }  





    // for (var i=0; i<indices.length; i++) {   // every ith vertex
    //   // if melting UP
    //   if (this.meltUp) {
    //     this.prevs.push([this.verts[indices[i]].x, this.verts[indices[i]].y, this.verts[indices[i]].z]); // save pos
    //     this.verts[indices[i]].x += (Math.random() - 0.5) * 0.005;
    //     this.verts[indices[i]].y += (Math.random() - 0.5) * 0.005;
    //     this.verts[indices[i]].z += (Math.random() - 0.5) * 0.005;
    //     if (this.meltCount == 1 || this.meltCount == 1000 || this.meltCount == 2000 || this.meltCount == 3000 || this.meltCount == 4000 || this.meltCount == this.maxMelt - 1) {
    //       console.log('UP: ',this.verts[this.meltCount-1]);
    //     }
    //     this.meltCount++; 
    //   }
    //   // if melting DOWN
    //   else {
    //     // var last = this.prevs[this.meltCount-1];   // get last pos, begin rewinding
    //     var last = this.prevs.pop();
    //     this.verts[indices[indices.length-1]].x = last[0];
    //     this.verts[indices[indices.length-1]].y = last[1];
    //     this.verts[indices[indices.length-1]].z = last[2];
    //     // this.prevs.pop();    // fuck outta here
    //     if (this.meltCount == 1 || this.meltCount == 1000 || this.meltCount == 2000 || this.meltCount == 3000 || this.meltCount == 4000 || this.meltCount == this.maxMelt - 1) {
    //       console.log('DOWN: ',last);
    //     }
    //     this.meltCount--;
    //   }
    //   // if reached top of melting cycle, reverse
    //   if (this.meltCount == this.maxMelt && this.meltUp) {
    //     this.meltUp = 0;
    //     this.meltCount--;
    //     console.log(this.prevs.length,': ',this.prevs[this.prevs.length-1]);
    //   }
    //   // if reached top of bottom cycle, reverse
    //   else if (this.meltCount == 0 && !this.meltUp) {
    //     this.meltUp = 1;
    //     this.meltCount++;
    //     console.log(this.prevs.length,': ',this.prevs[this.prevs.length-1]);
    //   }
    // }

    this.bodyGeometry.verticesNeedUpdate = true;
  }
}
