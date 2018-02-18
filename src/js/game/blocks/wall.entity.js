import Entity from '../entity';


export default class WallBlock extends Entity {

  constructor(props) {
    super({
      tileset: 'wall',
      block: true,
      tile: 1,
      ...props
    })
  }

}
