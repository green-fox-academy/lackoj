"use strict";
export {};

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numList: number[] = [3, 4, 5, 6, 7];

let reversed = numList.reverse();
console.log(reversed);

let numList2: number[] = [];
for (let i = 0; i < numList.length; i++) {
  numList2[i] = numList[numList.length - i - 1];
}
console.log(numList2);
