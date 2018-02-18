import {TILE_SIZE} from '../defaults/tilesets';
import Tilesets from '../render/tilesets';

export default class Debugger {

  constructor(world) {
    if (!world) {
      throw new Error("World parameter must be passed")
    }

    Object.assign(this, {
      enabled: true,
      showHeights: false,
      showTiles: false,
      world
    })

    let wRender = world.render;

    world.render = (...params) => {
      wRender.apply(world, params)

      if (this.enabled) {
        let [ctx, x, y] = params,
          [scWidth, scHeight] = world.getRenderBoundaries(), {layers} = world;

        ctx.font = "10px Arial";
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "red";
        ctx.rect(0, 0, scWidth - 20, scHeight - 20);
        ctx.stroke();

        if (this.showHeights) {

          world.iterateMatrixBound(world.heights, (val, x, y) => {
            ctx.fillText(val, x * TILE_SIZE + 4, y * TILE_SIZE + 12);
          }, {
            sx: x,
            sy: y,
            ex: Math.min(scWidth / TILE_SIZE, layers[0][0].length),
            ey: Math.min(scHeight / TILE_SIZE, layers[0].length),
            startFrom0: true
          })
        } else if (this.showTiles) {
          let nextX = 20,
            nextY = 20;

          ctx.lineWidth = 1;

          Object.keys(Tilesets.tilesets).forEach(key => {
            let tileset = Tilesets.tilesets[key],
              image = tileset.tilesetImage;

            world.repeat(tileset.colLength, (x) => {
              ctx.fillText(x, nextX + x * TILE_SIZE + 4, nextY - 10);
            })

            world.repeat(image.height / TILE_SIZE, (y) => {
              ctx.fillText(y, nextX - TILE_SIZE + 5, nextY + y * TILE_SIZE + TILE_SIZE - 5);
            })

            ctx.drawImage(image, nextX, nextY);
            ctx.beginPath();
            ctx.rect(nextX, nextY, image.width, image.height);
            ctx.stroke();

            nextX = image.width + 40;
            if (nextX > scWidth) {
              nextX = 10;
              nextY += image.height + 40;
            }
          })
        }
      }

    }
  }

  toggle(param) {
    if (param) {
      this[param] = !this[param];
    } else {
      this.enabled = !this.enabled;
    }
  }

}
