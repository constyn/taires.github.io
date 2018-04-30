import {AsyncUtil} from '../core/async';
import Items from './items';
import {TILE_SIZE} from '../defaults/tilesets';
import {initializeMatrix, getNeightbours} from '../core/utils';

import {layoutBuildings} from './buildings/village';

const MAX_HEIGHT = 10;

export default class World extends AsyncUtil {

  constructor(options) {
    super();
    let {width, height} = options;

    this.getItem = Items.getItem;
    this.tickers = [];

    Object.assign(this, options, {
      biomes: this.initializeMatrix(width, height, 2),
      heights: this.initializeMatrix(width, height, 2),
      layers: []
    });

    this.repeat(4, (i) => {
      this.spawnBiome(i, Math.round(Math.random() * width), Math.round(Math.random() * height), .2 + Math.random() * .8)
    })

    this.repeat(15, (i) => {
      let x = Math.round(Math.random() * width),
        y = Math.round(Math.random() * height),
        hh = 3 + Math.round(Math.random() * 4);

      this.renderHill(3, x, y, .2);
      this.renderHill(4, x, y, .1);
      this.renderHill(4, x, y, .06);
      this.renderHill(5, x, y, .03);
    })

    this.repeat(MAX_HEIGHT, (i) => {
      this.layers.push(this.buildGround(i));
    })

    this.repeat(15, (i) => {
      layoutBuildings(this)
    })

    this.addItem('creatures', 5, 5, this.heights[5][5]);

    for (let i = 0; i < 100; i++) {
      let [px, py] = [
        10 + Math.round(Math.random() * (width - 20)),
        10 + Math.round(Math.random() * (height - 20))
      ]
      this.addItem('creatures', px, py, this.heights[px][py]);
    }

    this.done();

    setInterval(() => {
      this.tickers.forEach(ticker => {
        ticker.doTick(this);
      });
    }, 10)
  }

  addItem(type, x, y, z, opt) {
    let item = this.getItem(type, {
      ...opt,
      x,
      y,
      z,
      world: this
    });
    if (item) {
      if (item.props.block) {
        this.heights[y][x] = z;
      }

      if (item.doTick) {
        this.tickers.push(item);
      }

      this.layers[z][y][x] = item;
    }
  }

  renderHill(height, startX, startY, strength) {
    if (startX < 0 || startX > this.width - 1 || startY < 0 || startY > this.height - 1)
      return;

    let nextStrength = strength - Math.random() * .01;
    if (nextStrength > 0 && this.heights[startY][startX] !== height) {
      this.heights[startY][startX] = height;

      for (let xof of[-1, 0, 1]) {
        for (let yof of[-1, 0, 1]) {
          if (xof !== 0 || yof !== 0) {
            this.renderHill(height, startX + xof, startY + yof, nextStrength);
            this.renderHill(height, startX + xof, startY + yof, nextStrength);
          }
        }
      }
    }

  }

  spawnBiome(num, startX, startY, strength) {
    if (startX < 0 || startX > this.width - 1 || startY < 0 || startY > this.height - 1)
      return;

    let nextStrength = strength - (Math.random() * .02);
    if (nextStrength > 0 && this.biomes[startY][startX] !== num) {
      this.biomes[startY][startX] = num;

      for (let xof of[-1, 0, 1]) {
        for (let yof of[-1, 0, 1]) {
          if (xof !== 0 || yof !== 0 && Math.random() < strength) {
            this.spawnBiome(num, startX + xof, startY + yof, nextStrength)
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
          }, {}))
        } else {
          row.push(undefined)
        }
      }
      groundLayer.push(row);
    }

    return groundLayer;
  }

  renderBiomes(ctx, x, y) {

    let scWidth = document.body.clientWidth / TILE_SIZE;
    let scHeight = window.innerHeight / TILE_SIZE;

    this.iterateMatrix(this.biomes, (val, w, h) => {
      ctx.fillStyle = "rgb(" + (
      125 + (val * 16)) + "," + (
      125 - (val * 16)) + "," + 125 + ")";
      ctx.fillRect(w, h, 1, 1);
    })
  }

  render(ctx, x, y) {
    let {width, height, layers} = this,
      [scWidth, scHeight] = this.getRenderBoundaries();

    ctx.clearRect(0, 0, scWidth, scHeight)

    for (let l = 0; l < layers.length - 1; l++) {
      let layer = layers[l];
      for (let i = 0; i < Math.min(scHeight / TILE_SIZE, layer.length); i++) {
        let row = layer[i + y];
        if (row) {
          for (let j = 0; j < Math.min(scWidth / TILE_SIZE, row.length); j++) {
            let obj = row[j + x];
            if (obj && l > this.heights[i + y][j + x] - 2) {
              obj.render(ctx, j, i, {
                neigh: getNeightbours(layer, j + x, i + y, true),
                topNeigh: getNeightbours(layers[l + 1], j + x, i + y, true),
                biomeNeigh: getNeightbours(this.biomes, j + x, i + y, true)
              })
            }
          }
        }
      }
    }
  }

}
