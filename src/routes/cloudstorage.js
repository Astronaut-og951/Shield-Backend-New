const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get('/fortnite/api/cloudstorage/system', (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

app.get('/fortnite/api/cloudstorage/user/:accountId', (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

app.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

// idk if this code is correct
/*
app.get('/fortnite/api/cloudstorage/user/:accountId', (req, res) => {
    //const { accountId } = req.params;
    res.status(200).send({
        status: "OK",
        code: 200,
        accountId: "fortnite", // accountid will be added soon since its not supported in auth or anything else.
        //accountId: accountId 
    });
});*/
/*
app.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', (req, res) => {
    const { accountId, fileName } = req.params;
    res.status(200).send({
        status: "OK",
        code: 200,
        accountId: "fortnite",
        fileName: fileName
    });
});
*/
module.exports = app;
