module.exports = {
    name: 'setrole',
    description: 'Asigna un rol a un usuario, automaticamente asigna prefijo de rol.',
    aliases: ['sr'],
    args: true,
    guildOnly: true,
    rolesAllowed: ['Rey', 'Lord'],
    usage: "<role-id> <users-mention>",
    execute(message, args) {

        // get role
        var role = message.guild.roles.cache.get(args[0]);
        if(!role){
            role = message.guild.roles.cache.find(role => role.name === args[0]);
            if(!role){
                return message.reply('este rol no existe, debes escribirlo de manera exacta o usar su ID!');
            }
        }

        // set role
        message.mentions.users.map(user => {
            // casting to guildMember
            guildMember = message.guild.member(user);

            // set role nickname
		    guildMember.setNickname(`[${role.name}] ` + user.username);
            guildMember.roles.add(role, 'rol cambiado desde el bot!');
        });

        const usersAffected = message.mentions.users.map(user => {
            return user.username;
        }).join(', ');

        return message.channel.send(`Se han modificado los siguientes usuarios: ${usersAffected}`);
	}
};
