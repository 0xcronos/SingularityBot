const { token } = require('./config.js');
const DiscordBot = require('./models/discordBot');

const discordBot = new DiscordBot(token);

discordBot.onReady('Bot Ready!');

discordBot.awaitForMessages();

discordBot.client.login(token);