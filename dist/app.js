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

const DEFAULT_TILESET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTAyLTA5VDEwOjQ1OjU1KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wMi0wOVQxODoyODoyNSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wMi0wOVQxODoyODoyNSswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozZDI0OTFkZS1hZDAzLTQ3NDAtYmU4Mi0wMDY5MmUxNWVjMjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlNjNhM2YtNDNlYy00NThiLTk2ZWItNTQyMmU3MGM0YzZhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlNjNhM2YtNDNlYy00NThiLTk2ZWItNTQyMmU3MGM0YzZhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYmU2M2EzZi00M2VjLTQ1OGItOTZlYi01NDIyZTcwYzRjNmEiIHN0RXZ0OndoZW49IjIwMTgtMDItMDlUMTA6NDU6NTUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzgxZTg5NjEtZjM3OS00MTk3LWJiZWYtNmNlZjAyMTk2Njk1IiBzdEV2dDp3aGVuPSIyMDE4LTAyLTA5VDE4OjI1OjIwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNkMjQ5MWRlLWFkMDMtNDc0MC1iZTgyLTAwNjkyZTE1ZWMyNSIgc3RFdnQ6d2hlbj0iMjAxOC0wMi0wOVQxODoyODoyNSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvlh5nAAAFcxSURBVHic7d1/tF1VdS/weVs6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";
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

  render(ctx, x, y, neigh) {
    __WEBPACK_IMPORTED_MODULE_1__render_tilesets__["a" /* default */].getContext(this.props.tileset).renderTile(ctx, x, y, this.getTile.call(this, neigh));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_seed__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_seed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_seed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine__ = __webpack_require__(7);
//Replace math.random
//require('random-seed').create();

let rnd = new __WEBPACK_IMPORTED_MODULE_0_random_seed___default.a(1234);
Math.random = rnd.random;



/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1__engine__["a" /* default */]());

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
  width: 60,
  height: 60
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils__ = __webpack_require__(17);





const MAX_HEIGHT = 10;

let World = class World extends __WEBPACK_IMPORTED_MODULE_0__core_async__["a" /* default */] {

  constructor(options) {
    super();

    let width = options.width,
        height = options.height;


    this.width = width;
    this.height = height;

    this.biomes = [];
    this.heights = Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["b" /* initializeMatrix */])(width, height, 2);

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

    this.renderHill(3, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random());
    this.renderHill(4, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random());
    // this.renderHill(3, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random());
    // this.renderHill(4, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random());


    for (var i = 0; i < MAX_HEIGHT; i++) {
      this.layers.push(this.buildGround(i));
    }

    //this.layers.push(this.buildBlocks());
    this.done();
  }

  renderHill(height, startX, startY, strength) {
    if (startX < 0 || startX > this.width - 1 || startY < 0 || startY > this.height - 1) return;

    let nextStrength = strength - Math.random() * .02;
    if (nextStrength > 0 && this.heights[startY][startX] !== height) {
      this.heights[startY][startX] = height;

      for (let xof of [-1, 0, 1]) {
        for (let yof of [-1, 0, 1]) {
          if (xof !== 0 || yof !== 0 && Math.random() < strength) {
            this.renderHill(height, startX + xof, startY + yof, nextStrength);
          }
        }
      }
    }
  }

  // normalizeHeights() {
  //   let normalized = [];
  //   for (let i = 0; i < this.height; i++) {
  //     let row = [];
  //     for (let j = 0; j < this.width; j++) {
  //       row.push(Math.ceil(getNeightbours(this.heights, j, i).reduce((memo, item) => {
  //         return (memo + item) / 2;
  //       }, 1)));
  //     }
  //     normalized.push(row);
  //   }
  //
  //   this.heights = normalized;
  // }

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

  buildGround(height) {
    let groundLayer = [];
    for (let h = 0; h < this.height; h++) {
      let row = [];
      for (let w = 0; w < this.width; w++) {
        if (this.heights[h][w] > height) {
          row.push(__WEBPACK_IMPORTED_MODULE_1__items__["a" /* default */].getItem('ground', {
            biome: this.biomes[h][w],
            height: this.heights[h][w]
          }, {}));
        } else {
          row.push(undefined);
        }
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
    for (let l = 0; l < layers.length; l++) {
      let layer = layers[l];
      for (let i = 0; i < Math.min(scHeight / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], layer.length); i++) {
        let row = layer[i + y];
        if (row) {
          for (let j = 0; j < Math.min(scWidth / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], row.length); j++) {
            let obj = row[j + x];
            if (obj) {
              obj.render(ctx, j, i, Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["a" /* getNeightbours */])(layer, j + x, i + y, true));
            }
          }
        }
      }
    }

    //this.renderBiomes(ctx, x, y)
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

  getTile(neigh) {
    if (!this.props._tile) {
      this.props._tile = BIOME_MAP[this.props.biome]; // + Math.round(Math.random() * 3)
    }
    if (neigh[6] === undefined) {
      return this.props._tile + 32;
    } else if (neigh[3] === undefined) {
      return this.props._tile + 64;
    } else if (neigh[4] === undefined) {
      return this.props._tile + 65;
    } else if (neigh[1] === undefined) {
      return this.props._tile + 66;
    }
    return this.props._tile;
  }

  render(ctx, x, y, neigh) {
    super.render(ctx, x, y, neigh);
    //ctx.fillText(this.props.height,x*16 +2,y*16 + 10);
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

  renderTile(ctx, col, row, tile) {
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


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = initializeMatrix;
/* harmony export (immutable) */ __webpack_exports__["a"] = getNeightbours;
function initializeMatrix(width, height, value) {

  let matrix = [];

  for (let h = 0; h < height; h++) {
    let row = [];
    for (let w = 0; w < width; w++) {
      let val = typeof value === 'function' ? value() : value;
      row.push(val);
    }
    matrix.push(row);
  };

  return matrix;
}

function getNeightbours(matrix, x, y, pushUndefine = false) {
  let arr = [],
      len = matrix[0].length;

  for (let j = -1; j < 2; j++) {
    for (let i = -1; i < 2; i++) {

      if (i !== 0 || j !== 0) {
        if (x + i > -1 && x + i < len && y + j > -1 && y + j < matrix.length) {
          arr.push(matrix[y + j][x + i]);
        } else if (pushUndefine) {
          arr.push(undefined);
        }
      }
    }
  }

  return arr;
}

/***/ })
],[3]);