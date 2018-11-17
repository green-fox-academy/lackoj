"use strict";
export { };

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(array: number[]): string {
  let result = "";
  if (array.includes(7)) {
    result = "Hoorray";
  } else {
    result = "Noooooo";
  }
  return result;
}

console.log(containsSeven(numbers));

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
function containsSeven2(array: number[]): string {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      result = "Hoorray";
    }
  }
  if (result === "") {
    result = "Noooooo";
  }
  return result;
}

console.log(containsSeven2(numbers));

