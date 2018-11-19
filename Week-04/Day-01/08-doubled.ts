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

  let result = arrayOfLines.map(lines => {
    let arrayOfChars = lines.split("");
    return arrayOfChars.filter((char, index) => index % 2 === 0).join("");
  })

  return writeToFile("08-doubled-02.txt", result.join("\n"));
}

removeDoubleChars();
