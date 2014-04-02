var util = require('util');
var winston = require('winston');
var LogModelFactory = require('./log-model');

var LogModel = null;

var MongooseLogger = winston.transports.MongooseLogger = function (options) {
  this.name = 'mongooseLogger';

  options = options || {};

  this.level = options.level || 'info';
  this.collection_name = options.collection_name || 'winston_log';    

  // fuck this shit, it is 3am and I want go to the bed
  
  // initialize static LogModel
  LogModel = LogModelFactory(this.collection_name);
};

util.inherits(MongooseLogger, winston.Transport);

MongooseLogger.prototype.log = function (level, message, metadata, callback) {
  var entry = new LogModel({
    level: level,
    message: message,
    metadata: metadata    
  });

  entry.save(function(err) {
    return callback(err, true);
  });
};

module.exports = MongooseLogger;