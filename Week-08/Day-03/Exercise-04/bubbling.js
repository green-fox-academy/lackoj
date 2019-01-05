// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//   - the nav buttons (up, down, left, right) move the background by 10px
//   - the zoom buttons increase/decrease the image by 20%
//   - attach only two event listeners to the nav element
//     - one for navigation
//     - one for zooming
"use strict";

const buttonContainer = document.querySelector(".button-container");
const imageInspector = document.querySelector(".img-inspector");
let imageSize = 100;
let imagePosX = 0;
let imagePosY = 0;

const move = (e) => {
  if (e.target.dataset.direction === "left") {
    imagePosX -= 10;
  } else if (e.target.dataset.direction === "up") {
    imagePosY -= 10;
  } else if (e.target.dataset.direction === "right") {
    imagePosX += 10;
  } else if (e.target.dataset.direction === "down") {
    imagePosY += 10;
  };
  imageInspector.style["background-position"] = `${imagePosX}px ${imagePosY}px`;
};
buttonContainer.addEventListener("click", move);

const zoom = (e) => {
  if (e.target.dataset.direction === "in") {
    imageSize = imageSize * 1.2;
  } else if (e.target.dataset.direction === "out") {
    imageSize = imageSize * 0.8;
  };
  imageInspector.style["background-size"] = `${imageSize}%`;
};
buttonContainer.addEventListener("click", zoom);