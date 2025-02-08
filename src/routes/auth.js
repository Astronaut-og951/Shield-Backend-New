const express = require("express");
const app = express();

app.post("/account/api/oauth/token", (req, res) => {
    res.status(200).send({
        access_token: "eg1~fortnite",
        expires_in: 28800,
        expires_at: "2026-12-02T01:12:01.100Z",
        token_type: "bearer",
        refresh_token: "eg1~fortnite",
        refresh_expires: 86400,
        refresh_expires_at: "2026-12-02T01:12:01.100Z",
        account_id: "fortnite",
        client_id: "fortnite",
        internal_client: true,
        client_service: "fortnite",
        displayName: "lexia",
        app: "fortnite",
        in_app_id: "fortnite",
        device_id: "fortnite"
    });
});
app.post("/account/api/oauth/verify", (req, res) => {
    res.status(200).send({
        access_token: "eg1~fortnite",
        expires_in: 28800,
        expires_at: "9999-12-02T01:12:01.100Z",
        token_type: "bearer",
        refresh_token: "eg1~fortnite",
        refresh_expires: 86400,
        refresh_expires_at: "9999-12-02T01:12:01.100Z",
        account_id: "fortnite",
        client_id: "fortnite",
        internal_client: true,
        client_service: "fortnite",
        displayName: "lexia",
        app: "fortnite",
        in_app_id: "fortnite",
        device_id: "fortnite"
    });
});
app.delete("/account/api/oauth/sessions/kill", (req, res) => {
    res.status(200).send({ status: "OK", code: 200 });
});

app.delete("/account/api/oauth/sessions/kill/:token", (req, res) => {
    res.status(200).send({ status: "OK", code: 200 });
});
app.get("/account/api/public/account", (req, res) => {
    const accountId = req.query.accountId;
    try {
        if (!accountId) return res.status(400).send({ error: "Account ID is required" });
        res.status(200).send({
            id: "fortnite",
            displayName: "lexia",
            email: "lexia@services.com"
        });
    } catch {
        res.status(400).send({ error: "IDK ERRORED." });
    }
});
app.get("/account/api/public/account/fortnite", (req, res) => {
    res.status(200).send({
        id: "fortnite",
        displayName: "lexia",
        email: "lexia@services.com"
    });
});
app.get("/account/api/public/account/fortnite/externalAuths", (req, res) => {
    res.status(200).send([]);
});

app.post("/fortnite/api/game/v2/tryPlayOnPlatform/account/fortnite", (req, res) => {
    if (req.query.platform === "PC") {
        res.status(200).send({ status: "success", platform: "PC" });
    } else {
        res.status(400).send({ error: "Invalid platform" });
    }
});

app.post("/datarouter/api/v1/public/data", (req, res) => {
    res.status(200).send({ status: "success" });
});

app.all("*", (req, res) => {
    res.status(404).send({ error: "Endpoint not found" });
});



module.exports = app;
