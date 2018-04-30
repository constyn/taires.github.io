import Entity from '../entity';

export default class CreatureEntity extends Entity {

  constructor(properties) {
    super({
      ...properties,
      tile: 1,
      tileset: 'creatures',
      isAlive: true,
      block: false,
      type: 'creature',
      health: 100,
      tickInterval: 100
    });

    this.currentTick = 0;
  }

  move(dx, dy, dz) {
    let {x, y, z, world} = this.props;
    world.layers[z][y][x] = undefined;
    this.props.x += dx;
    this.props.y += dy;
    this.props.z += dz;
    world.layers[this.props.z][this.props.y][this.props.x] = this;
  }

  doTick() {
    if (++this.currentTick > this.props.tickInterval) {
      this.tick();
      this.currentTick = 0;
    }
  }

  tick() {
    this.move(Math.round(-1 + Math.random() * 2), Math.round(-1 + Math.random() * 2), 0);
  }

}
