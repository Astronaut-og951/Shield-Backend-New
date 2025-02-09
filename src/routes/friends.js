const express = require('express');
const app = express.Router();

app.get('/friends/api/v1/:accountId/blocklist', (req, res) => {
    return res.status(200).send([])
})

app.get('/friends/api/public/blocklist/:accountId', (req, res) => {
    return res.status(200).send([])
})

app.get('/friends/api/v1/:accountId/summary', (req, res) => {
    return res.status(200).send([])
})

app.get('/friends/api/public/friends/:accountId', (req, res) => {
    return res.status(200).send([])
})

app.get('/friends/api/v1/:accountId/recent/fortnite', (req, res) => {
    return res.status(200).send([])
})

app.get('/friends/api/v1/:accountId/settings', (req, res) => {
    return res.status(200).send([])
})
module.exports = app;
