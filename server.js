
var PORT_FROM_KINECT = 12345;
var HOST = '127.0.0.1';
var KEVIN_HOST = '160.39.255.239';

var osc = require('osc');

var kinect = require('./kinect');

var udpPort = new osc.UDPPort({
    localAddress: HOST,
    localPort: PORT_FROM_KINECT
});

var udpPort2 = new osc.UDPPort({
    localAddress: KEVIN_HOST,
    localPort: PORT_FROM_KINECT
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

