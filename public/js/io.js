
// CONTROLS::::

// move torso to move character
// shake head to swell character
// left and right hands correspond to left and right arms for the character
// delta between hands corresponds to degree of melt (closer together means more melt)
// left and right knees handle the legs of the character
// delta between knees controls rotation about y
// delta between elbows controls rotation about x

// what does closest hand do?
// what do elbows themselves control?

// TODO: all these things are separate and repetitive right now because there is no
// guarantee that each wrestler will behave the same. please fix later.

var socket = io('http://localhost:8888');

var previousPositions = {};
var positionDeltas = {};
var previousPositionDeltas = {};

var eventsWithRapidHeadVelocity = {one: 0, two: 0};

var BIG_HEAD_MAG = 15;
var MAX_HEAD_SWELL = 500;
var TORSO_CLOSE_MAG = 11;

var CLOSE_KNEE_MAG = 60;
var CLOSE_ELBOW_MAG = 60;
var FAR_ELBOW_MAG = 300;
var RIDICULOUS_ELBOW_MAG = 600;

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

function moveDelta(bodypart, position, lastPos, divisor, directions) {
  if (!directions) directions = {x: true, y: true, z: true};

  var deltaX = 0;
  var deltaY = 0;
  var deltaZ = 0;

  if (directions.x) {
    deltaX = (position.x - lastPos.x) / divisor;
  }

  if (directions.y) {
    deltaY = (position.y - lastPos.y) / -divisor;
  }

  if (directions.z) {
    deltaZ = (position.z - lastPos.z) / -divisor;
  }

  bodypart.move(deltaX, deltaY, deltaZ);
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
  if (previousPositions.rightHand1) {
    [wrestler1.rightHand, wrestler1.rightArm].forEach(function(part) {
      moveDelta(part, position, previousPositions.rightHand1, 10);
    });
  }

  previousPositions.rightHand1 = position;
}

function leftHand1(position) {
  if (previousPositions.rightHand1) {
    var rh = previousPositions.rightHand1;
    positionDeltas.hand1 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    hand1DeltaAction(positionDeltas.hand1);
  }

  if (previousPositions.leftHand1) {
    [wrestler1.leftHand, wrestler1.leftArm].forEach(function(part) {
      moveDelta(part, position, previousPositions.leftHand1, 10);
    });
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

  if (previousPositions.leftKnee1) {
    [wrestler1.leftLeg, wrestler1.leftFoot].forEach(function(part) {
      moveDelta(part, position, previousPositions.leftKnee1, 8);
    });
  }

  previousPositions.leftKnee1 = position;
}

function rightKnee1(position) {
  if (previousPositions.rightKnee1) {
    [wrestler1.rightLeg, wrestler1.rightFoot].forEach(function(part) {
      moveDelta(part, position, previousPositions.rightKnee1, 8);
    });
  }

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
    moveDelta(wrestler1, position, previousPositions.torso1, 8, {x: true, y: false, z: true});

    positionDeltas.torso1 = delta(position, previousPositions.torso1);
  }

  previousPositions.torso1 = position;
}

function rightHand2(position)  {
  if (previousPositions.rightHand2) {
    [wrestler2.rightHand, wrestler2.rightArm].forEach(function(part) {
      moveDelta(part, position, previousPositions.rightHand2, 10, {x: true, y: false, z: true});
    });
  }

  previousPositions.rightHand2 = position;
}

function leftHand2(position) {
  if (previousPositions.rightHand2) {
    var rh = previousPositions.rightHand2;
    positionDeltas.hand2 = {x: position.x - rh.x, y: position.y - rh.y, z: position.z - rh.z};
    hand2DeltaAction(positionDeltas.hand2);
  }

  if (previousPositions.leftHand2) {
    [wrestler2.leftHand, wrestler2.leftArm].forEach(function(part) {
      moveDelta(part, position, previousPositions.leftHand2, 10);
    });
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

  if (previousPositions.leftKnee2) {
    [wrestler2.leftLeg, wrestler2.leftFoot].forEach(function(part) {
      moveDelta(part, position, previousPositions.leftKnee2, 8, {x: true, y: true, z: true});
    });
  }

  previousPositions.leftKnee2 = position;
}

function rightKnee2(position) {
  if (previousPositions.rightKnee2) {
    [wrestler2.rightLeg, wrestler2.rightFoot].forEach(function(part) {
      moveDelta(part, position, previousPositions.rightKnee2, 8, {x: true, y: true, z: true});
    });
  }

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

function hand1DeltaAction(positionDelta) {

}

function hand2DeltaAction(positionDelta) {

}

function knee1DeltaAction(positionDelta) {
  var mag = totalMagnitude(positionDelta);

  if (mag < CLOSE_KNEE_MAG) {
    wrestler1.rotate(0, 0.1, 0);
  }
}

function knee2DeltaAction(positionDelta) {
  var mag = totalMagnitude(positionDelta);

  if (mag < CLOSE_KNEE_MAG) {
    wrestler2.rotate(0, -0.1, 0);
  }
}

function elbow1DeltaAction(positionDelta) {
  var mag = totalMagnitude(positionDelta);

  if (mag > FAR_ELBOW_MAG && handsBetweenElbows(1)) {
    if (previousPositions.rightHand1.y < previousPositions.rightElbow1.y - 10 &&
        previousPositions.leftHand1.y > previousPositions.leftElbow1.y + 10) {
      wrestler1.rotate(0.1, 0, 0);
    }
    else if (previousPositions.rightHand1.y > previousPositions.rightElbow1.y + 10 &&
             previousPositions.leftHand1.y < previousPositions.leftElbow1.y - 10) {
      wrestler1.rotate(-0.1, 0, 0);
    }
  }

  previousPositionDeltas.elbow1 = positionDelta;
}

function elbow2DeltaAction(positionDelta) {
  var mag = totalMagnitude(positionDelta);

  if (mag > FAR_ELBOW_MAG && handsBetweenElbows(2)) {
    if (previousPositions.rightHand1.y < previousPositions.rightElbow1.y - 10 &&
        previousPositions.leftHand1.y > previousPositions.leftElbow1.y + 10) {
      wrestler2.rotate(-0.1, 0, 0);
    }
    else if (previousPositions.rightHand1.y > previousPositions.rightElbow1.y + 10 &&
             previousPositions.leftHand1.y < previousPositions.leftElbow1.y - 10) {
      wrestler2.rotate(0.1, 0, 0);
    }
  }

  previousPositionDeltas.elbow2 = positionDelta;
}

function handsBetweenElbows(playerNum) {
  var leftHand, rightHand, leftElbow, rightElbow;

  if (playerNum == 1) {
    leftHand = previousPositions.leftHand1;
    rightHand = previousPositions.rightHand1;
    leftElbow = previousPositions.leftElbow1;
    rightElbow = previousPositions.rightElbow1;
  } else {
    leftHand = previousPositions.leftHand2;
    rightHand = previousPositions.rightHand2;
    leftElbow = previousPositions.leftElbow2;
    rightElbow = previousPositions.rightElbow2;
  }

  if (!leftHand || !rightHand || !leftElbow || !rightElbow) return false;

  // left hand above and to right of left elbow
  // right hand below and to the left of the right elbow

  // left hand below and to the right of left elbow
  // right hand above and to the left of right elbow

  return (leftHand.x > leftElbow.x) && (rightHand.x < rightElbow.x);
}
