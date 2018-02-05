import BasicEntity from '../../entities/basic.entity';


export default class GroundBlock extends BasicEntity {

  constructor() {
    super({
      name: 'ground',
      block: true
    })
  }

}
