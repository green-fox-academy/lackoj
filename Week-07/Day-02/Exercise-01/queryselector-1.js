
//  1. store the element that says 'The King' in the 'king' variable.
//  console.log it.
//  2. store 'The Businessman' and 'The Lamplighter'
//  in the 'businessLamp' variable.
//  console.log each of them.
//  3. store 'The King' and 'The Conceited Man'
//  in the 'conceitedKing' variable.
//  alert them one by one.
//  4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//  in the 'noBusiness' variable.
//  console.log each of them.

let king = document.querySelector("#b325").textContent;
console.log(king);

let businessLamp = document.querySelectorAll(".big");
console.log(businessLamp[0].textContent, businessLamp[1].textContent);

let conceitedKing = document.querySelectorAll(".container div");
for (let i = 0; i < 2; i++) {
  window.alert(conceitedKing[i].textContent);
}

let noBusiness = document.querySelectorAll("div");
console.log(noBusiness);
for (let i = 0; i < 3; i++) {
  window.alert(noBusiness[i].textContent);
}
