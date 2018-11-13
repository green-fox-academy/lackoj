'use strict';
export { };


class postIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bgColor, txt, txtColor) {
    this.backgroundColor = bgColor;
    this.text = txt;
    this.textColor = txtColor;

  }
}

let postIt01 = new postIt("orange", "Idea", "blue");
let postIt02 = new postIt("pink", "Awesome", "black");
let postIt03 = new postIt("yellow", "Superb", "green");

console.log(postIt01);

/*

Without constructor function: 

let postIt01 = new postIt();
postIt01.backgroundColor = "orange";
postIt01.text = "Idea1";
postIt01.textColor = "blue";

let postIt02 = new postIt();
postIt02.backgroundColor = "pink";
postIt02.text = "Awesome";
postIt02.textColor = "black";

let postIt03 = new postIt();
postIt03.backgroundColor = "yellow";
postIt03.text = "Superb!";
postIt03.textColor = "green";

console.log(postIt01);

*/