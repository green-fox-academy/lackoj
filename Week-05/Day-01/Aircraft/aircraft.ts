'use strict';
export { };

/*The carrier should be able to store aircrafts
Each carrier should have a store of ammo represented as number
The inital ammo should be given by a parameter in it's constructor
The carrier also has a health point given in it's constructor as well */

class Carrier {

  aircrafts: Aircraft[] = [];

  //It should take a new aircraft and add it to its store
  add() { }

  /*It should fill all the aircraft with ammo and substract the needed ammo from the ammo storage
  If there is not enough ammo than it should start to fill the aircraftis with priority first
  If there is no ammo when this method is called it should throw an exception */
  fill() { }

  //It should take another carrier as a refrence parameter and fire all the ammo from the aircrafts to it, 
  //than substract all the damage from it's health points
  fight() { }

  //It should give back a string about it's and all of its aircrafts status like:
  getStatus() { }
}

abstract class Aircraft {

  // ezekre itt elvileg nincs szükség? 
  protected ammo: number;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected type: string;

  constructor(maxAmmo: number, baseDamage: number, ammo = 0) {
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
    this.ammo = ammo;
  }

  // It should use all the ammos (set it to 0) and it should return the damage it deals
  // The damage is the multiplication of the base damage and the ammos
  fight() { }

  /*
  It should take a number as parameter and substract as much ammo as possibe
  It can't have more ammo than the number or the max ammo (can't get more ammo than what's coming from the parameter or the max ammo of the aircraft)
  It should return the remaining ammo
  Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288
  */
  reFill() { }

  //it should return it's type as a string
  getType() { }

  //It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
  getStatus() { }

  //It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16
  isPriority() { }

}

class F16 extends Aircraft {

  constructor(maxAmmo = 8, baseDamage = 30, ammo = 0) {
    super(maxAmmo, baseDamage, ammo);
  }

}

class F35 extends Aircraft {

  constructor(maxAmmo = 12, baseDamage = 50, ammo = 0) {
    super(maxAmmo, baseDamage, ammo);
  }

}

