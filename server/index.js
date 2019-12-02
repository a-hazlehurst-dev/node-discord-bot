const Discord = require('discord.js');
const m =require('./message.js');
const Token = process.env.TOKEN;

let  testChannel;


const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready');

    testChannel = client.channels.find(x=>x.name == 'test');
    
});


client.on('message', (msg) => {
    m.message(msg);
 
    
});
client.login(Token);