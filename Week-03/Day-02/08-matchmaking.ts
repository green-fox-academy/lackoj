"use strict";
export { };

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ["Eve", "Ashley", "Claire", "Kat", "Jane"];
let boys: string[] = ["Joe", "Fred", "Tom", "Todd", "Neef", "Jeff"];

function makingMatches(arr1: string[], arr2: string[]): string[] {
  for (let i = 0; i < arr2.length; i++) {
    arr1.splice(1 + 2 * i, 0, arr2[i]);
  }
  return arr1;
}

console.log(makingMatches(girls, boys));
