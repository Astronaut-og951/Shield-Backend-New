const mongoose = require("mongoose");
// idk
const friendsschema = new mongoose.Schema(
    {
        created: { type: Date, required: true },
        accountId: { type: String, required: true, unique: true },
    },
    {
        collection: "users"
    }
)

const model = mongoose.model('FriendsSchema', friendsschema);
module.exports = model;