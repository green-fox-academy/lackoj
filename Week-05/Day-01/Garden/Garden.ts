import { Flower } from "./Flower";
import { Tree } from "./Tree";
import { Plant } from './Plant';

'use strict'

/* The Garden
- is able to hold unlimited amount of flowers or trees
- when watering it should only water those what needs water with equally divided amount amongst them
- eg. watering with 40 and 4 of them need water then each gets watered with 10 */

export class Garden {
  plants: Plant[];

  constructor(plants: Plant[] = []) {
    this.plants = plants;
  }

  addPlants(...plant) {
    this.plants.push(...plant);
  }

  showGarden() {
    this.plants.forEach(element => {
      if (element.getCurrentWaterAmount() < element.getMinWaterAmountNeed()) {
        console.log(`The ${element.getColor()} ${element.constructor.name} needs water.`);
      } else if (element.getCurrentWaterAmount() > element.getMinWaterAmountNeed()) {
        console.log(`The ${element.getColor()} ${element.constructor.name} does not need water.`);
      }
    });
  }

  watering(amountOfWater) {

    let thirstyPlants: Plant[] = this.plants.filter(plant => plant.ifNeedsWater())

    this.plants.forEach(plant => {
      if (plant.ifNeedsWater()) {
        plant.setCurrentWaterAmount(amountOfWater * plant.getAbleToAbsorve() / thirstyPlants.length);
      }
    })
    console.log(`Watering with ${amountOfWater}`);
    this.showGarden();
  }
}
