// Imports
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, defaultRole } = require('./config.json');

/* INIT */
const client = new Discord.Client();

// Collections
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

// Read commands files from commands folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Dynamically set commands to the Collection
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

// Loggin in
client.once('ready', () => {
    console.log('Bot ready!');
});

// Set default role to user, specified at config.json
client.on('guildMemberAdd', guildMember => {
    const role = guildMember.guild.roles.cache.find(role => role.name === defaultRole);

    guildMember.setNickname(`[${defaultRole}] ` + guildMember.user.username);
    guildMember.roles.add(role, 'Bienvenido al servidor!');
})

// user send message
client.on('message', async message => {
    
    // invalid prefix or message belongs to bot
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    //command's and args handler
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Command object
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;

    // Prevents user from using server-only commands in DM
    if(command.guildOnly && message.channel.type !== 'text'){
        return message.reply(`No puedo ejecutar este comando fuera de un servidor!`);
    }

    // Check if the command needs args
    if(command.args && !args.length){

        let reply = `no has ingresado ningún parametro, ${message.author}!`;

        if(command.usage){
            reply += `\nPara usar este comando prueba: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    // check that the user has permissions to execute the command
    if(command.rolesAllowed && command.rolesAllowed.length){
        if(!message.member.roles.cache.some(role => command.rolesAllowed.includes(role.name))){
            return message.reply(`no eres lo suficientemente digno para utilizar este comando!`);
        }
    }
    
    // Cooldown manager
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    // command file cooldown or 2 by default, converted to miliseconds
    const cooldownAmount = (command.cooldown || 2) * 1000;

    // if author has timestamps 
    if(timestamps.has(message.author.id)){
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if(now < expirationTime){
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`debes esperar ${timeLeft} segundos antes de volver a usar este comando!`);
        }
    }

    // asign current time to message's author
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    // Command execution
    try{
        command.execute(message, args, client);
    }catch(error){
        console.error(error);
        message.reply(`ocurrió un error al ejecutar este comando, si el problema persiste contacta a ${message.guild.owner}!`);
    }
});

client.login(token);