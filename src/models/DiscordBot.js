const Discord = require('discord.js');
const fs = require('fs');
const { prefix } = require('../config.json');

class DiscordBot {
	constructor(token) {
		this.client = new Discord.Client();
		this.commands = new Discord.Collection();
		this.cooldowns = new Discord.Collection();

		this.#initCommands();
	}

	onReady(message) {
		this.client.once('ready', () => {
			console.log(message);
		});
	}

	onGuildMemberJoin(handleMemberAdd) {
		this.client.on('guildMemberAdd', handleMemberAdd);
	}

	awaitForMessages() {
		this.client.on('message', async (message) => {
			if (!message.content.startsWith(prefix) || message.author.bot) return;

			const { command, args } = this.#getCommand(message);
			if (!command) return;

			const isServerOnly = this.#checkServerOnlyCommand(command, message);
			if (isServerOnly) return;

			const needsArgs = this.#checkCommandArgs(command, message, args);
			if (needsArgs) return;

			const hasPermission = this.#checkForPermission(command, message);
			if (!hasPermission) return;

			const isInCooldown = this.#setCooldown(command, message);
			if (isInCooldown) return;

			this.#executeCommand(command, message, args);
		});
	}

	#initCommands() {
		// Lee los archivos de comandos
		const commandFiles = fs.readdirSync('./src/commands').filter((file) => file.endsWith('.js'));
		// Añade los comandos de manera dinamica
		for (const file of commandFiles) {
			const command = require(`../commands/${file}`);
			this.commands.set(command.name, command);
		}
	}

	// Obtiene los comandos y sus argumentos si el mensaje es válido
	#getCommand(message) {
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		const command =
			this.commands.get(commandName) ||
			this.commands.find((cmd) => {
				cmd.aliases && cmd.aliases.includes(commandName);
			});

		if (!command) return {};
		return { command, args };
	}

	// Valida si el comando solo está disponible en servidores 
	#checkServerOnlyCommand(command, message) {
		if (command.guildOnly && message.channel.type !== 'text') {
			message.reply(`No puedo ejecutar este comando fuera de un servidor!`);
			return true;
		}
		return false;
	}

	// Valida si el comando require de argumentos para funcionar
	#checkCommandArgs(command, message, args){
		if (command.args && !args.length) {
			let reply = `no has ingresado ningún parametro, ${message.author}!`;
			if (command.usage) {
				reply += `\nPara usar este comando prueba: \`${prefix}${command.name} ${command.usage}\``;
			}
			message.channel.send(reply);
			return true;
		}
		return false;
	}

	// Valida que el usuario tenga los privilegios suficientes para ejecutar el comando
	#checkForPermission(command, message) {
		if (command.rolesAllowed && command.rolesAllowed.length) {
			if (!message.member.roles.cache.some((role) => command.rolesAllowed.includes(role.name))) {
				message.reply(`no tienes privilegios suficientes para ejecutar este comando.`);
				return false;
			}
		}
		return true;
	}

	// Cooldown manager => Retorna true si el comando está en enfriamiento.
	#setCooldown(command, message) {
		if (!this.cooldowns.has(command.name)) {
			this.cooldowns.set(command.name, new Discord.Collection());
		}

		const now = Date.now();
		const timestamps = this.cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 2) * 1000;

		// Si el emisor del mensaje tiene un timestamp
		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				message.reply(`debes esperar ${timeLeft} segundos antes de volver a usar este comando!`);
				return true;
			}
		}

		// Asigna tiempo actual al emisor del mensaje
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

		return false;
	}

	#executeCommand(command, message, args) {
		try {
			command.execute(message, args, this.client);
		} catch (error) {
			console.error(error);
			message.reply(
				`ocurrió un error al ejecutar este comando, si el problema persiste contacta a ${message.guild.owner}!`
			);
		}
	}
}

module.exports = DiscordBot;
