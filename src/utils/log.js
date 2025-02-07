class Logging {
    static lexia(message) {
      console.log(`\x1b[35m[LEXIA]\x1b[0m ${message}`); // Magenta
    }
  
    static debug(message) {
      console.log(`\x1b[34m[DEBUG]\x1b[0m ${message}`); // Blue
    }
  
    static warn(message) {
      console.log(`\x1b[33m[WARN]\x1b[0m ${message}`); // Yellow
    }
  
    static error(message) {
      console.log(`\x1b[31;1m[ERROR]\x1b[0m ${message}`); // Bright Red
    }
  
    static api(message) {
      console.log(`\x1b[32m[API]\x1b[0m ${message}`); // Green
    }
  }
  
  module.exports = { Logging };
