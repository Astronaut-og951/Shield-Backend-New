const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require('dotenv');
const log = require('../utils/log/log.js');
dotenv.config();

function registercommands() {
    const commands = [];
    const commandsFolderPath = path.join(__dirname, 'commands');
    const commandFolders = fs.readdirSync(commandsFolderPath);
    for (const folder of commandFolders) {
        const commandsPath = path.join(commandsFolderPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            if ('data' in command && 'execute' in command) {
                commands.push(command.data.toJSON());
            } else {
                log.warn(`The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }
    }

    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

    (async () => {
        try {
            log.info(`Started refreshing ${commands.length} application (/) commands.`);

            const data = await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                { body: commands },
            );

            log.info(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            console.error(error);
        }
    })();
}

module.exports = { registercommands };