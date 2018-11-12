// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require("fs");

function writeToFile(fileName: string, data: string): void {
  if (fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, data);
  } else {
    console.log("Unable to write file: my-file.txt");
  }
}

writeToFile("myfile.txt", "Juhaaasz");
