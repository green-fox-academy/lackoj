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

  protected constructor(protected maxAmmo: number, protected baseDamage: number, protected ammo = 0) {
    this.baseDamage = baseDamage;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
    this.ammo = ammo;
  }

  // It should use all the ammos (set it to 0) and it should return the damage it deals
  // The damage is the multiplication of the base damage and the ammos
  fight() {
    this.ammo = 0;
    console.log(this.baseDamage); // talan kell egy masik damage is
  }

  /*
  It should take a number as parameter and substract as much ammo as possibe
  It can't have more ammo than the number or the max ammo (can't get more ammo than what's coming from the parameter or the max ammo of the aircraft)
  It should return the remaining ammo
  Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288
  */
  reFill(reFillAmount: number): number {
    if (this.maxAmmo < reFillAmount) {
      this.ammo += this.maxAmmo;
      return reFillAmount - this.maxAmmo
    } else if (this.maxAmmo > reFillAmount) { //ez a condition nem kell csak az else sem igazabol, delete later
      this.ammo += reFillAmount;
      return 0;
    };
  }

  //it should return it's type as a string -->typeof? instaceof?
  getType() {
    return this.constructor.name;
  }

  //It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
  getStatus() { //kell egy all damage valahova
    return (`Type : ${this.constructor.name}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}`)
  }

  //It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16
  isPriority() { //check hogy mit ad ki a contructor.name ebben az esetben, instancon tesztelni a fv-t ha kész
    if (this.constructor.name === "F35") {
      return true;
    }
    return false;
  }

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

