import Person from './Person';
"use strict";

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", previousOrganization: string = "The School of Life") {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}, 
    from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    return this.skippedDays += numberOfDays;
  }

  getGoal() {
    console.log("My goal is: Be a junior software developer.");
  }

}