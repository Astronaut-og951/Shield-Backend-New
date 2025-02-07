const fs = require("fs");
const path = require("path");
const profile = require("../db/models/profile");

async function CreateProfile(accountId) {
    const athena = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/athena.json"),
      "utf8"
    );
    const campaign = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/campaign.json"),
      "utf8"
    );
    const collection_book_people0 = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/collection_book_people0.json"),
      "utf8"
    );
    const collection_book_schematics0 = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/collection_book_schematics0.json"),
      "utf8"
    );
    const colleactions = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/colleactions.json"),
      "utf8"
    );
    const common_core = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/common_core.json"),
      "utf8"
    );
    const common_public = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/common_public.json"),
      "utf8"
    );
    const metadata = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/metadata.json"),
      "utf8"
    );
    const outpost0 = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/outpost0.json"),
      "utf8"
    );
    const profile0 = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/profile0.json"),
      "utf8"
    );
    const theater0 = fs.readFileSync(
      path.join(__dirname, "../responses/profiles/theater0.json"),
      "utf8"
    );
  
    await profile.create({
      created: new Date(),
      accountId,
      athena,
      campaign,
      collection_book_people0,
      collection_book_schematics0,
      colleactions,
      common_core,
      common_public,
      metadata,
      outpost0,
      profile0,
      theater0,
    });
}

module.exports = { CreateProfile }