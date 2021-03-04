const { prefix } = require('../config.js');

module.exports = {
    name: 'help',
    description: 'Muestra información sobre los comandos disponibles.',
    aliases: ['h'],
    args: false,
    guildOnly: false,
    usage: "<opcional: comando>",
    execute(message, args){

        // Almacena mensajes de salida
        const data = [];
        const { commands } = message.client;

        if(!args.length){
            data.push('Lista de comandos disponibles:');
            data.push('\`' + commands.map(command => command.name).join(', ') + '\`');
            data.push(`\nPuedes usar \`${prefix}help [comando]\` para obtener info sobre un comando en especifico`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if(message.channel.type === 'dm') return;
                    message.reply('Te he enviado un DM con todos los comandos!');
                })
                .catch(error => {
                    console.error(`No se pudo enviar el mensaje de ayuda por DM a ${message.author.tag}.\n`, error);
                    message.reply('Parece que no puedo enviarte DMs, Revisa si tienes los DMs desactivados!');
                });
        }

        // Busca el primer arg entre la lista de comandos y alias
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(name));

        if(!command){
            return message.reply('este comando no existe!');
        }
        
        data.push(`Nombre: \`${command.name}\``);
        
        if(command.aliases) data.push(`Alias disponibles: \`${command.aliases.join(', ')}\``);
        if(command.description) data.push(`Descripción: \`${command.description}\``);
        if(command.usage) data.push(`Uso: \`${prefix}${command.name} ${command.usage}\``);
        
        data.push(`Cooldown: \`${command.cooldown || 3} segundo(s)\``);        

        message.channel.send(data, { split: true });
    }
};