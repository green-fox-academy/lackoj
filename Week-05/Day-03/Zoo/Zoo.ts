"use strict";

abstract class Animal {
  constructor(protected name: string, protected age?: number) { }
  getName() {
    return this.name
  }
  abstract breed();
}

export class Bird extends Animal {
  breed() {
    return "layning eggs"
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