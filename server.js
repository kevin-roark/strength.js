
var PORT_FROM_KINECT = 12345;
var HOST = '127.0.0.1';

var osc = require('osc');

var udpPort = new osc.UDPPort({
    localAddress: HOST,
    localPort: 12345
});

// Listen for incoming OSC bundles.
udpPort.on("bundle", function (oscBundle) {
   for (var i = 0; i < oscBundle.packets.length; i++) {
     var packet = oscBundle.packets[i];
     console.log('packet address: ' + packet.address);
     console.log('packet args: ' + packet.args);
   }
});

// Open the socket.
udpPort.open();

