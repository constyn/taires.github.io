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

const DEFAULT_TILESET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTAyLTA5VDEwOjQ1OjU1KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wMi0xMVQxMzowMzozMSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wMi0xMVQxMzowMzozMSswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiMWQyMGY0Ny0wYjBjLTRjNzctYjlhZi0zODc2NjkzYzdjYjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlNjNhM2YtNDNlYy00NThiLTk2ZWItNTQyMmU3MGM0YzZhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlNjNhM2YtNDNlYy00NThiLTk2ZWItNTQyMmU3MGM0YzZhIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDpmYmU2M2EzZi00M2VjLTQ1OGItOTZlYi01NDIyZTcwYzRjNmE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYmU2M2EzZi00M2VjLTQ1OGItOTZlYi01NDIyZTcwYzRjNmEiIHN0RXZ0OndoZW49IjIwMTgtMDItMDlUMTA6NDU6NTUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzgxZTg5NjEtZjM3OS00MTk3LWJiZWYtNmNlZjAyMTk2Njk1IiBzdEV2dDp3aGVuPSIyMDE4LTAyLTA5VDE4OjI1OjIwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmIxZDIwZjQ3LTBiMGMtNGM3Ny1iOWFmLTM4NzY2OTNjN2NiMCIgc3RFdnQ6d2hlbj0iMjAxOC0wMi0xMVQxMzowMzozMSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNp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";
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

  getTile(neigh) {
    return this.props.tile;
  }

  render(ctx, x, y, opt) {
    let tile = opt.tile,
        neigh = opt.neigh,
        tileToRender = tile || this.getTile.call(this, neigh);


    __WEBPACK_IMPORTED_MODULE_1__render_tilesets__["a" /* default */].getContext(this.props.tileset).renderTile(ctx, x, y, tileToRender);
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

let rnd = new __WEBPACK_IMPORTED_MODULE_0_random_seed___default.a(2342);
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
  width: 200,
  height: 200
};

let Game = class Game {

  initialize(props, ctx) {
    this.setup = _extends({}, DEFAULTS, {
      props
    });

    this.world = new __WEBPACK_IMPORTED_MODULE_0__world__["a" /* default */](DEFAULTS);

    let x = 0,
        y = 0,
        inc = 10;

    document.addEventListener('keydown', e => {
      switch (e.key) {
        case 'ArrowRight':
          x = Math.min(DEFAULTS.width, x + inc);
          break;
        case 'ArrowLeft':
          x = Math.max(0, x - inc);
          break;
        case 'ArrowDown':
          y = Math.min(DEFAULTS.height, y + inc);
          break;
        case 'ArrowUp':
          y = Math.max(0, y - inc);
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

    this.biomes = Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["b" /* initializeMatrix */])(width, height, 2);

    for (let i = 1; i < 6; i++) {
      this.spawnBiome(i, Math.round(Math.random() * width), Math.round(Math.random() * height), .2 + Math.random() * .8);
    }
    // this.spawnBiome(1, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random()) this.spawnBiome(2, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random()) this.spawnBiome(3,
    // Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random()) this.spawnBiome(4, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random())

    for (let i = 0; i < 5; i++) {
      let x = Math.round(Math.random() * width),
          y = Math.round(Math.random() * height),
          hh = 3 + Math.round(Math.random() * 4);

      this.renderHill(3, x, y, .09);
      this.renderHill(4, x, y, .06);
      this.renderHill(5, x, y, .03);
    }

    //this.renderHill(3, 30, 30, .05);
    for (var i = 0; i < MAX_HEIGHT; i++) {
      this.layers.push(this.buildGround(i));
    }

    //this.layers.push(this.buildBlocks());
    this.done();
  }

  renderHill(height, x, y, strength) {
    let ws = this.width * strength,
        hs = this.height * strength;

    for (let i = Math.max(0, x - ws); i < Math.min(this.width, x + ws); i++) {
      for (let j = Math.max(0, y - hs); j < Math.min(this.height, y + hs); j++) {
        let c1 = Math.abs(x - i),
            c2 = Math.abs(y - j);
        if (Math.sqrt(c1 * c1 + c2 * c2) < ws) this.heights[j][i] = height;
      }
    }
  }

  // normalizeHeights() {   let normalized = [];   for (let i = 0; i < this.height; i++) {     let row = [];     for (let j = 0; j < this.width; j++) {       row.push(Math.ceil(getNeightbours(this.heights, j, i).reduce((memo, item) => {
  // return (memo + item) / 2;       }, 1)));     }     normalized.push(row);   }
  //
  //   this.heights = normalized; }

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
    for (let l = 0; l < layers.length - 1; l++) {
      let layer = layers[l];
      for (let i = 0; i < Math.min(scHeight / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], layer.length); i++) {
        let row = layer[i + y];
        if (row) {
          for (let j = 0; j < Math.min(scWidth / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], row.length); j++) {
            let obj = row[j + x];
            if (obj) {
              obj.render(ctx, j, i, {
                neigh: Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["a" /* getNeightbours */])(layer, j + x, i + y, true),
                topNeigh: Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["a" /* getNeightbours */])(layers[l + 1], j + x, i + y, true)
              });
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
      this.props.renderTile = this.props._tile + Math.round(Math.random() * 3);
    }

    return this.props.renderTile;
  }

  render(ctx, x, y, opt) {
    super.render(ctx, x, y, { tile: this.props.renderTile });
    let neigh = opt.neigh,
        topNeigh = opt.topNeigh,
        tile;


    if (neigh) {
      let tile;

      if (neigh[6] === undefined) {
        /*
        super.render(ctx, x, y + 1, {
          tile: this.props.renderTile + COLS
        })
        */

        super.render(ctx, x, y, {
          tile: this.props.renderTile + COLS
        });
        return;

        if (neigh[3] === undefined && neigh[4] == undefined && neigh[1] === undefined) {
          tile = this.props._tile + COLS * 2 + 10;
        } else if (neigh[3] === undefined && neigh[4] == undefined) {
          tile = this.props._tile + 10;
        } else if (neigh[3] === undefined && neigh[1] === undefined) {
          tile = this.props._tile + 12;
        } else if (neigh[4] === undefined && neigh[1] === undefined) {
          tile = this.props._tile + 12 + COLS;
        } else if (neigh[1] === undefined) {
          tile = this.props._tile + 11;
        } else if (neigh[3] === undefined) {
          tile = this.props._tile + COLS * 2 + 7;
        } else if (neigh[4] === undefined) {
          tile = this.props._tile + COLS * 2 + 9;
        } else {
          tile = this.props._tile + COLS * 2 + 8;
        }
      } else if (neigh[1] === undefined) {
        if (neigh[3] === undefined && neigh[4] === undefined) {
          tile = this.props._tile + COLS + 10;
        } else if (neigh[3] === undefined) {
          tile = this.props._tile + 7;
        } else if (neigh[4] === undefined) {
          tile = this.props._tile + 9;
        } else {
          tile = this.props._tile + 8;
        }
      } else if (neigh[3] === undefined && neigh[4] === undefined) {
        tile = this.props._tile + 11 + COLS;
      } else if (neigh[4] === undefined) {
        tile = this.props._tile + COLS + 9;
      } else if (neigh[3] === undefined) {
        tile = this.props._tile + COLS + 7;
      }

      if (tile) {
        super.render(ctx, x, y, { tile });
      }

      if (topNeigh[1] !== undefined) {
        if (topNeigh[0] === undefined) {
          super.render(ctx, x, y, {
            tile: this.props._tile + 13
          });
        } else if (topNeigh[3] !== undefined) {
          super.render(ctx, x, y, {
            tile: this.props._tile + 17
          });
        } else {
          super.render(ctx, x, y, {
            tile: this.props._tile + 14
          });
        }
      } else if (topNeigh[0] !== undefined) {

        if (topNeigh[3] !== undefined) {
          super.render(ctx, x, y, {
            tile: this.props._tile + 16
          });
        } else {
          super.render(ctx, x, y, {
            tile: this.props._tile + 15
          });
        }
      } else if (topNeigh[1] === undefined && topNeigh[3] !== undefined) {
        super.render(ctx, x, y, {
          tile: this.props._tile + 18
        });
      }

      //ctx.fillText(this.props.height, x * 16 + 2, y * 16 + 10);
    }
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
    var m_canvas = document.createElement('canvas');

    this.tilesetImage.src = tileset;
    this.tilesetImage.onload = () => {
      this.tilesetImage.onload = undefined;

      m_canvas.width = this.tilesetImage.width;
      m_canvas.height = this.tilesetImage.height;
      var m_context = m_canvas.getContext("2d");
      m_context.drawImage(this.tilesetImage, 0, 0);
      for (let i = 0; i < 6; i++) {
        this.buildBlockTexture(m_context, 0, i * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 3);
      }
      this.tilesetImage.src = m_canvas.toDataURL();

      //document.body.appendChild(this.tilesetImage);
      this.done();
    };
    this.colLength = colLength;
  }

  buildBlockTexture(ctx, startX, startY) {
    let color = ctx.getImageData(startX, startY, 1, 1),
        highlightColor = ctx.getImageData(startX, startY, 1, 1),
        darkColor = ctx.getImageData(startX, startY, 1, 1),
        slopeColor = ctx.getImageData(startX, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], 1, 1),
        darkSlopeColor = ctx.getImageData(startX, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], 1, 1);

    highlightColor.data[0] += 15;
    highlightColor.data[1] += 15;
    highlightColor.data[2] += 15;

    darkColor.data[0] -= 15;
    darkColor.data[1] -= 15;
    darkColor.data[2] -= 15;

    darkSlopeColor.data[0] -= 15;
    darkSlopeColor.data[1] -= 15;
    darkSlopeColor.data[2] -= 15;

    ctx.fillStyle = `rgb(${color.data[0]}, ${color.data[1]}, ${color.data[2]})`;
    ctx.fillRect(startX, startY, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 4, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */]);
    ctx.fillRect(startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 7, startY, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 12, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 3);
    ctx.fillStyle = `rgb(${slopeColor.data[0]}, ${slopeColor.data[1]}, ${slopeColor.data[2]})`;
    ctx.fillRect(startX, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 4, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */]);

    function put2xPixel(color, x, y, probability = 1) {
      if (probability === 1 || Math.random() < probability) {
        ctx.putImageData(color, x, y);
        ctx.putImageData(color, x + 1, y);
        ctx.putImageData(color, x, y + 1);
        ctx.putImageData(color, x + 1, y + 1);
      }
    }

    function noise(col, sx, sy, probability, limitHeight = 0) {
      let checkFn = typeof probability === 'function' ? probability : () => {
        return Math.random() < probability;
      };
      for (let y = 0; y < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - limitHeight; y += 2) {
        for (let x = 0; x < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */]; x += 2) {
          if (checkFn(x, y)) {
            ctx.putImageData(col, sx + x, sy + y);
            ctx.putImageData(col, sx + x + 1, sy + y);
            ctx.putImageData(col, sx + x, sy + y + 1);
            ctx.putImageData(col, sx + x + 1, sy + y + 1);
          }
        }
      }
    }

    noise(highlightColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], startY, .02);
    noise(highlightColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 2, startY, .04);
    noise(highlightColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 3, startY, .06);

    noise(darkSlopeColor, startX, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], .05, 6);
    noise(darkSlopeColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], .1);
    noise(darkSlopeColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 2, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], .2);
    noise(darkSlopeColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 3, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], .3);

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 13, startY, (x, y) => {
      return y < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] / 2 && x > y && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 14, startY, (x, y) => {
      return y < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] / 2 && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 15, startY, (x, y) => {
      return x + y < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] / 2 && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 16, startY, (x, y) => {
      return x < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] / 2 && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 17, startY, (x, y) => {
      return y + x < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] + 8 && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 18, startY, (x, y) => {
      return x < y && x < 8 && Math.random() < .9;
    });

    function renderWithProbability(what, x, y, probability, xor) {
      if (Math.random() <= probability) {
        ctx.putImageData(what, x, y);
        ctx.putImageData(what, x + 1, y);
        ctx.putImageData(what, x, y + 1);
        ctx.putImageData(what, x + 1, y + 1);
        return true;
      }
      return !xor;
    }

    function renderSquare(color, x, y, n, s, w, e) {

      for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */]; i += 2) {

        n ? renderWithProbability(highlightColor, x + i, y, .8, true) && renderWithProbability(highlightColor, x + i, y + 1, .4, true) && renderWithProbability(color, x + i, y, .1) : undefined;
        s ? renderWithProbability(darkSlopeColor, x + i, y + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 2, 1, true) && renderWithProbability(darkColor, x + i, y + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 2, .6, true) && renderWithProbability(darkColor, x + i, y + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 4, .4, true) : undefined;

        e ? renderWithProbability(darkColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 2, y + i, 1, true) && renderWithProbability(darkSlopeColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 2, y + i, .8, true) && renderWithProbability(darkColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 4, y + i, .8, true) && renderWithProbability(darkColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 6, y + i, .6) : undefined;

        w ? renderWithProbability(highlightColor, x, y + i, .8, true) && renderWithProbability(highlightColor, x + 2, y + i, .6) : undefined;
      }

      /*
      ctx.font = '5pt Calibri';
      ctx.fillStyle = '#000';
      ctx.fillText(x/16 + "," + y/16, x, y + 10);
      */
    }

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 7, startY, 1, 0, 1, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 8, startY, 1, 0, 0, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 9, startY, 1, 0, 0, 1);

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 7, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], 0, 0, 1, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 9, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], 0, 0, 0, 1);

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 7, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 2, 0, 1, 1, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 8, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 2, 0, 1, 0, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 9, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 2, 0, 1, 0, 1);

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 10, startY, 0, 1, 1, 1);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 10, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], 1, 0, 1, 1);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 10, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 2, 1, 1, 1, 1);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 11, startY, 1, 1, 0, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 11, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], 0, 0, 1, 1);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 12, startY, 1, 1, 1, 0);

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 12, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], 1, 1, 0, 1);
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