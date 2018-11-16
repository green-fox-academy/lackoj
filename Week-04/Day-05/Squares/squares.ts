"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function drawSquareswithRecursion(x, y, size, i) {

  ctx.strokeRect(x + size / 3, y, size / 3, size / 3);
  ctx.strokeRect(x, y + size / 3, size / 3, size / 3);
  ctx.strokeRect(x + 2 / 3 * size, y + 1 / 3 * size, size / 3, size / 3);
  ctx.strokeRect(x + 1 / 3 * size, y + 2 / 3 * size, size / 3, size / 3);

  if (i > 1) {

    drawSquareswithRecursion(x + size / 3, y, size / 3, i - 1);
    drawSquareswithRecursion(x, y + size / 3, size / 3, i - 1);
    drawSquareswithRecursion(x + 2 / 3 * size, y + 1 / 3 * size, size / 3, i - 1);
    drawSquareswithRecursion(x + 1 / 3 * size, y + 2 / 3 * size, size / 3, i - 1);
  }
}

drawSquareswithRecursion(0, 0, 400, 6)
