// 1)  Fill every paragraph with the last one's content.
// 2)  Do the same again, but you should keep the cat strong.

let apple = document.querySelector(".apple");
let banana = document.querySelector(".banana");
let car = document.querySelector(".car");


let animals = document.querySelectorAll(".animals");
let animalsContent = animals[0].textContent;
let animalsHTML = animals[0].innerHTML;
let toChange = [apple, banana, car];

//1st exercise
for (let i = 0; i < toChange.length; i++) {
  toChange[i].innerText = animalsContent;
}

//2nd exercise
for (let i = 0; i < toChange.length; i++) {
  toChange[i].innerHTML = animalsHTML;
}










//2nd exercise