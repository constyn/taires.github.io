//Replace math.random
//require('random-seed').create();
import Random from 'random-seed';
let rnd = new Random(2342);
Math.random = rnd.random;

import Engine from './engine';

export default new Engine();
