// routes/books.js

var express = require("express");
var booksRouter = express.Router();

const Book = require("./../models/Book");

//      POST /books/add

// GET     /books/add
booksRouter.get("/add", (req, res) => {
  res.render("book-form");
});

// POST     /books/add
booksRouter.post("/add", (req, res) => {
  const { title, author, description, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then(book => {
      res.redirect("/books");
    })
    .catch(err => console.log(err));
});

// GET     /books
booksRouter.get("/", (req, res) => {
  Book.find()
    .then(allBooks => {
      const data = {
        books: allBooks
      };

      res.render("books", data);
    })
    .catch(err => console.log(err));
});

module.exports = booksRouter;
