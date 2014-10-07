
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

var browserSocket;
var forwarderSocket;
io.on('connection', function(socket) {
  console.log('got a connection');

  if (!forwarderSocket) {
    console.log('setting forwarder');
    forwarderSocket = socket;

    forwarderSocket.on('leftHand', function(argString) {
      module.exports.leftHand(argString, 2);
    });

    forwarderSocket.on('rightHand', function(argString) {
      module.exports.rightHand(argString, 2);
    });
  } else {
    console.log('setting browser');
    browserSocket = socket;
  }
});

module.exports.leftHand = function(argString, kinectNum) {
  if (!kinectNum) kinectNum = 1;

  console.log('got lefthand');

  var pos = parseHandPositionString(argString); 
  if (browserSocket) {
    console.log('emitting lefthand');
    browserSocket.emit('leftHand-' + kinectNum, pos);
  }
}

module.exports.rightHand = function(argString, kinectNum) {
  if (!kinectNum) kinectNum = 1;

  var pos = parseHandPositionString(argString); 
  if (browserSocket) {
    browserSocket.emit('rightHand-' + kinectNum, pos);
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
