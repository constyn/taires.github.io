import {BASIC} from './defaults';
import Tileset from '../render/tilesets';
import {matchProps} from '../core/utils';

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

  typeOf(block, toMatch = {}) {
    return block !== undefined && matchProps(block.props, toMatch);
  }

  getTile(neigh) {
    return this.props.tile;
  }

  render(ctx, x, y, opt) {
    let {tile, neigh} = opt,
      tileToRender = tile || this.getTile.call(this, neigh);

    Tileset.getContext(this.props.tileset).renderTile(ctx, x, y, tileToRender)
  }

}
