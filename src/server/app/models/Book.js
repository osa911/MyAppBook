var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Book', new Schema({
  name: String,
  author: [String],
  desc: String,
  whoAdded: Number,
}));