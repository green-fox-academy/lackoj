"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

ctx.fillStyle = "red";
ctx.fillRect(10, 10, 10, 10);

ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 20, 20);

ctx.fillStyle = "green";
ctx.fillRect(40, 40, 40, 40);

ctx.fillStyle = "yellow";
ctx.fillRect(80, 80, 80, 80);
