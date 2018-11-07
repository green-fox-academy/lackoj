"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function drawSquare2(size, color) {
  // additional parameter: color
  ctx.fillStyle = color;
  ctx.fillRect(
    canvas.width / 2 - size / 2,
    canvas.height / 2 - size / 2,
    size,
    size
  );
}

let colors = ["purple", "blue", "green", "yellow", "orange", "red"];

for (let i = 0; i < 6; i++) {
  drawSquare2(300 - i * 50, colors[i]);
}
