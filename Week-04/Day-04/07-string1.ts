'use strict';
export { };

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function changeXtoY(text: string): string {

  if (text.includes("x")) {
    text = text.replace("x", "y");
    return changeXtoY(text)
  }
  return text

}


console.log(changeXtoY("Xxx, Yyy, Xxx, Aaa, Bbb"));
