//  If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
let fourthP = document.querySelectorAll('p')[3];

if (fourthP.classList.contains('dolphin')) {
  let apple = document.querySelector(".apple");
  apple.textContent = "pear"
}

//  If the first p has an 'apple' class, replace cat's content with 'dog'
let firstP = document.querySelectorAll('p')[0];
if (firstP.classList.contains('apple')) {
  let cat = document.querySelector(".cat");
  cat.textContent = "dog"
}

//  Make apple red by adding a .red class
let apple = document.querySelector(".apple");
apple.classList.add("red");

//  Make balloon more balloon-like (change its shape)
let balloon = document.querySelector("p.balloon");
balloon.style.width = '40px';
balloon.style.height = '60px';

