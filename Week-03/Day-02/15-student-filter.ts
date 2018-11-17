"use strict";

const students: any[] = [
  { name: "Mark", age: 9.5, candies: 2 },
  { name: "Paul", age: 12, candies: 5 },
  { name: "Clark", age: 7, candies: 3 },
  { name: "Pierce", age: 12, candies: 7 },
  { name: "Sean", age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function whoHasMoreCandiesThanFour(array: string[]): any {
  let studentsWithMoreThanTwoCandies: string[] = [];
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < students.length; i++) {
      if (array[j] === students[i].name && students[i].candies < 4) {
        studentsWithMoreThanTwoCandies.push(students[i].name);
      }
    }
  }
  console.log(
    "These students have more than two Candies: " +
    studentsWithMoreThanTwoCandies
  );
}
whoHasMoreCandiesThanFour(["Mark", "Paul", "Clark", "Pierce", "Sean", "Béla"]);

// create a function that takes a list of students and logs:
//  - how many candies they have on average

function averageCandies(array: string[]): any {
  let sum = 0;
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < students.length; i++) {
      if (array[j] === students[i].name) {
        sum += students[i].candies;
      }
    }
  }
  let average = sum / array.length;
  console.log("Average candies of the given students: " + average);
}

averageCandies(["Mark", "Paul", "Clark", "Pierce"]);
