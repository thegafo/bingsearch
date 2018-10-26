
'use strict';

const https = require('https');

/**
 * bingWebSearch - call Bing Web Search API
 *
 * @param  {String} query description
 * @return {Promise}      resolves with Bing search response object
 */
function bingWebSearch(query) {
  return new Promise((resolve,reject) => {
    https.get({
      hostname: 'api.cognitive.microsoft.com',
      path:     `/bing/v7.0/search?q=${encodeURIComponent(query)}`,
      headers:  { 'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY },
    }, res => {
      let body = ''
      res.on('data', part => body += part);
      res.on('end', () => resolve(JSON.parse(body)));
      res.on('error', e => { throw e });
    });
  });
};

class BingSearch {
  constructor(subscriptionKey) {
    this.subscriptionKey = subscriptionKey || process.env['AZURE_SUBSCRIPTION_KEY'];
    if (!this.subscriptionKey) throw new Error('AZURE_SUBSCRIPTION_KEY is not set.');
  }
  async query(q) {
    return bingWebSearch(q);
  }
}

module.exports = BingSearch;
