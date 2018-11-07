"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

let x = 0;

for (let x = 30; x < 600; x = x + 30) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(600, 400 - (x * 2) / 3);
  ctx.stroke();
}

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(600, 400);
ctx.stroke();

for (let y = 20; y < 400; y = y + 20) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(600 - (y / 2) * 3, 400);
  ctx.stroke();
}
