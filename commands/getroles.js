module.exports = {
	name: 'getroles',
	description: 'Despliega lista con todos los roles del servidor',
    aliases: ['gr'],
    args: false,
    guildOnly: true,
    rolesAllowed: ['Rey', 'Lord'],
	execute(message) {
        const roles = message.guild.roles.cache.map(role => {
            if(role.name !== "@everyone"){
                return `> Rol: ${role.name}\n> Id: ||${role.id}||\n`
            }
        });

        if(!roles.length) message.channel.send('No existen roles en este servidor!');
        
        message.channel.send('LISTA DE ROLES:');
        message.channel.send(roles);
	}
};