import Async from '../core/async';
import Items from './items';

export default class World extends Async {

  constructor(options) {
    super();

    let {width, height} = options;

    this.width = width;
    this.height = height;

    this.biomes = [];
    this.layers = [];

    for (let h = 0; h < height; h++) {
      let row = [];
      for (let w = 0; w < width; w++) {
        row.push(
          Math.random() > 0
            ? 0
            : 1
        )
      }
      this.biomes.push(row);
    }
    this.spawnBiome(1, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random())
    this.spawnBiome(2, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random())
    this.spawnBiome(3, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random())
    this.spawnBiome(4, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random())
    this.spawnBiome(5, Math.round(Math.random() * width), Math.round(Math.random() * height), Math.random())

    this.layers.push(this.buildGround());
    this.layers.push(this.buildBlocks());
    this.done();
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

  buildGround() {
    let groundLayer = [];
    for (let h = 0; h < this.height; h++) {
      let row = [];
      for (let w = 0; w < this.width; w++) {
        row.push(Items.getItem('ground', {biome: this.biomes[w][h]
        }, {
          getTile: (inst) => {
            return inst.props.biome
          }
        }))
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

    let scWidth = document.body.clientWidth / 32;
    let scHeight = window.innerHeight / 32;

    for (let h = 0; h < this.height; h++) {
      for (let w = 0; w < this.width; w++) {
        let val = this.biomes[h][w];
        ctx.fillStyle = "rgb(" + (
          125 + (val * 16)
        ) + "," + (
          125 - (val * 16)
        ) + "," + 125 + ")";
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
    for (let l = 0; l < this.layers.length; l++) {
      let layer = layers[l];
      for (let i = 0; i < scHeight / 32; i++) {
        let row = layer[i + y];
        for (let j = 0; j < scWidth / 32; j++) {
          let obj = row[j + x];
          if (obj) {
            obj.render(ctx, i, j)
          }
        }
      }
    }

    this.renderBiomes(ctx, x, y)
  }

}