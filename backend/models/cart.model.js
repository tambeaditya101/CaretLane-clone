const mongoose = require("mongoose");

const cart_schema = mongoose.Schema({
    product_img: {type: String, required: true},
    product_name: {type: String, required: true, minlength:3},
    product_price: {type: Number, required: true},
    product_desc: {type: String, required: true},
    product_weight: {type: Number, required: true},
    product_type: {type: String, required: true, enum: ["Earing","Rings","Necklaces","Pendants","Bracelets","Bangles"]},
    product_qty : {type: Number,required: true, min: 1},
    user_ID: {type:String, required: true}
},{
    versionKey: false
});

const CartModel = mongoose.model("cart",cart_schema);

module.exports= {
    CartModel
}


/*
{
    "product_img":"https://m.media-amazon.com/images/I/719nLah8urL._UX425_.jpg",
    "product_name":"t-shirt",
    "product_price":799,
    "product_desc": "this is a red round neck t-shirt",
    "product_weight":4,
    "product_type": "Earing",
    "product_qty": 1
}
*/