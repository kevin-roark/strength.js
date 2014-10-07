
var PORT_FROM_KINECT = 12345; // also 12347
var HOST = '127.0.0.1';

var DYLAN_HOST = '169.254.185.111';
var DYLAN_PORT = '8888';

var osc = require('osc');
var io = require('socket.io-client');
var dgram = require('dgram');


var udpPort = new osc.UDPPort({
    localAddress: HOST,
    localPort: PORT_FROM_KINECT
});

var socket = io('http://' + DYLAN_HOST + ':8888');

var socketConnected = false;

console.log('creating socket now');

socket.on('connect', function() {
    console.log('connected dog');
    socketConnected = true;
});

// Listen for incoming OSC bundles.
udpPort.on("bundle", function (oscBundle) {
    if (!socketConnected) {
      console.log('not ready');
      //return;
    }

   for (var i = 0; i < oscBundle.packets.length; i++) {
     var packet = oscBundle.packets[i];

     if (packet.address == '/righthand_pos_screen') {
       socket.emit('rightHand', packet.args);
     } else if (packet.address == '/lefthand_pos_screen') {
       socket.emit('leftHand', packet.args);
     }
   }
});

// Open the socket.
udpPort.open();

