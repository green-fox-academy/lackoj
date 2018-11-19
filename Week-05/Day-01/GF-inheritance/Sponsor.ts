"use strict";
import Person from "./Person";


export class Sponsor extends Person {
  company: string; //name of the company
  hiredStudents: number; // number of students hired

  constructor(name: string = "Jane Doe", age: number = 30,
    gender: string = "female", company: string = "Google") {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce(): void { //prints out "Hi, I'm name, a age year old gender."
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender},
    who represents company and hired ${this.hiredStudents} students so far.`);
  }

  getGoal() { //prints out "My goal is: Live for the moment!"
    console.log("My goal is: Hire brilliant junior software developers.");
  }

  hire() { //increase hiredStudents by 1
    return this.hiredStudents++;
  }
}