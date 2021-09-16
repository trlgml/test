const request = require('request');
const JSONStream = require('JSONStream');
const es = require('event-stream');

request({ url: 'http://isaacs.couchone.com/registry/_all_docs' })
  .pipe(JSONStream.parse('rows.*'))
  .pipe(es.mapSync((data) => {
    console.error(data);
    return data;
  }));
