const express = require('express');
const app = express();
app.get('/waitingroom/api/waitingroom', async (req, res) => {
    res.sendStatus(204);
})
module.exports = app;