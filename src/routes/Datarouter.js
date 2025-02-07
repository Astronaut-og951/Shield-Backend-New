const express = require("express");
const app = express();

app.get("/datarouter/api/v1/public/data", (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

module.exports = app;
