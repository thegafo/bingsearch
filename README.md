# bingsearch
> Simple NodeJS Bing Search API with zero dependencies.

## Installation

```bash
npm i bingsearch
```

## Usage

```javascript
var Bing = require('bingsearch');
var bing = new Bing(SUBSCRIPTION_KEY);
bing.query('GAFO TECH').then(result => {
  console.log(JSON.stringify(result,null,2));
});
```
