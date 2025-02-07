const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const contentPages = require("../responses/content-pages.json");

app.get('/content/api/pages/fortnite-game', (req, res) => {
    res.status(200).send(contentPages);
});

module.exports = app;
