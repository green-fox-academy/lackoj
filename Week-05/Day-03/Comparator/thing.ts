'use strict';

import { Comparable } from './comparator';


export class Thing implements Comparable {
  private _name: string;
  private completed: boolean;

  constructor(name: string) {
    this._name = name;
  }

  public complete() {
    this.completed = true;
  }

  get name() {
    return this._name;
  }
  get isComplete() {
    return this.completed;
  }

  compareTo(a: Thing) {
    if (this.completed === a.completed) {
      return -1;
    } else if (this.completed !== a.completed) {
      return 1;
    }
    return 0;
  }
}

