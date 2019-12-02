const Discord = require('discord.js');
const Token = process.env.TOKEN;

let  testChannel;


const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready');

    testChannel = client.channels.find(x=>x.name == 'test');
    
});

client.on('message', (msg) => {
    if(msg.content === "hello"){
        msg.channel.send("hello, " + msg.author);
    }
});

client.login(Token);