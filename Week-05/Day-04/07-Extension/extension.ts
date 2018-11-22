'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  }
  return c;
};

export function median(values) {

  values.sort(function (a, b) { return a - b; });

  let half = Math.floor(values.length / 2);

  if (values.length % 2) {
    return values[half];
  }
  else {
    return (values[half - 1] + values[half]) / 2.0;
  }
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].includes(character);
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}