import Ground from './blocks/ground.entity';
import Wall from './blocks/wall.entity';

let keys = {
  "ground": [Ground],
  "wall": [Wall]
}


export default class EntityFactory {

  static getBlock(type) {
    let list = keys[type];

    if (!list){
      throw new Error(`Unable to find block for type ${type}`)
    }

    const rand = Math.floor(Math.random() * list.length);
    return list[rand];

  }

}
