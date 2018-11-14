'use strict';
import { Animal } from '../Day-02/03-animal';

/*  
Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal
*/

class Farm {

  listAnimals: Animal[] = [];
  slots: number = 4;

  breed(nameOfAnimal: Animal) { //creates a new animal if there's place for it
    this.slots = this.slots - this.listAnimals.length;
    if (this.slots > 0) {
      this.listAnimals.push(nameOfAnimal);
    } else {
      console.log("Sorry, the farm is full.");
    }
  }

  slaughter() { //-> removes the least hungry animal
    this.listAnimals.sort(function (a: Animal, b: Animal) {
      return a.hunger - b.hunger
    })
    this.listAnimals.splice(0, 1);
  }
}

//creating Animals
let duck = new Animal("duck");
let donkey = new Animal("donkey");
let horse = new Animal("horse");
let goose = new Animal("goose");
let rooster = new Animal("rooster");

//adding animals with regular way
let farm01 = new Farm();
farm01.listAnimals = [duck, donkey, horse];

//adding animals with breed function
farm01.breed(goose);
farm01.breed(rooster);
console.log(farm01.listAnimals)

//change hunger of some animals
farm01.listAnimals[2].hunger = 10;
farm01.listAnimals[1].hunger = 30;
console.log(farm01.listAnimals)

//testing slaughter on farm
farm01.slaughter();
console.log(farm01.listAnimals)




