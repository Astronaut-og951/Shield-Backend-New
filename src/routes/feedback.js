const express = require('express');
const app = express();
app.put('/fortnite/api/feedback/log-snapshot/*', async (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
})
module.exports = app;