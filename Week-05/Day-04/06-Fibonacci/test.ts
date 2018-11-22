"use strict";
import { fibonacciByIndex } from './fibonacci';
var test = require('tape');

test("", (t) => {

  let actual = fibonacciByIndex(5);
  let expected = 5;

  t.equal(actual, expected);
  t.end();
})
