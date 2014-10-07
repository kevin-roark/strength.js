
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

var synapseClient = dgram.createSocket('udp4');
setInterval(function() {
  var message1 = new Buffer('/righthand_trackjointpos 1');
  var message2 = new Buffer('/lefthand_trackjointpos 1');


    // synapseClient.send(message1, 0, message1.length, 12346, 'localhost', function(err, bytes) {
    //     if (err) throw err;
    // });

    // synapseClient.send(message2, 0, message2.length, 12346, 'localhost', function(err, bytes) {
    //     if (err) throw err;
    // });
}, 2000);

// Listen for incoming OSC bundles.
udpPort.on("bundle", function (oscBundle) {
    if (!socketConnected) {
      console.log('not ready');
      return;
    }

   for (var i = 0; i < oscBundle.packets.length; i++) {
     var packet = oscBundle.packets[i];

     console.log(packet.address);

     if (packet.address == '/righthand') {
       socket.emit('rightHand', packet.args);
     } else if (packet.address == '/lefthand') {
       socket.emit('leftHand', packet.args);
     }
   }
});

// Open the socket.
udpPort.open();

