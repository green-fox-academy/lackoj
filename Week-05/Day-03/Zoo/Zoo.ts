import { Flyable } from '../Flyable/flyable';
"use strict";

abstract class Animal {
  constructor(protected name: string, protected age?: number) { }
  getName() {
    return this.name
  }
  abstract breed();
}

export class Bird extends Animal implements Flyable {
  breed() {
    return "layning eggs"
  };

  land() {
    console.log(`The ${this.name} has landed on a tree`)
  };
  takeOf() {
    console.log("In the air.")
  };
  fly() {
    console.log("Fyling.")
  };
}

export class Mammal extends Animal {
  breed() {
    return "pushing miniature versions out"
  };

}

export class Reptile extends Animal {
  breed() {
    return "layning eggs"
  };
}