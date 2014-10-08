var socket = io('http://localhost:8888');

var previousPositions = {};
var wrestler1, wrestler2;

module.exports.begin = function(w1, w2) {
  wrestler1 = w1;
  wrestler2 = w2;

  socket.on('leftHand', function(data) {
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

  socket.on('closestHand', function(data) {
    if (data.wrestler == 1) {
      cloestHand1(data.position);
    } else {
      closestHand2(data.position);
    }
  });

  socket.on('head', function(data) {
    if (data.wrestler == 1) {
      head1(data.position);
    } else {
      head2(data.position);
    }
  });

  socket.on('leftKnee', function(data) {
    if (data.wrestler == 1) {
      leftKnee1(data.position);
    } else {
      leftKnee2(data.position);
    }
  });

  socket.on('rightKnee', function(data) {
    if (data.wrestler == 1) {
      rightKnee1(data.position);
    } else {
      rightKnee2(data.position);
    }
  });

  socket.on('leftElbow', function(data) {
    if (data.wrestler == 1) {
      leftElbow1(data.position);
    } else {
      leftElbow2(data.position);
    }
  });

  socket.on('rightElbow', function(data) {
    if (data.wrestler == 1) {
      rightElbow1(data.position);
    } else {
      rightElbow2(data.position);
    }
  });

  socket.on('torso', function(data) {
    if (data.wrestler == 1) {
      torso1(data.position);
    } else {
      torso2(data.position);
    }
  });
}

function moveDelta(wrestler, position, lastPos, divisor) {
  var deltaX = (position.x - lastPos.x) / divisor;
  var deltaZ = (position.z - lastPos.z) / -divisor;

  wrestler.move(deltaX, 0, deltaZ);
}

function rightHand1(position) {
  previousPositions.rightHand1 = position;
}

function leftHand1(position) {
  previousPositions.leftHand1 = position;
}

function closestHand1(position) {

}

function head1(position) {

  previousPositions.head1 = position;
}

function leftKnee1(position) {

  previousPositions.leftKnee1 = position;
}

function rightKnee1(position) {

  previousPositions.rightKnee1 = position;
}

function leftElbow1(position) {
  previousPositions.leftElbow1 = position;
}

function rightElbow1(position) {
  previousPositions.rightElbow1 = position;
}

function torso1(position) {
  if (previousPositions.torso1) {
    moveDelta(wrestler1, position, previousPositions.torso1, 8);
  }

  previousPositions.torso1 = position;
}

function rightHand2(position)  {

  previousPositions.rightHand2 = position;
}

function leftHand2(position) {

  previousPositions.leftHand2 = position;
}

function closestHand2(position) {

}

function head2(position) {

  previousPositions.head2 = position;
}

function leftKnee2(position) {

  previousPositions.leftKnee2 = position;
}

function rightKnee2(position) {

  previousPositions.rightKnee2 = position;
}

function leftElbow2(position) {
  previousPositions.leftElbow2 = position;
}

function rightElbow2(position) {
  previousPositions.rightElbow2 = position;
}

function torso2(position) {
  if (previousPositions.torso2) {
    moveDelta(wrestler2, position, previousPositions.torso2, 8);
  }

  previousPositions.torso2 = position;
}
