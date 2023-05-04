const {Router,use} = require("express");
const { ProductModel } = require("../models/Product.model");
const { Auth } = require("../middleware/Auth.middleware");

const productRouter = Router();



productRouter.get("/products",async (req,res)=>{
    const all_products = await ProductModel.find();
    console.log(all_products)
    if(all_products.length){
        res.send(all_products);
    }else{
        res.send({"msg": "add some product first."});
    }
});

productRouter.use(Auth);

productRouter.post("/product/create",async (req,res)=>{
     if (req.body.product_img && req.body.product_name && req.body.product_price && req.body.product_desc && req.body.product_rating && req.body.user_ID) {
        try {
            const payload = req.body;
            //console.log(payload)
            const new_product = new ProductModel(payload);
            await new_product.save();
            //console.log(new_product)
            const added_product = await ProductModel.findOne({_id: new_product._id})
            //console.log(added_product);
            if (added_product?.product_name?.length) {
                res.status(200).send(added_product);
            } else {
                res.status(404).send({"msg":"something went wrong, please try again later."})
            }
        } catch (err) {
            console.log(err);
            res.status(404).send({"msg": "something went wrong, please try again later."})
        }
     } else {
        res.send({"msg": "please fill all the fields for creating the new product."})
     }
});


productRouter.patch("/product/update/:productID",async (req,res)=>{
    try {
        const payload = req.body;
        //console.log(payload);
        const productID = req.params.productID;
        const userID = req.body.user_ID;
        const product = await ProductModel.findOne({_id:productID});
        if(userID !== product.user_ID){
            res.status(404).send({"msg":"Not Authorised."});
        }else{
            await ProductModel.findByIdAndUpdate({_id:productID},payload);
            const updatedProduct = await ProductModel.findOne({_id:productID});
            console.log(updatedProduct);
            res.send(updatedProduct)
        }
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong, please try again later."})
    }
});

productRouter.delete("/product/remove/:productID", async(req,res)=>{
    try {
        const productID = req.params.productID;
        const userID = req.body.user_ID;
        const product = await ProductModel.findOne({_id:productID});
        //console.log(product);
        if (product) {
            if(userID !== product.user_ID){
                res.status(404).send({"msg":"Not Authorised."});
            }else{
                await ProductModel.findByIdAndDelete({_id:productID});
                const deletedProduct = await ProductModel.findOne({_id:productID});
                //console.log(deletedProduct);
                res.status(200).send(deletedProduct===null ? {} : {"msg": "something went wrong, please try agian later."});
            }
        } else {
            res.status(404).send({"msg": "there is no product found with this ID."})
        }
    } catch (err) {
        console.log(err);
        res.status(404).send({"msg":"something went wrong, please try again later."})
    }
    
});

module.exports = {
    productRouter
}


