'use strict';

export class Plant {

  protected color: string;
  protected minWaterAmountNeed: number;
  protected currentWaterAmount: number;
  protected ableToAbsorve: number;

  constructor(color: string, minWaterAmountNeed: number, ableToAbsorve: number) {
    this.color = color;
    this.minWaterAmountNeed = minWaterAmountNeed;
    this.ableToAbsorve = ableToAbsorve;
  }

  ifNeedsWater() {
    return this.currentWaterAmount < this.minWaterAmountNeed;
  }

  getColor() {
    return this.color;
  }

  getCurrentWaterAmount() {
    return this.currentWaterAmount;
  }

  setCurrentWaterAmount(currentWaterAmount: number) {
    return this.currentWaterAmount += currentWaterAmount;
  }

  getMinWaterAmountNeed() {
    return this.minWaterAmountNeed;
  }

  getAbleToAbsorve() {
    return this.ableToAbsorve;
  }


}
