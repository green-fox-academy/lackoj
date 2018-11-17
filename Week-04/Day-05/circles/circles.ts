"use strict";
export = height;
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function height(side) {
  return (side * Math.sqrt(3)) / 2;
}

function drawCircle(x: number, y: number, size: number) {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "DeepPink";
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.stroke();
}

function fractalCircles(x, y, size, repetition) {
  drawCircle(x, y, size);

  if (repetition > 1) {
    fractalCircles(x, y - size / 2, size / 2, repetition - 1);
    fractalCircles(x - height(size) / 2, y + size / 4, size / 2, repetition - 1);
    fractalCircles(x + height(size) / 2, y + size / 4, size / 2, repetition - 1);
  }
}

fractalCircles(300, 200, 200, 5)
