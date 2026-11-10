// assignment: exam-2
// student: Hasan AlFawal
// downloaded: 11/9/2026, 7:56:43 PM

// ===== Problem 1: Word Swap (not run since last edit) =====
function problem_1() {
// The letter code: a pile of n beepers stands for LETTERS[n].
// Slot 0 is a space and is never used, so "A" is 1, "B" is 2, … "Z" is 26.
const LETTERS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// The swap list: a word found on the left is replaced by its partner on the right.
const SWAP = {
  HOT: "COLD",  UP: "DOWN",   YES: "NO",   FAST: "SLOW",
  I: "YOU",     GOOD: "BAD",  ON: "OFF",   WET: "DRY",
  BIG: "TINY",  CAT: "DOG",   SUN: "MOON", NEW: "OLD",
};
function turnAround(k) {
k.turnLeft(); 
k.turnLeft(); }

function moveforward(k) { 
 while (k.frontIsClear())
 k.move(); }

function takepile(k){
  let count=0;
  while (k.beepersPresent()){
    k.pickBeeper();
    count ++;
    }
   return count;
  }
  
function main(k) {
 k.move();
 let word="";
 while (k.beepersPresent()){
   const count=takepile(k);
   word += LETTERS[count];
   k.move();
  }

 const newword=SWAP[word];
 
for (let i=0; i<2; i++){
  k.move();
  }
 for (const letter of newword){ 
   const number= LETTERS.indexOf(letter);
   
  for (let i=0; i<number; i++){
    k.putBeeper();
    }
   k.move();
 }   
}
  return main;
}
// ===== end Problem 1 =====

// ===== Problem 2: Color Swap (4/5 worlds matched at last run) =====
function problem_2() {
// The colors that appear in these worlds.
const COLORS = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Magenta", "Pink"];

function turnAround(k) {
  k.turnLeft();
  k.turnLeft();
}

function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
}

function moveforward(k) {
  while (k.frontIsClear()) {
    k.move();
  }
}

function readcolor(k){
  let result=""
  for (const color of COLORS){
  if (k.cornerColorIs(color)){
    result=color;
   }
  }
  return result;
} 

function readkey(k){
  const swap={};
  k.move();
  let oldcolor=readcolor(k);
  
  while (oldcolor !== ""){
    k.move();
    const newcolor = readcolor(k);
    swap[oldcolor]=newcolor;
    k.move();
    oldcolor=readcolor(k);
    }
   return swap;
  }
 
 
 function nextstreet(k){
    k.turnLeft();
    k.move();
    k.turnLeft();
    moveforward(k);
    turnAround(k);  
   }
function main(k) {
const swap=readkey(k);
moveforward(k);
for (let row = 0; row < 7; row++) {
  nextstreet(k);
for (let i = 0; i < 11; i++) {
const color=readcolor(k);
const newcolor=swap[color];
if (newcolor){
  k.paintCorner(newcolor);
  }
 if (k.frontIsClear()){
   k.move();
   }
 }
}
}
  return main;
}
// ===== end Problem 2 =====
