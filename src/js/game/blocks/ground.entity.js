import Entity from '../entity';
const COLS = 32;
const BIOME_MAP = {
  "0": 0,
  "1": COLS*3,
  "2": COLS*6,
  "3": COLS*9,
  "4": COLS*12
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

  getTile() {
    return BIOME_MAP[this.props.biome]+Math.round(Math.random() * 3)
  }

}
