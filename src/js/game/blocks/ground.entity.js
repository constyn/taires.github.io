import Entity from '../entity';

const COLS = 32;
const BIOME_MAP = {
  "0": 0,
  "1": COLS * 3,
  "2": COLS * 6,
  "3": COLS * 9,
  "4": COLS * 12
}

export default class GroundBlock extends Entity {

  constructor(properties) {
    super({
      ...properties,
      tile: 1,
      name: 'ground',
      block: true
    })
  }

  getTile(neigh) {
    if (!this.props._tile) {
      this.props._tile = BIOME_MAP[this.props.biome]; // + Math.round(Math.random() * 3)
    }
    if (neigh[6] === undefined) {
      return this.props._tile + 32;
    } else if (neigh[3] === undefined) {
      return this.props._tile + 64;
    } else if (neigh[4] === undefined) {
      return this.props._tile + 65;
    } else if (neigh[1] === undefined) {
      return this.props._tile + 66;
    }
    return this.props._tile;
  }

  render(ctx, x, y, neigh) {
    super.render(ctx, x, y, neigh);
    //ctx.fillText(this.props.height,x*16 +2,y*16 + 10);
  }

}
