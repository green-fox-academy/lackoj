import { fileURLToPath } from "url";

// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

const fs = require("fs");

function readMyFile(fileName: string) {
  try {
    return fs.readFileSync(fileName, "utf-8");
  } catch (e) {
    return "Unable to read file";
  }
}
console.log(readMyFile("myfile.txt"));
