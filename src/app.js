const { token } = require('./config.json');
const DiscordBot = require('./models/discordBot');

// bot initialization
const discordBot = new DiscordBot(token);

discordBot.onReady('Bot Ready!');

discordBot.awaitForMessages();

discordBot.client.login(token);