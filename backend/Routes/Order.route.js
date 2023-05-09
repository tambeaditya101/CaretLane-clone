const { Router } = require("express");
const { Auth } = require("../middleware/Auth.middleware");
 
const { OrderModel } = require("../models/Order.model");

const OrderRouter = Router();

// OrderRouter.get("/"  , async (req, res) => {
//   const user_ID = req.body.user_ID;
//   try {
//     const data = await OrderModel.find({ user_ID: user_ID }).populate("user_ID", [
//       "name",
//       "email",
//       "gender",
//     ]);
//     res.send(data);
//   } catch (error) {
//     res.send(error);
//   }
// });

OrderRouter.post("/add" ,async (req, res) => {
   
  try {
    const data = new OrderModel(req.body);
    await data.save();
    res.send("data is added");
  } catch (error) {
    res.send(error);
  }
});

 

//order status

OrderRouter.patch("/orderStatus/:id/prod/:pid"  ,async (req, res) => {
    const { id, pid } = req.params;
    const {order_status} = req.body
  try {
    await OrderModel.updateOne(
      { _id: id, "product._id": pid },
      { $set: { "product.$.order_status": order_status } }
    ).then((result) => res.send("data updated"))
     .catch((err) => res.send("err"));
  } catch (error) {
     res.send({"msg" : "Something went wrong"})
  }
  });

OrderRouter.get("/", async (req, res) => {
  try {
    const data = await OrderModel.find()
    // console.log(data)
    res.send(data);
  } catch (error) {
    res.send("error");
  }
});

module.exports = { OrderRouter };
