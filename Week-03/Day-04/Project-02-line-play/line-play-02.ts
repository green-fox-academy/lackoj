"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

/***************************************  NOT FINAL ****************************************/
function linePlay(x) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(600, (x / 3) * 2);
  ctx.stroke();
}

for (let i = 10; i < canvas.width; i += 10) {
  linePlay(i);
}

function linePlay3(x) {
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(x, 400);
  ctx.lineTo(600, 400 - (x / 3) * 2);
  ctx.stroke();
}

for (let i = 10; i < canvas.width; i += 10) {
  linePlay3(i);
}

function linePlay2(y) {
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo((y / 2) * 3, 400);
  ctx.stroke();
}

for (let j = 10; j < canvas.width; j += 10) {
  linePlay2(j);
}

function linePlay4(y) {
  ctx.strokeStyle = "yellow";
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(600 - (y / 2) * 3, 0);
  ctx.stroke();
}

for (let j = 10; j < canvas.width + canvas.height; j += 10) {
  linePlay4(j);
}
