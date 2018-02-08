import {DEFAULT_TILESET} from '../defaults/tilesets';
import TileContext from './tile.context';

class Tilesets {

  constructor() {
    this.tilesets = {};
    this.registerContext('default', new TileContext({tileset: DEFAULT_TILESET, cols: 7}));
  }

  loadRemote(hash, remote) {
    this.registerContext(hash, new TileContext({remote}))
  }

  getContext(name) {
    return this.tilesets[name];
  }

  registerContext(name, context) {
    this.tilesets[name] = context
  }

}

export default new Tilesets();
