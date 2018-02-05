const listeners = [];

var numToLoad = 0;

export default class Tracker {

  constructor() {
    listeners.push(this)
    numToLoad++;
  }

  done() {
    numToLoad--;
    console.log("Loaded", this.constructor.name);
    if (numToLoad === 0) {
      listeners.forEach( inst => {
        inst.onLoaded();
      })

      listeners.length = 0;
    }
  }

  onLoaded() {

  }


}
