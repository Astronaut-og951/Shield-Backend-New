const { Client, Intents } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require("dotenv");
const log = require("../utils/log/log.js");
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', async () => {
    log.lexia(`Discord Bot is Ready! Logged in as ${client.user.username}`);

    let commands = client.application.commands;
    fs.readdirSync("./src/bot/commands").forEach(fileName => { const command = require(`./commands/${fileName}`); commands.create(command.commandInfo);});
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isApplicationCommand()) return;
    
    if (fs.existsSync(`./commands/${interaction.commandName}.js`)) { require(`./commands/${interaction.commandName}.js`).execute(interaction); }
});

function startbot() {
    client.login(process.env.TOKEN);
}

startbot();