import { DEFAULT_TILESET }  from './constants';
import TileContext from './engine/render/tile.context';
import Tracker from './engine/tracker';

export default class Engine extends Tracker {

  constructor() {
    super();
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.append(this.canvas)
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = window.innerHeight;
    this.defaultTileContext = new TileContext({tileset: DEFAULT_TILESET, cols: 7});
    this.remoteTileContext = new TileContext({remote: "https://gist.githubusercontent.com/cstefanache/8430e1d19c8bae33d99c6f7205ddd84f/raw/596d92fd3d00c2b5c75df17d7f832a2850fbea66/tilesets.json"});
    this.done();
  }

  onLoaded() {
    console.log("Executed")
    for (var r = 0; r < 40; r++) {
       for (var c = 0; c < 40; c++) {
          var tile = Math.round(Math.random()*6);
          let tileset = Math.random() < 0.5 ? this.defaultTileContext : this.remoteTileContext
          tileset.renderTile(this.ctx, r, c, tile)
       }
    }
  }

}
