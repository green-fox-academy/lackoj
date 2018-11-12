import { fail } from "assert";

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function devideTen(a: number): any {
  if (a === 0) {
    return "fail";
  }
  return 10 / a;
}

console.log(devideTen(20));
console.log(devideTen(0));
