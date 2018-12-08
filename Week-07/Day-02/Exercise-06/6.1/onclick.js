// Turn the party on and off by clicking the button. (the whole page)

let button = document.querySelector("button");
let div = document.querySelector("div");

button.onclick = () => {
  if (div.classList.contains("party")) {
    div.classList.remove("party");
    console.log('if')
  } else {
    console.log('else')
    div.classList.add("party");
  };
};