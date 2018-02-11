import World from './world';

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

    let x = 0,
      y = 0, inc = 10;

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
      }

      this.world.render(ctx, x, y);
    })

  }

  render(ctx) {
    this.world.render(ctx, 0, 0)
  }

}
