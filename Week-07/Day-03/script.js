"use strict";

const pictures = [
  { 'source': 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { 'source': 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { 'source': 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { 'source': 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { 'source': 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { 'source': 'https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { 'source': 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
  { 'source': 'https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
];

const mainContainer = document.querySelector("#mainContainer");
const subContainer = document.querySelector("#subContainer");
const gallery = document.querySelector("#gallery");
const imageContainer = document.querySelector("#imageContainer");

const button = document.querySelectorAll("button");
const buttonLeft = document.querySelector("#leftButton");
const buttonRight = document.querySelector("#rightButton");

// let tempArray = pictures.filter((e, index) => index !== indexOfPic);
function setSamallImages() {
  //set small images
  for (let i = 0; i < pictures.length; i++) {
    const newSmallImage = document.createElement("img");
    newSmallImage.setAttribute("src", pictures[i].source);
    newSmallImage.className = "smallImage";
    imageContainer.appendChild(newSmallImage);
  }
}

function setMainImage(indexOfPic) {
  const newMainImage = document.createElement("img");
  newMainImage.setAttribute("src", pictures[indexOfPic].source);
  newMainImage.id = "mainImage";
  gallery.appendChild(newMainImage);
}

setSamallImages();
setMainImage(0);

function replaceMainImage(indexOfPic) {
  let toReplace = document.querySelector("#mainImage")
  const newMainImage = document.createElement("img");
  newMainImage.setAttribute("src", pictures[indexOfPic].source);
  newMainImage.id = "mainImage";
  gallery.replaceChild(newMainImage, toReplace);
}

let actualImage = document.querySelector("#mainImage");

let count = function () {
  for (let i = 0; i < pictures.length; i++) {
    if (pictures[i].source === actualImage.getAttribute("src")) {
      return i;
    }
  }
}

button.onclick = () => {
  replaceMainImage(count + 1);
  // count++;
}

// buttonRight.onclick = () => {
//   replaceMainImage(count);
//   count--;
// }

