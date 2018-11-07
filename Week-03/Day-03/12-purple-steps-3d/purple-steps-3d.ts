"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

let position = 10;

for (let i = 0; i < 7; i++) {
  ctx.fillStyle = "purple";
  ctx.fillRect(position, position, 10 * i, 10 * i);
  position = position + 10 * i;
}
