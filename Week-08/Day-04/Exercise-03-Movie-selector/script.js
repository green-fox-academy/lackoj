'use strict';

const movies = [
  { type: "scifi", tile: "Moon" },
  { type: "scifi", tile: "2001 Space odessy" },
  { type: "drama", tile: "Contact" },
  { type: "drama", tile: "Darkest hour" },
  { type: "drama", tile: "There will be blood" },
  { type: "comedy", tile: "American beauty" },
  { type: "comedy", tile: "Airplane" },
  { type: "comedy", tile: "Deadpool" },
  { type: "comedy", tile: "Wayne's World" }
]

const genreOptions = document.querySelector('#genre');

const showSelected = () => {
  const movieList = document.querySelector('#movieList');
  let value = genreOptions[genreOptions.selectedIndex].value;
  movieList.innerHTML = "";

  movies.filter(movie => movie.type === value).forEach(movie => {
    const option = document.createElement('option');
    option.innerText = movie.tile;
    movieList.appendChild(option);
  })
}

genreOptions.addEventListener("change", showSelected);

