import { BASIC } from './defaults';
import Tileset from '../tilesets';

export default class BasicEntity {

  constructor(properties) {
    this.props = Object.assign({}, BASIC, properties)
  }

  render(ctx, x, y, neighbours) {
    Tileset.getContext(this.props.tileset).renderTile(ctx, x, y, this.props.tile)
  }

}
