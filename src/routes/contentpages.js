const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const contentpages = require("../responses/content-pages.json");

app.get('/content/api/pages/fortnite-game', (req, res) => {
    contentpages.emergencynotice = {
        news: {
            _type: "Battle Royale News",
            messages: [
              {
                hidden: process.env.emergency_notice_hidden || false,
                _type: "CommonUI Simple Message Base",
                title: process.env.emergency_notice_title || "Lexia Backend!",
                body: process.env.emergency_notice_body || "This backend has been developed by Tevahas, Infinity, and the community! github repo: https://github.com/tevahasdev/Lexia-backend",
                spotlight: true
              }
            ]
          },
          _title: "emergencynotice",
          _noIndex: false,
          alwaysShow: false,
          _activeDate: "2018-08-06T19:00:26.217Z",
          lastModified: "2019-10-29T22:32:52.686Z",
          _locale: "en-US"
    }
    res.status(200).send(contentpages);
});

module.exports = app;
