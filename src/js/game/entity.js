import {BASIC} from './defaults';
import Tileset from '../render/tilesets';

export default class Entity {

  constructor(properties) {
    this.props = {
      ...BASIC,
      ...properties
    }
  }

  init(overrides) {
    Object.keys(overrides).forEach(key => {
      let ref = overrides[key];
      this[key] = () => {
        return ref(this)
      };
    })

  }

  getTile() {
    return this.props.tile;
  }

  render(ctx, x, y, neighbours) {
    Tileset.getContext(this.props.tileset).renderTile(ctx, x, y, this.getTile.call(this))
  }

}
