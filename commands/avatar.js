module.exports = {
    name: 'avatar',
    description: 'Obtiene la url del avatar del usuario mencionado, o tu propio avatar.',
    aliases: ['icon', 'pfp'],
    args: false,
    guildOnly: false,
    usage: "<user-mention>",
    execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
		});
		
		message.channel.send(avatarList);
	}
};
