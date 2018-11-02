"use strict";
export {};

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 10;
let space: string = " ";
let star: string = "*";
let times: number = 1;

for (let i = 0; i <= lineCount; i++) {
  console.log(space.repeat(lineCount), star.repeat(times));
  times = times + 2;
  lineCount = lineCount - 1;
}
