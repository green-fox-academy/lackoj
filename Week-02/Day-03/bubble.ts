"use strict";
export {};

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function bubble(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  return array;
}

console.log(bubble([34, 12, 24, 9, 5]));
// should print [5, 9, 12, 24, 34]

function advancedBubble(arr: number[], value: boolean): number[] {
  if (value === true) {
    arr.sort(function(a, b) {
      return b - a;
    });
    return arr;
  } else {
    arr.sort(function(a, b) {
      return a - b;
    });
    return arr;
  }
}

console.log(advancedBubble([34, 12, 24, 9, 5], true));
// should print [34, 24, 12, 9, 5]
