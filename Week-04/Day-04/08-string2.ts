'use strict';
export { };

// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function deleteAllX(text: string): string {

  if (text.includes("x")) {

    text = text.replace("x", "")
    return deleteAllX(text);

  } else if (text.includes("X")) {

    text = text.replace("X", "");
    return deleteAllX(text);
  }
  return text;

}

console.log(deleteAllX("Xxx, Yyy, Xxx, Aaa, Bbb"));
