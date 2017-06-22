var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Author', new Schema({
  name: String,
  books: [String],
  desc: String,
  whoAdded: Number,
}));