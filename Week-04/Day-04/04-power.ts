'use strict';
export { };

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(num: number, power: number): number {

  if (power > 1) {
    power--;
    return num * powerN(num, power);
  }
  return num;
}

console.log(powerN(3, 4));