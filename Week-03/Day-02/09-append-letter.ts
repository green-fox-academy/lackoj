"use strict";
export { };

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ["bo", "anacond", "koal", "pand", "zebr"];

function appendA(arr: string[]): string[] {
  arr.forEach(function (element, i, arr) {
    arr[i] = element + "a";
  });
  return arr;
}

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
