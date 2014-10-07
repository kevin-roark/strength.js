
var PORT_FROM_KINECT = 12345; // also 12347
var HOST = '127.0.0.1';

var osc = require('osc');

var kinect = require('./kinect');

var udpPort = new osc.UDPPort({
    localAddress: HOST,
    localPort: 12345
});

// Listen for incoming OSC bundles.
udpPort.on("bundle", function (oscBundle) {
   for (var i = 0; i < oscBundle.packets.length; i++) {
     var packet = oscBundle.packets[i];

     if (packet.address == '/righthand_pos_screen') {
       kinect.rightHand(packet.args);
     } else if (packet.address == '/lefthand_pos_screen') {
       kinect.leftHand(packet.args);
     }
   }
});

// Open the socket.
udpPort.open();

