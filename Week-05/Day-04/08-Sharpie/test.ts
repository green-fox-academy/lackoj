"use strict";
import { Sharpie } from './sharpie';
var test = require('tape');

test("testing use method", (t) => {
  let blueSharpie = new Sharpie("blue", 2);
  t.equal(blueSharpie.inkAmount, 100);
  blueSharpie.use();
  t.equal(blueSharpie.inkAmount, 99);
  t.end();
})
