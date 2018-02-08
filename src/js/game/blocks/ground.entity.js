import Entity from '../entity';

export default class GroundBlock extends Entity {

  constructor(properties) {
    super({
      ...properties,
      tile: properties ? properties.biome : 1,
      name: 'ground',
      block: true
    })

  }

}
