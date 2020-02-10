const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const bookSchema = new Schema(
  {
    title: String,
    description: String,

    author: [{ type: Schema.Types.ObjectId, ref: "Author" }],

    rating: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

// CREATE MODEL              books
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
