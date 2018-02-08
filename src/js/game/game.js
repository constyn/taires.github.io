import World from './world';

const DEFAULTS = {
  width: 100,
  height: 100
}

export default class Game {

  initialize(props, ctx) {
    this.setup = {
      ...DEFAULTS,
      props
    }


    this.world = new World(DEFAULTS);

    let x = 0,
      y = 0;

    document.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowRight':
          x = Math.min(DEFAULTS.width, x + 1);
          break;
        case 'ArrowLeft':
          x = Math.max(0, x - 1);
          break;
        case 'ArrowDown':
          y = Math.min(DEFAULTS.height, y + 1);
          break;
        case 'ArrowUp':
          y = Math.max(0, y - 1);
          break;
      }

      this.world.render(ctx, x, y);
    })

  }

  render(ctx) {
    this.world.render(ctx, 0, 0)
  }

}
