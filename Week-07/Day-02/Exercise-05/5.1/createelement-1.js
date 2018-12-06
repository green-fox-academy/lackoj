// Add an item that says 'The Green Fox' to the asteroid list.
let asteroidList = document.querySelector("ul.asteroids");
let newAsteroid = document.createElement("li");
newAsteroid.id = 'b327';
newAsteroid.textContent = 'The Green Fox';
asteroidList.appendChild(newAsteroid);

// Add an item that says 'The Lamplighter' to the asteroid list. 
let newAsteroidTwo = document.createElement("li");
newAsteroidTwo.id = 'b328';
newAsteroidTwo.textContent = 'The Lamplighter';
asteroidList.appendChild(newAsteroidTwo);

// Add a heading saying 'I can add elements to the DOM!' to the .container.
let div = document.querySelector(".container");
let newHeading = document.createElement("h1");
newHeading.textContent = 'I can add elements to the DOM!';
div.appendChild(newHeading);

// Add an image, any image, to the container.
let newImage = document.createElement("img");
newImage.setAttribute("src", "http://almaskertovoda.hu/wp-content/uploads/2017/06/cica-300x211.jpg");
div.appendChild(newImage);




// var asteroidList = document.querySelector('ul.asteroids');
// var newAsteroid = document.createElement('li');
// newAsteroid.textContent = 'The Green Fox';
// asteroidList.appendChild(newAsteroid);
// var businessAsteroid = document.querySelector('.b328');
// asteroidList.removeChild(businessAsteroid);