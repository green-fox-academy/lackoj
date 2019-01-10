'use strict';

const score = document.querySelector(".score");
const questionsContainer = document.querySelector(".questions-container");

let numberOfAllQuestions = 0;
let actualScore = 0;
let idOfCorrectAnswer = 0;
let questionId = 0;
let buttons = "";

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

const newQuestions = (data) => {
  const { id, question, answers } = data;
  questionId = id; //save to use outside of scope
  //score
  score.innerHTML = `<h1>SCORE: ${actualScore}</h1>`;
  //delete previous content
  questionsContainer.innerHTML = "";
  //add new question
  const h2 = document.createElement('h2');
  h2.innerText = question;
  questionsContainer.appendChild(h2);
  //add new answers
  answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.answer;
    btn.dataset.id = answer.id;
    questionsContainer.appendChild(btn);
    if (answer.is_correct) {
      idOfCorrectAnswer = answer.id;  //save to use outside of scope
    }
  });
  buttons = document.querySelectorAll("button");
};

const reNewPage = () => {
  sendHTTPRequest('/api/game', 'GET', newQuestions);
}

reNewPage();

questionsContainer.addEventListener('click', (event) => {
  console.log(event);
  if (event.target.type === "submit") {
    if (event.target.dataset.id == idOfCorrectAnswer) {
      actualScore++;
      score.innerHTML = `<h1>SCORE: ${actualScore}</h1>`;
      event.target.className = "green";
    } else {
      event.target.className = "red";
    }
    setTimeout(reNewPage, 2000);
  }
});
