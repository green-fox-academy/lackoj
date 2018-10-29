"use strict";
export {};

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

let promise = "I won't cheat on the exam!";
let a: number = 0;

while (a < 100) {
  console.log(promise);
  a++;
}
