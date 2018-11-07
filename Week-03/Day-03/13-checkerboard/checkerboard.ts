"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let size = 10;

for (let i = 0; i < canvas.width; i++) {
  for (let j = 0; j < canvas.height; j++) {
    if ((i + j) % 2 === 0) {
      ctx.fillRect(size * i, size * j, size, size);
    }
  }
}

// let size = 50;

// for (let repeat = 0; repeat < canvas.height / size; repeat = repeat + 2) {
//   let x = 0;
//   let y = repeat * size;
//   for (let line = 0; line < canvas.width / size; line++) {
//     ctx.fillRect(x, y, size, size);
//     x = x + size * 2;
//   }
// }

// for (let repeat = 0; repeat < canvas.height / size; repeat = repeat + 2) {
//   let x = size;
//   let y = size + repeat * size;
//   for (let line = 0; line < canvas.width / size; line++) {
//     ctx.fillRect(x, y, size, size);
//     x = x + size * 2;
//   }
// }
