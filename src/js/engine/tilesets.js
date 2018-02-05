import {DEFAULT_TILESET} from '../constants';
import TileContext from './render/tile.context';

class Tilesets {

  constructor() {
    this.tilesets = {};
    this.registerContext('default', new TileContext({tileset: DEFAULT_TILESET, cols: 7}));
  }

  getContext(name) {
    return this.tilesets[name];
  }

  registerContext(name, context) {
    this.tilesets[name] = context
  }

}

export default new Tilesets();
