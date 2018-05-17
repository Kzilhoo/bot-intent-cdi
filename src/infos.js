export function search(index, type, typeOffer, domain) {
  var client = require('./esConnexion.js');
  return client.search({
    index: index,
    type: type,
    body: {
      "query": {
        "bool": {
          "should": {
            "match": { typeOffer },
            "match": { domain }
          }
        }
      }
    }
  }).then(function (resp) {
    return resp.hits.hits;
  }, function (err) {
    console.trace(err.message);
  });
  console.log("--- Response ---");
}
