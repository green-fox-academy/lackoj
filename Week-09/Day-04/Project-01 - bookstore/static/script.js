"use strict";

const xhr = new XMLHttpRequest();
xhr.open('GET', '/author');
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = (JSON.parse(xhr.responseText));
    authorTable(res);
  }
};
xhr.send();

const tableDiv = document.querySelector('.myTable');

const authorTable = (data) => {
  const tr = document.createElement('tr');
  const thID = document.createElement('th');
  const thName = document.createElement('th');
  const thHome = document.createElement('th');
  const thCountry = document.createElement('th');
  const thButton = document.createElement('th');

  thID.textContent = 'ID';
  thName.textContent = 'Name';
  thHome.textContent = 'Home City';
  thCountry.textContent = 'Country';
  thButton.textContent = 'Delete';

  tr.appendChild(thID);
  tr.appendChild(thName);
  tr.appendChild(thHome);
  tr.appendChild(thCountry);
  tr.appendChild(thButton);
  tableDiv.appendChild(tr);

  data.forEach(e => {
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdHome = document.createElement('td');
    const tdCountry = document.createElement('td');
    const tdButton = document.createElement('td');
    const button = document.createElement('button');
    tdId.textContent = e.aut_id;
    tdName.textContent = e.aut_name;
    tdCountry.textContent = e.country;
    tdHome.textContent = e.home_city;
    button.textContent = 'Delete';
    button.setAttribute('id', e.aut_id);
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCountry);
    tr.appendChild(tdHome);
    tdButton.appendChild(button);
    tr.appendChild(tdButton);
    tableDiv.appendChild(tr);
  });

  console.log(data);
};

tableDiv.addEventListener('click', (event) => {
  const deletedXhr = new XMLHttpRequest();
  deletedXhr.open('DELETE', '/author');
  deletedXhr.setRequestHeader('Content-Type', 'application/json');
  deletedXhr.send(JSON.stringify({
    aut_id: event.target.id
  }));
  deletedXhr.onload = () => {
    console.log(JSON.parse(deletedXhr.responseText));
  };
});

const form = document.querySelector('.post');
const { aut_id, aut_name, country, home_city } = form.elements;
form.addEventListener('submit', (event) => {
  console.log({
    aut_id: aut_id.vaule,
    aut_name: aut_name.value,
    country: country.value,
    home_city: home_city.value
  });
  event.preventDefault();
  const postXhr = new XMLHttpRequest();
  postXhr.open('POST', '/author');
  postXhr.setRequestHeader('Content-Type', 'application/json');
  postXhr.send(JSON.stringify({
    aut_id: aut_id.value,
    aut_name: aut_name.value,
    country: country.value,
    home_city: home_city.value
  }));
  postXhr.onload = () => {
    console.log(JSON.parse(postXhr.responseText));
  };
});

const deleteForm = document.querySelector('.delete');
deleteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const deleteXhr = new XMLHttpRequest();
  deleteXhr.open('DELETE', '/author');
  deleteXhr.setRequestHeader('Content-Type', 'application/json');
  deleteXhr.send(JSON.stringify({
    aut_id: deleteForm.elements.aut_id.value
  }));
  deleteXhr.onload = () => {
    console.log(JSON.parse(deleteXhr.responseText));
  };
});
