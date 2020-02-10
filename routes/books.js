// routes/books.js

var express = require("express");
var booksRouter = express.Router();

const Book = require("./../models/Book");
const Author = require("./../models/Author");

// GET     /books/delete/:bookId
booksRouter.get("/delete/:bookId", (req, res) => {
  Book.findByIdAndRemove(req.params.bookId)
    .then(() => res.redirect("/books"))
    .catch(err => console.log(err));
});

// OPTION 2
// If using req.query  ?
// booksRouter.get("/delete", (req, res) => {
//   Book.findByIdAndRemove( req.query.book )
// })

// GET     /books/details/:bookId
booksRouter.get("/details/:bookId", (req, res) => {
  Book.findById(req.params.bookId)
    .populate("author")
    .then(oneBook => {
      const data = {
        book: oneBook
      };

      res.render("book-details", data);
    })
    .catch(err => console.log(err));
});

// POST     /books/edit
booksRouter.post("/edit", (req, res) => {
  const _id = req.query._id;
  const { title, description, rating } = req.body;

  Book.updateOne({ _id }, { title, description, rating })
    .then(data => {
      res.redirect("/books");
    })
    .catch(err => console.log(err));
});

// GET    /books/edit      - Renders the Edit Form
booksRouter.get("/edit", (req, res) => {
  const { _id } = req.query;

  Book.findOne({ _id: _id })
    .then(oneBook => {
      const data = {
        book: oneBook
      };

      res.render("book-edit", data);
    })
    .catch(err => console.log(err));
});

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
