import { fileURLToPath } from "url";

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require("fs");

function numberOfLines(fileName: string): number {
  let count: number = 0;
  try {
    let content = fs.readFileSync(fileName, "utf-8");
    content.split("\n").forEach(element => {
      count += 1;
    });
  } catch (error) {
    return 0;
  }
  return count;
}

console.log(numberOfLines("myfile.txt"));
