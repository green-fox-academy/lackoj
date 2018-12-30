'use strict';

const body = document.querySelector('body');
const scrollThreshold = 300;

let randomNumber = Math.floor((Math.random() * 10) + 1);

const createDivs = (howMany) => {
  for (let i = 0; i <= howMany; i++) {
    let div = document.createElement('div');
    let randomColor = '#' + Math.random().toString(16).substr(-6);
    div.style.backgroundColor = randomColor;
    body.appendChild(div);
  };
};

createDivs(randomNumber);

window.addEventListener('scroll', () => {
  if ((window.scrollY + window.innerHeight) >= (document.body.offsetHeight - scrollThreshold)) {
    createDivs(10);
  }
});
