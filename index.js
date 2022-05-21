// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
var mysql = require('mysql');

// Require dotenv file
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Connected to Discord!');
});

// Connect to MySQL server
var sql_con = mysql.createConnection({
  host: "localhost",
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD
});

// Check if database connection succeeded
sql_con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to Database!");
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(
            `Server name: ${interaction.guild.name}\n
            Total members: ${interaction.guild.memberCount}`
        );
	} else if (commandName === 'user') {
		await interaction.reply(
            `Your tag: ${interaction.user.tag}\n
            Your id: ${interaction.user.id}`
        );
	}
});

client.on('message', msg => {
  
  if (msg.author.id === process.env.HEITOR_TOKEN) {
    msg.channel.send('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z');
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
