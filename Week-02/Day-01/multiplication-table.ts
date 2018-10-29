"use strict";
export {};

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

let number: number = 15;

for (let n: number = 1; n <= 10; n++) {
  let szorzo: string = " * 15 = ";
  let eredmeny: number = number * n;
  console.log(n + szorzo + eredmeny);
}
