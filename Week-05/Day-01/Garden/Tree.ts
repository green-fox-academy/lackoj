import { Plant } from './Plant';
'use strict';


/* The Tree
needs water if its current water amount is less then 10
when watering it the tree can only absorb the 40% of the water
eg. watering with 10 the tree's amount of water should only increase with 4 */

export class Tree extends Plant {
  constructor(color: string, minWaterAmountNeed = 10, ableToAbsorve = 0.4) {
    super(color, minWaterAmountNeed, ableToAbsorve);
    this.currentWaterAmount = 0;
  }
} 
