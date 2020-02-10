var express = require("express");
var router = express.Router();

const booksRouter = require("./books");

//
//     /books
// GET, POST, PUT, PATCH, DELETE
router.use("/books", booksRouter);

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
