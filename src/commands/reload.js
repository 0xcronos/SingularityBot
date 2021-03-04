module.exports = {
    name: 'reload',
    description: 'Recarga un comando',
    aliases: ['rl', 'rld'],
    args: true,
    usage: "<comando>",
    guildOnly: false,
    execute(message, args){

        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        // En caso que el comando no exista
        if(!command) return message.channel.send(`No existe ningún comando con el nombre o alias \`${commandName}\`, ${message.author}!`);

        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${commandName}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`El comando ${commandName} ha sido recargado con éxito!`);
        } catch (error) {
            console.log(error);
            message.channel.send(`Ocurrió un error al intentar recargar el comando \`${command.name}\`:\n\`${error.message}\``);
        }
    }
}