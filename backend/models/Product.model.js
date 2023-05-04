const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    product_img: {type: String, required: true},
    product_name: {type: String, required: true, minlength:3},
    product_price: {type: Number, required: true},
    product_desc: {type: String, required: true},
    product_weight: {type: Number, required: true},
    product_type: {type: String, required: true, enum: ["Earing","Rings","Necklaces","Pendants","Bracelets","Bangles"]},
    user_ID: {type:String, required: true}
},{
    versionKey: false   
});

const ProductModel = mongoose.model("product",productSchema);

module.exports = {
    ProductModel
}


/*
{
    "product_img":"https://m.media-amazon.com/images/I/719nLah8urL._UX425_.jpg",
    "product_name":"t-shirt",
    "product_price":799,
    "product_desc": "this is a red round neck t-shirt",
    "product_weight":4,
    "product_type": "Earing"
}
*/