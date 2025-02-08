const mongoose = require("mongoose");
// idk
const friendsschema = new mongoose.Schema(
    {
        accountId: { type: String, required: true, unique: true },
        status: { type: String, required: true, unique: true, default: "ACCEPTED" },
        direction: { type: String, required: true, unique: true, default: "INBOUND" },
        alias: { type: String, required: true, unique: true, default: "" },
        created: { type: Date, required: true, unique: true, default: Date.now() },
        favorite: { type: Boolean, required: true, unique: true, default: false },
    },
    {
        collection: "users"
    }
)

const model = mongoose.model('FriendsSchema', friendsschema);
module.exports = model;