import { fail } from "assert";

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function devideTen(num: number): void {
  try {
    if (num === 0) {
      throw new Error("fail");
    }
    console.log(10 / num)
  } catch (e) {
    console.log(e.message);
  }
}

devideTen(20);
devideTen(0);
