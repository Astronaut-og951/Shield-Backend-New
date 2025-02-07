const express = require("express");
const app = express();
const fs = require("fs");

// IM NOT SURE IF THIS WORKS IM NEW TO JS SO I DONT REALLY KNOW IF I DID THIS RIGHT
app.use(require("./src/routes/account.js"));
app.use(require("./src/routes/auth.js"))
app.use(require("./src/routes/cloudstorage.js"));
app.use(require("./src/routes/contentpages.js"));
app.use(require("./src/routes/Datarouter.js"));
app.use(require("./src/routes/Lightswitch.js"));
app.use(require("./src/routes/mcp.js"));
app.use(require("./src/routes/version.js"));

app.get('/', (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    })
})

const PORT = 3551;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} ✅`);
    console.log(`This backend is still in BETA many issues may occur ⚠️`)
});

module.exports = app;
