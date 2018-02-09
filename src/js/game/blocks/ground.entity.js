import Entity from '../entity';

export default class GroundBlock extends Entity {

  constructor(properties) {
    super({
      ...properties,
      tile: 1,
      name: 'ground',
      block: true
    })
  }



}
