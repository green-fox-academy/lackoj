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