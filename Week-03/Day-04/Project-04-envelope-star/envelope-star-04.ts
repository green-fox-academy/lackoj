"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawEnvelopeStar(size, lineDistance, color) {
  for (let repLines = lineDistance; repLines < size; repLines += lineDistance) {
    ctx.beginPath();
    ctx.strokeStyle = color;

    ctx.moveTo(size, size - repLines);
    ctx.lineTo(2 * size - repLines, size);

    ctx.lineTo(size, size + repLines);
    ctx.lineTo(repLines, size);

    ctx.closePath();
    ctx.stroke();
  }
}
drawEnvelopeStar(200, 5, "pink");

export = drawEnvelopeStar;
