const fetch = require('node-fetch');
const jsdom = require('jsdom');

class Scraper {
	constructor(url = null, callback = null) {
        this.url = url ? url : null;
        this.crawler  = callback ? callback : null;
        this.dom = null;
	}

	checkCrawler() {
		if (typeof this.crawler === typeof(Function)) {
			return true;
		}
        return false;
	}

	async initializeRawHTML() {
		const fetchData = await fetch(this.url);
		return fetchData.text();
	}

	async renderDom(raw) {
		return new jsdom.JSDOM(raw);
	}

	async run() {
		if (!this.crawler) {
			throw new Error('You need to inject a crawler function first.');
		}

        if(!this.checkCrawler()){
            throw new Error('crawler must be a function.');
        }

        const rawHTML = await this.initializeRawHTML();
        this.dom = await this.renderDom(rawHTML);
    
		return this.crawler(this.dom.window.document);
	}
}

const scraper = new Scraper();

module.exports = scraper;
