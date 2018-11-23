import { createDictionary } from './count-letters';
"use strict";
var test = require('tape');


test("testing count-letters", (t) => {
  t.plan(3);

  let actual1 = createDictionary("aaabbbccc");
  let expected1 = { a: 3, b: 3, c: 3 };
  t.deepEqual(actual1, expected1, "lowercase letters - ordered");

  let actual2 = createDictionary("abcabcabc");
  let expected2 = { a: 3, b: 3, c: 3 };
  t.deepEqual(actual2, expected2, "lowercase letters - unodered");

  let actual3 = createDictionary("aabbccABC");
  let expected3 = { a: 3, b: 3, c: 3 };
  t.deepEqual(actual3, expected3, "all variations");

})
