const asyncHandler = require("express-async-handler")
const Product = require('../model/productsModel')
const redisClient = require("../config/redisClient")

const DEFAULT_EXPIRATION = 10000


/*
    @desc   Search Products By Name
    @route  GET /api/products/search
    @access Public
*/

const getSearchedProducts = asyncHandler(async(req, res)=>{
    if(req.query.name){
        const products = await Product.find({name: { $regex : '.*'+ req.query.name + '.*',  $options: 'i' }})
        if(products){
            redisClient.set(`product-${req.query.name}`, JSON.stringify(products), "ex", DEFAULT_EXPIRATION);
            return res.json(products);
        }else{
            return res.json({message: "Data not found"});
        }
    }else{
        return res.json([{message: "Query cannot be empty"}]);
    }
})

module.exports = getSearchedProducts