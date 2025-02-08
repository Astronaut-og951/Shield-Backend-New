class log {
    static lexia(message) {
      console.log(`\x1b[35m[LEXIA]\x1b[0m ${message}`); 
    }
  
    static debug(message) {
      console.log(`\x1b[34m[DEBUG]\x1b[0m ${message}`); 
    }
  
    static warn(message) {
      console.log(`\x1b[33m[WARN]\x1b[0m ${message}`); 
    }
  
    static error(message) {
      console.log(`\x1b[31;1m[ERROR]\x1b[0m ${message}`); 
    }
  
    static api(message) {
      console.log(`\x1b[32m[API]\x1b[0m ${message}`); 
    }
    static mongodb(message) {
      console.log(`\x1b[32m[MONGODB]\x1b[0m ${message}`); 
    }
}
  
module.exports = log;
