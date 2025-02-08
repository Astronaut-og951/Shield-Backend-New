const fs = require("fs");
const path = require("path");
const Friends = require("../../db/models/friends");

async function CreateFriends(accountId) {
    await Friends.create({
      created: new Date.now(),
      accountId,
    });
}

module.exports = { CreateFriends }
