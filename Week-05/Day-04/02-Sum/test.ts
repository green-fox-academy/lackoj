"use strict"
import { MyNumbers } from './sum';

var test = require('tape');

test("Testing sum method in MyNumbers class", (testCase) => {
  let testNumbers = new MyNumbers([2, 2, 2, 2, 2]);
  let actual = testNumbers.sum();

  testCase.plan(2);
  testCase.equal(actual, 10, "This should be ok");
  testCase.equal(actual, 2, "This should fail");
})