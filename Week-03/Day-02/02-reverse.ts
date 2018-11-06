"use strict";
export {};

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string =
  ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

function reverse(text: string) {
  return text
    .split("")
    .reverse()
    .join("");
}

console.log(reverse(reversed)); // If the meanings of true and false were switched, this sentence wouldn't be false.
