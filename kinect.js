
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var osc = require('osc');

var PORT_FOR_MAX = 12348;
var PORT_MAX_LISTENING = 12349;
var HOST = '127.0.0.1';

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

var maxPort = new osc.UDPPort({
    localAddress: HOST,
    localPort: PORT_FOR_MAX
});

var browserSocket;
var forwarderSocket;
io.on('connection', function(socket) {
  console.log('got a connection');

  if (!forwarderSocket) {
    console.log('setting forwarder');
    forwarderSocket = socket;

    forwarderSocket.on('leftHand', function(oscPacket) {
      module.exports.leftHand(oscPacket.args, 2); // send left hand to browser
      sendPacketToMax(oscPacket);
    });

    forwarderSocket.on('rightHand', function(oscPacket) {
      module.exports.rightHand(oscPacket.args, 2); // send right hand to browser
      sendPacketToMax(oscPacket);
    });

    forwarderSocket.on('head', function(oscPacket) {
      module.exports.head(oscPacket.args, 2); // send head to browser
      sendPacketToMax(oscPacket);
    });
  } else {
    console.log('setting browser');
    browserSocket = socket;
  }
});

module.exports.leftHand = function(argString, kinectNum) {
  emit('leftHand', argString, kinectNum);
}

module.exports.rightHand = function(argString, kinectNum) {
  emit('rightHand', argString, kinectNum);
};

module.exports.head = function(argString, kinectNum) {
  emit('head', argString, kinectNum);
};

function emit(name, argString, kinectNum) {
  if (!kinectNum) kinectNum = 1;

  var position = parsePositionString(argString);

  if (browserSocket) {
    browserSocket.emit(name, {position: position, wrestler: kinectNum});
  }
}

// example: 340.5114440917969,448.6510925292969,776.2993774414062
function parsePositionString(positionString) {
  var numbers = positionString;

  var x = parseFloat(numbers[0]);
  var y = parseFloat(numbers[1]);
  var z = parseFloat(numbers[2]);

  return {x: x, y: y, z: z};
}

function sendPacketToMax(oscPacket) {
  maxPort.send({
    address: oscPacket.address,
    args: oscPacket.args
  }, HOST, PORT_MAX_LISTENING);
}
