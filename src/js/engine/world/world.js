import Tracker from '../tracker';
import EntityFactory from '../game/entity.factory';
const MAX_HEIGHT = 2;
export default class World extends Tracker {

  constructor(options) {
    super();
    //this.done();

    let {width, height} = options,
      //layers
      world = [],
      ground = [],
      row = [];

    this.width = width;
    this.height = height;
    for (let l = 0; l < MAX_HEIGHT; l++) {
      ground = [];
      for (let i = 0; i < width; i++) {
        row = [];
        for (let j = 0; j < height; j++) {
          if (l === 0) {
            let Elem = EntityFactory.getBlock('ground');
            row.push(new Elem())
          } else if (l === 1) {
            if (Math.random() < .3) {
              let Elem = EntityFactory.getBlock('wall');
              row.push(new Elem())
            } else {
              row.push(undefined)
            }
          }
        }
        ground.push(row)
      }
      world.push(ground);

    }

    this.world = world;
    this.done();

  }

  render(ctx) {
    for (let l = 0; l < MAX_HEIGHT; l++) {
      let layer = this.world[l];
      for (let i = 0; i < layer.length; i++) {
        let row = layer[i];
        for (let j = 0; j < row.length; j++) {
          let obj = row[j];
          if (obj) {
            obj.render(ctx, i, j)
          }
        }
      }
    }
  }

}
