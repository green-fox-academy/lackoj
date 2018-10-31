"use strict";
export {};

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix = [];
let size = 5;

for (let row = 0; row < size; row++) {
  matrix[row] = [];
  for (let c = 0; c < size; c++) {
    if (c + row === size - 1) {
      matrix[row][c] = 1;
    } else {
      matrix[row][c] = 0;
    }
  }
}

console.log(matrix);
