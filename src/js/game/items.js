import Ground from './blocks/ground.entity';
import Wall from './blocks/wall.entity';
import Creatures from './entities/creature.entity';

const keys = {
  'ground': [Ground],
  'wall': [Wall],
  'creatures': [Creatures]
}

export default class Items {

  static getItem(type, props, overrides) {
    let list = keys[type];
    if (!list) {
      throw new Error(`Unable to find item for type ${type}`)
    }

    const rand = Math.floor(Math.random() * list.length),
      klass = list[rand],
      instance = new klass(props);

    if (overrides) {
      instance.init(overrides)
    }


    return instance
  }

}
