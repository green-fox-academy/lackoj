"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// Fill the canvas with a checkerboard pattern.

function checkerBoard(size: number): void {
  for (let i = 0; i < canvas.width; i++) {
    for (let j = 0; j < canvas.height; j++) {
      if ((i + j) % 2 === 0) {
        ctx.fillRect(size * i, size * j, size, size);
      }
    }
  }
}

checkerBoard(10);
export = checkerBoard;
