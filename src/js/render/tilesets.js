import {DEFAULT_TILESET as GROUND_TILESET} from '../defaults/ground';
import {DEFAULT_TILESET as WALLS_TILESET} from '../defaults/walls';
import TileContext from './tile.context';

class Tilesets {

  constructor() {
    this.tilesets = {};
    this.registerContext('ground', new TileContext({tileset: GROUND_TILESET, cols: 32, isGround: true}));
    this.registerContext('wall', new TileContext({tileset: WALLS_TILESET, cols: 6}));
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
