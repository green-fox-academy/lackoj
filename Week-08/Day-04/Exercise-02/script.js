"use strict";
// Radio buttons should be groupped, so it should be only possible to select one at a time
// If you choose Dog or Cat, it should enable the sign up button
// If you choose Yes for cat facts, it should enable the I love cats button

// Clicking on a button should alert:
// Thank you, you've successfully signed up for cat facts

// If you pick Victor and no to cat facts it should enable the sign up button only
// Cilcking this time should display: Sigh, we still added you to the cat facts list

//containers: 
const animalContainer = document.querySelector(".animal-container");
const yesNoContainer = document.querySelector(".yesno-container");

//buttons: 
const signUpBtn = document.querySelector("#sign-up-btn");
const loveCatsBtn = document.querySelector("#love-cats-btn");
const form = document.querySelector("form");
const btn = document.querySelectorAll("button");


const enableButtons = (event) => {

  if (event.target.id === "dog" || event.target.id === "cat") {
    signUpBtn.removeAttribute("disabled");
  } else if (event.target.id === "yes-radio") {
    loveCatsBtn.removeAttribute("disabled");
  }

  allBtn.forEach(element => {
    element.addEventListener("click", (event) => {
      console.log(element);
      event.preventDefault();
      alert("Thank you, you've successfully signed up for cat facts");
    })
  })

}
form.addEventListener("click", enableButtons);

