const express = require("express");
const app = express();

app.get("/account", (req, res) => {
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

app.get("/status", (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200,
    });
});

module.exports = app;