//Create a simple HTML document with one button.
// If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

let btn = document.querySelector("button");
let container = document.querySelector(".container");

let callback = () => {
  setTimeout(() => {
    let newP = document.createElement("p");
    newP.innerText = "2 seconds ellapsed";
    container.appendChild(newP);
  }, 3000);
}

btn.addEventListener("click", callback);
