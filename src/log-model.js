// Sorry for this awful piece of shit

var LogSchema = require('./schema/log-schema');
var mongoose = require('mongoose');

var log_model = null;

module.exports = function(collection_name) {
  
  if(!log_model) {
    if(collection_name) {      
      LogSchema.set('collection', collection_name);
    }

    log_model = mongoose.model('Log', LogSchema);
  }

  return log_model;
}