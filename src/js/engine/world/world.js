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
            let ground = new Elem();
            // if (Math.random() < 0.4) {   ground.props.tileset = 'hash' }
            row.push(ground)
          } else if (l === 1) {
            if (Math.random() < .3) {
              let Elem = EntityFactory.getBlock('wall');
              let wall = new Elem();
              //if (Math.random() < 0.4) {   wall.props.tileset = 'hash' }
              row.push(wall)
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

  render(ctx, x, y) {
    ctx.clearRect(0,0, 600,600)
    for (let l = 0; l < MAX_HEIGHT; l++) {
      let layer = this.world[l];
      for (let i = 0; i < 16; i++) {
        let row = layer[i + x];
        for (let j = 0; j < 16; j++) {
          let obj = row[j + y];
          if (obj) {
            obj.render(ctx, i, j)
          }
        }
      }
    }
  }

}
