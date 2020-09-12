const fetch = require('node-fetch');
module.exports = {
	name: 'cat',
	description: 'Muestra un lindo gatito aleatorio',
    aliases: ['cat'],
    args: false,
    guildOnly: false,
    cooldown: 5,
	async execute(message, args) {
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
	    message.channel.send(file);
    }
};