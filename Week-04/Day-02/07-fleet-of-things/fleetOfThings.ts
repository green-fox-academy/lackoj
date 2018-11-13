import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

//give Thing class to all 1-4 elements, call complete() on the ones marked with x


let thing01 = new Thing("Get milk");
let thing02 = new Thing("Remove the obstacles");
let thing03 = new Thing("Stand up");
let thing04 = new Thing("Eat lunch");

thing03.complete();
thing04.complete();

fleet.add(thing01);
fleet.add(thing02);
fleet.add(thing03);
fleet.add(thing04);

fleet.print();