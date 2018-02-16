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

const DEFAULT_TILESET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTAyLTA5VDEwOjQ1OjU1KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wMi0xNlQxNDo0Njo1OCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wMi0xNlQxNDo0Njo1OCswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplN2Q3MTgzMS0wYTZjLTRkZjAtYmNjZS01NWY2M2ExZTY2ZDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlNjNhM2YtNDNlYy00NThiLTk2ZWItNTQyMmU3MGM0YzZhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlNjNhM2YtNDNlYy00NThiLTk2ZWItNTQyMmU3MGM0YzZhIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDpmYmU2M2EzZi00M2VjLTQ1OGItOTZlYi01NDIyZTcwYzRjNmE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYmU2M2EzZi00M2VjLTQ1OGItOTZlYi01NDIyZTcwYzRjNmEiIHN0RXZ0OndoZW49IjIwMTgtMDItMDlUMTA6NDU6NTUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzgxZTg5NjEtZjM3OS00MTk3LWJiZWYtNmNlZjAyMTk2Njk1IiBzdEV2dDp3aGVuPSIyMDE4LTAyLTA5VDE4OjI1OjIwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU3ZDcxODMxLTBhNmMtNGRmMC1iY2NlLTU1ZjYzYTFlNjZkOSIgc3RFdnQ6d2hlbj0iMjAxOC0wMi0xNlQxNDo0Njo1OCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNp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";
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

    this.game = new __WEBPACK_IMPORTED_MODULE_1__game_game__["a" /* default */]();
    this.game.initialize({}, this.ctx);

    this.done();
  }

  onLoaded() {
    setTimeout(() => {
      this.game.render(this.ctx);
    }, 100);
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

    for (let i = 0; i < 15; i++) {
      let x = Math.round(Math.random() * width),
          y = Math.round(Math.random() * height),
          hh = 3 + Math.round(Math.random() * 4);

      this.renderHill(3, x, y, .2);
      this.renderHill(4, x, y, .1);
      this.renderHill(4, x, y, .06);
      this.renderHill(5, x, y, .03);
    }

    for (var i = 0; i < MAX_HEIGHT; i++) {
      this.layers.push(this.buildGround(i));
    }

    this.done();
  }

  renderHill(height, startX, startY, strength) {
    if (startX < 0 || startX > this.width - 1 || startY < 0 || startY > this.height - 1) return;

    let nextStrength = strength - Math.random() * .01;
    if (nextStrength > 0 && this.heights[startY][startX] !== height) {
      this.heights[startY][startX] = height;

      for (let xof of [-1, 0, 1]) {
        for (let yof of [-1, 0, 1]) {
          if (xof !== 0 || yof !== 0) {
            this.renderHill(height, startX + xof, startY + yof, nextStrength);
            this.renderHill(height, startX + xof, startY + yof, nextStrength);
          }
        }
      }
    }
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
                topNeigh: Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["a" /* getNeightbours */])(layers[l + 1], j + x, i + y, true),
                biomeNeigh: Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["a" /* getNeightbours */])(this.biomes, j + x, i + y, true)
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
      this.props.offset = Math.round(Math.random() * 3);
      this.props.renderTile = this.props._tile + this.props.offset;
    }

    return this.props.renderTile;
  }

  render(ctx, x, y, opt) {
    super.render(ctx, x, y, { tile: this.props.renderTile });
    let neigh = opt.neigh,
        topNeigh = opt.topNeigh,
        biomeNeigh = opt.biomeNeigh;
    var _props = this.props;
    let biome = _props.biome,
        offset = _props.offset,
        tile;


    if (neigh) {
      let tile;

      if (neigh[6] === undefined) {

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

      let shadeTile;

      if (topNeigh[1] !== undefined) {
        if (topNeigh[3] !== undefined) {
          shadeTile = this.props._tile + 17;
        } else {
          shadeTile = this.props._tile + 14;
        }
      } else if (topNeigh[0] !== undefined) {
        if (topNeigh[3] !== undefined) {
          shadeTile = this.props._tile + 16;
        } else {
          shadeTile = this.props._tile + 15;
        }
      } else if (topNeigh[1] === undefined && topNeigh[3] !== undefined) {
        shadeTile = this.props._tile + 18;
      }

      if (shadeTile) {
        super.render(ctx, x, y, { tile: shadeTile });
      }

      let preTile;
      if (biomeNeigh[6] !== biome) {
        if (biomeNeigh[3] !== biome && biomeNeigh[4] !== biome) {
          preTile = this.props._tile + 10;
        } else if (biomeNeigh[3] !== biome) {
          preTile = this.props._tile + 7 + COLS * 2;
        } else if (biomeNeigh[4] !== biome) {
          preTile = this.props._tile + 9 + COLS * 2;
        } else {
          preTile = this.props._tile + 8 + COLS * 2;
        }
      } else if (biomeNeigh[1] !== biome) {
        let topTile = BIOME_MAP[biomeNeigh[1]];
        if (biomeNeigh[3] !== biome && biomeNeigh[4] !== biome) {
          preTile = this.props._tile + 10 + COLS;
        } else if (biomeNeigh[3] !== biome) {
          preTile = this.props._tile + 7;
        } else if (biomeNeigh[4] !== biome) {
          preTile = this.props._tile + 9;
        } else {
          preTile = this.props._tile + 8;
        }
      } else if (biomeNeigh[3] !== biome) {
        preTile = this.props._tile + 7 + COLS;
      } else if (biomeNeigh[4] !== biome) {
        preTile = this.props._tile + 9 + COLS;
      }

      if (preTile) {
        super.render(ctx, x, y, { tile: preTile });
      }
      //
      // if (biomeNeigh[1] !== undefined && biomeNeigh[1] !== biome) {
      //   super.render(ctx, x, y, {
      //     tile: BIOME_MAP[biomeNeigh[1]] + 8 + COLS * 2
      //   })
      // }
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
        darkSlopeColor = ctx.getImageData(startX, startY, 1, 1);

    highlightColor.data[0] += 15;
    highlightColor.data[1] += 15;
    highlightColor.data[2] += 15;

    darkColor.data[0] -= 25;
    darkColor.data[1] -= 25;
    darkColor.data[2] -= 25;

    darkSlopeColor.data[0] -= 55;
    darkSlopeColor.data[1] -= 55;
    darkSlopeColor.data[2] -= 55;

    ctx.fillStyle = `rgb(${color.data[0]}, ${color.data[1]}, ${color.data[2]})`;
    ctx.fillRect(startX, startY, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 4, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */]);
    ctx.fillRect(startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 7, startY, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 3, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 3);
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

    noise(color, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 13, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], .2);
    noise(color, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 14, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], .25);
    noise(color, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 15, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], .30);
    noise(color, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] * 16, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */], .35);

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
      return y + x < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] + 10 && Math.random() < .9;
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

        n ? renderWithProbability(highlightColor, x + i, y, .8) && renderWithProbability(highlightColor, x + i, y + 2, .4) && renderWithProbability(color, x + i, y, .1) : undefined;
        s ? renderWithProbability(darkSlopeColor, x + i, y + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 2, 1) && renderWithProbability(darkSlopeColor, x + i, y + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 4, .2) && renderWithProbability(darkColor, x + i, y + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 4, .6) : undefined;

        e ? renderWithProbability(darkColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 2, y + i, 1) && renderWithProbability(darkSlopeColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 2, y + i, .8) && renderWithProbability(darkColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 4, y + i, .8) && renderWithProbability(darkColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["b" /* TILE_SIZE */] - 6, y + i, .6) : undefined;

        w ? renderWithProbability(highlightColor, x, y + i, .9, true) && renderWithProbability(highlightColor, x + 2, y + i, .7) : undefined;
      }
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