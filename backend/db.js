const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.mongoURL);

module.exports = {
  connection,
};

//mongodb+srv://tambeaditya101:tambeaditya101@cluster0.jy43s7w.mongodb.net/caretlane?retryWrites=true&w=majority

// "mongodb+srv://tambeaditya101:tambeaditya101@cluster0.jy43s7w.mongodb.net/caretlane?retryWrites=true&w=majority"

// "mongodb://127.0.0.1:27017/caretlane"
