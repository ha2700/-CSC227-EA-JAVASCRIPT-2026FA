// Karel submission — do not remove the header or the function wrappers.
// assignment: lesson-03
//
// Each problem below is wrapped in an outer function that returns its
// main(k), so your instructor's grader can run and grade every one.

// ──────────────────────────────────────────────────────────
// Problem 1: simple (Simple)
// ──────────────────────────────────────────────────────────
function problem_1() {
function main(k) {
if(k.beepersPresent()){
    k.pickBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 2: moderate (Moderate)
// ──────────────────────────────────────────────────────────
function problem_2() {
function main(k) {
if(k.beepersPresent()){
    k.pickBeeper();
  }
 k.move();
 
 k.move();
 if(k.beepersPresent()){
    k.pickBeeper();
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 3: complex (Complex)
// ──────────────────────────────────────────────────────────
function problem_3() {
function main(k) {
  if (k.beepersPresent()) {
    k.paintCorner("Red");
  }
  k.move();
   if (k.beepersPresent()) {
    k.paintCorner("Red");
  }
  k.move();
   if (k.beepersPresent()) {
    k.paintCorner("Red");
  }
  k.move();
   if (k.beepersPresent()) {
    k.paintCorner("Red");
  }
}
  return main;
}

// ──────────────────────────────────────────────────────────
// Problem 4: complex2 (Complex II)
// ──────────────────────────────────────────────────────────
function problem_4() {
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}
function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}
function sprint(k){
  k.move();
  k.move();
  k.move();
  k.move();
  k.move();
}
function doublestep(k){
  k.move();
  k.move();
 }
 function quadstep(k){
  k.move();
  k.move();
  k.move();
  k.move();
}
   
function matchColor(k) {
   if (k.cornerColorIs("Red")) {
      k.putBeeper();
   }
   if (k.cornerColorIs("Orange")) {
      k.putBeeper();
      k.putBeeper();
   }
   if (k.cornerColorIs("Blue")) {
      k.putBeeper();
      k.putBeeper();
      k.putBeeper();
   }
}
function stepandcheck(k){
  k.move();
  matchColor(k);
}
function sweep(k){
  stepandcheck(k);
  stepandcheck(k);
  stepandcheck(k);
  stepandcheck(k);
} 

function main(k) {
    sprint(k);
    matchColor(k);
    doublestep(k);
    k.turnLeft();
    k.move();
    k.turnLeft();
    sprint(k);
    stepandcheck(k);
    k.move();
    turnRight(k);
    k.move();
    turnRight(k);
    doublestep(k);
    stepandcheck(k);
    doublestep(k);
    matchColor(k);
    doublestep(k);
    k.turnLeft();
    stepandcheck(k);
    k.turnLeft();
    sprint(k);
    doublestep(k);
    turnRight(k)
    k.move();
    turnRight(k);
    stepandcheck(k);
    sweep(k);
    doublestep(k);
    k.turnLeft();
    k.move();
    k.turnLeft();
    sprint(k);
    doublestep(k);
    turnRight(k);
    k.move();
    turnRight(k);
    stepandcheck(k);
    sprint(k);
    matchColor(k);
    k.move();
    k.turnLeft();
    k.move();
    k.turnLeft();
    matchColor(k);
    quadstep(k);
    matchColor(k);
    doublestep(k);
    k.move();    
 
  }
  return main;
}
