const mongoose = require("mongoose");

const accountschema = new mongoose.Schema(
    {
        created: { type: Date, required: true },
        accountId: { type: String, required: true, unique: true },
        athena: {type: Object, required: true},
        campaign: {type: Object, required: true},
        collection_book_people0: {type: Object, required: true},
        collection_book_schematics0: {type: Object, required: true},
        collections: {type: Object, required: true},
        common_core: {type: Object, required: true},
        common_public: {type: Object, required: true},
        creative: {type: Object, required: true},
        metadata: {type: Object, required: true},
        outpost0: {type: Object, required: true},
        profile0: {type: Object, required: true},
        theater0: {type: Object, required: true},
    },
    {
        collection: "users"
    }
)

const model = mongoose.model('AccountSchema', accountschema);
module.exports = model;