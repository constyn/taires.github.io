import Entity from '../entity';

const COLS = 32;
const BIOME_MAP = {
  "0": 0,
  "1": COLS * 3,
  "2": COLS * 6,
  "3": COLS * 9,
  "4": COLS * 12
}

export default class GroundBlock extends Entity {

  constructor(properties) {
    super({
      ...properties,
      tile: 1,
      name: 'ground',
      block: true
    })
  }

  getTile(neigh) {
    if (!this.props._tile) {
      this.props._tile = BIOME_MAP[this.props.biome]; // + Math.round(Math.random() * 3)
      this.props.renderTile = this.props._tile + Math.round(Math.random() * 3);
    }

    return this.props.renderTile;
  }

  render(ctx, x, y, opt) {
    super.render(ctx, x, y, {tile: this.props.renderTile});
    let {neigh, topNeigh} = opt,
      tile;

    if (neigh) {
      let tile;

      if (neigh[6] === undefined) {
        /*
        super.render(ctx, x, y + 1, {
          tile: this.props.renderTile + COLS
        })
        */

        super.render(ctx, x, y, {
          tile: this.props.renderTile + COLS
        })
        return;

        if (neigh[3] === undefined && neigh[4] == undefined && neigh[1] === undefined) {
          tile = this.props._tile + (COLS * 2) + 10;
        } else if (neigh[3] === undefined && neigh[4] == undefined) {
          tile = this.props._tile + 10;
        } else if (neigh[3] === undefined && neigh[1] === undefined) {
          tile = this.props._tile + 12;
        } else if (neigh[4] === undefined && neigh[1] === undefined) {
          tile = this.props._tile + 12 + COLS;
        } else if (neigh[1] === undefined) {
          tile = this.props._tile + 11;
        } else if (neigh[3] === undefined) {
          tile = this.props._tile + (COLS * 2) + 7;
        } else if (neigh[4] === undefined) {
          tile = this.props._tile + (COLS * 2) + 9;
        } else {
          tile = this.props._tile + (COLS * 2) + 8;
        }

      } else if (neigh[1] === undefined) {
        if (neigh[3] === undefined && neigh[4] === undefined) {
          tile = this.props._tile + COLS + 10;
        } else if (neigh[3] === undefined) {
          tile = this.props._tile + 7;
        } else if (neigh[4] === undefined) {
          tile = this.props._tile + 9;
        } else {
          tile = this.props._tile + 8;
        }
      } else if (neigh[3] === undefined && neigh[4] === undefined) {
        tile = this.props._tile + 11 + COLS;
      } else if (neigh[4] === undefined) {
        tile = this.props._tile + COLS + 9;
      } else if (neigh[3] === undefined) {
        tile = this.props._tile + COLS + 7;
      }

      if (tile) {
        super.render(ctx, x, y, {tile})
      }

      if (topNeigh[1] !== undefined) {
        if (topNeigh[0] === undefined) {
          super.render(ctx, x, y, {
            tile: this.props._tile + 13
          })
        } else if (topNeigh[3] !== undefined) {
          super.render(ctx, x, y, {
            tile: this.props._tile + 17
          })
        } else {
          super.render(ctx, x, y, {
            tile: this.props._tile + 14
          })
        }
      } else if (topNeigh[0] !== undefined) {

        if (topNeigh[3] !== undefined) {
          super.render(ctx, x, y, {
            tile: this.props._tile + 16
          })
        } else {
          super.render(ctx, x, y, {
            tile: this.props._tile + 15
          })
        }
      } else if (topNeigh[1] === undefined && topNeigh[3] !== undefined) {
        super.render(ctx, x, y, {
          tile: this.props._tile + 18
        })
      }


      //ctx.fillText(this.props.height, x * 16 + 2, y * 16 + 10);

    }
  }

}
