"use strict";

import Person from "./Person";

export class Mentor extends Person {
  level: string;

  constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", level: string = "intermediate") {
    super(name, age, gender);
    this.level = level;
  }

  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}, ${this.level} mentor`);
  }

  getGoal() {
    console.log("my goal is: Educate brilliant junior software developers.");
  }
}