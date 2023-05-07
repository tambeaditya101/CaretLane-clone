// logic here
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User.model");
const userRouter = express.Router();
 

userRouter.post("/register", async (req, res) => {
  if (req.body.name && req.body.email && req.body.gender && req.body.password) {
    const { email, password } = req.body;
    const isUserAlreadyPresent = await UserModel.findOne({ email });
    //console.log(isUserAlreadyPresent)
    if (isUserAlreadyPresent?.email) {
      res.send({ msg: "This email is already registered." });
    } else {
      try {
        bcrypt.hash(password, 7, async (err, hash) => {
          const user = new UserModel({ ...req.body, password: hash });
          await user.save();
          return res.status(200).send({ msg: "Registerd Successfull." });
        });
      } catch (err) {
        res
          .status(404)
          .send({ msg: "Something went wrong, please try again later" });
      }
    }
  } else {
    res.send({ msg: "Please fill all the details." });
  }
});

userRouter.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.find({ email });
      //console.log(user)
      if (user.length > 0) {
        const hashed_password = user[0].password;
        bcrypt.compare(password, hashed_password, function (err, result) {
          //     const token = jwt.sign({"user_ID":user[0]._id},"masai");
          //     return res.status(200).send({"msg":"login successfull","token":token});
          // }
          if (result) {
            const token = jwt.sign({ user_ID: user[0]._id }, "masai");
            return res
              .status(200)
              .send({ msg: "login successfull", token: token });
          } else {
            res.status(400).send({ msg: "login failed" });
          }
        });
      } else {
        res.send({ msg: "login failed" });
      }
    } catch (err) {
      res
        .status(404)
        .send({ msg: "Something went wrong, please try again later..." });
    }
  } else {
    res.send({ msg: "Please fill all the fields" });
  }
});

userRouter.get("/",async (req,res)=>{
    try {
        let users=await UserModel.find()
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send({"msg" : "Something went wrong"})
    }
})
module.exports = {
  userRouter,
};
