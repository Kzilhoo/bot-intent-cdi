var client = require('./esConnexion.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});