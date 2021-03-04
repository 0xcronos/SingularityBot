const scraper = require('../models/scraper');
const raeMeaningCrawler = require('../crawlers/rae');
const { generateRaeEmbed } = require('../utils/rae');

module.exports = {
	name: 'meaning',
	description: 'Muestra el significado de una palabra desde el diccionario de la RAE',
	aliases: ['mn'],
	args: true,
	guildOnly: false,
	usage: '<word>',
	cooldown: 5,
	async execute(message, args, client) {
		const raeUrl = 'https://dle.rae.es/';

		const word = args[0];

		scraper.url = raeUrl.concat(word);

		scraper.crawler = raeMeaningCrawler;

		try{
			const results = await scraper.run();
			const raeEmbed = generateRaeEmbed(args[0], results[0], client);
			message.channel.send({ embed: raeEmbed });
		}catch(err){
			message.channel.send('La palabra ingresada no existe o está mal escrita (debes añadir tildes si es necesario).');
			console.log(err);
		}
	},
};
