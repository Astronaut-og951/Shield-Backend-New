const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3551;

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

// should work
app.use(require("./src/routes/account.js"));
app.use(require("./src/routes/auth.js"))
app.use(require("./src/routes/cloudstorage.js"));
app.use(require("./src/routes/contentpages.js"));
app.use(require("./src/routes/Datarouter.js"));
app.use(require("./src/routes/Lightswitch.js"));
app.use(require("./src/routes/mcp.js"));
app.use(require("./src/routes/version.js"));

app.get('/', (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    })
})

function connectDB() {
    try {
        mongoose.set("strictQuery", true);
        mongoose.connect(process.env.DB_URL);
        console.log("[Mongoose] Connected");
    } catch (err) {
        console.log(`[Mongoose] Failed -> ${err}`);
        process.exit(1);
    }
}

function start() {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT} ✅`);
        console.log(`This backend is still in BETA many issues may occur ⚠️`)
    });
    connectDB();
}

start();
module.exports = app;
