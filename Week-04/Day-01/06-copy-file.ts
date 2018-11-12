// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

"use strict";
export {};

const fs = require("fs");

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, "utf-8");
  } catch (e) {
    return null;
  }
}

function copyData(fileNameFrom: string, fileNameTo: string): boolean {
  let content = readFromFile(fileNameFrom);

  if (content !== null && fs.existsSync(fileNameTo)) {
    fs.writeFileSync(fileNameTo, content);
    return true;
  }
  return false;
}

console.log(copyData("text01.txt", "text02.txt"));
