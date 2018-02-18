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

  doTick() {
    if (++this.currentTick > this.props.tickInterval) {
      this.tick();
      this.currentTick = 0;
    }
  }

  tick(world) {

  }

}
