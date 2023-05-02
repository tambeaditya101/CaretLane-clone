const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://tambeaditya101:tambeaditya101@cluster0.jy43s7w.mongodb.net/caretlane?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
