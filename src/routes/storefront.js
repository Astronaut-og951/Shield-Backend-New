const express = require('express');
const app = express();
const keychain = require("../responses/keychain.json");

app.get('/fortnite/api/storefront/v2/catalog', (req, res) => {
    return res.json(require("../responses/storefront/catalog.json"))
})

app.get('/catalog/api/shared/bulk/offers', (req, res) => {
    return res.json(require("../responses/storefront/catalog.json"))
})

app.get('/fortnite/api/storefront/v2/keychain', (req, res) => {
    return res.json(keychain)
})

app.get('/fortnite/api/receipts/v1/account/:accountId/receipts', (req, res) => {
    return res.json({
        "price": {},
        "items": []
    });
})
module.exports = app;