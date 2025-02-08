const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require('dotenv');
const log = require('../utils/log/log.js');
dotenv.config();

function registercommands() {
    const commands = [];
    const commandsFolderPath = path.join(__dirname, 'commands');

    const commandEntries = fs.readdirSync(commandsFolderPath);
    for (const entry of commandEntries) {
        const entryPath = path.join(commandsFolderPath, entry);
        const stat = fs.statSync(entryPath);

        if (stat.isDirectory()) {
            const commandFiles = fs.readdirSync(entryPath).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const filePath = path.join(entryPath, file);
                const command = require(filePath);
                if ('data' in command && 'execute' in command) {
                    commands.push(command.data.toJSON());
                } else {
                    log.warn(`The command at ${filePath} is missing a required "data" or "execute" property.`);
                }
            }
        } else if (entry.endsWith('.js')) {
            const command = require(entryPath);
            if ('data' in command && 'execute' in command) {
                commands.push(command.data.toJSON());
            } else {
                log.warn(`The command at ${entryPath} is missing a required "data" or "execute" property.`);
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
