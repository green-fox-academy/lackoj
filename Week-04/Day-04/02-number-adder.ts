'use strict';
export { };

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addUntilN(n: number): number {
  let sum: number = 0;
  if (n > 0) {
    sum = n + addUntilN(n - 1);
  }
  return sum;
}

console.log(addUntilN(10));