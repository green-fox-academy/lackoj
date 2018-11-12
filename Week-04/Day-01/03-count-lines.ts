import { fileURLToPath } from "url";

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require("fs");

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, "utf-8");
  } catch (e) {
    return null;
  }
}

function numberOfLines(fileName: string): number {
  let count: number = 0;
  const fileContent: string = readFromFile(fileName);
  if (fileContent !== null)
    fileContent.split("\n").forEach(element => {
      count += 1;
    });
  return count;
}

console.log(numberOfLines("myfile.txt"));
