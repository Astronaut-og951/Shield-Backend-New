const express = require("express");
const app = express();

app.post("/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send("true");
})
app.get("/account/api/public/account/:accountId/externalAuths", (req, res) => {
    res.status(200).send([]);
})

app.get("/fortnite/api/game/v2/enabled_features", (req, res) => {
    res.status(200).send([]);
})

app.get("/content-controls/:accountId", (req, res) => {
    res.status(200).send([]);
})

app.get("/account/api/public/account", (req, res) => {
    res.status(200).send({
        id: "fortnite",
        displayName: "fortnite",
        externalAuth: {}
    });
})

app.get("/account/api/public/account/:accountId", (req, res) => {
    res.status(200).send({
        id: "fortnite",
        displayName: "slurphosting",
        name: "slurphosting",
        email: "slurphosting@slurphosting.dev",
        failedLoginAttempts: 0,
        lastLogin: "Timestamp",
        numberOfDisplayNameChanges: 0,
        ageGroup: "UNKNOWN",
        headless: false,
        country: "US",
        lastName: "SlurpHosting",
        links: {},
        preferredLanguage: "en",
        canUpdateDisplayName: false,
        tfaEnabled: true,
        emailVerified: true,
        minorVerified: false,
        minorExpected: false,
        minorStatus: "UNKNOWN",
    });
});

app.get("/api/v1/user/setting", (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
})


app.get("/socialban/api/public/v1/:accountId", (req, res) => {
    res.status(200).send([]);
});

app.get("/presence/api/v1/_/:accountId/settings/subscriptions", (req, res) => {
    res.status(200).send([]);
});

app.get("/fortnite/api/game/v2/privacy/account/:accountId", (req, res) => {
    res.status(200).send([]);
});


module.exports = app;
