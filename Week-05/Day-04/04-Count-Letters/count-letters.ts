"use strict";

// Write a function, that takes a string as an argument and returns a dictionary 
// with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function createDictionary(text: string) {
  let textArr = text.toLowerCase().split("").sort()
  let result = {};

  for (let i = 0; i < textArr.length; i++) {
    let charCount =
      text.toLocaleLowerCase().split(textArr[i]).length - 1;

    result[textArr[i]] = charCount;
  }
  return result;
};





