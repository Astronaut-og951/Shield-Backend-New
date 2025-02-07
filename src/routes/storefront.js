const express = require('express');
const app = express();
app.get('/fortnite/api/storefront/v2/catalog', (req, res) => {
    return res.status(200).send([])
})
module.exports = app;