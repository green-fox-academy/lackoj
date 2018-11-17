"use strict";
export { };

class Person {
  name: string; //the name of the person
  age: number; //the age of the person (whole number)
  gender: string; //the gender of the person (male / female)

  Person(name: string = "Jane Doe", age: number = 30, gender: "female") { //Person(): sets name to Jane Doe, age to 30, gender to female
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

  student(name: string = "Jane Doe", age: number = 30, gender: string = "female", previousOrganization: string = "The School of Life") {
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
    console.log("Be a junior software developer.");
  }

}


class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string; //the level of the mentor (junior / intermediate / senior)

  mentor(name: string = "Jane Doe", age: number = 30, gender: string = "female", level: string = "intermediate") {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}, ${this.level} mentor`);
  }

  getGoal() {
    console.log("Educate brilliant junior software developers.");
  }
}


class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string; //name of the company
  hiredStudents: number; // number of students hired

  sponsor(name: string = "Jane Doe", age: number = 30, gender: string = "female", company: string = "Google") {
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
    console.log("Hire brilliant junior software developers.");
  }

  hire() { //increase hiredStudents by 1
    return this.hiredStudents++;
  }



}


console.log("");

/*The Sponsor class has the following constructors:

Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0 */