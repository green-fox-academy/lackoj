/* Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount */
"use strict";

export class Sharpie {
  color: string;
  width: number;
  inkAmount = 100;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
  }

  use() {
    this.inkAmount--;
  }
}

let blueSharpie = new Sharpie("blue", 2);
console.log(blueSharpie);
blueSharpie.use();
console.log(blueSharpie);
