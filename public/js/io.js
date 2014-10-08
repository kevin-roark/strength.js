
// CONTROLS::::

// move torso to move character
// shake head to swell character (please make this turn him red)
// left and right hands correspond to left and right arms for the character
// delta between hands corresponds to degree of melt (closer together means more melt)

var socket = io('http://localhost:8888');

var previousPositions = {};
var positionDeltas = {};

var eventsWithRapidHeadVelocity = {one: 0, two: 0};

var BIG_HEAD_MAG = 15;
var MAX_HEAD_SWELL = 500;
var TORSO_CLOSE_MAG = 11;

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
      closestHand1(data.position);
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

function scaleWrestler(wrestler, rapidHeadTicks) {
  var s = 1.0 + 20.0 * (rapidHeadTicks / MAX_HEAD_SWELL);
  wrestler.swell(s);
}

function delta(current, previous) {
  return {x: current.x - previous.x, y: current.y - previous.y, z: current.z - previous.z};
}

function totalMagnitude(pos) {
  return Math.abs(pos.x) + Math.abs(pos.y) + Math.abs(pos.z);
}

function rightHand1(position) {

  previousPositions.rightHand1 = position;
}

function leftHand1(position) {
  if (previousPositions.rightHand1) {
    var rh = previousPositions.rightHand1;
    positionDeltas.hand1 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    hand1DeltaAction(positionDeltas.hand1);
  }

  previousPositions.leftHand1 = position;
}

function closestHand1(position) {

}

function head1(position) {
  if (previousPositions.head1) {
    if (positionDeltas.torso1 && totalMagnitude(positionDeltas.torso1) < TORSO_CLOSE_MAG) {
      var positionChange = delta(position, previousPositions.head1);
      var mag = totalMagnitude(positionChange);

      if (mag > BIG_HEAD_MAG) {
        eventsWithRapidHeadVelocity.one = Math.min(eventsWithRapidHeadVelocity.one + 1, MAX_HEAD_SWELL);
      } else {
        eventsWithRapidHeadVelocity.one = Math.max(eventsWithRapidHeadVelocity.one - 1, 0);
      }

      scaleWrestler(wrestler1, eventsWithRapidHeadVelocity.one);
    }
  }

  previousPositions.head1 = position;
}

function leftKnee1(position) {
  if (previousPositions.rightKnee1) {
    var rh = previousPositions.rightKnee1;
    positionDeltas.knee1 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    knee1DeltaAction(positionDeltas.knee1);
  }

  previousPositions.leftKnee1 = position;
}

function rightKnee1(position) {

  previousPositions.rightKnee1 = position;
}

function leftElbow1(position) {
  if (previousPositions.rightElbow1) {
    var rh = previousPositions.rightElbow1;
    positionDeltas.elbow1 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    elbow1DeltaAction(positionDeltas.elbow1);
  }

  previousPositions.leftElbow1 = position;
}

function rightElbow1(position) {
  previousPositions.rightElbow1 = position;
}

function torso1(position) {
  if (previousPositions.torso1) {
    moveDelta(wrestler1, position, previousPositions.torso1, 8);

    positionDeltas.torso1 = delta(position, previousPositions.torso1);
  }

  previousPositions.torso1 = position;
}

function rightHand2(position)  {

  previousPositions.rightHand2 = position;
}

function leftHand2(position) {
  if (previousPositions.rightHand2) {
    var rh = previousPositions.rightHand2;
    positionDeltas.hand2 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    hand2DeltaAction(positionDeltas.hand2);
  }

  previousPositions.leftHand2 = position;
}

function closestHand2(position) {

}

function head2(position) {
  if (previousPositions.head2) {
    if (positionDeltas.torso2 && totalMagnitude(positionDeltas.torso2) < TORSO_CLOSE_MAG) {
      var positionChange = delta(position, previousPositions.head2);
      var mag = totalMagnitude(positionChange);

      if (mag > BIG_HEAD_MAG) {
        eventsWithRapidHeadVelocity.two = Math.min(eventsWithRapidHeadVelocity.two + 1, MAX_HEAD_SWELL);
      } else {
        eventsWithRapidHeadVelocity.two = Math.max(eventsWithRapidHeadVelocity.two - 1, 0);
      }

      scaleWrestler(wrestler2, eventsWithRapidHeadVelocity.two);
    }
  }

  previousPositions.head2 = position;
}

function leftKnee2(position) {
  if (previousPositions.rightKnee2) {
    var rh = previousPositions.rightKnee2;
    positionDeltas.knee2 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    knee2DeltaAction(positionDeltas.knee2);
  }

  previousPositions.leftKnee2 = position;
}

function rightKnee2(position) {

  previousPositions.rightKnee2 = position;
}

function leftElbow2(position) {
  if (previousPositions.rightElbow2) {
    var rh = previousPositions.rightElbow2;
    positionDeltas.elbow2 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    elbow2DeltaAction(positionDeltas.elbow2);
  }

  previousPositions.leftElbow2 = position;
}

function rightElbow2(position) {
  previousPositions.rightElbow2 = position;
}

function torso2(position) {
  if (previousPositions.torso2) {
    moveDelta(wrestler2, position, previousPositions.torso2, 8);

    positionDeltas.torso2 = delta(position, previousPositions.torso2);
  }

  previousPositions.torso2 = position;
}

function hand1DeltaAction(posistionDelta) {

}

function hand2DeltaAction(posistionDelta) {

}

function knee1DeltaAction(posistionDelta) {

}

function knee2DeltaAction(posistionDelta) {

}

function elbow1DeltaAction(posistionDelta) {

}

function elbow2DeltaAction(posistionDelta) {

}
