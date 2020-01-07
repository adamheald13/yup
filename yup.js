const config = require('./config.json');
const Discord = require('discord.js');

const discordClient = new Discord.Client();

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});
discordClient.on('message', message => {
  if (message.channel.name === 'yup-bot') {
    if (message.content.toLowerCase() === 'yup' && !message.author.bot) {
      message.channel.send('yup');
    } else if(!message.author.bot) {
      message.delete();
      message.reply(`you aren't allowed to type \`${message.content}\` in here.`);
    }
  }
});

discordClient.login(config.token);

console.log(config.clientId);
