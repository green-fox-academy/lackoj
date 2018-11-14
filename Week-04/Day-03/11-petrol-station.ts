"use strict"
export { };

/* Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100 */

class Station {
  gasAmount: number = 1000;

  refill(car: Car): void { //decreases the gasAmount by the capacity of the car and increases the cars gasAmount
    this.gasAmount -= car.capacity;
    car.gasAmount += car.capacity;
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor(gasAmount: number = 0, capacity: number = 100) {
    this.gasAmount = gasAmount;
    this.capacity = capacity;
  }
}

let station01 = new Station();
let car01 = new Car();

console.log(station01);
console.log(car01);
console.log("-------------------------");

station01.refill(car01);
console.log(station01);
console.log(car01);


