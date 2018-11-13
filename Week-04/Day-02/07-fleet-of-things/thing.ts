class Thing {
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
}

export { Thing };
