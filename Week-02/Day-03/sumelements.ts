"use strict";
export {};

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

// console.log(ai[0] + ai[1] + ai[2] + ai[3] + ai[4]);

let ai: number[] = [3, 4, 5, 6, 7];
function sumelements(accumulator, currentValue) {
  return accumulator + currentValue;
}

// let sumelements = (accumulator, currentValue) => accumulator + currentValue;

console.log(ai.reduce(sumelements));
