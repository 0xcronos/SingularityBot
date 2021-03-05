const getFirstMeaning = document => {

    const results = document.getElementById('resultados');
            
    // primer article del div
    let article = results.firstElementChild;

    // la palabra no existe si el primer elemento no es de tipo article
    if(article.tagName !== 'ARTICLE') throw new Error('No existe la palabra!');

    // itera hasta que el elemento "p" dentro de "article" en la posicion 1 del arreglo exista.
    let hasData = article.getElementsByTagName('p')[1];
    while(hasData === undefined){
        // avanza al siguiente elemento "article"
        article = article.nextElementSibling;
        
        // no quedan mas elementos "articles"
        if(article.tagName !== 'ARTICLE') {
            return message.reply(`la palabra no tiene una descripción exacta, para mas información visita el sitio web de la RAE`);
        };

        hasData = article.getElementsByTagName('p')[1];
    }

    // convierte el texto en un arreglo de strings, elimina strings vacias
    data = article['textContent'].split('\n').filter(line => {
        return line != "";
    });
    
    // objeto resultante
    const wordInfo = {
        'word': data[0].replace(/[0-9]/g, ''),
        'latin': data[1],
        'meaning': data[2]
    }
    return [wordInfo];
}


module.exports = getFirstMeaning;
