"use strict";

// Get movie titles, using the given API: https://swapi.co/
// Create a very simple layout of two lists besides each other: see wireframe.
// it should have a label, an input field (text), and a button
// The input text's content should be sent to the people's api and you should perform a search with it.
// If you get the response, you should display all the results.
// If the user clicks on the character's name, 
//then perform another Ajax request and display all the films they appeared in.
// In the second list, display the movie like this: Movie title (release date).
// Explore the documentation and find requited API endpoints by yourself.

const submit = document.querySelector(".submit");
const input = document.querySelector(".input");
const resultList = document.querySelector(".result-list");
const filmList = document.querySelector(".film-list");

const swapiUrl = "https://swapi.co/api";
let peopleList = [];

const sendHTTPRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const searchUrl = `${swapiUrl}/people/?search=${input.value}`;
  sendHTTPRequest(searchUrl, (response) => {
    resultList.innerHTML = "";
    filmList.innerHTML = "";
    peopleList = response.results;
    peopleList.forEach((result) => {
      let li = document.createElement("li");
      li.innerText = result.name;
      resultList.appendChild(li);
    });
  });
});

resultList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    let [selectedPersonData] = peopleList.filter((person) => person.name === event.target.innerText);
    selectedPersonData.films.forEach(filmUrl => {
      sendHTTPRequest(filmUrl, (response) => {
        let content = `${response.title} (${response.created})`;
        let li = document.createElement("li");
        li.innerText = content;
        filmList.appendChild(li);
      })
    })
  }
})