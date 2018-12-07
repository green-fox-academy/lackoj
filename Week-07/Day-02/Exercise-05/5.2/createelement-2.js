// Remove the king from the list.
let asteroidsList = document.querySelector(".asteroids");
let removed = document.querySelector("ul > li");
asteroidsList.removeChild(removed);

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

// Fill the list based on the following list of objects.
// Only add the asteroids to the list.
// Each list item should have its category as a class and its content as text content.
planetData.forEach(e => {
  if (e.asteroid) {
    let newElement = document.createElement("li");
    newElement.className = e.category;
    newElement.textContent = e.content;
    asteroidsList.appendChild(newElement);
  }
});
