
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
  if (req.socket.listeners('error').length) return next();
  req.socket.on('error', function(err){
    console.error(err.stack);
  });
  next();
});

server.listen(8888);
console.log('LISTENING ON 8888');

var connectedSocket;
io.on('connection', function(socket) {
  connectedSocket = socket;
});

module.exports.leftHand = function(argString) {
  var pos = parseHandPositionString(argString); 
  if (connectedSocket) {
    connectedSocket.emit('leftHand', pos);
  }
}

module.exports.rightHand = function(argString) {
  var pos = parseHandPositionString(argString); 
  if (connectedSocket) {
    connectedSocket.emit('rightHand', pos);
  }
};

// example: 340.5114440917969,448.6510925292969,776.2993774414062
function parseHandPositionString(positionString) {
  var numbers = positionString;

  var x = parseFloat(numbers[0]);
  var y = parseFloat(numbers[1]);
  var z = parseFloat(numbers[2]);

  return {x: x, y: y, z: z};
}
