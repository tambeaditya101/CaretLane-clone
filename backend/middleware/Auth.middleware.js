const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, 'masai');
    // console.log(decoded)
    if(decoded){
       const user_ID = decoded.user_ID;
       req.body.user_ID = user_ID;
       next();
    }else{
       res.send({"msg":"login credintials are wrong."})
    }
  } else {
    res.send({"msg": "Please login first"});
  }
};

// const AuthForGettingUserLists = (req,res,next) => {
//   // let token;
//   // if(req.headers.length){
//   //   token = req.headers?.authorization.split(" ")[1];
//   // }
//   const token = req.headers?.authorization?.split(" ")[1];
//   console.log(token)
//   if(token){
//     const decoded = jwt.verify(token, 'masai');
//     console.log(decoded);
//     if(decoded){
//       next();
//     }else{
//       return res.send({"msg":"you are not authorised to perform this task."});
//     }
//   }else{
//     return res.send({"msg":"you are not authorised to perform this task."});
//   }
// };

module.exports = {
  Auth
};
