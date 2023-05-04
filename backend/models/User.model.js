const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  email: {type: String, required : true, unique: true},
  gender: {type: String, required: true, enum: ["Male", "Female"]},
  password: {type: String, required: true, minlength: 4}
},{
  versionKey: false
});

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };

/*
{
    "name": "Ankit",
    "email": "ankit@gmail.com",
    "gender": "Male",
    "password": "ankit"
}
*/