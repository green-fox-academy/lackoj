"use strict";

let pageCounter = 1;
let animalContainer = document.querySelector("#animal-info");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {

  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
  ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      let ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error");
    }
  };

  ourRequest.onerror = function () {
    console.log("Connection error");
  }

  ourRequest.send();
  pageCounter++;

  if (pageCounter > 3) {
    btn.classList.add("hideMe");
  }
});

function renderHTML(data) {
  let htmlString = "";

  for (let i = 0; i < data.length; i++) {
    let food = data[i].foods.likes;
    htmlString += `<p> ${data[i].name} is a ${data[i].species} that likes to eat: ${food}</p>`;
  };

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
} 