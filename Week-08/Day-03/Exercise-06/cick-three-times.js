// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed
'use strict';

const btn = document.querySelector("button");
let count = 0;

let myFunction = (e) => {
  if (e.timeStamp < 5000) {
    btn.removeEventListener("click", myFunction);
    console.log("Eventlistener has been removed.");
  } else if (count >= 3 && e.timeStamp > 5000) {
    document.querySelector("p").innerText = "5 seconds elapsed and clicked 3 times";
  };
  count++;
};
btn.addEventListener("click", myFunction);
