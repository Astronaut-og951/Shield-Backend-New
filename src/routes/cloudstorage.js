const express = require("express");
const app = express();

app.get('/fortnite/api/cloudstorage/system', (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

app.get('/fortnite/api/cloudstorage/user/:accountId', (req, res) => {
    const { accountId } = req.params;
    res.status(200).send({
        status: "OK",
        code: 200,
        accountId: accountId // Echo the accountId back for clarity
    });
});

app.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', (req, res) => {
    const { accountId, fileName } = req.params;
    res.status(200).send({
        status: "OK",
        code: 200,
        accountId: accountId,
        fileName: fileName
    });
});

module.exports = app;