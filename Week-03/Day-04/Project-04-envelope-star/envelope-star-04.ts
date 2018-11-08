"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const linePlaySize = canvas.height / 2;

function linePlay(dist) {
  ctx.beginPath();

  ctx.strokeStyle = "blue";
  // random colors: "#" + (Math.random().toString(16) + "000000").substring(2, 8);

  ctx.moveTo(linePlaySize, linePlaySize - dist);
  ctx.lineTo(2 * linePlaySize - dist, linePlaySize);

  ctx.lineTo(linePlaySize, linePlaySize + dist);
  ctx.lineTo(dist, linePlaySize);

  ctx.closePath();
  ctx.stroke();
}

for (let i = 10; i < linePlaySize; i += 10) {
  linePlay(i);
}
