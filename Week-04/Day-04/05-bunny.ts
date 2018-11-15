'use strict';
export { };

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).


function countBunnyEars(n: number): number {
  if (n > 1) {
    return 2 + countBunnyEars(n - 1);
  }
  return 2;
}

console.log(countBunnyEars(20));