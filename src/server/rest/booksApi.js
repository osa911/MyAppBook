var express = require('express');
var Book = require('../app/models/Book');
var MAR = require('../helpers/makeAresponce');
var BooksApi = express.Router();

BooksApi.get('/', function (req, res) {
  res.json({ message: 'Welcome to the API!' });
});

BooksApi.get('/getAllBooks', function (req, res) {
  Book.find({}, function (err, Book) {
    res.json(MAR(true, res.statusCode, 'This is all that was found.', {result: Book}));
  });
});

BooksApi.post('/addBook', function (req, res) {
  var newBook = new Book({
    name: req.body.name,
    author: req.body.author,
    desc: req.body.desc,
    whoAdded: req.body.whoAdded,
  });

  newBook.save(function (err) {
    if (err) throw err;
    res.json(MAR(true, res.statusCode, 'Book added successfully.'));
  });
});

module.exports = BooksApi;
