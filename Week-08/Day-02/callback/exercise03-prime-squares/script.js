'use strict';

// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored

const createDivs = (howMany) => {
  const section = document.querySelector('section');
  for (let i = 0; i <= howMany; i++) {
    const div = document.createElement('div');
    div.innerText = i;
    section.appendChild(div);
  };
};

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    };
  };
  return num !== 1 && num !== 0;
};

const primeValidator = (div) => {
  div.className = isPrime(Number(div.innerText)) ? "prime" : "not-prime";
};

const colorDivs = () => {
  const divs = document.querySelectorAll('section div');
  let divIndex = 0;
  const timer = setInterval(() => {
    if (divIndex < divs.length) {
      primeValidator(divs[divIndex++]);
    } else {
      clearInterval(timer);
    };
  }, 100);
};

createDivs(100);
colorDivs();
