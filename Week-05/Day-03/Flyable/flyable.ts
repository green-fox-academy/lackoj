"use strict";

//Create a Flyable interface
//it should have land, fly and takeOff methods
export interface Flyable {
  land(): void;
  fly(): void;
  takeOf(): void;
}

//Create an abstract Vehicle class
//it should have at least 3 fields
abstract class Vehicle {
  protected hasEngine: boolean;
  protected maxSpeed: number;
  protected brand: string;

  constructor(hasEngine: boolean, maxSpeed: number, brand: string) {
    this.hasEngine = hasEngine;
    this.maxSpeed = maxSpeed;
    this.brand = brand;
  }
}

// Extend Helicopter class from Vehicle
// implement your Flyable interface
class Helicopter extends Vehicle implements Flyable {
  constructor(hasEngine: boolean, maxSpped: number, brand: string) {
    super(hasEngine, maxSpped, brand);
  }

  land() {
    console.log("Landed.")
  };
  fly() {
    console.log("In the air.")
  };
  takeOf() {
    console.log("We have just taken off.")
  };
}
