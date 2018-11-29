"use strict";
import test from 'tape';
import { Car } from './car';
import { CarPark } from './carPark';

test("testName", (t) => { //passed
  let mycar: Car = null;
  let carPark = new CarPark();
  carPark.addCar(null);
  mycar.getId();
  let testArray = [];
  testArray.push(mycar)

  t.deepEqual(carPark.getCarPark(), testArray, "testing addCar method");
  t.end();
})
