// what can be 3 things: sum, multiply, double
// and responds with sum or multiplication of all elements in the numbers or with another array with the doubled elements:
// eg. /arrays with {"what": "sum", "numbers": [1,2,5,10]} will respond {"result": 18}
// eg. /arrays with {"what": "multiply", "numbers": [1,2,5,10]} will respond {"result": 100}
// eg. /arrays with {"what": "double", "numbers": [1,2,5,10]} will respond {"result": [2,4,10,20]}
// if no what (or numbers) is provided:


"use strict";
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const sum = (inputArray) => {
  let sumOfElements = 0;
  inputArray.forEach(element => {
    sumOfElements += element;
  });
  return sumOfElements;
}

const multiply = (inputArray) => {
  let sumOfElements = 1;
  inputArray.forEach(element => {
    sumOfElements *= element;
  });
  return sumOfElements;
}

const double = (inputArray) => {
  return inputArray.map(e => e * 2);
}


app.post("/arrays", (req, res) => {

  //to add additional control if Numbers exist
  if (req.body.what == 'sum') {
    res.json({ 'result': sum(req.body.numbers) });
  } else if (req.body.what == 'double') {
    res.json({ 'result': double(req.body.numbers) });
  } else if (req.body.what == 'multiply') {
    res.json({ 'result': multiply(req.body.numbers) });
  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    })
  }
})

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
















let obj = {
  "what": "sum",
  "numbers": [1, 2, 5, 10]
}