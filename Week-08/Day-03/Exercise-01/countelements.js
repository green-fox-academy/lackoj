// On the click of the button,
// Count the items in the list
// And display the result in the result element.

let btn = document.querySelector("button");

const CountElements = () => {
  let li = document.querySelectorAll("li");
  let result = document.querySelector(".result");
  result.textContent = li.length;

}

btn.addEventListener("click", CountElements);
