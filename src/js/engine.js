import TileContext from './engine/render/tile.context';
import Tracker from './engine/tracker';
import Tileset from './engine/tilesets';
import World from './engine/world/world';

export default class Engine extends Tracker {

  constructor() {
    super();
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.append(this.canvas)
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = window.innerHeight;

    //Tileset.loadRemote('hash', 'https://gist.githubusercontent.com/cstefanache/8430e1d19c8bae33d99c6f7205ddd84f/raw/596d92fd3d00c2b5c75df17d7f832a2850fbea66/tilesets.json');

    this.world = new World({width: 320, height: 320})
    this.done();
    let x = 10,
      y = 10;
    document.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowRight':
          x = Math.min(320, x + 1);
          break;
        case 'ArrowLeft':
          x = Math.max(0, x - 1);
          break;
        case 'ArrowUp':
          y = Math.min(320, y + 1);
          break;
        case 'ArrowLeft':
          y = Math.max(0, y - 1);
          break;
      }

      this.world.render(this.ctx, x, y);
    })
  }

  onLoaded() {
    this.world.render(this.ctx, 0, 0);
  }

  /*
    onLoaded() {
        let size = 34;
        let map = this.generateMap(this.canvas.height / size, this.canvas.width / size);
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                let tile = map[i][j].tile;
                let tileset = true ? this.defaultTileContext : this.remoteTileContext
                tileset.renderTile(this.ctx, i, j, tile)
            }
        }
    }

    generateMap(width, height) {
        width = Math.round(width);
        height = Math.round(height);
        let map = [];
        for(let i = 0; i < width; i++) {
            map[i] = [];
            for(let j = 0; j < height; j++){
              map[i][j] = { tile: 17, wall: true, i, j};
            }
        }

        let startX = Math.floor(Math.random() * width);
        let startY = Math.floor(Math.random() * height);
        map[startX][startY].tile = 12
        map[startX][startY].wall = false;

        let endX = Math.floor(Math.random() * width);
        let endY = Math.floor(Math.random() * height);
        map[endX][endY].tile = 13
        map[endX][endY].wall = false;

        let last = map[startX][startY];
        let path = [last];

        let times = 30000;
        let found = false;

        while(times && !found) {
            let nextX = last.i;
            let nextY = last.j;
            if(Math.random() < .5) {
                nextX += Math.random() < .5? -1:1;
                nextX = Math.max(0, Math.min(nextX, width - 1));
            } else {
                nextY += Math.random() < .5? -1:1;
                nextY = Math.max(0, Math.min(nextY, height - 1))
            }

            let next = map[nextX][nextY];

            if(next && next.wall && next.tile != 12 && next.tile != 13) {
                path.push(next);
                last = next;
                next.tile = 0;
                next.wall = false;
            } else if (this.isAccessible(map[endX][endY], width, height, map)) {
                found = true;
            }

            if(!this.isNextToWall(last, width, height, map)) {
                last = path[Math.floor(path.length * Math.random())];
            }

            //console.log(path);

            times--;
        }

        return map;
    }

    isNextToWall(loc, w, h, map) {
        return   (loc.i < w - 1 && map[loc.i + 1][loc.j].wall) ||
                 (loc.i > 0 && map[loc.i - 1][loc.j].wall) ||
                 (loc.j < h - 1 && map[loc.i][loc.j + 1].wall) ||
                 (loc.j > 0 && map[loc.i][loc.j - 1].wall)
    }

    isAccessible(loc, w, h, map) {
        return   (loc.i < w - 1 && !map[loc.i + 1][loc.j].wall) ||
                 (loc.i > 0 && !map[loc.i - 1][loc.j].wall) ||
                 (loc.j < h - 1 && !map[loc.i][loc.j + 1].wall) ||
                 (loc.j > 0 && !map[loc.i][loc.j - 1].wall)
    }
    */

}
