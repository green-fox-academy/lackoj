"use strict";

// Write a function that computes a member of the fibonacci sequence by a given index
// Create tests that covers all types of input (like in the previous workshop exercise)

//mathematical solution
export function fibonacciByIndex(n: number): number {
  let Phi = (1 + Math.sqrt(5)) / 2
  let result = Math.round(Math.pow(Phi, n) / Math.sqrt(5));
  return result;
}

