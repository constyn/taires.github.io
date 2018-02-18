import {DEFAULT_TILESET as GROUND_TILESET} from '../defaults/ground';
import {DEFAULT_TILESET as WALLS_TILESET} from '../defaults/walls';
import {DEFAULT_TILESET as CREATURES_TILESET} from '../defaults/creatures';
import TileContext from './tile.context';

class Tilesets {

  constructor() {
    this.tilesets = {};
    this.registerContext('ground', new TileContext({tileset: GROUND_TILESET, isGround: true}));
    this.registerContext('wall', new TileContext({tileset: WALLS_TILESET}));
    this.registerContext('creatures', new TileContext({tileset: CREATURES_TILESET}));
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
