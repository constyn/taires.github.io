import Entity from '../entity';


export default class WallBlock extends Entity {

  constructor(props) {
    super({
      tileset: 'wall',
      block: true,
      tile: Math.round(Math.random() * 3),
      ...props
    })
  }

}
