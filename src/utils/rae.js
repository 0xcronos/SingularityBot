const generateRaeEmbed = (sWord, wordInfo, client) => {
	const { word, latin, meaning } = wordInfo;
	return {
		color: 0x0e2752,
		title: `Buscaste la palabra "${sWord}"`,
		url: `https://dle.rae.es/${sWord}`,
		author: {
			name: `${client.user.username} ha concedido tus deseos...`,
			icon_url: client.user.displayAvatarURL({ dynamic: true }),
		},
		description: latin,
		thumbnail: {
			url: 'https://images-na.ssl-images-amazon.com/images/I/61fz4mfNUFL.png',
		},
		fields: [
			{
				name: word,
				value: meaning,
			},
		],
	};
};

module.exports = {
	generateRaeEmbed,
};
