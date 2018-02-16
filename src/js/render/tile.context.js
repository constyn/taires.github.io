import AsyncOperation from '../core/async';
import loader from '../ajax/ajax.loader';
import {TILE_SIZE} from '../defaults/tilesets';

export default class TileContext extends AsyncOperation {

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
    var m_canvas = document.createElement('canvas');

    this.tilesetImage.src = tileset;
    this.tilesetImage.onload = () => {
      this.tilesetImage.onload = undefined;

      m_canvas.width = this.tilesetImage.width;
      m_canvas.height = this.tilesetImage.height;
      var m_context = m_canvas.getContext("2d");
      m_context.drawImage(this.tilesetImage, 0, 0);
      for (let i = 0; i < 6; i++) {
        this.buildBlockTexture(m_context, 0, i * TILE_SIZE * 3);
      }
      this.tilesetImage.src = m_canvas.toDataURL();

      //document.body.appendChild(this.tilesetImage);
      this.done();
    }
    this.colLength = colLength;
  }

  buildBlockTexture(ctx, startX, startY) {
    let color = ctx.getImageData(startX, startY, 1, 1),
      highlightColor = ctx.getImageData(startX, startY, 1, 1),
      darkColor = ctx.getImageData(startX, startY, 1, 1),
      slopeColor = ctx.getImageData(startX, startY + TILE_SIZE, 1, 1),
      darkSlopeColor = ctx.getImageData(startX, startY , 1, 1);

    highlightColor.data[0] += 15;
    highlightColor.data[1] += 15;
    highlightColor.data[2] += 15;

    darkColor.data[0] -= 25;
    darkColor.data[1] -= 25;
    darkColor.data[2] -= 25;

    darkSlopeColor.data[0] -= 55;
    darkSlopeColor.data[1] -= 55;
    darkSlopeColor.data[2] -= 55;

    ctx.fillStyle = `rgb(${color.data[0]}, ${color.data[1]}, ${color.data[2]})`;
    ctx.fillRect(startX, startY, TILE_SIZE * 4, TILE_SIZE)
    ctx.fillRect(startX + TILE_SIZE * 7, startY, startX + TILE_SIZE * 3, startY + TILE_SIZE * 3);
    ctx.fillStyle = `rgb(${slopeColor.data[0]}, ${slopeColor.data[1]}, ${slopeColor.data[2]})`;
    ctx.fillRect(startX, startY + TILE_SIZE, TILE_SIZE * 4, TILE_SIZE)

    function put2xPixel(color, x, y, probability = 1) {
      if (probability === 1 || Math.random() < probability) {
        ctx.putImageData(color, x, y);
        ctx.putImageData(color, x + 1, y);
        ctx.putImageData(color, x, y + 1);
        ctx.putImageData(color, x + 1, y + 1);
      }
    }

    function noise(col, sx, sy, probability, limitHeight = 0) {
      let checkFn = typeof probability === 'function'
        ? probability
        : () => {
          return Math.random() < probability
        }
        for (let y = 0; y < TILE_SIZE - limitHeight; y += 2) {
          for (let x = 0; x < TILE_SIZE; x += 2) {
            if (checkFn(x, y)) {
              ctx.putImageData(col, sx + x, sy + y);
              ctx.putImageData(col, sx + x + 1, sy + y);
              ctx.putImageData(col, sx + x, sy + y + 1);
              ctx.putImageData(col, sx + x + 1, sy + y + 1);
            }
          }
        }
      }

    noise(highlightColor, startX + TILE_SIZE, startY, .02);
    noise(highlightColor, startX + TILE_SIZE * 2, startY, .04);
    noise(highlightColor, startX + TILE_SIZE * 3, startY, .06);

    noise(darkSlopeColor, startX, startY + TILE_SIZE, .05, 6);
    noise(darkSlopeColor, startX + TILE_SIZE, startY + TILE_SIZE, .1);
    noise(darkSlopeColor, startX + TILE_SIZE * 2, startY + TILE_SIZE, .2);
    noise(darkSlopeColor, startX + TILE_SIZE * 3, startY + TILE_SIZE, .3);

    noise(color, startX + TILE_SIZE * 13, startY + TILE_SIZE , .2);
    noise(color, startX + TILE_SIZE * 14, startY + TILE_SIZE , .25);
    noise(color, startX + TILE_SIZE * 15, startY + TILE_SIZE , .30);
    noise(color, startX + TILE_SIZE * 16, startY + TILE_SIZE , .35);

    noise(darkColor, startX + TILE_SIZE * 13, startY, (x, y) => {
      return y < TILE_SIZE / 2 && x > y && Math.random() < .9;
    })

    noise(darkColor, startX + TILE_SIZE * 14, startY, (x, y) => {
      return y < TILE_SIZE / 2 && Math.random() < .9
    })

    noise(darkColor, startX + TILE_SIZE * 15, startY, (x, y) => {
      return x + y < TILE_SIZE / 2 && Math.random() < .9;
    })

    noise(darkColor, startX + TILE_SIZE * 16, startY, (x, y) => {
      return x < TILE_SIZE / 2 && Math.random() < .9;
    })

    noise(darkColor, startX + TILE_SIZE * 17, startY, (x, y) => {
      return y + x < TILE_SIZE + 10 && Math.random() < .9;
    })

    noise(darkColor, startX + TILE_SIZE * 18, startY, (x, y) => {
      return x < y && x < 8 && Math.random() < .9;
    })

    function renderWithProbability(what, x, y, probability, xor) {
      if (Math.random() <= probability) {
        ctx.putImageData(what, x, y);
        ctx.putImageData(what, x + 1, y);
        ctx.putImageData(what, x, y + 1);
        ctx.putImageData(what, x + 1, y + 1);
        return true;
      }
      return !xor;
    }

    function renderSquare(color, x, y, n, s, w, e) {

      for (let i = 0; i < TILE_SIZE; i += 2) {

        n
          ? renderWithProbability(highlightColor, x + i, y, .8) && renderWithProbability(highlightColor, x + i, y + 2, .4) && renderWithProbability(color, x + i, y, .1)
          : undefined;
        s
          ? renderWithProbability(darkSlopeColor, x + i, y + TILE_SIZE - 2, 1) &&
           renderWithProbability(darkSlopeColor, x + i, y + TILE_SIZE - 4, .2) &&
           renderWithProbability(darkColor, x + i, y + TILE_SIZE - 4, .6)
          : undefined;

        e
          ? renderWithProbability(darkColor, x + TILE_SIZE - 2, y + i, 1) && renderWithProbability(darkSlopeColor, x + TILE_SIZE - 2, y + i, .8) && renderWithProbability(darkColor, x + TILE_SIZE - 4, y + i, .8) && renderWithProbability(darkColor, x + TILE_SIZE - 6, y + i, .6)
          : undefined

        w
          ? renderWithProbability(highlightColor, x, y + i, .9, true) && renderWithProbability(highlightColor, x + 2, y + i, .7)
          : undefined
      }
    }

    renderSquare(slopeColor, TILE_SIZE * 7, startY, 1, 0, 1, 0)
    renderSquare(slopeColor, TILE_SIZE * 8, startY, 1, 0, 0, 0)
    renderSquare(slopeColor, TILE_SIZE * 9, startY, 1, 0, 0, 1)

    renderSquare(slopeColor, TILE_SIZE * 7, startY + TILE_SIZE, 0, 0, 1, 0)
    renderSquare(slopeColor, TILE_SIZE * 9, startY + TILE_SIZE, 0, 0, 0, 1)

    renderSquare(slopeColor, TILE_SIZE * 7, startY + TILE_SIZE * 2, 0, 1, 1, 0)
    renderSquare(slopeColor, TILE_SIZE * 8, startY + TILE_SIZE * 2, 0, 1, 0, 0)
    renderSquare(slopeColor, TILE_SIZE * 9, startY + TILE_SIZE * 2, 0, 1, 0, 1)

    renderSquare(slopeColor, TILE_SIZE * 10, startY, 0, 1, 1, 1)
    renderSquare(slopeColor, TILE_SIZE * 10, startY + TILE_SIZE, 1, 0, 1, 1)
    renderSquare(slopeColor, TILE_SIZE * 10, startY + TILE_SIZE * 2, 1, 1, 1, 1)
    renderSquare(slopeColor, TILE_SIZE * 11, startY, 1, 1, 0, 0)
    renderSquare(slopeColor, TILE_SIZE * 11, startY + TILE_SIZE, 0, 0, 1, 1)
    renderSquare(slopeColor, TILE_SIZE * 12, startY, 1, 1, 1, 0)

    renderSquare(slopeColor, TILE_SIZE * 12, startY + TILE_SIZE, 1, 1, 0, 1)

  }

  renderTile(ctx, col, row, tile) {
    var tileRow = (tile / this.colLength) | 0; // Bitwise OR operation
    var tileCol = (tile % this.colLength) | 0;
    ctx.drawImage(this.tilesetImage, (tileCol * TILE_SIZE), (tileRow * TILE_SIZE), TILE_SIZE, TILE_SIZE, (col * TILE_SIZE), (row * TILE_SIZE), TILE_SIZE, TILE_SIZE);
  }

}
