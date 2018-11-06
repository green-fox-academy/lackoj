"use strict";
export {};

const students: any[] = [
  { name: "Theodor", age: 3, candies: 2 },
  { name: "Paul", age: 9.5, candies: 2 },
  { name: "Mark", age: 12, candies: 5 },
  { name: "Peter", age: 7, candies: 3 },
  { name: "Olaf", age: 12, candies: 7 },
  { name: "George", age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function sumCandies(list: any): number {
  let sumCandy: number = 0;
  list.forEach(function(list) {
    sumCandy += list.candies;
  });
  return sumCandy;
}
console.log(sumCandies(students));

function sumAges(list: any) {
  let sumAge: number = 0;
  list.forEach(function(list) {
    if (list.candies < 5) {
      sumAge += list.age;
    }
  });
  return sumAge;
}

console.log(sumAges(students));
