"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function triangleHeight(longSide) {
  return (longSide * Math.sqrt(3)) / 2;
}

function drawTriangles(size, lineDistance) {
  let distance = size;

  ctx.translate((canvas.width - size) / 2, 0);

  for (let col = 0; col < size; col += lineDistance) {
    for (let row = 0; row < distance; row += lineDistance) {
      let cSide = triangleHeight(lineDistance);
      let coordY = size - triangleHeight(col);

      ctx.fillStyle =
        "#" + (Math.random().toString(16) + "000000").substring(2, 8);

      ctx.beginPath();
      ctx.moveTo(row + col / 2, coordY);
      ctx.lineTo(lineDistance / 2 + row + col / 2, coordY - cSide);
      ctx.lineTo(lineDistance + row + col / 2, coordY);
      ctx.closePath();
      ctx.fill();
    }
    distance -= lineDistance;
  }
}

drawTriangles(400, 21);
