'use strict';
export { };

/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

class Animal {

  hunger = 50;
  thirst = 50;

  eat() {
    this.hunger--;
  }

  drink() {
    this.thirst--;
  }

  play() {
    this.hunger++;
    this.thirst++;
  }
}

let Tigre = new Animal()
console.log(Tigre);

Tigre.drink();
console.log(Tigre);

Tigre.play();
console.log(Tigre);



