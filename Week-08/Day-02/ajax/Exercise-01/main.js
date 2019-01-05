"use strict";

const gifContainer = document.querySelector("#container");
const ourRquest = new XMLHttpRequest();

const myApiKey = "gykl6rvvzFgmvTN3Xp6jE5EN8pHwO1Jm";
const limit = 15;
const url = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${myApiKey}&limit=${limit}`;
ourRquest.open("GET", url);

ourRquest.onload = () => {
  if (ourRquest.status === 200) {
    const ourGifs = JSON.parse(ourRquest.responseText).data;
    for (let i = 0; i < ourGifs.length; i++) {
      const newImg = document.createElement("img");
      newImg.setAttribute("src", ourGifs[i].images.original_still.url);
      newImg.onclick = () => {
        newImg.setAttribute("src", ourGifs[i].images.original.url);
      };
      gifContainer.appendChild(newImg);
    };
  } else {
    console.log("We connected to the server, but it returned an error");
  };
};

ourRquest.send();

