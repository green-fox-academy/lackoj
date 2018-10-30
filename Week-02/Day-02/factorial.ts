"use strict";
export {};

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(a) {
  let fact: number = 1;
  while (a >= 1) {
    fact = fact * a;
    a--;
  }
  console.log("Factorial: " + fact);
}

factorio(5);
