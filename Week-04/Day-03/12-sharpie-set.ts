'use strict';
export { };

/* 
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies 
*/

class Sharpie {
  color: string;
  width: number;
  inkAmount = 100;

  constructor(color: string, width: number) {
    this.color = color;
    this.width = width;
  }

  use() {
    this.inkAmount -= 50;
  }
}

class SharpieSet {
  sharipes: Sharpie[] = [];

  addSharipe(sharpie: Sharpie) {
    this.sharipes.push(sharpie);
  }

  countUsable() {
    let count = 0;
    for (let i = 0; i < this.sharipes.length; i++) {
      if (this.sharipes[i].inkAmount === 0) {
        count++;
      }
    }
    return count;
  }

  removeTrash() {
    for (let i = 0; i < this.sharipes.length; i++) {
      while (this.sharipes[i].inkAmount === 0) {
        this.sharipes.splice(i, 1);
      }
    }
  }

}

let sharpieSet01 = new SharpieSet();

sharpieSet01.addSharipe(new Sharpie("blue", 2));
sharpieSet01.addSharipe(new Sharpie("pink", 2));
sharpieSet01.addSharipe(new Sharpie("yellow", 2));
sharpieSet01.addSharipe(new Sharpie("green", 2));
sharpieSet01.addSharipe(new Sharpie("black", 2));


//check: 

console.log(sharpieSet01.sharipes);
sharpieSet01.sharipes[2].inkAmount = 0;
sharpieSet01.sharipes[3].inkAmount = 0;

console.log("---------------------------------")
console.log(sharpieSet01.countUsable());
sharpieSet01.removeTrash();

console.log("---------------------------------")
console.log(sharpieSet01);

