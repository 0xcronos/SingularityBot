module.exports = {
    name: 'server',
    description: 'Muestra información acerca del servidor.',
    aliases: ['sv'],
    args: false,
    guildOnly: true,
    execute(message, args){
        return message.channel.send(`\`Servidor: ${message.guild.name}\nRegión actual: ${message.guild.region}\nFecha de creación: ${message.guild.createdAt}\nMiembros actuales: ${message.guild.memberCount}\`\n\nDueño: ${message.guild.owner}`);
    }
};