var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogSchema = new Schema({
  level: String,
  message: String,
  metadata: Schema.Types.Mixed,
  created_at: { type: Date, default: Date.now }
});

module.exports = LogSchema;