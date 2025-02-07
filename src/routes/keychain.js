const express = require("express")
const app = express();
const keychain = require("../responses/keychain.json");
const dotenv = require("dotenv");
dotenv.config();

app.get('/fortnite/api/storefront/v2/keychain', (req, res) => {
    return res.status(200).send(keychain);
})

module.exports = app;
