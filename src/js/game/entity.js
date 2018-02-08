import {BASIC} from './defaults';
import Tileset from '../render/tilesets';

export default class Entity {

  constructor(properties) {
    this.props = {
      ...BASIC,
      ...properties
    }
  }

  render(ctx, x, y, neighbours) {
    Tileset.getContext(this.props.tileset).renderTile(ctx, x, y, this.props.tile)
  }

}
