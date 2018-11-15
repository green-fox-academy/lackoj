import { resolveTxt } from "dns";

'use strict';
export { };

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.


function addStar(text: string): string {

  if (text.lastIndexOf('*') === text.length - 2) {
    return text;
  }
  if (text.indexOf('*') === -1) {
    return addStar(text.slice(0, 1) + '*' + text.slice(1, text.length));
  }
  return addStar(text.slice(0, text.lastIndexOf('*') + 2) + '*' + text.slice(text.lastIndexOf('*') + 2, text.length));
}

console.log(addStar('ABCDE'))