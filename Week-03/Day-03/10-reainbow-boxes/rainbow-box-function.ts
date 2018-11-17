"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function drawSquare(size: number, color: string): void {
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
  drawSquare(300 - i * 50, colors[i]);
}

export = drawSquare;
