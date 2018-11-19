import { Flower } from './Flower';
import { Tree } from './Tree';
import { Garden } from './Garden';

'use strict';

//create flowers
let blueFlower = new Flower("blue");
let yellowFlower = new Flower("yellow");

//create trees
let purpleTree = new Tree("purple");
let orangeTree = new Tree("orange");

//create garden with plants
let secretGarden = new Garden();
secretGarden.addPlants(yellowFlower, blueFlower, purpleTree, orangeTree);

// test showgarden method
secretGarden.showGarden();

// test watering
secretGarden.watering(40);
secretGarden.watering(70);
