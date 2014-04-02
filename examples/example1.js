var winston = require('winston');
var mongoose = require('mongoose');

var mongoose_logger = require('../');

var config = require('./config.json');

mongoose.connect(config.mongo.join(','));

var db = mongoose.connection;
db.on('open', function() {
  console.log('Connection opened!');
});

var logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      colorize: true
    }),

   new winston.transports.MongooseLogger({
      level: 'info'
    })
  ]
});

logger.debug('Info message', { a: 1, b: 2, type: 'facebook' }, function() {
  console.error(arguments);
});
