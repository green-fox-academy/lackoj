'use strict';
import { Thing } from './thing';
import { fleet } from './appFleetOfThings';


export class Fleet {
  things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing) {
    this.things.push(thing);
  }

  get giveThings() {
    return this.things;
  }

  public print() {
    for (let i = 0; i < this.things.length; i++) {
      if (this.things[i].isComplete) {
        console.log((i + 1) + ". [x] " + this.things[i].name)
      } else {
        console.log((i + 1) + ". [ ] " + this.things[i].name)
      }
    }
  }
}

