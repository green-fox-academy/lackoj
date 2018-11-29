"use strict";
import { writeToFile, readFromFile, appendToFile } from './fileIO';
import { Car } from './car';


/* 
it should have a carPark array of Cars
addCar() method which add's a new car to the carPark
addCarToFile() method which add's a new car to the file, with 3 parameter: license plate, year of manufacture, and a parking ticket(0 or 1)
removeCar() method which removes a car, by ID
getOldest() method which returns the oldest car's license plate from the file
getPenalty() method which returns a new array of car's who hasn't got a parking ticket from the file 
*/

export class CarPark {
  carPark: Car[] = [];

  constructor() {
  }

  getCarPark() {
    return this.carPark;
  }

  addCar(car: Car): void {
    if (car) { //car is not undifined nor null
      this.carPark.push(car);
    }
  }

  addCarToFile(car: Car, parkingTicket: number): void {
    let data: string = `\n${car.getLicensePlate()},${car.getManufactureYear()},${parkingTicket}`;
    appendToFile("cars.csv", data);
  }

  removeCarFromArray(carID: number): void {
    let result: Car;
    this.carPark.forEach(e => {
      if (e.getId() === carID) {
        result = e;
      }
    });
    this.carPark.splice(this.carPark.indexOf(result), 1);
  }

  removeCarFromArrayOtherWay(carId: number) {
    this.carPark = this.carPark.filter(car => car.getId() !== carId);
  }

  removeCarFromFile() {

  }

  getOldest() {
    let result: string;

    let contentToArray = readFromFile("cars.csv").split("\n").map(e => e.split(","));
    let minYear = Math.min(...contentToArray.map(e => parseInt(e[1])));

    contentToArray.forEach(e => {
      if (e[1] === minYear.toString()) {
        result = e[0];
      }
    });
    return result;
  }

  getOldestOtherWay() {
    let rawData = readFromFile("cars.csv")
    let arrayData = rawData.split("\n").map(e => e.split(","));

    for (let i = 0; i < arrayData.length; i++) {
      this.carPark.push(new Car(arrayData[i][0], +arrayData[i][1]))
    }

    this.carPark.sort((a, b) => {
      return a.getManufactureYear() - b.getManufactureYear();
    })

    return this.carPark[0].getLicensePlate();
  }

  getPenalty() {
    return readFromFile("cars.csv").split("\n").map(e => e.split(",")).filter(e => e[2] === "0");
  }

}

