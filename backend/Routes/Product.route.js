const {Router,use} = require("express");
const { ProductModel } = require("../models/Product.model");
const { Auth } = require("../middleware/Auth.middleware");
const { UserModel } = require("../models/User.model");

const productRouter = Router();



productRouter.get("/products",async (req,res)=>{
    try {
        const {minPrice, maxPrice, minWeight, maxWeight, type, order} = req.query;
        const query = {};
        if(minPrice){
            query.product_price={$gte:minPrice}
        };
        if(maxPrice){
            query.product_price.$lte=maxPrice
        }
        if(minWeight){
            query.product_weight={$gte:minWeight}
        };
        if(maxWeight){
            query.product_weight.$lte=maxWeight;
        }
        if(type){
            query.product_type=type;
        }
        //console.log(query);
        if(order=="asc"){
            const data = await ProductModel.find(query).sort({product_price: 1});
            res.status(200).send(data);
        }else if(order=="desc"){
            const data = await ProductModel.find(query).sort({product_price: -1});
            res.status(200).send(data);
        }else{
            const data = await ProductModel.find(query);
            res.status(200).send(data);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({"msg":"something went wrong, please try again later."})
    }
});

// ?minPrice=10000&&maxPrice=20000&&minWeight=5&&maxWeight=10&&type=Rings&&type=Earing&&order=asc

productRouter.get("/product/singleProduct/:productID",async (req,res)=>{
    //console.log(req.params.productID)
    try {
        const product = await ProductModel.findById(req.params.productID);
        //console.log(product);
        if (product) {
            res.status(200).send(product);
        } else {
            res.send({"msg":"there is no product found with this particual ID."})
        }
    } catch (err) {
        console.log(err);
        res.status(404).send({"msg":"something went wrong, please try again later."})
    }
});

productRouter.use(Auth);


productRouter.post("/product/create",async (req,res)=>{
     if (req.body.product_img && req.body.product_name && req.body.product_price && req.body.product_desc && req.body.product_weight && req.body.product_type && req.body.user_ID) {
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
        //console.log(userID)
        const product = await ProductModel.findOne({_id:productID});
        //console.log(product.user_ID);
        if(userID !== product.user_ID){
            res.status(404).send({"msg":"Not Authorised."});
        }else{
            await ProductModel.findByIdAndUpdate({_id:productID},payload);
            const updatedProduct = await ProductModel.findOne({_id:productID});
            //console.log(updatedProduct);
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


// This route is only for admin, to get the list of all the users/customers of our website
productRouter.get("/listOfUsers",async(req,res)=>{
    try {
        const usersLists = await UserModel.find();
        if(usersLists.length){
            res.status(200).send(usersLists);
        }else{
            res.send({"msg": "no users"});
        }
    } catch (err) {
        console.log(err);
        res.status(404).send({"msg": "something went wrong, please try again later..."});
    }
});

module.exports = {
    productRouter
}


