"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

for (let repeat = 0; repeat < canvas.height / 10; repeat = repeat + 2) {
  let x = 0;
  let y = repeat * 10;
  for (let line = 0; line < canvas.width / 10; line++) {
    ctx.fillRect(x, y, 10, 10);
    x = x + 20;
  }
}

for (let repeat = 0; repeat < canvas.height / 10; repeat = repeat + 2) {
  let x = 10;
  let y = 10 + repeat * 10;
  for (let line = 0; line < canvas.width / 10; line++) {
    ctx.fillRect(x, y, 10, 10);
    x = x + 20;
  }
}
