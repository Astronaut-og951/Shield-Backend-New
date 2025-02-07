const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get("/fortnite/api/game/v2/profile/:accountId/client/:operation", (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

module.exports = app;
