"use strict";
export {};

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(...nums: number[]) {
  let add: number = 0;
  for (let a: number = 0; a < arguments.length; a++) {
    add = add + nums[a];
  }
  console.log("sum of the numbers", add);
}
sum(2, 3, 4, 5);
