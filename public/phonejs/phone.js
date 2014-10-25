
var socket = io('http://localhost:8888');

var playerNum = 0;

socket.on('connectedRolls', function(connectedRolls) {
  if (connectedRolls.phone1) {
    socket.emit('rollcall', 'phone2');
    playerNum = 2;
  } else {
    socket.emit('rollcall', 'phone1');
    playerNum = 1;
  }
});

socket.emit('showConnectedRolls');

$('.reset-button').click(function() {
  socket.emit('resetPlayer', playerNum);
});
