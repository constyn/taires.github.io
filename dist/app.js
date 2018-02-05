webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tracker; });
const listeners = [];

var numToLoad = 0;

let Tracker = class Tracker {

  constructor() {
    listeners.push(this);
    numToLoad++;
    console.log("Incrementing", numToLoad);
  }

  done() {
    numToLoad--;
    console.log("Decrementing", numToLoad);
    if (numToLoad === 0) {
      listeners.forEach(inst => {
        console.log(inst);
        inst.onLoaded();
      });

      listeners.length = 0;
    }
  }

  onLoaded() {}

};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine__ = __webpack_require__(3);


let engine = new __WEBPACK_IMPORTED_MODULE_0__engine__["a" /* default */]();

/*
var ground = [
 [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 34, 34, 56, 57, 54, 55, 56, 147, 67, 67, 68, 79, 79, 171, 172, 172, 173, 79, 79, 55, 55, 55],
 [172, 172, 172, 79, 34, 34, 34, 34, 34, 34, 146, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 159, 189, 79, 79, 55, 55, 55],
 [172, 172, 172, 79, 79, 34, 34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 159, 189, 79, 79, 79, 55, 55, 55],
 [188, 188, 188, 79, 79, 79, 79, 34, 34, 34, 36, 172, 172, 143, 142, 157, 79, 79, 79, 79, 79, 79, 187, 159, 189, 79, 79, 79, 55, 55, 55, 55],
 [79, 79, 79, 79, 79, 79, 79, 79, 34, 34, 36, 172, 159, 158, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 39, 51, 51, 51, 55, 55],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 36, 172, 143, 142, 172, 172, 143, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 55],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 34, 52, 172, 172, 172, 172, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 188, 158, 172, 172, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 187, 158, 159, 189, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 159, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
 [79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
 [155, 142, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 188, 188, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
 [171, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 173, 79, 79, 79, 79],
 [171, 172, 143, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 187, 189, 79, 79, 79, 79],
 [187, 188, 158, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79],
 [79, 79, 79, 188, 189, 79, 79, 79, 79, 79, 79, 155, 156, 156, 157, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 156],
 [34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172],
 [34, 34, 34, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
 [34, 34, 34, 34, 79, 79, 79, 79, 79, 79, 155, 172, 172, 159, 189, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 171, 172, 172],
 [34, 34, 34, 34, 34, 34, 79, 79, 79, 79, 171, 172, 172, 173, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 79, 155, 142, 172, 172]
 ];



let canvas = document.createElement('canvas');
document.body.append(canvas)
canvas.width = document.body.clientWidth;
canvas.height = window.innerHeight;

var tilesetImage = new Image();
tilesetImage.src = tileset;
tilesetImage.onload = drawImage;


var ctx = canvas.getContext('2d');
var tileSize = 32;       // The size of a tile (32×32)
var rowTileCount = 20;   // The number of tiles in a row of our background
var colTileCount = 32;   // The number of tiles in a column of our background
var imageNumTiles = 16;  // The number of tiles per row in the tileset image
function drawImage () {
   for (var r = 0; r < rowTileCount; r++) {
      for (var c = 0; c < colTileCount; c++) {
         var tile = ground[ r ][ c ];
         var tileRow = (tile / imageNumTiles) | 0; // Bitwise OR operation
         var tileCol = (tile % imageNumTiles) | 0;
         ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
      }
   }
}
*/

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Engine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_render_tile_context__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_tracker__ = __webpack_require__(0);




let Engine = class Engine extends __WEBPACK_IMPORTED_MODULE_2__engine_tracker__["a" /* default */] {

    constructor() {
        super();
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.append(this.canvas);
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = window.innerHeight;
        this.defaultTileContext = new __WEBPACK_IMPORTED_MODULE_1__engine_render_tile_context__["a" /* default */]({
            tileset: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* DEFAULT_TILESET */],
            cols: 7
        });
        this.remoteTileContext = new __WEBPACK_IMPORTED_MODULE_1__engine_render_tile_context__["a" /* default */]({
            remote: "https://gist.githubusercontent.com/cstefanache/8430e1d19c8bae33d99c6f7205ddd84f/raw/596d92fd3d00c2b5c75df17d7f832a2850fbea66/tilesets.json"
        });
        this.done();
    }

    onLoaded() {
        let size = 34;
        let map = this.generateMap(this.canvas.height / size, this.canvas.width / size);
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                let tile = map[i][j].tile;
                let tileset = true ? this.defaultTileContext : this.remoteTileContext;
                tileset.renderTile(this.ctx, i, j, tile);
            }
        }
    }

    generateMap(width, height) {
        width = Math.round(width);
        height = Math.round(height);
        let map = [];
        for (let i = 0; i < width; i++) {
            map[i] = [];
            for (let j = 0; j < height; j++) {
                map[i][j] = { tile: 17, wall: true, i, j };
            }
        }

        let startX = Math.floor(Math.random() * width);
        let startY = Math.floor(Math.random() * height);
        map[startX][startY].tile = 12;
        map[startX][startY].wall = false;

        let endX = Math.floor(Math.random() * width);
        let endY = Math.floor(Math.random() * height);
        map[endX][endY].tile = 13;
        map[endX][endY].wall = false;

        let last = map[startX][startY];
        let path = [last];

        let times = 30000;
        let found = false;

        while (times && !found) {
            let nextX = last.i;
            let nextY = last.j;
            if (Math.random() < .5) {
                nextX += Math.random() < .5 ? -1 : 1;
                nextX = Math.max(0, Math.min(nextX, width - 1));
            } else {
                nextY += Math.random() < .5 ? -1 : 1;
                nextY = Math.max(0, Math.min(nextY, height - 1));
            }

            let next = map[nextX][nextY];

            if (next && next.wall && next.tile != 12 && next.tile != 13) {
                path.push(next);
                last = next;
                next.tile = 0;
                next.wall = false;
            } else if (this.isAccessible(map[endX][endY], width, height, map)) {
                found = true;
            }

            if (!this.isNextToWall(last, width, height, map)) {
                last = path[Math.floor(path.length * Math.random())];
            }

            //console.log(path);

            times--;
        }

        return map;
    }

    isNextToWall(loc, w, h, map) {
        return loc.i < w - 1 && map[loc.i + 1][loc.j].wall || loc.i > 0 && map[loc.i - 1][loc.j].wall || loc.j < h - 1 && map[loc.i][loc.j + 1].wall || loc.j > 0 && map[loc.i][loc.j - 1].wall;
    }

    isAccessible(loc, w, h, map) {
        return loc.i < w - 1 && !map[loc.i + 1][loc.j].wall || loc.i > 0 && !map[loc.i - 1][loc.j].wall || loc.j < h - 1 && !map[loc.i][loc.j + 1].wall || loc.j > 0 && !map[loc.i][loc.j - 1].wall;
    }

};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DEFAULT_TILESET = 'data:image/png;base64,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';
/* harmony export (immutable) */ __webpack_exports__["a"] = DEFAULT_TILESET;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tracker__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ajax_ajax_loader__ = __webpack_require__(6);



const TILE_SIZE = 32;

let TileContext = class TileContext extends __WEBPACK_IMPORTED_MODULE_0__tracker__["a" /* default */] {

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
    ctx.drawImage(this.tilesetImage, tileCol * TILE_SIZE, tileRow * TILE_SIZE, TILE_SIZE, TILE_SIZE, col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

};


/***/ }),
/* 6 */
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


/***/ })
],[1]);