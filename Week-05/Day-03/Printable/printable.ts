import { dominoes } from '../Comparator/dominoes';
"use strict"

export interface Printable {
  printAllFields(): void;
}

//check:
for (let domino of dominoes) {
  domino.printAllFields();
}
