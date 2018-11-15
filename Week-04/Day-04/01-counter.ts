'use strict';
export { };

// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(a: number) {
  while (a > 0) {
    console.log(a--);
  }
}

countDown(10);