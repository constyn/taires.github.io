import BasicEntity from '../../entities/basic.entity';


export default class WallBlock extends BasicEntity {

  constructor() {
    super({
      block: true,
      tile: 11
    })
  }

}
