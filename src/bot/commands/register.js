const { MessageEmbed } = require("discord.js");
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require("dotenv");
const log = require("../../utils/log/log.js");
const functions = require("../../utils/funcs/functions.js");
dotenv.config();

module.exports = {
    commandInfo: {
        name: "register",
        description: "Creates an account on lexia backend.",
        options: [
            {
                name: "username",
                description: "Target username.",
                required: true,
                type: 3 // string
            },
            {
                name: "email",
                description: "Target email.",
                required: true,
                type: 3 // string
            },
            {
                name: "password",
                description: "Target password.",
                required: true,
                type: 3 // string
            }
        ],
    },
    execute: async (interaction) => {
        await interaction.deferReply({ ephemeral: true });
        const username = interaction.options.getString('username');
        const email = interaction.options.getString('email');
        const password = interaction.options.getString('password');
        const discordId = interaction.user.id;
        
        functions.createAccount(username, email, password, discordId);
        const embed = new MessageEmbed()
	        .setColor(0x0099FF)
	        .setTitle('Welcome to Lexia,', + username + '!')
	        .setAuthor({ name: 'Lexia Backend', iconURL: 'https://i.imgur.com/YOXl1by.png', url: 'https://github.com/tevahasdev/Lexia-backend/' })
	        .setDescription('This backend is in beta, if you find any bugs please report them in the issues section of the github page.')
	        .addFields(
		        { name: 'Username', value: username },
		        { name: 'email', value: email, inline: true },
	        )
	        .setTimestamp()
	        .setFooter({ text: 'Lexia Backend', iconURL: 'https://i.imgur.com/YOXl1by.png' });

        interaction.editReply({ content: 'Successfully created your account!', embeds: [embed], ephemeral: true });
    }
}