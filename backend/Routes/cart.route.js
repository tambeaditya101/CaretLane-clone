const { Router } = require("express");
const { Auth } = require("../middleware/Auth.middleware");
const { CartModel } = require("../models/cart.model");

const cartRouter = Router();

cartRouter.use(Auth);

cartRouter.get("/products",async (req,res)=>{
    try {
        const user_ID = req.body.user_ID;
        const all_cart_products = await CartModel.find({user_ID});
        if(all_cart_products.length>0){
            res.status(200).send(all_cart_products);
        }else{
            res.send({"msg":"please add some product first."})
        }
    } catch (err) {
        console.log(err);
        res.status(404).send({"msg":"something went wrong, please try again later."})
    }
    
});

cartRouter.post("/product/add",async (req,res)=>{
    if (req.body.product_img && req.body.product_name && req.body.product_price && req.body.product_desc && req.body.product_weight && req.body.product_type && req.body.product_qty && req.body.user_ID){
        try {
            const payload = req.body;
            const new_cart_product = new CartModel(payload);
            await new_cart_product.save();
            res.status(200).send({"msg":"product added to the cart successfully."})
        } catch (err) {
            res.status(404).send({"msg":"something went wrong, please try again later."})
        }
    }else{
        res.send({"msg": "please add the quantity, before adding to the cart."})
    }
});

cartRouter.patch("/product/update/:productID",async (req,res)=>{
    try {
        const payload = req.body;
        const productID = req.params.productID;
        const user_ID = req.body.user_ID;
        const product = await CartModel.find({_id:productID});
        if(product.length>0){
            if (product[0].user_ID !== user_ID) {
                res.status(404).send({"msg":"Not Authorised."});
            } else {
                await CartModel.findByIdAndUpdate({_id:productID},payload);
                const updatedProduct = await CartModel.findOne({_id:productID});
                console.log(updatedProduct);
                res.send(updatedProduct)
            }
        }else{
            res.send({"msg": "there is no product found with this particualr ID."})
        }
    } catch (err) {
        console.log(err);
        res.status(404).send({"msg":"something went wrong, please try again later."});
    }
});

cartRouter.delete("/product/remove/:productID",async (req,res)=>{
    try {
        const productID = req.params.productID;
        const user_ID = req.body.user_ID;
        const product = await CartModel.find({_id:productID});
        if (product.length>0) {
            if (product[0].user_ID !== user_ID) {
                res.status(404).send({"msg":"Not Authorised."});
            } else {
                await CartModel.findByIdAndDelete({_id:productID});
                const deletedProduct = await CartModel.findOne({_id:productID});
                console.log(deletedProduct);
                res.send(deletedProduct===null ? {} : {"msg": "something went wrong, please try agian later."})
            }
        } else {
            res.send({"msg": "there is no product found with this particualr ID."})
        }
    } catch (err) {
        console.log(err);
        res.status(404).send({"msg":"something went wrong, please try again later."});
    }
});

module.exports = {
    cartRouter
}