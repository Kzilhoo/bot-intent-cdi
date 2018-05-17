var client = require('./esConnexion.js');


export function search(index,type, title){
  return client.search({  
    index: index,
    type: type,
    body: {
      query: {
        match: { title:title }
      },
    }
  },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        console.log(response);
        console.log("--- Hits ---");
        response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
      }
  });
}