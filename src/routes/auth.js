const express = require("express");
const app = express();

app.get("/auth", (req, res) => {
res.status(200).send({
    access_token: "eg1~fortnite",
    expires_in: 28800,
    expires_at: "2026-12-02T01:12:01.100Z",
    token_type: "bearer",
    refresh_token: "eg1~fortnite",
    refresh_expires: 86400,
    refresh_expires_at: "2026-12-02T01:12:01.100Z",
    account_id: "fornite",
    client_id: "fornite",
    internal_client: true,
    client_service: "fortnite",
    displayName: "slurphosting",
    app: "fortnite",
    in_app_id: "fornite",
    device_id: "fornite"
    });
});

module.exports = app;