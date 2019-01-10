'use strict';

const questionContainer = document.querySelector(".questions-container");
const answersContainer = document.querySelector(".answers-container");

const sendHTTPRequest = (url, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.send();
};

const showQestions = (data) => {
  data.forEach(questionObj => {
    const p = document.createElement("p");
    const deleteBtn = document.createElement("button");
    deleteBtn.dataset.id = questionObj.id;
    deleteBtn.innerText = "delete";
    p.textContent = questionObj.question;
    questionContainer.appendChild(p);
    questionContainer.appendChild(deleteBtn);
  });
};

sendHTTPRequest('/api/questions', 'GET', showQestions);

questionContainer.addEventListener('click', (event) => {
  const { id } = event.target.dataset;
  if (event.target.type === "submit") {
    const deleteXHR = new XMLHttpRequest();
    deleteXHR.open('DELETE', `/questions/${id}`);
    deleteXHR.send();
    deleteXHR.onload = () => {
      if (deleteXHR.status === 200) {
        console.log(JSON.parse(deleteXHR.responseText));
      }
    };
  }
});

