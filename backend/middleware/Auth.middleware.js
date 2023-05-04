const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    const decoded = jwt.verify(token, 'masai');
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
module.exports = {
  Auth,
};
