var socket = io('http://localhost:8888');

module.exports.begin = function() {
  socket.on('leftHand', function(position) {
    console.log('left hand position: ' + position);
  });

  socket.on('rightHand', function(position) {
    console.log('right hand position: ' + position);
  });
}
