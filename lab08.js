// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-08
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Easy)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  let steps = 0;
  k.putBeeper();
  while (k.frontIsClear()) {
    k.move();
    k.putBeeper();
    steps = steps + 1;
  }
  k.turnLeft();
  for (let i = 0; i < steps; i++) {
    k.move();
    k.putBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Medium)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  let moreRows = true;
  while (moreRows) {
    let total = 0;
    while (k.beepersPresent()) {
      k.pickBeeper();
      total = total + 1;
    }
    while (k.frontIsClear()) {
      k.move();
      while (k.beepersPresent()) {
        k.pickBeeper();
        total = total + 1;
      }
    }
    k.turnLeft();
    k.turnLeft();
    while (k.frontIsClear()) {
      k.move();
    }
    for (let i = 0; i < total; i++) {
      k.putBeeper();
    }
    k.turnLeft();
    k.turnLeft();
    k.turnLeft();
    if (k.frontIsClear()) {
      k.move();
      k.turnLeft();
      k.turnLeft();
      k.turnLeft();
    } else {
      moreRows = false;
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

function paintBlanks(k, color) {
  if (!k.cornerColorIs("Red")) {
    if (!k.cornerColorIs("Green")) {
      k.paintCorner(color);
    }
  }
  while (k.frontIsClear()) {
    k.move();
    if (!k.cornerColorIs("Red")) {
      if (!k.cornerColorIs("Green")) {
        k.paintCorner(color);
      }
    }
  }
}

function main(k) {
  let checkingRows = true;
  while (checkingRows) {
    let redCount = 0;
    let greenCount = 0;
    if (k.cornerColorIs("Red")) redCount++;
    if (k.cornerColorIs("Green")) greenCount++;
    while (k.frontIsClear()) {
      k.move();
      if (k.cornerColorIs("Red")) redCount++;
      if (k.cornerColorIs("Green")) greenCount++;
    }
    let color = "Yellow";
    if (redCount > greenCount) {
      color = "Red";
    } else if (greenCount > redCount) {
      color = "Green";
    }
    k.turnLeft();
    k.turnLeft();
    paintBlanks(k, color);
    turnRight(k);
    if (k.frontIsClear()) {
      k.move();
      turnRight(k);
    } else {
      checkingRows = false;
    }
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: hard (Hard)
// ──────────────────────────────────────────────────────────
function problem_4() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function main(k) {
  let row = 0;
  let bestRow = 0;
  let bestCount = -1;
  let checkingRows = true;
  while (checkingRows) {
    let count = 0;
    if (k.beepersPresent()) count++;
    while (k.frontIsClear()) {
      k.move();
      if (k.beepersPresent()) count++;
    }
    if (count > bestCount) {
      bestCount = count;
      bestRow = row;
    }
    k.turnLeft();
    k.turnLeft();
    while (k.frontIsClear()) {
      k.move();
    }
    turnRight(k);
    if (k.frontIsClear()) {
      k.move();
      turnRight(k);
      row++;
    } else {
      checkingRows = false;
    }
  }
  k.turnLeft();
  k.turnLeft();
  while (k.frontIsClear()) {
    k.move();
  }
  k.turnLeft();
  k.turnLeft();
  for (let i = 0; i < bestRow; i++) {
    k.move();
  }
  turnRight(k);
  let total = 0;
  if (k.beepersPresent()) {
    k.pickBeeper();
    total++;
  }
  while (k.frontIsClear()) {
    k.move();
    if (k.beepersPresent()) {
      k.pickBeeper();
      total++;
    }
  }
  k.turnLeft();
  k.turnLeft();
  while (k.frontIsClear()) {
    k.move();
  }
  for (let i = 0; i < total; i++) {
    k.putBeeper();
  }
}
  return main;
}
