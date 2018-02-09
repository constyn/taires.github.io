import Entity from '../entity';


export default class WallBlock extends Entity {

  constructor(props) {
    super({
      block: true,
      tile: 15,
      ...props
    })
  }

  getTile() {
    return 7 + this.props.biome;
  }

}
