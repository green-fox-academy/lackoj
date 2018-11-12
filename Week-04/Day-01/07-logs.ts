// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

"use strict";
export { };

const fs = require("fs");

function uniqueArr(arr) {
  let newArray: number[] = [];
  arr.forEach(element => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}

function uniqueIP(fileName) {
  let content: string[] = fs.readFileSync(fileName, "utf-8").split("\n");
  const uniqueIP = content.map(function (e) {
    return e.slice(27, 38);
  });
  return uniqueArr(uniqueIP);
}

console.log(uniqueIP("07-logs.txt"))

function ratio(fileName) {
  let content2: string[] = fs.readFileSync(fileName, "utf-8").split("\n");
  let countGet: number = 0;
  let countPost: number = 0;

  for (let i = 0; i < content2.length; i++) {
    if (content2[i].includes("GET /")) {
      countGet++;
    } else if (content2[i].includes("POST /")) {
      countPost++;
    }
  }

  return "GET/POST ratio: " + countGet / countPost;
}

console.log(ratio("07-logs.txt"));
