
var osc = require('node-osc');

var PORT_MAX_LISTENING = 12349;
var HOST = '127.0.0.1';

var START_SWELL_ADDRESS = '/startSwell';
var END_SWELL_ADDRESS = '/endSwell';

var signalMap = {};
signalMap[playerize(START_SWELL_ADDRESS, 1)] = 1;
signalMap[playerize(START_SWELL_ADDRESS, 2)] = 2;
signalMap[playerize(END_SWELL_ADDRESS, 1)] = 3;
signalMap[playerize(END_SWELL_ADDRESS, 2)] = 4;

var maxClient = new osc.Client(HOST, PORT_MAX_LISTENING);

module.exports.startSwell = function(player) {
  sendAddressSignalMapToMax(player, START_SWELL_ADDRESS);
}

module.exports.endSwell = function(player) {
  sendAddressSignalMapToMax(player, END_SWELL_ADDRESS);
}

function playerize(address, player) {
  return address + '/' + player;
}

function sendAddressSignalMapToMax(player, address) {
  var trueAddress = playerize(address, player);
  sendPacketToMax(trueAddress, signalMap[trueAddress]);
}

function sendPacketToMax(address, args) {
  console.log('SENDING AWAY!!!!: ' + address);
  maxClient.send(address, args);
}
