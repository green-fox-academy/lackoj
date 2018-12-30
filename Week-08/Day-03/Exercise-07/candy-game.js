// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

'use strict';
const body = document.querySelector('body');

const candies = document.querySelector('.candies');
const btnCreateCandy = document.querySelector('.create-candies');

const lollipops = document.querySelector('.lollipops');
const btnBuyLolli = document.querySelector('.buy-lollipops');

const btnCandyMachine = document.querySelector('.candy-machine');
const speed = document.querySelector('.speed');

let numberOfCandies = 0;
let numberOfLollipops = 0;
let candiesPerSecond = 0;
let lollipopContent = "";
let candyRainRate = 1;
let candyProductionRate = 1;

const candyGenerator = () => {
  if (numberOfLollipops >= 10) {
    numberOfCandies += candyProductionRate;
    candies.innerText = numberOfCandies;
    speed.innerText = candyProductionRate;
  }
}

const callback = (event) => {
  if (event.target === btnCreateCandy) {
    numberOfCandies += 1;
    candies.innerText = numberOfCandies;
  } else if (event.target === btnBuyLolli && numberOfCandies >= 100) {
    numberOfCandies -= 100;
    numberOfLollipops++;
    lollipopContent += "🍭";
    lollipops.innerText = lollipopContent;
    candies.innerText = numberOfCandies;
  } else if (event.target === btnCandyMachine) {
    candyProductionRate *= 10;
    speed.innerText = candyProductionRate;
  }
};

setInterval(candyGenerator, 1000);
body.addEventListener('click', callback);

