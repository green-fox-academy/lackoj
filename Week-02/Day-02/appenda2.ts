"use strict";
export {};

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

// let animals = ["koal", "pand", "zebr"];

// animals.forEach(function(element) {
//   element = element + "a";
// });
// console.log(animals);

// animals = animals.map(function(e, i, a) {
//   e = e + "a";
//   return a[i];
// });
// console.log(animals);

let animals = ["koal", "pand", "zebr"].map(el => el + "a");
console.log(animals);
