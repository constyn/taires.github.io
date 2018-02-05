import BasicEntity from '../../entities/basic.entity';


export default class GroundBlock extends BasicEntity {

  constructor() {
    super({
      tile: 6,
      name: 'ground',
      block: true
    })
  }

}
