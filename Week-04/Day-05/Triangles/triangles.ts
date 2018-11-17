"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");


function height(side: number): number {
  return (side * Math.sqrt(3)) / 2;
}

function drawtriangleNew(x: number, y: number, sideLength: number) {

  ctx.strokeStyle =
    "#" + (Math.random().toString(16) + "000000").substring(2, 8);

  //first left triangle
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + sideLength / 2, y + height(sideLength));
  ctx.lineTo(x + sideLength, y);
  ctx.closePath();
  ctx.stroke();

  //first right triangle
  ctx.beginPath();
  ctx.moveTo(x + sideLength, y);
  ctx.lineTo(x + sideLength + sideLength / 2, y + height(sideLength));
  ctx.lineTo(x + sideLength * 2, y);
  ctx.closePath();
  ctx.stroke();

  //top 
  ctx.beginPath();
  ctx.moveTo(x + sideLength / 2, y + height(sideLength));
  ctx.lineTo(x + sideLength, y + height(sideLength * 2));
  ctx.lineTo(x + sideLength + sideLength / 2, y + height(sideLength));
  ctx.closePath();
  ctx.stroke();

}

function drawFractalTriangles(x, y, size, i) {
  drawtriangleNew(x, y, size);

  if (size > 10) {
    drawFractalTriangles(x, y, size / 2, i - 1);
    drawFractalTriangles(x + size, y, size / 2, i - 1);
    drawFractalTriangles(x + size / 2, y + height(size), size / 2, i - 1);
  }
}

drawFractalTriangles(0, 0, 200, 3);
