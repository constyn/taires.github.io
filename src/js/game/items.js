import Ground from './blocks/ground.entity';
import Wall from './blocks/wall.entity';


const keys = {
  'ground': [Ground]
}

export default class Items {

  static getItem(type, props) {
    let list = keys[type];

    if (!list){
      throw new Error(`Unable to find item for type ${type}`)
    }

    const rand = Math.floor(Math.random() * list.length),
        klass = list[rand];

    return new klass(props);
  }



}
