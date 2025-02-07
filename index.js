const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3551;

// should work
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

function start() {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT} ✅`);
        console.log(`This backend is still in BETA many issues may occur ⚠️`)
    });
    connectDB();
}

start();
module.exports = app;
