require('dotenv').config();

const {Client} = require('discord.js');
const client1 = new Client();

client1.on('ready', () => {
    console.log(`${client1.user.username}`);
    console.log("Hi, Sup?")
});

const userID = "763414422219522050";

client1.on("message", function(message) {
    if(message.author.id === userID) {
        message.reply("Acha");
    }
});

client1.login(process.env.DISCORDJS_BOT_TOKEN);