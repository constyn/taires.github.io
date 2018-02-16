import Async from '../core/async';
import Items from './items';
import {TILE_SIZE} from '../defaults/tilesets';
import {initializeMatrix, getNeightbours} from '../core/utils';

const MAX_HEIGHT = 10;

export default class World extends Async {

  constructor(options) {
    super();

    let {width, height} = options;

    this.width = width;
    this.height = height;

    this.biomes = [];
    this.heights = initializeMatrix(width, height, 2);

    this.layers = [];

    this.biomes = initializeMatrix(width, height, 2);

    for (let i = 1; i < 6; i++) {
      this.spawnBiome(i, Math.round(Math.random() * width), Math.round(Math.random() * height), .2 + Math.random() * .8)
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
          row.push(Items.getItem('ground', {
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

  buildBlocks() {
    let blocksLayer = [];
    for (let h = 0; h < this.height; h++) {
      let row = [];
      for (let w = 0; w < this.width; w++) {
        if (Math.random() < .1) {
          row.push(Items.getItem('block', {biome: this.biomes[w][h]
          }, {
            getTile: (inst) => {
              return (inst.props.biome * 32 * 3) + 16
            }
          }))
        } else {
          row.push(undefined)
        }
      }
      blocksLayer.push(row);
    }

    return blocksLayer;
  }

  renderBiomes(ctx, x, y) {

    let scWidth = document.body.clientWidth / TILE_SIZE;
    let scHeight = window.innerHeight / TILE_SIZE;

    for (let h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        let val = this.biomes[h][w];
        ctx.fillStyle = "rgb(" + (
        125 + (val * 16)) + "," + (
        125 - (val * 16)) + "," + 125 + ")";
        ctx.fillRect(w, h, 1, 1);
      }
    }

    //ctx.rect(x, y, scWidth, scHeight); ctx.stroke();

  }

  render(ctx, x, y) {
    let {width, height, layers} = this;

    let scWidth = document.body.clientWidth;
    let scHeight = window.innerHeight;

    ctx.clearRect(0, 0, scWidth, scHeight)
    for (let l = 0; l < layers.length - 1; l++) {
      let layer = layers[l];
      for (let i = 0; i < Math.min(scHeight / TILE_SIZE, layer.length); i++) {
        let row = layer[i + y];
        if (row) {
          for (let j = 0; j < Math.min(scWidth / TILE_SIZE, row.length); j++) {
            let obj = row[j + x];
            if (obj) {
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

    //this.renderBiomes(ctx, x, y)
  }

}
