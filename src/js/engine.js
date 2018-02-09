import Async from './core/async';
import Game from './game/game';

const PADDING = 20;

export default class Engine extends Async {

  constructor() {
    super();
    this.prepareDOM();

    let game = new Game();
    game.initialize({}, this.ctx);
    game.render(this.ctx);

    this.done();
  }

  prepareDOM() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.append(this.canvas)
    this.canvas.width = document.body.clientWidth - PADDING;
    this.canvas.height = window.innerHeight - PADDING;

    document.body.style = 'background-color: #808080; text-align: center;'
    this.canvas.style = 'margin: 0 auto; border: 1px solid #000;'


  }

}
