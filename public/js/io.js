var socket = io('http://localhost:8888');

var previousPositions = {};

module.exports.begin = function(wrestler1, wrestler2) {
  socket.on('leftHand-1', function(position) {
    console.log('1st left hand position:');
    console.log(position);

    if (previousPositions.leftHand1) {
      var lastPos = previousPositions.leftHand1;
      wrestler2.move(position.x - lastPos.x, 0, position.z - lastPos.z);
    }

    previousPositions.leftHand1 = position; 
  });

  socket.on('rightHand-1', function(position) {
    console.log('1st right hand position:');
    console.log(position);

    if (previousPositions.rightHand1) {
      var lastPos = previousPositions.rightHand1;
      wrestler2.move(position.x - lastPos.x, 0, position.z - lastPos.z);
    }

    previousPositions.rightHand1 = position; 
  });

  socket.on('leftHand-2', function(position) {
    console.log('2nd left hand position:');
    console.log(position);

    if (previousPositions.leftHand2) {
      var lastPos = previousPositions.leftHand2;
      wrestler2.move(position.x - lastPos.x, 0, position.z - lastPos.z);
    }

    previousPositions.leftHand2 = position; 
  });

  socket.on('rightHand-2', function(position) {
    console.log('2nd right hand position:');
    console.log(position);

    if (previousPositions.rightHand2) {
      var lastPos = previousPositions.rightHand2;
      wrestler2.move(position.x - lastPos.x, 0, position.z - lastPos.z);
    }

    previousPositions.rightHand2 = position; 
  });
}
