//  Write the image's url to the console.
let foxImage = document.querySelector('img');
console.log(foxImage);

//  Replace the image with a picture of your favorite animal.
foxImage.setAttribute('src', 'https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg');

//  Make the link point to the Green Fox Academy website.
let link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

//  Disable the second button.
let btn = document.querySelector(".this-one");
btn.setAttribute('disabled', '');

//  Replace its text with 'Don't click me!'
let btnFirst = document.querySelector("body button");
btnFirst.textContent = "Don't click me!";


