const Discord = require("discord.js");

module.exports = {
    name: "kick",
    description: "Kickea a un miembro",
    aliases: ["calcitrare"],
    args: true,
    guildOnly: true,
    usage: "<user-metion>",
    rolesAllowed: ['Lord'],
    execute(message, args) {

        const user = message.mentions.users.first();

        if (user) {

            const member = message.guild.member(user);
            if (member) {

                //Kick promise
                member.kick('expulsado desde Bot')
                .then(() => {
                    return message.reply(`ha expulsado a ${user.tag}`);
                })
                .catch(error => {
                    console.error(error);
                    return message.reply(`no pude expulsar al miembro ${user.tag}`);
                });
            }else{
                return message.reply('ese usuario no está en el servidor!');
            }
        }else{
            return message.reply('no especificaste el usuario a expulsar!');
        }
    }
};
