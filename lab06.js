// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-06
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function turnRight(k){
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}
  
function main(k) {
  while (k.frontIsClear()) {
    k.move();
  }
  
  if (k.beepersPresent()) {
    k.pickBeeper();
  } else {
    k.putBeeper();
  }
  
  turnRight(k);
  
  while (k.frontIsClear()) {
    k.move();
  }
  
  if (k.beepersPresent()) {
    k.pickBeeper();
  } else {
    k.putBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  for (let i = 0; i < 13; i++) {
     if (k.frontIsClear()) {
      k.move();
      k.putBeeper();
    } else {
      k.turnLeft();
    }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {

  function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function stockCorner(k) {
   if (k.beepersPresent()) {
    k.paintCorner("Blue");
  } else {
    k.paintCorner("Red");
  }
}

function stockRow(k) {
  stockCorner(k);
  while (k.frontIsClear()) {
    k.move();
    stockCorner(k);
  }
}

function climbToNextRow(k) {
  if (k.facingEast()) {
    k.turnLeft();
    k.move();
    k.turnLeft();
  } else {
    turnRight(k);
    k.move();
    turnRight(k);
  }
}

function main(k) {
  for (let row = 0; row < 3; row++) {
    stockRow(k);
    climbToNextRow(k);
  }
  stockRow(k);
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: advanced (Advanced)
// ──────────────────────────────────────────────────────────
function problem_4() {

  function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function stockCorner(k) {
  if (k.beepersPresent()) {
    
  } else if (k.cornerColorIs("Red")) {
    for (let i = 0; i < 4; i++) {
      k.putBeeper();
    }
  } else if (k.cornerColorIs("Green")) {
    for (let i = 0; i < 2; i++) {
      k.putBeeper();
    }
  } else if (k.cornerColorIs("Blue")) {
    k.putBeeper();
  }
}

function stockRow(k) {
  stockCorner(k);
  while (k.frontIsClear()) {
    k.move();
    stockCorner(k);
  }
}

function climbToNextRow(k) {
  if (k.facingEast()) {
    k.turnLeft();
    k.move();
    k.turnLeft();
  } else {
    turnRight(k);
    k.move();
    turnRight(k);
  }
}

function main(k) {
  for (let row = 0; row < 3; row++) {
    stockRow(k);
    climbToNextRow(k);
  }
  stockRow(k);
}
  return main;
}
