"use strict";
import { fibonacciByIndex } from './fibonacci';
var test = require('tape');

test("", (t) => {
  t.equal(fibonacciByIndex(5), 5);
  t.end();
})
