const fetch = require('node-fetch');
const jsdom = require('jsdom');
/*
	Sobre Scraper.
	-----------------------------------------------------------------------------------------------------
	Este modulo fue creado con la finalidad de abstraerse de la utilización del modulo jsdom
	y desacoplar el comportamiento del crawler. También cumple la función de utilizar consultas
	nativas desde el crawler.

	Para utilizar este modulo deben seguirse las siguientes reglas:
	- Debes asociar una url.
	- Debes asociar un crawler (callback), este debe recibir un parametro document como primer parametro,
	  el cual dentro de la especificación del crawler, te permitirá realizar consultas nativas al DOM.
	- El crawler debe retornar un arreglo incluso si este contiene solo un dato.
	  -----------------------------------------------------------------------------------------------------
*/

class Scraper {
	constructor(url = null, callback = null) {
        this.url = url ? url : null;
        this.crawler  = callback ? callback : null;
        this.dom = null;
	}

	#checkCrawler() {
		if (typeof this.crawler === typeof(Function)) {
			return true;
		}
        return false;
	}

	async #initializeRawHTML() {
		const fetchData = await fetch(this.url);
		return fetchData.text();
	}

	async #renderDom(raw) {
		return new jsdom.JSDOM(raw);
	}

	async run() {
		if (!this.crawler) {
			throw new Error('Debes inyectar una función al crawler.');
		}

        if(!this.#checkCrawler()){
            throw new Error('Crawler debe ser una función.');
        }

        const rawHTML = await this.#initializeRawHTML();
        this.dom = await this.#renderDom(rawHTML);
    
		return this.crawler(this.dom.window.document);
	}
}

const scraper = new Scraper();

module.exports = scraper;
