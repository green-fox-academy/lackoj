"use strict";

//Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
//Create a test for that.
export function checkIfAnagram(textA: string, textB: string): boolean {

  function transFormTextAndOrderLetters(text: string): string {
    return text.toLowerCase().split("").sort().join("");
  };

  textA = transFormTextAndOrderLetters(textA);
  textB = transFormTextAndOrderLetters(textB);

  return textA === textB;

}
