import { resolveTxt } from "dns";

"use strict";
export { };
const fs = require('fs');

// Create a method that decrypts duplicated-chars.txt

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, "utf-8")
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function writeToFile(fileName: string, data: string): void {
  fs.writeFileSync(fileName, data);
}

function removeDoubleChars() {
  let fileContent = readFromFile("08-doubled.txt");
  let arrayOfLines = fileContent.split("\n");
  let twoDimArrayOfLines = arrayOfLines.map(e => e.split(""));

  let temp = twoDimArrayOfLines.map(e => {
    let result: string[] = [];

    for (let i = 0; i < e.length; i++) {
      if (e[i] === e[i + 1]) {
        result.push(e[i]);
      }
    }
    console.log(result);
    return result;
  })

  let result = temp.map(e => e.join("")).join("\n");

  return writeToFile("08-doubled-02.txt", result);
}
removeDoubleChars();

