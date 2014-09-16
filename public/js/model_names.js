
var prefix = '/js/models/';

function pre(text) {
  return prefix + text;
}

module.exports.ANIMAL_LEGS = pre('animal_legs.js');

module.exports.ANIME_HEAD = pre('anime_heads.js');

module.exports.ARM = pre('arm.js');

module.exports.ARMS = pre('arms.js');

module.exports.BOXING_RING = pre('boxing_ring.js');

module.exports.CHILD = pre('child.js');

module.exports.FEMALE = pre('female.js');

module.exports.FITNESS_TOWER = pre('fitness_tower.js');

module.exports.FOOT = pre('foot.js');

module.exports.FOOTBALL_PLAYER = pre('football_player.js');

module.exports.HAND = pre('hand.js');

module.exports.HEAD = pre('head.js');

module.exports.IPHONE = pre('iPhone.js');

module.exports.LAPTOP = pre('laptop.js');

module.exports.MALE = pre('male.js');

module.exports.TORSO = pre('torso.js');

module.exports.loadModel = function(modelName, callback) {
  var loader = new THREE.JSONLoader;

  loader.load(modelName, function (geometry, materials) {
    callback(geometry, materials);
  });
}
