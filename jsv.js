var jsf = require('json-schema-faker');

var schema = {
  
};

jsf.resolve(schema).then(function(sample) {
  console.log(sample);
 
});