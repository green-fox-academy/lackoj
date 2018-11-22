"use strict";
import { checkIfAnagram } from './anagram';
var test = require('tape');

test("testing apple", (t) => {

  let actual = checkIfAnagram("Silent", "Listen");
  let expected = true;

  t.equal(actual, expected);
  t.end();
})
