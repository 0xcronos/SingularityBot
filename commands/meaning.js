const fetch = require('node-fetch');
const jsdom = require('jsdom');
module.exports = {
	name: 'meaning',
	description: 'Muestra el significado de una palabra desde el diccionario de la RAE',
    aliases: ['mn'],
    args: false,
    guildOnly: false,
    usage: '<word>',
    cooldown: 5,
	async execute(message, args, client) {

        await fetch(`https://dle.rae.es/${args[0]}`)
        .then(response => {
            return response.text();
        }) 
        // parse plain text to javascript DOM objects
        .then(res => {
            const dom = new jsdom.JSDOM(res);
            // target div with id 'resultados'
            var results = dom.window.document.getElementById('resultados');
            
            // first article of div
            var article = results.firstElementChild;

            // throw error if first tagName is not an article element
            if(article.tagName !== 'ARTICLE') throw new Error('No existe la palabra!');

            // loop until the "p" element inside "article" in position 1 of the array exists
            var hasData = article.getElementsByTagName('p')[1];
            
            while(hasData === undefined){
                // go to next article inside div
                article = article.nextElementSibling;

                // break condition, no articles left
                if(article.tagName !== 'ARTICLE') {
                    return message.reply(`la palabra no tiene una descripción exacta, para mas información visita el sitio web de la RAE`);
                };

                hasData = article.getElementsByTagName('p')[1];
            }

            // convert text content to an array separated with line breaks and without empty slots
            data = article['textContent'].split('\n').filter(line => {
                return line != "";
            });
            
            // object with all the important data inside
            const wordInfo = {
                'word': data[0].replace(/[0-9]/g, ''),
                'latin': data[1],
                'meaning': data[2]
            }
            
            // embed displayed on channel
            const {word, latin, meaning} = wordInfo;
            const embed = {
                color: 0x0E2752,
                title: `Buscaste la palabra "${args[0]}"`,
                url: `https://dle.rae.es/${args[0]}`,
                author:{
                    name: `${client.user.username} ha concedido tus deseos...`,
                    icon_url: client.user.displayAvatarURL({ dynamic: true })
                },
                description: latin,
                thumbnail: {
                    url: 'https://images-na.ssl-images-amazon.com/images/I/61fz4mfNUFL.png'
                },
                fields: [
                    {
                        name: word,
                        value: meaning
                    }
                ]
            }
            message.channel.send({embed: embed});
        })
        .catch((err) => {
            console.log(err)
            return message.reply('la palabra ingresada no existe en el diccionario de la RAE');
        })
    }
};

