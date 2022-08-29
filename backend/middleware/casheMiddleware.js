const redisClient = require ("../config/redisClient");

const cacheAllProducts = (req, res, next) => { 
    redisClient.get('products').then((result)=>{
        if (result !== null){
            return res.json(JSON.parse(result))
        }else{
            return next()
        }
    })
};


const cacheSearchedProducts = (req, res, next) => { 
    redisClient.get(`product-${req.query?.name}`).then((result)=>{
        if (result !== null && req.query?.name){
            return res.json(JSON.parse(result))
        }else{
            return next()
        }
    })
};
module.exports = {cacheAllProducts, cacheSearchedProducts}