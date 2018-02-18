webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils__ = __webpack_require__(1);


const listeners = [];

var numToLoad = 0;

let Async = class Async {

  constructor() {
    listeners.push(this);
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



let AsyncUtil = class AsyncUtil extends Async {

  constructor() {
    super();
    Object.assign(this, __WEBPACK_IMPORTED_MODULE_0__core_utils__);
  }

};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["initializeMatrix"] = initializeMatrix;
/* harmony export (immutable) */ __webpack_exports__["iterateMatrix"] = iterateMatrix;
/* harmony export (immutable) */ __webpack_exports__["iterate3DMatrix"] = iterate3DMatrix;
/* harmony export (immutable) */ __webpack_exports__["iterateMatrixBound"] = iterateMatrixBound;
/* harmony export (immutable) */ __webpack_exports__["repeat"] = repeat;
/* harmony export (immutable) */ __webpack_exports__["iterate3DMatrixBound"] = iterate3DMatrixBound;
/* harmony export (immutable) */ __webpack_exports__["getNeightbours"] = getNeightbours;
/* harmony export (immutable) */ __webpack_exports__["range"] = range;
/* harmony export (immutable) */ __webpack_exports__["rangeMatrix"] = rangeMatrix;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["getRenderBoundaries"] = getRenderBoundaries;
/* harmony export (immutable) */ __webpack_exports__["matchProps"] = matchProps;
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

function iterateMatrix(matrix, fn) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      fn(matrix[i][j], j, i);
    }
  }
}

function iterate3DMatrix(matrix, fn) {
  for (let h = 0; h < matrix.length; h++) {
    for (let i = 0; i < matrix[h].length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        fn(matrix[h][i][j], j, i, h);
      }
    }
  }
}

function iterateMatrixBound(matrix, fn, opt) {
  if (!opt) {
    throw new Error('Options not provided to: iterateMatrixBound. Use iterateMatrix instead');
  }
  let def = Object.assign({
    sx: 0,
    sy: 0,
    l: 0,
    h: 0,
    ex: 0,
    ey: 0,
    startFrom0: false
  }, opt);

  let toX = opt.ex || opt.sx + opt.l;
  let toY = opt.ey || opt.sy + opt.h;

  for (let i = def.sy; i < toY; i++) {
    for (let j = def.sx; j < toX; j++) {
      def.startFrom0 ? fn(matrix[i][j], j - def.sx, i - def.sy) : fn(matrix[i][j], j, i);
    }
  }
}

function repeat(times = 1, fn) {
  for (var i = 0; i < times; i++) {
    fn(i);
  }
}

function iterate3DMatrixBound(matrix, fn, opt) {
  if (!opt) {
    throw new Error('Options not provided to: iterateMatrixBound. Use iterateMatrix instead');
  }
  let def = Object.assign({
    sx: 0,
    sy: 0,
    sz: 0,
    l: 0,
    h: 0,
    t: 0,
    ex: 0,
    ey: 0,
    ez: 0
  }, opt);

  let toX = opt.ex || opt.sx + opt.l;
  let toY = opt.ey || opt.sy + opt.h;
  let toZ = opt.ez || opt.sz + opt.t;

  for (let l = def.sz; l < toY; l++) {
    for (let i = def.sy; i < toY; i++) {
      for (let j = def.sx; j < toX; j++) {
        fn(matrix[l][i][j], l, j, i);
      }
    }
  }
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

function range(start, end, fn, boundary) {
  for (var i = start; i < end; i++) {
    fn(i, i === start || i === end - 1);
  }
}

function rangeMatrix(ranges, fn) {
  range(ranges[1][0], ranges[1][1], (y, boundaryY) => {
    range(ranges[0][0], ranges[0][1], (x, boundaryX) => {
      fn(x, y, boundaryX || boundaryY);
    });
  });
}

function random(min, max, int) {
  if (min === undefined) {
    return Math.random();
  } else {
    let res = Math.random() * (max - min) + min;
    if (int) {
      return Math.round(res);
    }
    return res;
  }
}

function getRenderBoundaries() {
  return [document.body.clientWidth, window.innerHeight];
}

function matchProps(source = -1, target = -1) {
  let res = true;
  if (source !== target) {
    Object.keys(target).forEach(key => {
      res = res && target[key] === source[key];
    });
  }
  return res;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_tilesets__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils__ = __webpack_require__(1);
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

  typeOf(block, toMatch = {}) {
    return block !== undefined && Object(__WEBPACK_IMPORTED_MODULE_2__core_utils__["matchProps"])(block.props, toMatch);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const TILE_SIZE = 16;
/* harmony export (immutable) */ __webpack_exports__["a"] = TILE_SIZE;

const DEFAULT_TILESET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTAyLTA5VDEwOjQ1OjU1KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wMi0xNlQxNDo0Njo1OCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wMi0xNlQxNDo0Njo1OCswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplN2Q3MTgzMS0wYTZjLTRkZjAtYmNjZS01NWY2M2ExZTY2ZDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlNjNhM2YtNDNlYy00NThiLTk2ZWItNTQyMmU3MGM0YzZhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmJlNjNhM2YtNDNlYy00NThiLTk2ZWItNTQyMmU3MGM0YzZhIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDpmYmU2M2EzZi00M2VjLTQ1OGItOTZlYi01NDIyZTcwYzRjNmE8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYmU2M2EzZi00M2VjLTQ1OGItOTZlYi01NDIyZTcwYzRjNmEiIHN0RXZ0OndoZW49IjIwMTgtMDItMDlUMTA6NDU6NTUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzgxZTg5NjEtZjM3OS00MTk3LWJiZWYtNmNlZjAyMTk2Njk1IiBzdEV2dDp3aGVuPSIyMDE4LTAyLTA5VDE4OjI1OjIwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU3ZDcxODMxLTBhNmMtNGRmMC1iY2NlLTU1ZjYzYTFlNjZkOSIgc3RFdnQ6d2hlbj0iMjAxOC0wMi0xNlQxNDo0Njo1OCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNp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";
/* unused harmony export DEFAULT_TILESET */


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_ground_entity__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_wall_entity__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_creature_entity__ = __webpack_require__(21);




const keys = {
  'ground': [__WEBPACK_IMPORTED_MODULE_0__blocks_ground_entity__["a" /* default */]],
  'wall': [__WEBPACK_IMPORTED_MODULE_1__blocks_wall_entity__["a" /* default */]],
  'creatures': [__WEBPACK_IMPORTED_MODULE_2__entities_creature_entity__["a" /* default */]]
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults_ground__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults_walls__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults_creatures__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tile_context__ = __webpack_require__(18);





let Tilesets = class Tilesets {

  constructor() {
    this.tilesets = {};
    this.registerContext('ground', new __WEBPACK_IMPORTED_MODULE_3__tile_context__["a" /* default */]({ tileset: __WEBPACK_IMPORTED_MODULE_0__defaults_ground__["a" /* DEFAULT_TILESET */], isGround: true }));
    this.registerContext('wall', new __WEBPACK_IMPORTED_MODULE_3__tile_context__["a" /* default */]({ tileset: __WEBPACK_IMPORTED_MODULE_1__defaults_walls__["a" /* DEFAULT_TILESET */] }));
    this.registerContext('creatures', new __WEBPACK_IMPORTED_MODULE_3__tile_context__["a" /* default */]({ tileset: __WEBPACK_IMPORTED_MODULE_2__defaults_creatures__["a" /* DEFAULT_TILESET */] }));
  }

  loadRemote(hash, remote) {
    this.registerContext(hash, new __WEBPACK_IMPORTED_MODULE_3__tile_context__["a" /* default */]({ remote }));
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_seed__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_seed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_seed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine__ = __webpack_require__(10);
//Replace math.random
//require('random-seed').create();

let rnd = new __WEBPACK_IMPORTED_MODULE_0_random_seed___default.a(2342);
Math.random = rnd.random;



/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1__engine__["a" /* default */]());

/***/ }),
/* 8 */
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

var stringify = __webpack_require__(9);

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
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Engine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_async__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_game__ = __webpack_require__(11);



const PADDING = 20;

let Engine = class Engine extends __WEBPACK_IMPORTED_MODULE_0__core_async__["b" /* default */] {

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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__world__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_debugger__ = __webpack_require__(23);
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
    this.debugger = new __WEBPACK_IMPORTED_MODULE_1__core_debugger__["a" /* default */](this.world);

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
        case 'd':
          this.debugger.toggle();
          break;
        case 'h':
          this.debugger.toggle('showHeights');
          break;
        case 't':
          this.debugger.toggle('showTiles');
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return World; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_async__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__items__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buildings_village__ = __webpack_require__(22);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








const MAX_HEIGHT = 10;

let World = class World extends __WEBPACK_IMPORTED_MODULE_0__core_async__["a" /* AsyncUtil */] {

  constructor(options) {
    super();
    let width = options.width,
        height = options.height;


    this.getItem = __WEBPACK_IMPORTED_MODULE_1__items__["a" /* default */].getItem;

    Object.assign(this, options, {
      biomes: this.initializeMatrix(width, height, 2),
      heights: this.initializeMatrix(width, height, 2),
      layers: []
    });

    this.repeat(4, i => {
      this.spawnBiome(i, Math.round(Math.random() * width), Math.round(Math.random() * height), .2 + Math.random() * .8);
    });

    this.repeat(15, i => {
      let x = Math.round(Math.random() * width),
          y = Math.round(Math.random() * height),
          hh = 3 + Math.round(Math.random() * 4);

      this.renderHill(3, x, y, .2);
      this.renderHill(4, x, y, .1);
      this.renderHill(4, x, y, .06);
      this.renderHill(5, x, y, .03);
    });

    this.repeat(MAX_HEIGHT, i => {
      this.layers.push(this.buildGround(i));
    });

    this.repeat(15, i => {
      Object(__WEBPACK_IMPORTED_MODULE_4__buildings_village__["a" /* layoutBuildings */])(this);
    });

    this.addItem('creatures', 5, 5, this.heights[5][5]);

    this.done();
  }

  addItem(type, x, y, z, opt) {
    let item = this.getItem(type, _extends({}, opt, { x, y, z }));
    if (item) {
      if (item.props.block) {
        this.heights[y][x] = z;
      }

      this.layers[z][y][x] = item;
    }
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
          row.push(this.getItem('ground', {
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

  renderBiomes(ctx, x, y) {

    let scWidth = document.body.clientWidth / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */];
    let scHeight = window.innerHeight / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */];

    this.iterateMatrix(this.biomes, (val, w, h) => {
      ctx.fillStyle = "rgb(" + (125 + val * 16) + "," + (125 - val * 16) + "," + 125 + ")";
      ctx.fillRect(w, h, 1, 1);
    });
  }

  render(ctx, x, y) {
    let width = this.width,
        height = this.height,
        layers = this.layers;

    var _getRenderBoundaries = this.getRenderBoundaries(),
        _getRenderBoundaries2 = _slicedToArray(_getRenderBoundaries, 2);

    let scWidth = _getRenderBoundaries2[0],
        scHeight = _getRenderBoundaries2[1];


    ctx.clearRect(0, 0, scWidth, scHeight);

    for (let l = 0; l < layers.length - 1; l++) {
      let layer = layers[l];
      for (let i = 0; i < Math.min(scHeight / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], layer.length); i++) {
        let row = layer[i + y];
        if (row) {
          for (let j = 0; j < Math.min(scWidth / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], row.length); j++) {
            let obj = row[j + x];
            if (obj) {
              obj.render(ctx, j, i, {
                neigh: Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["getNeightbours"])(layer, j + x, i + y, true),
                topNeigh: Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["getNeightbours"])(layers[l + 1], j + x, i + y, true),
                biomeNeigh: Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["getNeightbours"])(this.biomes, j + x, i + y, true)
              });
            }
          }
        }
      }
    }
  }

};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroundBlock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



const COLS = 20;
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
      tileset: 'ground',
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
        typeOf = this.typeOf,
        tile,
        shadeTile,
        preTile;


    if (neigh) {
      let tile;

      if (!typeOf(neigh[6])) {

        if (!typeOf(neigh[3]) && !typeOf(neigh[4]) && !typeOf(neigh[1])) {
          tile = this.props._tile + COLS * 2 + 10;
        } else if (!typeOf(neigh[3]) && !typeOf(neigh[4])) {
          tile = this.props._tile + 10;
        } else if (!typeOf(neigh[3]) && !typeOf(neigh[1])) {
          tile = this.props._tile + 12;
        } else if (!typeOf(neigh[4]) && !typeOf(neigh[1])) {
          tile = this.props._tile + 12 + COLS;
        } else if (!typeOf(neigh[1])) {
          tile = this.props._tile + 11;
        } else if (!typeOf(neigh[3])) {
          tile = this.props._tile + COLS * 2 + 7;
        } else if (!typeOf(neigh[4])) {
          tile = this.props._tile + COLS * 2 + 9;
        } else {
          tile = this.props._tile + COLS * 2 + 8;
        }
      } else if (!typeOf(neigh[1])) {
        if (!typeOf(neigh[3]) && !typeOf(neigh[4])) {
          tile = this.props._tile + COLS + 10;
        } else if (!typeOf(neigh[3])) {
          tile = this.props._tile + 7;
        } else if (!typeOf(neigh[4])) {
          tile = this.props._tile + 9;
        } else {
          tile = this.props._tile + 8;
        }
      } else if (!typeOf(neigh[3]) && !typeOf(neigh[4])) {
        tile = this.props._tile + 11 + COLS;
      } else if (!typeOf(neigh[4])) {
        tile = this.props._tile + COLS + 9;
      } else if (!typeOf(neigh[3])) {
        tile = this.props._tile + COLS + 7;
      }

      if (tile) {
        super.render(ctx, x, y, { tile });
      }

      if (typeOf(topNeigh[1], { block: true })) {
        if (!typeOf(topNeigh[0])) {
          shadeTile = this.props._tile + 13;
        } else if (typeOf(topNeigh[3], { block: true })) {
          shadeTile = this.props._tile + 17;
        } else {
          shadeTile = this.props._tile + 14;
        }
      } else if (typeOf(topNeigh[0], { block: true })) {
        if (typeOf(topNeigh[3], { block: true })) {
          shadeTile = this.props._tile + 16;
        } else {
          shadeTile = this.props._tile + 15;
        }
      } else if (!typeOf(topNeigh[1]) && typeOf(topNeigh[3], { block: true })) {
        shadeTile = this.props._tile + 18;
      }

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

      if (shadeTile) {
        super.render(ctx, x, y, { tile: shadeTile });
      }
    }
  }

};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASIC; });
const BASIC = {
  block: false,
  tile: 0,

  //rendering
  neighbourDependent: false
};



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TILE_SIZE = 16;
/* unused harmony export TILE_SIZE */

const DEFAULT_TILESET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFQCAYAAADORqcxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF3WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTAyLTE2VDE5OjA1KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wMi0xOFQxNTowMzo1NSswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wMi0xOFQxNTowMzo1NSswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0OGFkOWE0OC0wMWZkLTQwMjktYmFhNC05MjFmM2JkMDQ0MzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N2M4ZGE1YTgtMjJmNC00MjUyLWE1ZWItOWJmZTk3YzM1MTcwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2M4ZGE1YTgtMjJmNC00MjUyLWE1ZWItOWJmZTk3YzM1MTcwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3YzhkYTVhOC0yMmY0LTQyNTItYTVlYi05YmZlOTdjMzUxNzAiIHN0RXZ0OndoZW49IjIwMTgtMDItMTZUMTk6MDUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDhhZDlhNDgtMDFmZC00MDI5LWJhYTQtOTIxZjNiZDA0NDM4IiBzdEV2dDp3aGVuPSIyMDE4LTAyLTE4VDE1OjAzOjU1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Xj4j2AAADLNJREFUeJzt3U+oXFcdwPF5MosgLqILSQUF5aXUmkoKr0IRhUCyqW26iitxl7pK0Z2m63ZbSFe2K7NsF5L+27RQEKTQBFJsqdKEiiDShdQugmQhjIt3rn1z3rvOn3tm7jn5fT67mc6d3PcKhy+/c+99O5dePjWbDHDlwgc7Q44f29OvPDTo5x9T6797GNuXxj4BgLFMxz6BWr371t2514+eOzb3/qLX+XH59657PFCOAgTCUoA9brx0O5uv7c7m31/0ev64w9+72vFKEMpTgEBYO3aB53eBuxnc4RIb197FwyXY+u8e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";
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_TILESET;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TILE_SIZE = 16;
/* unused harmony export TILE_SIZE */

const DEFAULT_TILESET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACgCAYAAADzcGmMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTAyLTE2VDE5OjA0OjQ4KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wMi0xOFQxNTo0MjozMiswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wMi0xOFQxNTo0MjozMiswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplNTdiMjdhOC0yZDJiLTQwYzAtOGMwNi04YzY0ZTRmODE3YWYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjlmNWIwZjMtMTg0OC00OTliLWFiMWEtZGY3YTA0NDdiZjVkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjlmNWIwZjMtMTg0OC00OTliLWFiMWEtZGY3YTA0NDdiZjVkIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOWY1YjBmMy0xODQ4LTQ5OWItYWIxYS1kZjdhMDQ0N2JmNWQiIHN0RXZ0OndoZW49IjIwMTgtMDItMTZUMTk6MDQ6NDgrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWFmNDZlY2MtZTI2MS00Mzg2LTkzOTUtN2FkZWRhY2UxNDdlIiBzdEV2dDp3aGVuPSIyMDE4LTAyLTE2VDIwOjE3OjAyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU1N2IyN2E4LTJkMmItNDBjMC04YzA2LThjNjRlNGY4MTdhZiIgc3RFdnQ6d2hlbj0iMjAxOC0wMi0xOFQxNTo0MjozMiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnCAOEEAABMwSURBVHic7V2/j13Xcf7O4gEk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";
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_TILESET;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TILE_SIZE = 16;
/* unused harmony export TILE_SIZE */

const DEFAULT_TILESET = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAADACAYAAAD7hGbWAAAaQklEQVR4nO2dfXgVxb3Hv8fiIwRJcgzJCeSYE0IIBMOL9QUINVfkrSDR4FPqg7xJy8Vb5IHbqEjRwoNVobZCUUpvc6mUN3O9+EAQ1EpIww0QKGARCARDCEnuAXJ4OwlIwEfbc//YzJzZ3Znd2ZzNS2/38zzn2ZnZ/c3O/mbmN6+7x4UOhtftCRmd9wcDLhl5fzDgYuMSyYmuN7o/L14ZWW08ANDJilBbUVhUoAsr2r4Lv129Tlo+d/Tk0IMjffjuw6kAgPxlJSFRJkTFDoQXx0MAkJH5A1ysP0/P9UhMAgBcrD+PhisH4HV7QhmZPwAAVJR/qIontvswqfQ1XDlA3bZmgGwpMCvFdtCcCUjsGYue3ntMr4+KHYimhuPYsiMP33voBRq+ZUceANAwony7sL0GlJ8rE56rrT2Pxx+dZPcthZBMIHjdHmEtsANSW3iwtYqlQ5ogOyHmTMaExXYfpir9AFR+mdKvNUtmcneYxmiRzF5ZOr82zIw/zHxR5Wb9MqzdsFzlZv1GENu87/DbWJzmwuI0F/Ydfpueryj/kKvgSFDVANlegK0p6CA0NRxvfrYDoV2TwxlO3A1XDoSfvfzDkF1tgc4E8XogBNaeivh4zxYASskvP1dG/VYY4fXp3GctyNdfaNC5fTHi68PKV8g7KG7HgOZCWP6hsLBGd+uK6zdu0qMRtrcBPp/SEJHGmPg7MqzyZWu4aNygVX50t66G8ejagEjt7z8akZhUnmySb5xK+Um+cYZx2F4D2AaXmB8rXU9/MODKO1gWen57XyXgQeX429XrpJTlDwZcKEaoKGMXAGBIxmOW5COhovxDxHYfpii99lMk+cYJu58EXQbw7K8s7AN63Z4Qa36sPvyZmkrqrq7xW0qHHfJWYU3SxfrzUsoHWqEbCvB7U1bnSlilpaZ4LachUvnWhujDpQ0cM2E4AGDXzv00nA2TnQzTjoiJaZKRJ/fTInv/SORbCnludj6oR2KSsBaQbi23DSDKZ6sVmyFmfLxni27w9fGeLdJtQXWNH1XltaqwtEx5cxipfEvhjQ1E0xMNV5SjrgYQN2+aVab0RBpHe8u3FKsmlqSlQ41qI5lNbel8fHvT4aajJ0wbJJSrv9CAI8W1wvMfLXlK5vZ4YulWXZgdGdiS57d9HBCJAiOl/GxkcRulnWD2DBOmDcI9+69S/7XhcYaytmUAyf2dG48JE/aPzIkv6jBgcLLt8dpaA0SLMVamo29+9TW63n2Xyg9AFSZi0abPqfvNqQ+o/CTMyr1JWHVVQFr5N7/6Ghgeh3v2X8W14XGm6bd1IMYqWrsOsHPjMVr9jGxl9bGAzq8NM8KX6gYAHD5ST/2+VDcmTBuERZs+p+Ey9waAxx4dh1mznpW+P4mDmB6z9LfZegBRDADUVgd1583uzU4xW5W1Q94MbRykBpjdX1cDJkwbJPyZwc79f7xni8pfWx2kPxGFRQWI7xWtCovvFY34XtF4daHxqhZZxyDxV9WHqJ+VJ+Ey9waAtWv/iO0fbcWs6QsN79/S9Ntqgny+JGp6fL4kPP7oJGqGJkwbhAdHKqNRo1qkTWhiz1hT5RNIJgyI7ak6ysprryMNr6w8Gwcp/Wbp142EfaluDBiuNDgn9tcBAPXv3HjMdIOTFrbmkG6YURwy3VhRH5wo3IwTDRd0cXjdnhApIGYYpYGkX2uCROnvxApL3V0AmTfSPoSR7eVxsOjLFqfhRMMFqet4yidbWKSOxeKl2VnTF2LWtJlYu3Gd6ihC1QgXFhXg9eVhW0fs2azpC6V3FtSclO+x8Oga1cXw/BXc5oaTAmDW1dR2TVl8qW7MmjaTdhhEfjPIM2iPvPTrxgGvLgxv40jsGSvV+PBuLkKkQLsw6mYakTt6Mnypbpr+WdNmomtUF67f6BnmPzfH0K+FZoA/GHCR/ZQAaJ9958bJkLWNHQFRL8cI3gK7tiCZFSwtZooncEfCRPlswmTncG423cKVen4J6Z7YudXlAXFbYNZI32y6BQBtmn5b1wOMrrWyVbw95LU1wEheJg7Z+9s+Jx7p/n6juGQKgNE1MptzW5r+DvV+wPRU/iL4hmq53Qnsw0xP9aLq+rcou2LcuHrdnlCMqzMgULLMeRKeHuVBZZPSm0uP8gAAArca0Ri6rbuWhVxrBokb6MC7o4nirUKUzA03QNsQi5Rp9xb3DpUBomqcFt0JZVfUrxOZxcXWQtmax2aCtgbIMDTxTuG5g/XfcMN1GcDLYau5vqHaTxVAHl5klrSwD5wW3YkmnJRgYga0+IMBFyn52ntNT/WaZoL2GUWKN9MD7z5Gz66ajPO6PaH0KI+qJPLC2oKD9d9Q5QduNUrLiR52eqoXWd0TpeJgS/LQxDt1JdtOXQhnQ71uT0h7I14YD/ZBs7onSj84oDwwq/ChiXfiyV7dpeW1JXBDtV/KBMm+JWl3GyDMgBVDs7BiaJYu7J8BNsNkM5CFbEk325oOaNqA5pwNsYoOu3ubRmZHCdp+7oqh3wxtbbNS+0gtIO1N4FYj0qM8qi6oGVbfD+D2gv7j+Fn828De1A2A+s1Y/6ufAwCKf6e8EPfcy/9Kz40EMOOlX3DlvG5PqPxcGZ66b6Iq3NMlBltPbsPw1Mek7p9/eCt9O4c95h8uk94c4OkSQ81g4FYjPF1i0NikZICZ+cmNd6MQoMrPjXcbXW5/N5QomJS8ql/+Jz1nNpgCgK0nt6kURXZasEoR4Q8GXJm9skJAeIOA9mg0kiXnKpsCtOR7usSgsimAGFdn01qwodqP9CgPchOVTMiNdwu7nwRuBmh7AVbQ1oCRPwnPnz8HcQ0AgLdG/hCAuidDwlobbSNMlM6DZ0ZZ+YP13yA30Vz5gCADBickc90yzHjpFyq7a6UGkBLUUhoazoZ45kdzlOrFkOmIxqbbqoywqxdE4uHOiWgHUQBUAyujamxUAwAlg4zkzaYMGkO3DeWNBj0Xm+5AUX2dpQk13gDQaCaULUBDE+8U1oLKpoD4/QAgrHy2asl0x0gNIKV9A9MmyLQBgHi0a5Y5QHjIz054AXJTCmwviKSBHEmYUennZb7IhFdWK0epOe222p/f3usJkaQ/4vcDrEQg+wAtkZeJM5L7W1E+O/nXWi95qEzQ7Nk5CPgvAQAq667ikawMAMDpU3W43HAT8bFdUbqPv/uZPMC/vFNI/afLj6Nf5kDqpuQvlmrIyENvnNMPRX/6yrD9IdeXX/hfAMD5xibVuaSYKABAZs97De/92JwU/HlNDbxuT4h1A8prTtpXnyJFlQF7yyoAAOnJcUhPjqN+wuUG49fuCayyVYoH0HjmC6k4vG5PaOOcflLXshQdPoH+6eFB46nK5o8cpPemmWAGUTzrbq13zHSNcHqyspursu4qdROC12+jQiugQavwlsBTvlnpJ/zsN2uxfc0ylR8Atq9ZpqsVPBprgRifonjCY3NSUFcakir9Vk2gKgPiY8PzFkT5wetKL8Ad3Rn9+icbmiAA+Dp4CXe5E1R+AKowI7xuT+gX4/TTHsqcPlr1g0sA8PnHNSrlazEzgQuHvSGULbtYgVJsUj2DajaUp9zSfcdo+OlTdQZJV6jef0jn14aJIMpP6WVt9M3yw1FZOr82TARRTCNT0Btr1X4zaq9f0vm1YSzSu6OD129LtwGRIFL+6O/fjempXtMqvmDm00iKiaL2fsHMp3VhZpwsuq5ys34zCk6u0vm1YSydgLDdyshM09n+jMw0AIoJAoAKGA/He/b1GvpFmI1iZVlRsAMA8PT4kQCU3tAHnxRHHG9rQduAjMw0XaMLQBV2ueEmZs/OQX7+DmGEMX0GG/qN6NNX/R5VzTllVEtqxejv340+53rj55/y2wJ/MOB674U5qq5oUkwU8ibnAAAye94r97J5ejeu21CmuRBPvm++KlzrJ9eSdFATlJ4cB49X3VCyfuI2awf6ZQ6kfX/WTfxDJk6HZ/ZrXFOydk+Nzk/CvGOVTJBpH1YU7MCKgh344JNinG9swvnGJlozZEjOdqncrN+IyffNhy86AcsPvAIAWH7gFfiiE6gJSuqqL+CqNkDb799bVkEVv7esAunJcabtwOny47QryrqJ/9je3dJjARb/Z0ptIBlhxNPjRyJvcg7yJudQ209Mkul9ggHXn9fUqBpe0gU1mobITpmKgpOrdA0uyYza65doRmSnTKUFkJogjzcBlXVX4fEmIOC/pFI8EDZF6clxqCiv4iaCHQUD/JHwXe4E3OVOwO0S/dvq/9KjhxLX2Dvh/+wbnZ8czSA2/+nxI1ts/2MsjrtKazYBCDfC2oxgG2JyLdA8Ged1e0KksQXUdp/0ftKT4+iYoHSf/lUlr9sT8sx+zTCRXwcv4fYVZefy7ZKtug88bZzTT6hsNnzEkydM++OfVXyp6vVI2//mkvnA4yk0E9hBGO+5s1OmqpTKMvm++bpeEBtGTRCZ94mP7Yrg9duorLuKyrqr6Nc/GY9kZVC3kQkiNl9r9wl3uRMQ02cwYvoMRucRT+naAa3yibnR+mVIiomitl/W/pP0PDYnRVUDkrNddCqC13aV1myija326ItO4IZnp0wFwKkBPPNCYK/Rlt7YSXNNH5CUfurn1IKS7QMM4zAr/WxcpDdkpfQ/8HgKAGVEzPLA4ylorNW3BWajX9YUnb95VXWutGZTOAPYE1b3z0eyU8xsH77Z9UZY2UvKuzdvPUAbX1vvGHRwcHBwcHCwiVZd3LCL1loQ7wjY/r0gozhauhuCt1GsNe7P2wVB3Now2WcwQ7cmnP29QejXPxmnT9XRNYDKOmUAYTRIIw8gmo5oPPMFvCVbLe2GYFfHpq05LaXAlds/QX9mAZ5dBx6b0df0/soiPEKsmxxldkVYLQC6DHBHd0bAf4kqHwhPVZtlAKBMPRzbuxsAMOiRUQCUibiYPoO5E3C8B4hkWXL0Q8pImihedhWMhd0VQZDZFSEaFZddrEBS1zgUnFylKwC6Jcntn/xF5SZ+mfVgANi2/E0647lt+ZvYtvxNAHLbUciEXCRrwg9OmU+V/+Scn1F/0eETUvLsdhT2CEBqVwSZfibu5QdeQVaPDN00BEF6TZitES1BdmXs1XVnVG7il1kPFpEUE0VrhhEy5tHuToDOBD05fgjXrV0tEzFx4SIAitnJmDAh0vRRZq50Y8OT5o0wuwOC7A8639iEzVvlV8TK1l5H1qxo6gbMlya9bk+IzHSWXaxAVo8MZKdMpatgWT0yAEw13pYCgE5DA2Gle7wJutUyXgI8s19TrYJpp6Z5U9BaXp/ZR+V+fWYf6YUYQL0rguyKS4qJwoKZT0vJRwKZ4ydrA+TImiUtugx4JCuDNrp7yyoQvH4be8sqVJu2RGjXA7SZ0bm7+Tfd2DUAcpRdC/AHA67MnvfirXUf4HxjE/qn98bmrTvw1roPpKakSeEgpZ+4WT+vALGln2RC2cUKnb+0ZpNqORLgmCBS0knjWwFlHUBmTxDp/QDhHhAQzgjteoAWfzDgGvEk6JoAmwmy6wD+YMC14ZUXQ0B4T5DsegBA5v356wEP+FJ04VoWDnuDNrylNcoCzPmbV6kJ0iK1h97u/fEtGcxFsqW9NdcDROk1g8RhuvAiEmwNRPvx2+Le7QX3FaXC3w9A9W7lHZrUUcr/8Vbvrkbeltbfmrjyj/NR8eXx0F8PVdP/AiYY/SfwPyrCd8SI4mWxWg2NFJm/rATzlo5BWemX+O7DqchfVkI/HGj3txraG2EGaGuADIW/Nx/syNSklX9s3s6XDfTyZWDe0jvRy5eBrOwKvLNkF1dGO1EmKhAdLfNsqwEEknGRxgMoymePZhiZL0JHM2O21oCWXG83rPk6UlwL8r/yHdWMcTPg20s3qCK/vXTDUoSR1oDNGwsxZVquyg9AFWYEa76mTMvFudoKaTPWHnAz4L831uCZFwZQNwAMHWQ+EgbavwYQtOZL1oy1NbZ+LeXbSzfQKaGbLgyALlxEVnZfQ///N7jT0RPHuFVu1m8EqS3aMF64CG1J7eXLkC69xFzxwkXn2htuDegywKt3B6p5lzpEiK0miNdOyLYddiAyVx3ZjNmaAbwGuC0bZZGp6qgNMCDIAG1XUpaWyv0zI6wB2umCFZPkTYloqkEmjnO14n76vKVjTGUBtFi+PbDte0FW58zN3kGw+r0fO+7fHlh+0aA1vtUT6RqEHWsYkT5/S+VVJujd+dnw+noJhSfmrRee87o9IW/fXoiPjxfffd8h7ofBF8Qrrz5lp+gHa9/efxm5+eKPdHjdnlD/lCkAgOT47+rO+/vXAuvfkZr7KX5vLrqlDhOef/jRKYbyz+YMQj+f+PkXrt6tC4v4n/S8bk8oJyeH5v7ly5cNr8/JyaHfnybKf+uysuOutEY/79TpaDwKZyt7gnQv9TUr/1TNZgBA3eW/6tN3yofMGfO48h0B+q2ILZ8UIi1NKYk1O3/FvfhoZTnuT89UlSZ/MODCvkPKXPyX58AeuXHsO6SqhvMq97sA4C0gtCA+TZUJpEZ0OhqPnQ/Fc2vDrqMrmt2bQ/1TpqgygdQI7ykfvA+9bak2tBW2jAPIGq62Cj/86BQc2rNZ5ddlHsL2k9QEwlvaynRYOZDpZK08qQkErV8rL3oeYmq0aZeFmJrlc0fpwrR0AhRFTBqfGyJtALH121bMoBdOzFsP5K2XatB4iZ06Po97LVEeqYGrXpiC+W8rD/7ZO/9Orxs77zcAgPvTM7k7Nloq397Y+m+qI3+02lJJAfi9ivvTM3F/eiY3THt9pPI8it+bi+L35urCZHk2ZxCezRmkC+PBzYB352fj3fnZujAzit+bq6q2LL9bPclUvqPQLXWYrjdk1DvS0s8Xr+sNiXpH3DaA1xVVwkqlEsDLBOUBVpvKKuZDX4uezRmE+W9v1nUC7JZnuVF9QJN+a5yuDTdiljIAAFImvKTqDaVMeAkwGAfYCbHhLGObj7yemN3yhG6pw3Cj+kCLlA8oSj9de9lwbKDKgBNR38GJy8qLGKOrqpA24SV6rqrK/O2Y0e/cAGB9vZV0AsiA7KH1v6ZdYi2idmDS+Fw6IFu6ZpIleRGkBrQ0E0gNMMoEVQb0HRAepxTtXQVgPtLS0lBVVdXsNyZ9uPiPjgHg9BfGNYiOhJcsBTZv1J03Ux7p9/9hyVks26zPAKs9oDavASx9B4RoJhTtXaXKnLagqqpKWIpbS/7lV94F8C7nDAkzzruEgzdx7aB6JjgB0IWxGA7ESCa0tfIBoIumFtT++vuW5LW1YNob+aYy9yUabxw4cvErw/O8uSwW3cASmgz48oQL+ctKuMKzfzbCMHIAqNxfgL8LzMwdg2dww1lKa26oRsNbmFJcts38HbW6y39VjX5/XNWbyv/9f/gvybE8v/L3wnHMoT2bsd5kjFM+JE444l0+dxQdibNIvQNgdT3ADnl2hDtpfHhTVlvJR5p+2XPS7wdEsg5gJa72pK3XJUKhkP5TBYWz+V+vFc3Je92e0OToLhgRq987VNIQBADVuZKGIAqgfvWflzgRke56NnoLqPjTiVyZrvfcDwAYOmSx8FMFLZVXJWDdKC/cBpsYcvP9ukSLlG9ESUMQBdeV/28vLCpQ4h5t3IUlaK+PRJ6dTSXKI8oyYuiQxcLMsyJPawBRPqHnM7/kS+brGyFRyf/pR2tVYSufmEWvHRHrphlAKCwqwKubDkDEPV5leiR39GSqRK38qfW/Fspn9lZ2Rj8hkCfcvHYUuJikCut6n/K67tAhiwEAB//yGoYO4f8LiBV5AC7VZJw7VVH+hfdfxoX3X1ZFcuH9l+nKlCjxJQ1BrvIB4KcfraUmieAPBlyyJfea/xyu+c8h+5WVtPRakS8/W4vys7X4aMlTqtJPGDlum+K4mEQn48jv5slLuHnyEk2ztgZEIs8dB4zboOj42DPqsLtunze0tbN+82N0Sx1muKDBqzFsyS9f/47ufOaMedxwAlvyF236XHf+zakPMOHq8163J3Roz2Y8/OgU1P8phD4T9aPe8EhYmUzUmp9I5GkNmLlb7i9bRWur2tLdEoiSt62YQX8sxC8qBETJVuT9wYCLrNwlDlLM8ItFl/BikfrTw1q/XfK0BhTO9iJYDQRffxn71igNCmuG9q2ZiLr3lR3GbGYRxRdcv4VZzWG8xYvi9+Zi5I9Wm2YUUdL4RcqAhv2g/fhFu3EXR8ZO+baGZkCwGrQHdOOgfiv3jYOFuh6SPxhwFUBfG3iTV2Q9gDS+bCk0Mi8y8MyOFZpLcYgUnCW9m/95CeEPlCzpfRai769HIn8HiWDmbj+CEls7tV1RdnFcBu31xL1ulBeFs71wnVa+dp7/XG/kP6f8mQ/pARG/Nj5AGfEerSxX1i008qQHxJPnEemKmBV5VSO869BV4BAw5uE47njALIM+OHMSOHNSOqEiXKeLcS/jL33jpwCAu0/Kbf5NmfASUohnVSaeWKp8qStxbB6wSryqt7JkL1Cy13qCmzn26ToA6yzJ6HpBI2Ld2HXoKsZAnQnBasX2G5X2SGZNF/1tIND8raY3v3Oc3ls0Mtfyft7z1P3Mit/SSbijleXSaejpvUf6Wh6mW/G36L/apRoHkC7igiOHsevQVaVRrla3D61FXHIa/S3620Apc8jy0IOJ9Pd+3vNSK3gdAeF6wIIj4bnTw6PGAKm27mAxJC45DYvqAJwBftcn/BcoPzkzEIB5d5lkAgAs/ugzGv7aE2NFIu2GKgPoHI1mTw0ATP6vLqaRRbKecLWuChdLPtGF5zLR9RgxUHeecPhIPbadPq8L38Y8y8R+SbrzLBf817BzI/+fAidM4+/rYTH6DIPo3YgOsR7QHusNbRm/6Fwo1OH2Cjs4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODj8U/J/hNFTtkLK7qsAAAAASUVORK5CYII=";
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_TILESET;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_async__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax_ajax_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__ = __webpack_require__(3);




let TileContext = class TileContext extends __WEBPACK_IMPORTED_MODULE_0__core_async__["b" /* default */] {

  constructor(options) {
    super();
    this.options = options;
    const remote = options.remote,
          tileset = options.tileset,
          isGround = options.isGround;

    let cols;

    if (remote) {
      __WEBPACK_IMPORTED_MODULE_1__ajax_ajax_loader__["a" /* default */].load(remote).then(data => {
        this.processImage(data.image, data.columns, isGround);
      });
    } else if (tileset) {
      this.processImage(tileset, isGround);
    } else {
      throw new Error("Please provide (remote || tileset) as options for TileContext");
    }
  }

  processImage(tileset, isGround) {
    this.tilesetImage = new Image();
    var m_canvas = document.createElement('canvas');

    this.tilesetImage.src = tileset;
    this.tilesetImage.onload = () => {
      this.tilesetImage.onload = undefined;
      this.colLength = this.tilesetImage.width / __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */];
      m_canvas.width = this.tilesetImage.width;
      m_canvas.height = this.tilesetImage.height;
      var m_context = m_canvas.getContext("2d");
      m_context.drawImage(this.tilesetImage, 0, 0);
      if (isGround) {
        for (let i = 0; i < 6; i++) {
          this.buildBlockTexture(m_context, 0, i * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 3);
        }
      }
      this.tilesetImage.src = m_canvas.toDataURL();

      //document.body.appendChild(this.tilesetImage);
      this.done();
    };
  }

  buildBlockTexture(ctx, startX, startY) {
    let color = ctx.getImageData(startX, startY, 1, 1),
        highlightColor = ctx.getImageData(startX, startY, 1, 1),
        darkColor = ctx.getImageData(startX, startY, 1, 1),
        slopeColor = ctx.getImageData(startX, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], 1, 1),
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
    ctx.fillRect(startX, startY, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 4, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */]);
    ctx.fillRect(startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 7, startY, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 3, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 3);
    ctx.fillStyle = `rgb(${slopeColor.data[0]}, ${slopeColor.data[1]}, ${slopeColor.data[2]})`;
    ctx.fillRect(startX, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 4, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */]);

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
      for (let y = 0; y < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] - limitHeight; y += 2) {
        for (let x = 0; x < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */]; x += 2) {
          if (checkFn(x, y)) {
            ctx.putImageData(col, sx + x, sy + y);
            ctx.putImageData(col, sx + x + 1, sy + y);
            ctx.putImageData(col, sx + x, sy + y + 1);
            ctx.putImageData(col, sx + x + 1, sy + y + 1);
          }
        }
      }
    }

    noise(highlightColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], startY, .02);
    noise(highlightColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 2, startY, .04);
    noise(highlightColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 3, startY, .06);

    noise(darkSlopeColor, startX, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], .05, 6);
    noise(darkSlopeColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], .1);
    noise(darkSlopeColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 2, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], .2);
    noise(darkSlopeColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 3, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], .3);

    noise(color, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 13, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], .2);
    noise(color, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 14, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], .25);
    noise(color, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 15, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], .30);
    noise(color, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 16, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], .35);

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 13, startY, (x, y) => {
      return y < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] / 2 && x > y && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 14, startY, (x, y) => {
      return y < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] / 2 && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 15, startY, (x, y) => {
      return x + y < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] / 2 && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 16, startY, (x, y) => {
      return x < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] / 2 && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 17, startY, (x, y) => {
      return y + x < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] + 10 && Math.random() < .9;
    });

    noise(darkColor, startX + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 18, startY, (x, y) => {
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

      for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */]; i += 2) {

        n ? renderWithProbability(highlightColor, x + i, y, .8) && renderWithProbability(highlightColor, x + i, y + 2, .4) && renderWithProbability(color, x + i, y, .1) : undefined;
        s ? renderWithProbability(darkSlopeColor, x + i, y + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] - 2, 1) && renderWithProbability(darkSlopeColor, x + i, y + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] - 4, .2) && renderWithProbability(darkColor, x + i, y + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] - 4, .6) : undefined;

        e ? renderWithProbability(darkColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] - 2, y + i, 1) && renderWithProbability(darkSlopeColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] - 2, y + i, .8) && renderWithProbability(darkColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] - 4, y + i, .8) && renderWithProbability(darkColor, x + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] - 6, y + i, .6) : undefined;

        w ? renderWithProbability(highlightColor, x, y + i, .9, true) && renderWithProbability(highlightColor, x + 2, y + i, .7) : undefined;
      }
    }

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 7, startY, 1, 0, 1, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 8, startY, 1, 0, 0, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 9, startY, 1, 0, 0, 1);

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 7, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], 0, 0, 1, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 9, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], 0, 0, 0, 1);

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 7, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 2, 0, 1, 1, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 8, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 2, 0, 1, 0, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 9, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 2, 0, 1, 0, 1);

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 10, startY, 0, 1, 1, 1);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 10, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], 1, 0, 1, 1);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 10, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 2, 1, 1, 1, 1);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 11, startY, 1, 1, 0, 0);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 11, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], 0, 0, 1, 1);
    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 12, startY, 1, 1, 1, 0);

    renderSquare(slopeColor, __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */] * 12, startY + __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], 1, 1, 0, 1);
  }

  renderTile(ctx, col, row, tile) {
    var tileRow = tile / this.colLength | 0; // Bitwise OR operation
    var tileCol = tile % this.colLength | 0;

    ctx.drawImage(this.tilesetImage, tileCol * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], tileRow * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], col * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], row * __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_2__defaults_tilesets__["a" /* TILE_SIZE */]);
  }

};


/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallBlock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



let WallBlock = class WallBlock extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {

  constructor(props) {
    super(_extends({
      tileset: 'wall',
      block: true,
      tile: Math.round(Math.random() * 3)
    }, props));
  }

};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatureEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



let CreatureEntity = class CreatureEntity extends __WEBPACK_IMPORTED_MODULE_0__entity__["a" /* default */] {

  constructor(properties) {
    super(_extends({}, properties, {
      tile: 1,
      tileset: 'creatures',
      isAlive: true,
      block: false,
      type: 'creature',
      health: 100,
      tickInterval: 100
    }));

    this.currentTick = 0;
  }

  doTick() {
    if (++this.currentTick > this.props.tickInterval) {
      this.tick();
      this.currentTick = 0;
    }
  }

  tick(world) {}

};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = layoutBuildings;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__items__ = __webpack_require__(4);


function layoutBuildings(world) {
  let layers = world.layers,
      heights = world.heights,
      width = world.width,
      height = world.height,
      biomes = world.biomes,
      random = world.random,
      getItem = world.getItem;


  let item,
      minH = layers.length,
      maxH = 0,
      sx = random(10, width - 20, true),
      sy = random(10, height - 20, true),
      ex = sx + random(10, 20, true),
      ey = sy + random(10, 20, true);

  world.iterateMatrixBound(heights, (val, x, y) => {
    minH = Math.min(minH, val);
    maxH = Math.max(maxH, val + 1);
  }, { sx, sy, ex, ey });

  world.range(minH, maxH, i => {

    world.rangeMatrix([[sx, ex], [sy, ey]], (x, y, boundary) => {
      if (layers[i][y][x] === undefined || i === maxH - 1) {
        world.addItem('wall', x, y, i, {
          biome: biomes[y][x],
          tile: world.random(48, 51, true)
        });
      }
    });
  });

  world.rangeMatrix([[sx, ex], [sy, ey]], (x, y, boundary) => {
    if (boundary) {
      world.addItem('wall', x, y, y === sy && x > sx && x < ex - 1 ? maxH + 1 : maxH, {
        biome: biomes[y][x],
        tile: y === ey - 1 ? 7 : world.random(0, 1, true)
      });
    } else if (y === ey - 2 || y === sy + 1) {
      world.addItem('wall', x, y, y === sy + 1 ? maxH : maxH + 1, {
        biome: biomes[y][x],
        tile: y === sy + 1 ? 7 : world.random(0, 1, true)
      });
    }
  });
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Debugger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_tilesets__ = __webpack_require__(5);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




let Debugger = class Debugger {

  constructor(world) {
    if (!world) {
      throw new Error("World parameter must be passed");
    }

    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    canvas.addEventListener('click', evt => {
      let clientX = evt.clientX,
          clientY = evt.clientY;

      let x = Math.round((clientX - 30) / __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */]);
      let y = Math.round((clientY - 20) / __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */]);

      ctx.beginPath();
      ctx.rect(x * __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */], y * __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */], __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */]);
      ctx.stroke();

      console.log(`Location: [${x}, ${y}]`);
      console.log(`Height: ${world.heights[y][x]}`);
    });

    Object.assign(this, {
      enabled: true,
      showHeights: false,
      showTiles: false,
      world
    });

    let wRender = world.render;

    world.render = (...params) => {
      wRender.apply(world, params);

      if (this.enabled) {
        let ctx = params[0],
            x = params[1],
            y = params[2];

        var _world$getRenderBound = world.getRenderBoundaries(),
            _world$getRenderBound2 = _slicedToArray(_world$getRenderBound, 2);

        let scWidth = _world$getRenderBound2[0],
            scHeight = _world$getRenderBound2[1],
            layers = world.layers;


        ctx.font = "10px Arial";
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.rect(0, 0, scWidth - 20, scHeight - 20);
        ctx.stroke();

        if (this.showHeights) {

          world.iterateMatrixBound(world.heights, (val, x, y) => {
            ctx.fillText(val, x * __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */] + 4, y * __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */] + 12);
          }, {
            sx: x,
            sy: y,
            l: Math.min(scWidth / __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */], layers[0][0].length),
            h: Math.min(scHeight / __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */], layers[0].length),
            startFrom0: true
          });
        } else if (this.showTiles) {
          let nextX = 20,
              nextY = 20;

          ctx.lineWidth = 1;

          Object.keys(__WEBPACK_IMPORTED_MODULE_1__render_tilesets__["a" /* default */].tilesets).forEach(key => {
            let tileset = __WEBPACK_IMPORTED_MODULE_1__render_tilesets__["a" /* default */].tilesets[key],
                image = tileset.tilesetImage;

            world.repeat(tileset.colLength, x => {
              ctx.fillText(x, nextX + x * __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */] + 4, nextY - 10);
            });

            world.repeat(image.height / __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */], y => {
              ctx.fillText(y, nextX - __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */] + 5, nextY + y * __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */] + __WEBPACK_IMPORTED_MODULE_0__defaults_tilesets__["a" /* TILE_SIZE */] - 5);
            });

            ctx.drawImage(image, nextX, nextY);
            ctx.beginPath();
            ctx.rect(nextX, nextY, image.width, image.height);
            ctx.stroke();

            nextX = image.width + 40;
            if (nextX > scWidth) {
              nextX = 10;
              nextY += image.height + 40;
            }
          });
        }
      }
    };
  }

  toggle(param) {
    if (param) {
      this[param] = !this[param];
    } else {
      this.enabled = !this.enabled;
    }
  }

};


/***/ })
],[6]);