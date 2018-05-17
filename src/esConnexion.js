var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  hosts: [
    'https://es.hurrycane.fr:443',
  ]
});

module.exports = client;  