// logic here
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require("../models/User.model");
const userRouter = express.Router();

userRouter.post("/register",async (req,res)=>{
    if(req.body.name && req.body.email && req.body.gender && req.body.password && req.body.age && req.body.city){
        const {email, password} = req.body;
        const isUserAlreadyPresent =await UserModel.findOne({email});
        //console.log(isUserAlreadyPresent)
        if (isUserAlreadyPresent?.email) {
            res.send({"msg": "This email is already registered."});
        } else {
            try {
                bcrypt.hash(password, 7, async (err, hash) =>{
                    const user = new UserModel({...req.body, password: hash});
                    await user.save();
                    return res.status(200).send({"msg": "Registerd Successfull."});
                });
            } catch (err) {
                res.status(404).send({"msg": "Something went wrong, please try again later"})
            }
        }
    }else{
        res.send({"msg": "Please fill all the details."})
    }
});

userRouter.post("/login", async(req,res)=>{
    if(req.body.email && req.body.password){
      try {
        const {email,password} = req.body;
        const user = await UserModel.find({email});
        console.log(user)
        if(user.length>0){
            const hashed_password = user[0].password;
            bcrypt.compare(password, hashed_password, function(err, result) {
                const token = jwt.sign({"user_ID":user[0]._id},"masai");
                return res.status(200).send({"msg":"login successfull","token":token});
            });
        }else{
            res.send({"msg": "login failed"})
        }
      } catch (err) {
        res.status(404).send({"msg": "Something went wrong, please try again later..."})
      }
    }else{
        res.send({"msg": "Please fill all the fields"})
    }
});

module.exports = {
    userRouter
}


/*
 name: {type: String, required: true},
  email: {type: String, required : true, unique: true},
  gender: {type: String, required: true, enum: ["Male", "Female"]},
  password: {type: String, required: true},
  age: {type: String, required: true},
  city: {type: String, required: true},
  is_married: String
*/
