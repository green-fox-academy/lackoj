"use strict";

//Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
//Create a test for that.
export function checkIfAnagram(textA: string, textB: string): boolean {

  function transFormTextAndOrderLetters(text: string): string {
    let result: string[] = text.toLowerCase().split("").sort((a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    });

    return result.join("");
  };

  textA = transFormTextAndOrderLetters(textA);
  textB = transFormTextAndOrderLetters(textB);

  if (textA === textB) {
    return true;
  }

  return false;
}