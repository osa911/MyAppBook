var booksApi = require('./booksApi');
var authApi = require('./authApi');
var otherApi = require('./otherApi');

module.exports = {
  authApi: authApi,
  booksApi: booksApi,
  otherApi: otherApi,
}