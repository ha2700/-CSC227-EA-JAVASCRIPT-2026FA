// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-05
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
  while (k.frontIsClear()) {
    k.move();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
  while (k.frontIsClear()) {
    k.pickBeeper();
    k.move();
  }
  k.pickBeeper();
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function pickall(k){
  while (k.beepersPresent()){
    k.pickBeeper();
  }
 }
function pickrow(k){
  while (k.frontIsClear()){
    pickall(k);
    k.move();
  }
 pickall(k);
}

function dropbeeper(k){
  while (k.beepersInBag()){
    k.putBeeper();
  }
}

function turnaround(k){
  k.turnLeft();
  k.turnLeft();
}

function up(k){
  while (k.facingEast()){
    k.turnLeft();                                
    while (k.facingNorth() && k.frontIsClear()){
      // This was originally only k.frontIsClear. I had an issue where it would not stop at the end. After spending hours trying to fix this across two days  as a last resort I looked online and I learned that you can add multiple parameters using && and that fixed the issue.
      k.move();
      k.turnLeft();                                
    }
  }
}

function clearrow(k){
  while(k.frontIsClear()){
  pickrow(k);
  dropbeeper(k);
  up(k);
  }
 }

function turnRight(k){
  while (k.facingWest()){
    clearrow(k);
    turnaround(k);
  }
}
 
function main(k) {
  while(k.frontIsClear()){
    clearrow(k);
    turnRight(k)
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function pickall(k){
  while (k.beepersPresent()){
    k.pickBeeper();
  }
}

function pickrow(k){
  while (k.frontIsClear()){
    pickall(k);
    k.move();
  }
  pickall(k);
}

function turnRight(k){
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function red(k){
  if (k.frontIsBlocked() && k.cornerColorIs("Red")) {
    pickall(k);
  }
}

function sweep(k){
  while (k.facingEast()){
    pickrow(k);
    k.turnLeft();
    red(k);
    if (k.frontIsClear()) {
      while (k.frontIsClear()){
        k.move();
      }
      k.turnLeft();
      sweep(k);
    }
  }
  while (k.facingWest()){
    pickrow(k);
    turnRight(k);
    red(k);
    if (k.frontIsClear()) {
      while (k.frontIsClear()){
        k.move();
      }
      turnRight(k);
      sweep(k);
    }
  }
}

function main(k) {
  k.turnLeft();
  while (k.frontIsClear()){
    k.move();
  }
  turnRight(k);
  sweep(k);
 }
  return main;
}
