const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get("/friends/api/v1/*/settings", (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

module.exports = app;