import { readFromFile } from './fileIO';
"use strict";

/* 
it should have 3 main properties: an id, a license plate, and a manufacture year
create a constructor for setting those values
use acces modifiers, to protect the object's values
*/

export class Car {
  private static IdCount = 0;
  private id: number;

  constructor(private licensePlate = "ABC-123", private manfactureYear = 1999) {
    Car.IdCount++;
    this.id = Car.IdCount;
  }

  getId(): number {
    return this.id;
  }
  getLicensePlate(): string {
    return this.licensePlate;
  }
  getManufactureYear(): number {
    return this.manfactureYear;
  }

  chekIfInTheList(licensePlate: string) {

  }


}