"use strict";
import { Student } from './Student';
import { Mentor } from './Mentor';

class Cohort {

  name: string;  //the name of the cohort
  students: Student[] = []; //a list of Students
  mentors: Mentor[] = []; //a list of Mentors

  addStudent(student: Student) {// adds the given Student to students list
    this.students.push(student);
  }

  addMentor(mentor: Mentor) { //adds the given Mentor to mentors list
    this.mentors.push(mentor);
  }

  info() { //prints out 'The name cohort has students.size students and mentors.size mentors.'
    console.log(`The ${this.name} has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }
}
