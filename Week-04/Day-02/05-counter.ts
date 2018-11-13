/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */


'use strict';
export { };

class Counter {

  integer: number;

  constructor(int: number = 0) {
    this.integer = int;
  }

  addNumber(addNum: number = 1): void {
    this.integer += addNum;
  }

  get(): string {
    return this.integer.toString();
  }

  reset(): void {
    this.integer = 0;
  }
}

let counter01 = new Counter(5);
console.log(counter01.integer);

counter01.addNumber(10);
console.log(counter01.integer);

console.log(typeof counter01.get());

counter01.reset();
console.log(counter01.integer);






