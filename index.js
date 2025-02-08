const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || env.PORT; // 3551
const mongoose = require('mongoose');
const log = require("./src/utils/log/log.js");
const bot = require("./src/bot/bot.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// error handling middleware
app.use((err, req, res, next) => {
    console.error(`Error occurred: ${err.message}`);
    res.status(500).send({
        status: "error",
        message: "Something went wrong!",
    });
});

app.use((req, res, next) => {
    res.on('finish', () => {
        if (res.statusCode >= 400) {
            console.error(`Issue with request: ${req.method} ${req.url} - Status: ${res.statusCode}`);
        }
    });
    next();
});

// incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.use(require("./src/routes/keychain.js"));
app.use(require("./src/routes/auth.js"))
app.use(require("./src/routes/cloudstorage.js"));
app.use(require("./src/routes/contentpages.js"));
app.use(require("./src/routes/lightswitch.js"));
app.use(require("./src/routes/mcp.js"));
app.use(require("./src/routes/version.js"));
app.use(require("./src/routes/waitingroom.js"));


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
    app.use(require("./src/bot/bot.js"));
    app.use(require("./src/api/api.js"));
    log.api("API is initliazed");
    connectDB();
}

start();
module.exports = app;
