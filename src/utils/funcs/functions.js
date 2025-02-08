const crypto = require('crypto');
const mongoose = require('mongoose');
const Account = require('../../db/models/account');
const { CreateProfile } = require("../../services/profileservice");
//const { CreateFriends } = require("../../services/friendservice");
class functions {
    static async createAccount(username, email, password, discordId) {
        const accountId = crypto.randomUUID();
        await Account.create({
            created: new Date.now(),
            banned: false,
            discordId,
            accountId,
            username,
            username_lower: username.toLowerCase(),
            email,
            password,
        });
        await CreateProfile(accountId);
        //await CreateFriends(accountId); unfinished
    }
    static async createAccountWeb(username, email, password) {
        const accountId = crypto.randomUUID();
        await Account.create({
            created: new Date.now(),
            banned: false,
            discordId: null,
            accountId,
            username,
            username_lower: username.toLowerCase(),
            email,
            password,
        });
        await CreateProfile(accountId);
        //await CreateFriends(accountId); unfinished
    }
}
  
module.exports = functions;
