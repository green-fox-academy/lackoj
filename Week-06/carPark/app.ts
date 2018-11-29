import { Car } from "./car";
import { CarPark } from "./carPark";

"use strict";


let mycar = new Car();
let mycar2 = new Car();
let mycar3 = new Car();
let carPark = new CarPark();

carPark.addCar(mycar);
carPark.addCar(mycar2);
carPark.addCar(mycar3);

// console.log(carPark);
// carPark.removeCarFromArray(2);
// console.log(carPark);

// carPark.addCarToFile(mycar, 0);
// carPark.addCarToFile(mycar2, 1);
// carPark.addCarToFile(mycar3, 0);

console.log(carPark.getPenalty());