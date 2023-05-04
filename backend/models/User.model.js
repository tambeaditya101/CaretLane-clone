const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  email: {type: String, required : true, unique: true},
  gender: {type: String, required: true, enum: ["Male", "Female"]},
  password: {type: String, required: true, minlength: 4},
  age: {type: String, required: true},
  city: {type: String, required: true},
  is_married: Boolean
},{
  versionKey: false
});

const UserModel = mongoose.model("user", userSchema);
module.exports = { UserModel };

/*
{
    "name": "Ankit",
    "email": "ankit@gmailcom",
    "gender": "Male",
    "password": "ankit",
    "age": 27,
    "city":"patna",
    "is_married": false
}
*/