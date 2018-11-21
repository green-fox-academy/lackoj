import { dominoes } from './dominoes';
import { Domino } from './domino';

dominoes.sort(function (a: Domino, b: Domino): number {
  return a.compareTo(b);
});

console.log(dominoes); //[[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]