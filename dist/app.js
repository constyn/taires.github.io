webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Async; });
const listeners = [];

var numToLoad = 0;

let Async = class Async {

  constructor() {
    listeners.push(this);
    console.log("Pushing ", this);
    numToLoad++;
  }

  done() {
    numToLoad--;
    console.log("Loaded ", this);
    if (numToLoad === 0) {
      listeners.forEach(inst => {
        inst.onLoaded();
      });

      listeners.length = 0;
    }
  }

  onLoaded() {}

};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TILE_SIZE = 16;
/* harmony export (immutable) */ __webpack_exports__["b"] = TILE_SIZE;

const DEFAULT_TILESET = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4nO3dYahd13Xg8a0ZfxCxPpjaLmoITQiO5YS4WLbHJSkNkbE+1K0FThkXhdYgD/LggKFviOJQxRBQXOJ46CuYqajFRIwLfURDa5BTB0amEhkmpqlqi8REcSJMU0xGNE7QBzX4gwfNh3vXfT7rvXX3PmfvffY+d/9/X5x771n37Hvefcpb6+y1947HT338msNkPfvQ6ztKnn/q35/S10+7+/AtS6/n+ROXlo531eO1T+zf2Xn8ypl3lh7vO//j3/7u0vM/+6l7mo5/5a8+23msr7/b/fVl4d7zi/tuufuac85duHy58/zbV98KipfPsXH/ZwbFH7j/QOc6nH7pdK9/J2T84uVL53vF37TrA5340HH39e9yvCkAAKjbdaUHUCudSchfuvK877GO0+87NH4quH79SObrH+/sOJ3JthKvf779f97bn18yxrWP71oePj9OZ7LNxP/RXzvnNisBi9+/+fNDzy8kc/6vH77JOefc5+fP733gdueccydPnLnmnJ0Rb/kcL/2tc865nS8cXxovGf93vv2qc8653/zd3++873e+/eo155z75KfudM5trQjoioWMV1w4cfmac87dsXu3c25rRUBn/HKezfO7LBUBKgAAADRo9AqAzthqtfVeoc4cfI+7cVvft1987ddLu+HsDZ3Hr7grned9j3Wcft++8bVev/DMeWbzuO73qrX4oZUe6/zezFUd98rhxuON5/ueX/6905m/9sYbP1/6vr4KhhUvmbfO+P/h7/6m81gycjlOKgJikfG/OPvPay9+vxMvmb8cJxUB/f5SgZD/apvHuaWVkFBUAAAAaNBoFQDf7NzU5xma8Vnj1Jm573Hf5/3HTaMSINfvBjcb577b3p298H9nf5mfnR+nM/UH56+7+fFnf3hd53l5LELjdYWg9utXWqrfn6nGi/WXH+o8XrvvVBPxDz1xwDm39frlivdl/uKXP/qpc24zk75weZYBH5zf4/dVID74xS/N/zt7vHH/ZzoZ+JVL5zrHWxUBfZzQFQY9B0AqAlYlQj6f2DoH4NVtj4tFBQAAgAbtiO3jDr0XN9a9/6H3BiXO1ydcmr5nXLqPXb4/i8xfZeaLCsCcZOb7VKZuHafpuL7nubKvWwkoff30zzO0C0KLjbe0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';
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_TILESET;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_tilesets__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




let Entity = class Entity {

  constructor(properties) {
    this.props = _extends({}, __WEBPACK_IMPORTED_MODULE_0__defaults__["a" /* BASIC */], properties);
  }

  init(overrides) {
    Object.keys(overrides).forEach(key => {
      let ref = overrides[key];
      this[key] = () => {
        return ref(this);
      };
    });
  }

  getTile() {
    return this.props.tile;
  }

  render(ctx, x, y, neighbours) {
    __WEBPACK_IMPORTED_MODULE_1__render_tilesets__["a" /* default */].getContext(this.props.tileset).renderTile(ctx, x, y, this.getTile.call(this));
  }

};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(7);
//Replace math.random
__webpack_require__(5).create();



/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0__engine__["a" /* default */]());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * random-seed
 * https://github.com/skratchdot/random-seed
 *
 * This code was originally written by Steve Gibson and can be found here:
 *
 * https://www.grc.com/otg/uheprng.htm
 *
 * It was slightly modified for use in node, to pass jshint, and a few additional
 * helper functions were added.
 *
 * Copyright (c) 2013 skratchdot
 * Dual Licensed under the MIT license and the original GRC copyright/license
 * included below.
 */
/*	============================================================================
									Gibson Research Corporation
				UHEPRNG - Ultra High Entropy Pseudo-Random Number Generator
	============================================================================
	LICENSE AND COPYRIGHT:  THIS CODE IS HEREBY RELEASED INTO THE PUBLIC DOMAIN
	Gibson Research Corporation releases and disclaims ALL RIGHTS AND TITLE IN
	THIS CODE OR ANY DERIVATIVES. Anyone may be freely use it for any purpose.
	============================================================================
	This is GRC's cryptographically strong PRNG (pseudo-random number generator)
	for JavaScript. It is driven by 1536 bits of entropy, stored in an array of
	48, 32-bit JavaScript variables.  Since many applications of this generator,
	including ours with the "Off The Grid" Latin Square generator, may require
	the deteriministic re-generation of a sequence of PRNs, this PRNG's initial
	entropic state can be read and written as a static whole, and incrementally
	evolved by pouring new source entropy into the generator's internal state.
	----------------------------------------------------------------------------
	ENDLESS THANKS are due Johannes Baagoe for his careful development of highly
	robust JavaScript implementations of JS PRNGs.  This work was based upon his
	JavaScript "Alea" PRNG which is based upon the extremely robust Multiply-
	With-Carry (MWC) PRNG invented by George Marsaglia. MWC Algorithm References:
	http://www.GRC.com/otg/Marsaglia_PRNGs.pdf
	http://www.GRC.com/otg/Marsaglia_MWC_Generators.pdf
	----------------------------------------------------------------------------
	The quality of this algorithm's pseudo-random numbers have been verified by
	multiple independent researchers. It handily passes the fermilab.ch tests as
	well as the "diehard" and "dieharder" test suites.  For individuals wishing
	to further verify the quality of this algorithm's pseudo-random numbers, a
	256-megabyte file of this algorithm's output may be downloaded from GRC.com,
	and a Microsoft Windows scripting host (WSH) version of this algorithm may be
	downloaded and run from the Windows command prompt to generate unique files
	of any size:
	The Fermilab "ENT" tests: http://fourmilab.ch/random/
	The 256-megabyte sample PRN file at GRC: https://www.GRC.com/otg/uheprng.bin
	The Windows scripting host version: https://www.GRC.com/otg/wsh-uheprng.js
	----------------------------------------------------------------------------
	Qualifying MWC multipliers are: 187884, 686118, 898134, 1104375, 1250205,
	1460910 and 1768863. (We use the largest one that's < 2^21)
	============================================================================ */

var stringify = __webpack_require__(6);

/*	============================================================================
This is based upon Johannes Baagoe's carefully designed and efficient hash
function for use with JavaScript.  It has a proven "avalanche" effect such
that every bit of the input affects every bit of the output 50% of the time,
which is good.	See: http://baagoe.com/en/RandomMusings/hash/avalanche.xhtml
============================================================================
*/
var Mash = function () {
	var n = 0xefc8249d;
	var mash = function (data) {
		if (data) {
			data = data.toString();
			for (var i = 0; i < data.length; i++) {
				n += data.charCodeAt(i);
				var h = 0.02519603282416938 * n;
				n = h >>> 0;
				h -= n;
				h *= n;
				n = h >>> 0;
				h -= n;
				n += h * 0x100000000; // 2^32
			}
			return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
		} else {
			n = 0xefc8249d;
		}
	};
	return mash;
};

var uheprng = function (seed) {
	return (function () {
		var o = 48; // set the 'order' number of ENTROPY-holding 32-bit values
		var c = 1; // init the 'carry' used by the multiply-with-carry (MWC) algorithm
		var p = o; // init the 'phase' (max-1) of the intermediate variable pointer
		var s = new Array(o); // declare our intermediate variables array
		var i; // general purpose local
		var j; // general purpose local
		var k = 0; // general purpose local

		// when our "uheprng" is initially invoked our PRNG state is initialized from the
		// browser's own local PRNG. This is okay since although its generator might not
		// be wonderful, it's useful for establishing large startup entropy for our usage.
		var mash = new Mash(); // get a pointer to our high-performance "Mash" hash

		// fill the array with initial mash hash values
		for (i = 0; i < o; i++) {
			s[i] = mash(Math.random());
		}

		// this PRIVATE (internal access only) function is the heart of the multiply-with-carry
		// (MWC) PRNG algorithm. When called it returns a pseudo-random number in the form of a
		// 32-bit JavaScript fraction (0.0 to <1.0) it is a PRIVATE function used by the default
		// [0-1] return function, and by the random 'string(n)' function which returns 'n'
		// characters from 33 to 126.
		var rawprng = function () {
			if (++p >= o) {
				p = 0;
			}
			var t = 1768863 * s[p] + c * 2.3283064365386963e-10; // 2^-32
			return s[p] = t - (c = t | 0);
		};

		// this EXPORTED function is the default function returned by this library.
		// The values returned are integers in the range from 0 to range-1. We first
		// obtain two 32-bit fractions (from rawprng) to synthesize a single high
		// resolution 53-bit prng (0 to <1), then we multiply this by the caller's
		// "range" param and take the "floor" to return a equally probable integer.
		var random = function (range) {
			return Math.floor(range * (rawprng() + (rawprng() * 0x200000 | 0) * 1.1102230246251565e-16)); // 2^-53
		};

		// this EXPORTED function 'string(n)' returns a pseudo-random string of
		// 'n' printable characters ranging from chr(33) to chr(126) inclusive.
		random.string = function (count) {
			var i;
			var s = '';
			for (i = 0; i < count; i++) {
				s += String.fromCharCode(33 + random(94));
			}
			return s;
		};

		// this PRIVATE "hash" function is used to evolve the generator's internal
		// entropy state. It is also called by the EXPORTED addEntropy() function
		// which is used to pour entropy into the PRNG.
		var hash = function () {
			var args = Array.prototype.slice.call(arguments);
			for (i = 0; i < args.length; i++) {
				for (j = 0; j < o; j++) {
					s[j] -= mash(args[i]);
					if (s[j] < 0) {
						s[j] += 1;
					}
				}
			}
		};

		// this EXPORTED "clean string" function removes leading and trailing spaces and non-printing
		// control characters, including any embedded carriage-return (CR) and line-feed (LF) characters,
		// from any string it is handed. this is also used by the 'hashstring' function (below) to help
		// users always obtain the same EFFECTIVE uheprng seeding key.
		random.cleanString = function (inStr) {
			inStr = inStr.replace(/(^\s*)|(\s*$)/gi, ''); // remove any/all leading spaces
			inStr = inStr.replace(/[\x00-\x1F]/gi, ''); // remove any/all control characters
			inStr = inStr.replace(/\n /, '\n'); // remove any/all trailing spaces
			return inStr; // return the cleaned up result
		};

		// this EXPORTED "hash string" function hashes the provided character string after first removing
		// any leading or trailing spaces and ignoring any embedded carriage returns (CR) or Line Feeds (LF)
		random.hashString = function (inStr) {
			inStr = random.cleanString(inStr);
			mash(inStr); // use the string to evolve the 'mash' state
			for (i = 0; i < inStr.length; i++) { // scan through the characters in our string
				k = inStr.charCodeAt(i); // get the character code at the location
				for (j = 0; j < o; j++) { //	"mash" it into the UHEPRNG state
					s[j] -= mash(k);
					if (s[j] < 0) {
						s[j] += 1;
					}
				}
			}
		};

		// this EXPORTED function allows you to seed the random generator.
		random.seed = function (seed) {
			if (typeof seed === 'undefined' || seed === null) {
				seed = Math.random();
			}
			if (typeof seed !== 'string') {
				seed = stringify(seed, function (key, value) {
					if (typeof value === 'function') {
						return (value).toString();
					}
					return value;
				});
			}
			random.initState();
			random.hashString(seed);
		};

		// this handy exported function is used to add entropy to our uheprng at any time
		random.addEntropy = function ( /* accept zero or more arguments */ ) {
			var args = [];
			for (i = 0; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
			hash((k++) + (new Date().getTime()) + args.join('') + Math.random());
		};

		// if we want to provide a deterministic startup context for our PRNG,
		// but without directly setting the internal state variables, this allows
		// us to initialize the mash hash and PRNG's internal state before providing
		// some hashing input
		random.initState = function () {
			mash(); // pass a null arg to force mash hash to init
			for (i = 0; i < o; i++) {
				s[i] = mash(' '); // fill the array with initial mash hash values
			}
			c = 1; // init our multiply-with-carry carry
			p = o; // init our phase
		};

		// we use this (optional) exported function to signal the JavaScript interpreter
		// that we're finished using the "Mash" hash function so that it can free up the
		// local "instance variables" is will have been maintaining.  It's not strictly
		// necessary, of course, but it's good JavaScript citizenship.
		random.done = function () {
			mash = null;
		};

		// if we called "uheprng" with a seed value, then execute random.seed() before returning
		if (typeof seed !== 'undefined') {
			random.seed(seed);
		}

		// Returns a random integer between 0 (inclusive) and range (exclusive)
		random.range = function (range) {
			return random(range);
		};

		// Returns a random float between 0 (inclusive) and 1 (exclusive)
		random.random = function () {
			return random(Number.MAX_VALUE - 1) / Number.MAX_VALUE;
		};

		// Returns a random float between min (inclusive) and max (exclusive)
		random.floatBetween = function (min, max) {
			return random.random() * (max - min) + min;
		};

		// Returns a random integer between min (inclusive) and max (inclusive)
		random.intBetween = function (min, max) {
			return Math.floor(random.random() * (max - min + 1)) + min;
		};

		// when our main outer "uheprng" function is called, after setting up our
		// initial variables and entropic state, we return an "instance pointer"
		// to the internal anonymous function which can then be used to access
		// the uheprng's various exported functions.  As with the ".done" function
		// above, we should set the returned value to 'null' once we're finished
		// using any of these functions.
		return random;
	}());
};

// Modification for use in node:
uheprng.create = function (seed) {
	return new uheprng(seed);
};
module.exports = uheprng;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

exports = module.exports = stringify
exports.getSerialize = serializer

function stringify(obj, replacer, spaces, cycleReplacer) {
  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
  var stack = [], keys = []

  if (cycleReplacer == null) cycleReplacer = function(key, value) {
    if (stack[0] === value) return "[Circular ~]"
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
  }

  return function(key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this)
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
    }
    else stack.push(value)

    return replacer == null ? value : replacer.call(this, key, value)
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Engine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_async__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_game__ = __webpack_require__(8);



const PADDING = 20;

let Engine = class Engine extends __WEBPACK_IMPORTED_MODULE_0__core_async__["a" /* default */] {

  constructor() {
    super();
    this.prepareDOM();

    let game = new __WEBPACK_IMPORTED_MODULE_1__game_game__["a" /* default */]();
    game.initialize({}, this.ctx);
    game.render(this.ctx);

    this.done();
  }

  prepareDOM() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.append(this.canvas);
    this.canvas.width = document.body.clientWidth - PADDING;
    this.canvas.height = window.innerHeight - PADDING;

    document.body.style = 'background-color: #808080; text-align: center;';
    this.canvas.style = 'margin: 0 auto; border: 1px solid #000;';
  }

};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__world__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const DEFAULTS = {
  width: 100,
  height: 100
};

let Game = class Game {

  initialize(props, ctx) {
    this.setup = _extends({}, DEFAULTS, {
      props
    });

    this.world = new __WEBPACK_IMPORTED_MODULE_0__world__["a" /* default */](DEFAULTS);

    let x = 0,
        y = 0;

    document.addEventListener('keyup', e => {
      switch (e.key) {
        case 'ArrowRight':
          x = Math.min(DEFAULTS.width, x + 1);
          break;
        case 'ArrowLeft':
          x = Math.max(0, x - 1);
          break;
        case 'ArrowDown':
          y = Math.min(DEFAULTS.height, y + 1);
          break;
        case 'ArrowUp':
          y = Math.max(0, y - 1);
          break;
      }

      this.world.render(ctx, x, y);
    });
  }

  render(ctx) {
    this.world.render(ctx, 0, 0);
  }

};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return World; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_async__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__items__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__ = __webpack_require__(1);




let World = class World extends __WEBPACK_IMPORTED_MODULE_0__core_async__["a" /* default */] {

  constructor(options) {
    super();

    let width = options.width,
        height = options.height;


    this.width = width;
    this.height = height;

    this.biomes = [];
    this.layers = [];

    for (let h = 0; h < height; h++) {
      let row = [];
      for (let w = 0; w < width; w++) {
        row.push(Math.random() > 0 ? 0 : 1);
      }
      this.biomes.push(row);
    }
    this.spawnBiome(0, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random());
    this.spawnBiome(1, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random());
    this.spawnBiome(2, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random());
    this.spawnBiome(3, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random());
    this.spawnBiome(4, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random());

    this.layers.push(this.buildGround());
    this.layers.push(this.buildBlocks());
    this.done();
  }

  spawnBiome(num, startX, startY, strength) {
    if (startX < 0 || startX > this.width - 1 || startY < 0 || startY > this.height - 1) return;

    let nextStrength = strength - Math.random() * .02;
    if (nextStrength > 0 && this.biomes[startY][startX] !== num) {
      this.biomes[startY][startX] = num;

      for (let xof of [-1, 0, 1]) {
        for (let yof of [-1, 0, 1]) {
          if (xof !== 0 || yof !== 0 && Math.random() < strength) {
            this.spawnBiome(num, startX + xof, startY + yof, nextStrength);
          }
        }
      }
    }
  }

  buildGround() {
    let groundLayer = [];
    for (let h = 0; h < this.height; h++) {
      let row = [];
      for (let w = 0; w < this.width; w++) {
        row.push(__WEBPACK_IMPORTED_MODULE_1__items__["a" /* default */].getItem('ground', { biome: this.biomes[w][h]
        }, {}));
      }
      groundLayer.push(row);
    }

    return groundLayer;
  }

  buildBlocks() {
    let blocksLayer = [];
    for (let h = 0; h < this.height; h++) {
      let row = [];
      for (let w = 0; w < this.width; w++) {
        if (Math.random() < .1) {
          row.push(__WEBPACK_IMPORTED_MODULE_1__items__["a" /* default */].getItem('block', { biome: this.biomes[w][h]
          }, {
            getTile: inst => {
              return inst.props.biome * 32 * 3 + 16;
            }
          }));
        } else {
          row.push(undefined);
        }
      }
      blocksLayer.push(row);
    }

    return blocksLayer;
  }

  renderBiomes(ctx, x, y) {

    let scWidth = document.body.clientWidth / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */];
    let scHeight = window.innerHeight / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */];

    for (let h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        let val = this.biomes[h][w];
        ctx.fillStyle = "rgb(" + (125 + val * 16) + "," + (125 - val * 16) + "," + 125 + ")";
        ctx.fillRect(w, h, 1, 1);
      }
    }

    //ctx.rect(x, y, scWidth, scHeight); ctx.stroke();
  }

  render(ctx, x, y) {
    let width = this.width,
        height = this.height,
        layers = this.layers;


    let scWidth = document.body.clientWidth;
    let scHeight = window.innerHeight;

    ctx.clearRect(0, 0, scWidth, scHeight);
    for (let l = 0; l < this.layers.length; l++) {
      let layer = layers[l];
      for (let i = 0; i < scHeight / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */]; i++) {
        let row = layer[i + y];
        for (let j = 0; j < scWidth / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */]; j++) {
          let obj = row[j + x];
          if (obj) {
            obj.render(ctx, i, j);
          }
        }
      }
    }

    this.renderBiomes(ctx, x, y);
  }

};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_ground_entity__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_wall_entity__ = __webpack_require__(16);



const keys = {
  'ground': [__WEBPACK_IMPORTED_MODULE_0__blocks_ground_entity__["a" /* default */]],
  'block': [__WEBPACK_IMPORTED_MODULE_1__blocks_wall_entity__["a" /* default */]]
};

let Items = class Items {

  static getItem(type, props, overrides) {
    let list = keys[type];
    if (!list) {
      throw new Error(`Unable to find item for type ${type}`);
    }

    const rand = Math.floor(Math.random() * list.length),
          klass = list[rand],
          instance = new klass(props);

    if (overrides) {
      instance.init(overrides);
    }

    return instance;
  }

};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroundBlock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


const COLS = 32;
const BIOME_MAP = {
  "0": 0,
  "1": COLS * 3,
  "2": COLS * 6,
  "3": COLS * 9,
  "4": COLS * 12
};

let GroundBlock = class GroundBlock extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {

  constructor(properties) {
    super(_extends({}, properties, {
      tile: 1,
      name: 'ground',
      block: true
    }));
  }

  getTile() {
    return BIOME_MAP[this.props.biome] + Math.round(Math.random() * 3);
  }

};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASIC; });
const BASIC = {
  tileset: 'default',
  block: false,
  tile: 0,

  //rendering
  neighbourDependent: false
};



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile_context__ = __webpack_require__(14);



let Tilesets = class Tilesets {

  constructor() {
    this.tilesets = {};
    this.registerContext('default', new __WEBPACK_IMPORTED_MODULE_1__tile_context__["a" /* default */]({ tileset: __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* DEFAULT_TILESET */], cols: 32 }));
  }

  loadRemote(hash, remote) {
    this.registerContext(hash, new __WEBPACK_IMPORTED_MODULE_1__tile_context__["a" /* default */]({ remote }));
  }

  getContext(name) {
    return this.tilesets[name];
  }

  registerContext(name, context) {
    this.tilesets[name] = context;
  }

};


/* harmony default export */ __webpack_exports__["a"] = (new Tilesets());

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_async__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax_ajax_loader__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__ = __webpack_require__(1);




let TileContext = class TileContext extends __WEBPACK_IMPORTED_MODULE_0__core_async__["a" /* default */] {

  constructor(options) {
    super();
    this.options = options;
    const remote = options.remote,
          tileset = options.tileset,
          cols = options.cols;


    if (remote) {
      __WEBPACK_IMPORTED_MODULE_1__ajax_ajax_loader__["a" /* default */].load(remote).then(data => {
        this.processImage(data.image, data.columns);
      });
    } else if (tileset, cols) {
      this.processImage(tileset, cols);
    } else {
      throw new Error("Please provide (remote || tileset, colLength) as options for TileContext");
    }
  }

  processImage(tileset, colLength) {
    this.tilesetImage = new Image();
    this.tilesetImage.src = tileset;
    this.tilesetImage.onload = () => {
      this.done();
    };
    this.colLength = colLength;
  }

  renderTile(ctx, row, col, tile) {
    var tileRow = tile / this.colLength | 0; // Bitwise OR operation
    var tileCol = tile % this.colLength | 0;
    ctx.drawImage(this.tilesetImage, tileCol * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], tileRow * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], col * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], row * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */]);
  }

};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loader; });
let loader = class loader {

  static load(url) {
    return fetch(url).then(function (response) {
      return response.json();
    });
  }

};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallBlock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



let WallBlock = class WallBlock extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {

  constructor(props) {
    super(_extends({
      block: true,
      tile: 15
    }, props));
  }

  getTile() {
    return 7 + this.props.biome;
  }

};


/***/ })
],[3]);