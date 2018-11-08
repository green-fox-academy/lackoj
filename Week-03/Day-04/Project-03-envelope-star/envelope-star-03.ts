"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let p1 = canvas.height / canvas.width; // y vs x arány - 400/600 = 2/3
let p2 = canvas.width / canvas.height; // y vs x arány - 600/400 = 3/2
let p3 = 1 - p1; // 3/3-2/3 = 1/3
let p4 = 1 - p2; // 3/3-3/2 = 1/2
console.log("p1", p1);
console.log("p2", p2);
console.log();

function createEnvelopeStar() {
  for (let i = 0; i < canvas.height / 2; i = i + 10) {
    for (let a = -1; a <= 1; a += 2) {
      let startingPositionX = canvas.width / 2;
      let startingPositionY = canvas.width / 3 - a * i;

      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo(startingPositionX, startingPositionY);
      ctx.lineTo(i * p2, canvas.width * p3);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(startingPositionX, startingPositionY);
      ctx.lineTo(canvas.width - i * p2, canvas.width * p3);
      ctx.stroke();
    }
  }
}

createEnvelopeStar();
