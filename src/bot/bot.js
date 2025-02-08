const { Client, Events, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require("dotenv");
const log = require("../utils/log/log.js");
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	log.lexia(`Discord Bot is Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.TOKEN);