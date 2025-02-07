class logging {
    static lexia(message) {
        console.log(`[LEXIA] ${message}`);
    }
    
    static debug(message) {
        console.log(`[DEBUG] ${message}`);
    }

    static warn(message) {
        console.log(`[WARN] ${message}`);
    }

    static error(message) {
        console.log(`[ERROR] ${message}`);
    }
    
    static api(message) {
        console.log(`[API] ${message}`);
    }
}
module.exports = logging;
