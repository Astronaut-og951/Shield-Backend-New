const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

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

app.post('/account/api/oauth/token', async (req, res) => {
    res.status(200).send({
        access_token: "eg1~lexia",
        expires_in: 28800,
        expires_at: "9999-12-02T01:12:01.100Z",
        token_type: "bearer",
        refresh_token: "eg1~lexia",
        refresh_expires: 86400,
        refresh_expires_at: "9999-12-02T01:12:01.100Z",
        account_id: "lexia", // will be users account id
        client_id: "lexia",
        internal_client: true,
        client_service: "lexia",
        displayName: "lexia",
        app: "fortnite",
        in_app_id: "fornite",
        device_id: "fornite"
    });
})

app.get("/account/api/public/account/:accountId", (req, res) => {
    res.status(200).send({
        id: "fortnite",
        displayName: "lexia",
        name: "lexia",
        email: "lexia@lexia.dev",
        failedLoginAttempts: 0,
        lastLogin: "Timestamp",
        numberOfDisplayNameChanges: 0,
        ageGroup: "UNKNOWN",
        headless: false,
        country: "US",
        lastName: "lexia",
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

app.post("/api/v1/user/setting", (req, res) => {
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
