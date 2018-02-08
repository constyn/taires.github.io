class Logger {
  costructor() {
    let oldLog = console.log;

    console.log = (...args) => {
      oldLog(args);
    }
  }
}

export default new Logger();
