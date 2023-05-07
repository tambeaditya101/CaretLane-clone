const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    address: { type: String },
    city: { type: String },
    pincode: { type: Number },
    totalPrice: { type: Number },
    order_status : {type : String ,required : true },
    product: [],
    userID: { type: mongoose.Schema.ObjectId, ref: "user" },
  },
  { versionKey: false, timestamps: true }
);

// let data = {
//     "address" : "Chhattisgarh",
//     "city" : "Janjgir",
//     "pincode" : 495557,
//     "totalPrice" : 1000,
//     "product" : [
//         {
//             "_id": "64577c92a1c94d8ae22aa30c",
//             "product_img": "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/T/UT00016-YG0000_11_listfront.jpg",
//             "product_name": "Ally Cluster Diamond Ring",
//             "product_price": 7099,
//             "product_desc": "Ally Cluster Diamond Ring",
//             "product_weight": 3,
//             "product_type": "Bracelets",
//             "product_qty": 1,
//             "user_ID": "6454d941e7c0cc9e4dc528e8"
//         },
//         {
//             "_id": "645372b104630327a2dea0f1",
//             "product_img": "https://cdn.caratlane.com/media/catalog/product/J/R/JR03281-YGP900_1_lar.jpg",
//             "product_name": "Ripple Dazzle Diamond Ring",
//             "product_price": 34999,
//             "product_desc": "Ripple Dazzle Diamond Ring",
//             "product_weight": 4,
//             "product_type": "Rings",
//             "product_qty": 1,
//             "user_ID": "6454d941e7c0cc9e4dc528e8"
//         }
//     ]
// }

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = { OrderModel };