"use strict";

abstract class Instruments {
  protected constructor(protected name: string) { };
}

abstract class StringedInstrument extends Instruments {
  constructor(name: string, protected numberOfStrings: number) {
    super(name);
  }

  abstract sound();

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

}

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings = 6) {
    super('Electric Guitar', numberOfStrings);
  }

  sound() {
    return 'Twang';
  }
}

export class BassGuitar extends StringedInstrument {

  constructor(numberOfStrings = 4) {
    super('Bass Guitar', numberOfStrings);
  }

  sound() {
    return 'Duum-duum-duum';
  }
}

export class Violin extends StringedInstrument {

  constructor(numberOfStrings = 4) {
    super('Violin', numberOfStrings);
  }

  sound() {
    return 'Screech';
  }
}

