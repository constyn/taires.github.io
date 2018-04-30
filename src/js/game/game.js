import World from './world';
import Debugger from '../core/debugger';

const DEFAULTS = {
  width: 200,
  height: 200
}

export default class Game {

  initialize(props, ctx) {
    this.setup = {
      ...DEFAULTS,
      props
    }

    this.world = new World(DEFAULTS);
    this.debugger = new Debugger(this.world);

    let x = 0,
      y = 0,
      inc = 10;

    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowRight':
          x = Math.min(DEFAULTS.width, x + inc);
          break;
        case 'ArrowLeft':
          x = Math.max(0, x - inc);
          break;
        case 'ArrowDown':
          y = Math.min(DEFAULTS.height, y + inc);
          break;
        case 'ArrowUp':
          y = Math.max(0, y - inc);
          break;
        case 'd':
          this.debugger.toggle();
          break;
        case 'h':
          this.debugger.toggle('showHeights');
          break;
        case 't':
          this.debugger.toggle('showTiles');
          break;
      }


    })

    setInterval(()=> {
      this.world.render(ctx, x, y);
    }, 10);

  }

  render(ctx) {
    this.world.render(ctx, 0, 0)
  }

}
