import Tracker from '../tracker';
import loader from '../ajax/ajax.loader';

const TILE_SIZE = 32;

export default class TileContext extends Tracker {

  constructor(options) {
    super();
    this.options = options;
    const {remote, tileset, cols} = options;

    if (remote) {
      loader.load(remote).then(data => {
        this.processImage(data.image, data.columns);
      })
    } else if (tileset, cols) {
      this.processImage(tileset, cols)
    } else {
      throw new Error("Please provide (remote || tileset, colLength) as options for TileContext");
    }


  }

  processImage(tileset, colLength) {
    this.tilesetImage = new Image();
    this.tilesetImage.src = tileset;
    this.tilesetImage.onload = () => {
      this.done();
    }
    this.colLength = colLength;
  }

  renderTile(ctx, row, col, tile) {
    var tileRow = (tile / this.colLength) | 0; // Bitwise OR operation
    var tileCol = (tile % this.colLength) | 0;
    ctx.drawImage(this.tilesetImage, (tileCol * TILE_SIZE), (tileRow * TILE_SIZE), TILE_SIZE, TILE_SIZE, (col * TILE_SIZE), (row * TILE_SIZE), TILE_SIZE, TILE_SIZE);
  }

}
