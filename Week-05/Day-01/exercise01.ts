"use strict";
export { };

class Person {
  name: string; //the name of the person
  age: number; //the age of the person (whole number)
  gender: string; //the gender of the person (male / female)

  constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female") { //Person(): sets name to Jane Doe, age to 30, gender to female
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce(): void { //prints out "Hi, I'm name, a age year old gender."
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal() { //prints out "My goal is: Live for the moment!"
    console.log("My goal is: Live for the moment!");
  }

}

class Student {
  name: string;
  age: number;
  gender: string;

  previousOrganization: string;
  skippedDays: number;

  constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", previousOrganization: string = "The School of Life") {
    this.name = name;
    this.age = age;
    this.gender = gender;
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


class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string; //the level of the mentor (junior / intermediate / senior)

  constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", level: string = "intermediate") {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}, ${this.level} mentor`);
  }

  getGoal() {
    console.log("my goal is: Educate brilliant junior software developers.");
  }
}


class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string; //name of the company
  hiredStudents: number; // number of students hired

  constructor(name: string = "Jane Doe", age: number = 30,
    gender: string = "female", company: string = "Google") {
    this.name = name;
    this.age = age;
    this.gender = gender;
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


console.log("");

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);


student.skipDays(3);

for (let i = 0; i < 3; i++) {
  elon.hire();
}

for (let i = 0; i < 5; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}