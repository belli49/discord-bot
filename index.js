// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Require dotenv file
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', msg => {
  
  if (msg.author.id === process.env.HEITOR_TOKEN) {
    msg.channel.send('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z');
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);