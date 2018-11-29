"use strict";
const fs = require('fs');

/*
 readFromFile() method with a fileName parameter
 it should return the fileContent, and handle the errors
 writeToFile() method which with 2 parameter: fileName and content
 it should handle the filewriting, and checks if the file exists or not
 */

export function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, "utf-8")
  } catch (e) {
    console.log(e.message);
    return null;
  }
}
export function writeToFile(fileName: string, content: string): void {
  if (fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, content);
  } else {
    console.log('cant write to file');
  }
}

export function appendToFile(fileName: string, content: string): void {
  if (fs.existsSync(fileName)) {
    fs.appendFileSync(fileName, content);
  } else {
    console.log('cant write to file');
  }
}

