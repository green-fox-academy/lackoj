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

//set main image
const newMainImage = document.createElement("img");
newMainImage.setAttribute("src", pictures[0].source);
newMainImage.id = "mainImage";
gallery.appendChild(newMainImage);

//set small images
for (let i = 1; i < pictures.length; i++) {
  const newSmallImage = document.createElement("img");
  newSmallImage.setAttribute("src", pictures[i].source);
  newSmallImage.className = "smallImage";
  imageContainer.appendChild(newSmallImage);
}


