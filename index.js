const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || env.PORT; // 3551
const mongoose = require('mongoose');
const log = require("./src/utils/log/log.js");
const path = require("path");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// error handling middleware
app.use((err, req, res, next) => {
    log.error(`Error occurred: ${err.message}`);
    res.status(500).send({
        status: "error",
        message: "Something went wrong!",
    });
});

app.use((req, res, next) => {
    res.on('finish', () => {
        if (res.statusCode >= 400) {
            log.error(`Issue with request: ${req.method} ${req.url} - Status: ${res.statusCode}`);
        }
    });
    next();
});

// incoming requests
app.use((req, res, next) => {
    log.debug(`Incoming request: ${req.method} ${req.url}`);
    next();
});


fs.readdirSync(path.join(__dirname, "src", "routes")).forEach((file) => {
    const routePath = path.join(__dirname, "src", "routes", file);
    const route = require(routePath);
  
    app.use(route);
    log.info(`Loaded ${file}!`)
});

function connectDB() {
    try {
        mongoose.set("strictQuery", true);
        mongoose.connect(process.env.DB_URL);
       log.mongodb("[Mongoose] Connected");
    } catch (err) {
        log.mongodb(`[Mongoose] Failed -> ${err}`);
        process.exit(1);
    }
}

app.get('/', (req, res) => {
    "<h1>Lexia Backend</h1>"
})

function start() {
    app.listen(PORT, () => {
        log.lexia(`Lexia is running on port: ${PORT}`);
        log.warn(`Backend is in BETA, if you find bugs report them in issues. git: https://github.com/tevahasdev/Lexia-backend/`)
    });
    if (process.env.DISABLE_BOT === "true") {
        log.lexia("Bot is disabled to enable it please change it to true in the .env");
    } else {
        require("./src/bot/bot.js");
    }
    require("./src/api/api.js");
    log.api("API is initliazed");
    connectDB();
}

start();
