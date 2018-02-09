import BasicEntity from '../entity';

export default class CreatureEntity extends BasicEntity {

  constructor(properties) {
    super({
      ...properties,
      tile: 1,
      block: true
    })
  }

}
