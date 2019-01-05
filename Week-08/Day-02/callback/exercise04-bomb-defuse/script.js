'use strict';

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

const display = document.querySelector('.display');
const button = document.querySelector('button');
let count = 9;

const updateRemainingSec = setInterval(() => {
  if (count > 0) {
    display.innerText = count;
    count--;
  } else {
    clearInterval(updateRemainingSec);
    display.innerText = "Bomb exploded";
    button.setAttribute('disabled', true);
  };
}, 500);

button.addEventListener('click', () => {
  if (count !== 0) {
    display.innerText = "Bomb defused";
    clearInterval(updateRemainingSec);
  };
});
