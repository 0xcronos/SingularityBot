const raeMeaningCrawler = document => {

    var results = document.getElementById('resultados');
            
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
    return [wordInfo];
}


module.exports = raeMeaningCrawler;
