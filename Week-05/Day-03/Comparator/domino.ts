import { Comparable } from "./comparator";

'use strict'


export class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }
  compareTo(a: Domino) {
    if (this.values[0] < a.values[0]) {
      return -1;
    }
    if (this.values[0] > a.values[0]) {
      return 1;
    }
    return 0;
  }
}


