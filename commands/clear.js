module.exports = {
    name: 'clear',
    description: 'Limpia desde 1 hasta 99 mensajes, solo pueden eliminarse mensajes con menos de 14 dias desde su creación.',
    aliases: ['cls'],
    args: true,
    guildOnly: true,
    rolesAllowed: ['Rey', 'Lord', 'Conde'],
    usage: "<1-99>",
    execute(message, args){
        const amount = parseInt(args[0]) + 1;

        if(isNaN(amount)){
            return message.reply('debes ingresar un número válido de mensajes a borrar');
        }else if(amount <= 1 || amount > 100){
            return message.reply('debes ingresar un valor entre 1 y 99');
        }

        // bulkDelete will delete a certain amount of messages between 2 and 100
        message.channel.bulkDelete(amount);
        // .catch(
        //     message.reply("solo puedes borrar mensajes que tengan menos de 14 dias desde su creación")
        // );
    }
};