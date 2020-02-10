const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: String,
    lastName: String,
    nationality: String,
    birthday: Date,
    pictureUrl: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
