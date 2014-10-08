var socket = io('http://localhost:8888');

var previousPositions = {};
var wrestler1, wrestler2;

module.exports.begin = function(w1, w2) {
  wrestler1 = w1;
  wrestler2 = w2;

  socket.on('leftHand', function(data) {
    console.log('LEFT HAND');

    if (data.wrestler == 1) {
      leftHand1(data.position);
    } else {
      leftHand2(data.position);
    }
  });

  socket.on('rightHand', function(data) {
    if (data.wrestler == 1) {
      rightHand1(data.position);
    } else {
      rightHand2(data.position);
    }
  });

  socket.on('head', function(data) {
    if (data.wrestler == 1) {
      head1(data.position);
    } else {
      head2(data.position);
    }
  });
}

function moveDelta(wrestler, position, lastPos) {
  var deltaX = (position.x - lastPos.x) / 10;
  var deltaZ = (position.z - lastPos.z) / 10;

  wrestler.move(deltaX, 0, deltaZ);
}

function rightHand1(position) {
  console.log('1st right hand position:');
  console.log(position);

  if (previousPositions.rightHand1) {
    moveDelta(wrestler1, position, previousPositions.rightHand1);
  }

  previousPositions.rightHand1 = position;
}

function leftHand1(position) {
  console.log('1st left hand position:');
  console.log(position);

  if (previousPositions.leftHand1) {
    moveDelta(wrestler1, position, previousPositions.leftHand1);
  }

  previousPositions.leftHand1 = position;
}

function head1(position) {

}

function rightHand2(position)  {
  console.log('2nd right hand position:');
  console.log(position);

  if (previousPositions.rightHand2) {
    moveDelta(wrestler2, position, previousPositions.rightHand2);
  }

  previousPositions.rightHand2 = position;
}

function leftHand2(position) {
  console.log('2nd left hand position:');
  console.log(position);

  if (previousPositions.leftHand2) {
    moveDelta(wrestler2, position, previousPositions.leftHand2);
  }

  previousPositions.leftHand2 = position;
}

function head2(position) {

}
