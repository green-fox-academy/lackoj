"use strict";
export {};

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ["Eve", "Ashley", "Claire", "Kat", "Jane"];
let boys: string[] = ["Joe", "Fred", "Tom", "Todd", "Neef", "Jeff"];

// girls.splice(1, 0, boys[0]);
// girls.splice(3, 0, boys[1]);
// girls.splice(5, 0, boys[2]);
// girls.splice(7, 0, boys[3]);
// girls.splice(9, 0, boys[4]);
// girls.splice(10, 0, boys[5]);

// console.log(girls);

function makingMatches(arr1: string[], arr2: string[]) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.splice(1 + 2 * i, 0, arr2[i]);
  }
  return arr1;
}

console.log(makingMatches(girls, boys));
