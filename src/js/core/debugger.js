import {TILE_SIZE} from '../defaults/tilesets';

export default class Debugger {

  constructor(world) {
    if (!world) {
      throw new Error("World parameter must be passed")
    }

    Object.assign(this, {
      enabled: true,
      showHeights: false,
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
