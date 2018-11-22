"use strict";

// Write a function, that takes a string as an argument and returns a dictionary 
// with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

function findOccurences(str, char_to_count) {
  return str.split(char_to_count).length - 1;
}

export function createDictionary(text: string) {
  let textToArray = text.toLowerCase().split("").sort()
  let result = {};

  for (let i = 0; i < textToArray.length; i++) {
    let charCount = findOccurences(text, textToArray[i]);
    result[textToArray[i]] = charCount;
  }
  return result;
};





