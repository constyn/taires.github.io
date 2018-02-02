const listeners = [];

var numToLoad = 0;

export default class Tracker {

  constructor() {
    listeners.push(this)
    numToLoad++;
    console.log("Incrementing", numToLoad);
  }

  done() {
    numToLoad--;
    console.log("Decrementing", numToLoad);
    if (numToLoad === 0) {
      listeners.forEach( inst => {
        console.log(inst);
        inst.onLoaded();
      })

      listeners.length = 0;
    }
  }

  onLoaded() {

  }


}
