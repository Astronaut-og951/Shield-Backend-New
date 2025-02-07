const express = require('express');
const app = express();

app.post("/fortnite/api/game/v2/grant_access/*", async (req, res) => {
    res.json({});
    res.status(204);
});

app.get(
    "/fortnite/api/receipts/v1/account/*/receipts",
    async (req, res) => {
      res.json([]);
    }
  );

module.exports = app;