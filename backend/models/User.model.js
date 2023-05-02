const mongoose = require("mongoose");

const userSchem = mongoose.Schema({
  //
});

const UserModel = mongoose.model("user", userSchem);
module.exports = { UserModel };
