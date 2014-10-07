var socket = io('http://localhost:8888');

module.exports.begin = function() {
  socket.on('leftHand-1', function(position) {
    console.log('1st left hand position: ' + position);
  });

  socket.on('rightHand-1', function(position) {
    console.log('1st right hand position: ' + position);
  });

  socket.on('leftHand-2', function(position) {
    console.log('2nd left hand position: ' + position);
  });

  socket.on('rightHand-2', function(position) {
    console.log('2nd right hand position: ' + position);
  });
}
