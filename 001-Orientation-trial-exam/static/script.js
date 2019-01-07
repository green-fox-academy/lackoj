'use strict';

const p = document.querySelector('p');
const form = document.querySelector('form');
const { url, alias } = form.elements;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', "/api/links");
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    url: url.value,
    alias: alias.value
  }));

  xhr.onload = () => {

    if (xhr.status === 400) {
      p.innerHTML = "";
      p.innerText = 'Your alias is already in use!';
      p.style.color = "red";
    } else if (xhr.status === 200) {
      p.innerHTML = "";
      const { alias: newAlias, secretCode: newSecreCode } = JSON.parse(xhr.responseText);
      p.innerHTML = `Your URL is aliased to <strong>"${newAlias}"</strong> and your secret code is <strong>"${newSecreCode}"</strong>`
      p.style.color = "black";
      form.reset();
    };
  };
});