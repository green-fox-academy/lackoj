'use strict';

const questionContainer = document.querySelector(".questions-container");
const answersContainer = document.querySelector(".answers-container");
const submitBtn = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { question, answerTwo, answerThree, answerFour } = form.elements;
  let idnexOfTrue = 0;
  form.elements.radio.forEach((element, index) => {
    if (element.checked) {
      idnexOfTrue = index;
    }
  });

  const addXhr = new XMLHttpRequest();
  addXhr.open('POST', `/questions`);
  addXhr.setRequestHeader('Content-Type', 'application/json');
  addXhr.send(JSON.stringify({
    question: question.value,
    answers: [answerOne.value, answerTwo.value, answerThree.value, answerFour.value],
    idnexOfTrue: idnexOfTrue
  }));

  addXhr.onload = () => {
    if (addXhr.status === 200) {
      console.log(JSON.parse(addXhr.responseText));
    }
  };
});
