"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function lines(x, y) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
}

for (let i = 0; i <= canvas.width; i = i + 20) {
  for (let j = 0; j <= canvas.height; j = j + 20) {
    if (i === 0 || j === 0 || j === canvas.height || i === canvas.width) {
      lines(i, j);
    }
  }
}

// for (let i = 0; i <= canvas.width; i = i + 20) {
//   ctx.strokeStyle = "green";
//   ctx.beginPath();
//   ctx.moveTo(i, 400); //
//   ctx.lineTo(300, 200);
//   ctx.stroke();
// }

// for (let i = 0; i <= canvas.height; i = i + 20) {
//   ctx.strokeStyle = "green";
//   ctx.beginPath();
//   ctx.moveTo(600, i); //
//   ctx.lineTo(300, 200);
//   ctx.stroke();
// }

// for (let i = 0; i <= canvas.height; i = i + 20) {
//   ctx.strokeStyle = "green";
//   ctx.beginPath();
//   ctx.moveTo(0, i); //
//   ctx.lineTo(300, 200);
//   ctx.stroke();
// }
