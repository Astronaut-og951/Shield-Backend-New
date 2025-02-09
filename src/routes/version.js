const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.get("/fortnite/api/v2/versioncheck", (req, res) => {
    res.status(200).send({
        type: "NO_UPDATE"
    });
})

app.get("/fortnite/api/v2/versioncheck/:version", (req, res) => {
    res.status(200).send({
        type: "NO_UPDATE"
    });
})

module.exports = app;
