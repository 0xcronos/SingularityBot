const { token } = require('./config.json');
const DiscordBot = require('./models/DiscordBot');
const { handleMemberAdd } = require('./events');

// initialize bot
const discordBot = new DiscordBot(token);

discordBot.onReady('Bot Ready!');

discordBot.onGuildMemberJoin(handleMemberAdd);

discordBot.awaitForMessages();

discordBot.client.login(token);