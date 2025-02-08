const { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } = require('discord.js');
const functions = require("../../utils/funcs/functions");
const Account = require("../../db/models/account");
module.exports = {
	data: new SlashCommandBuilder()
		.setName('register')
		.setDescription('Creates an account on lexia backend.')
        .addStringOption(option => option.setName('username').setDescription('Your desired username').setRequired(true))
        .addStringOption(option => option.setName('email').setDescription('Your desired email').setRequired(true))
        .addStringOption(option => option.setName('password').setDescription('Your desired safe password').setRequired(true)),
	async execute(interaction) {
	await interaction.deferReply();
        const username = interaction.options.getString('username');
        const email = interaction.options.getString('email');
        const password = interaction.options.getString('password');
        const discordId = interaction.user.id;
        
        functions.createAccount(username, email, password, discordId);
        const embed = new EmbedBuilder()
	        .setColor(0x0099FF)
	        .setTitle('Welcome to Lexia,', + username + '!')
	        .setAuthor({ name: 'Lexia Backend', iconURL: 'https://i.imgur.com/YOXl1by.png', url: 'https://github.com/tevahasdev/Lexia-backend/' })
	        .setDescription('Some description here')
	        .addFields(
		        { name: 'Username', value: username },
		        { name: 'email', value: email, inline: true },
	        )
	        .setTimestamp()
	        .setFooter({ text: 'Lexia Backend', iconURL: 'https://i.imgur.com/YOXl1by.png' });

	    await interaction.reply({ content: 'Successfully created your account!', embeds: [embed] });
	},
};
