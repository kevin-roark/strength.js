var socket = io('http://localhost:8888');

module.exports.begin = function(wrestler1, wrestler2) {
  socket.on('leftHand-1', function(position) {
    console.log('1st left hand position:');
    console.log(position);
  });

  socket.on('rightHand-1', function(position) {
    console.log('1st right hand position:');
    console.log(position);
  });

  socket.on('leftHand-2', function(position) {
    console.log('2nd left hand position:');
    console.log(position);
  });

  socket.on('rightHand-2', function(position) {
    console.log('2nd right hand position:');
    console.log(position);
  });
}
