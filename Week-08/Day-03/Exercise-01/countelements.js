// On the click of the button,
// Count the items in the list
// And display the result in the result element.

'use strict';

const btn = document.querySelector("button");

const CountElements = () => {
  const li = document.querySelectorAll("li");
  const result = document.querySelector(".result");
  result.textContent = li.length;
};

btn.addEventListener("click", CountElements);
