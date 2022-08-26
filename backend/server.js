const express = require('express')
const dbConnection = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const cors = require('cors')
const { getProducts, getCachedProducts } = require('./controllers/productControllers')
const productsModel = require('./model/productsModel')
const redisClient = require('./config/redisClient')

dbConnection()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// const getProducts = async (req, res) => {
//     const products = await productsModel.find()
//     redisClient.setEx('products1', DEFAULT_EXPIRATION, JSON.stringify(products))
//     //console.log('keys', redisClient.get('products').then((data)=> console.log('v', JSON.parse(data))))
//     res.status(200).json(products) 
// }

// const getCachedProducts = (req, res, next) =>{
//     console.log('mono')
//     redisClient.get('products1', (err, data)=>{
//         console.log('mono r')
//         if(err) {
//             res.status(400) 
//             throw new Error(err)
//         }else if(data){
//             console.log('mono1')
//             return res.status(200).json(JSON.parse(data))
//         }else{
//             console.log('mono2')
//            return next()
//         }
//     })
// }

const cache = (req, res, next) => {
    console.log('mon1o')
    redisClient.get("ultra", (error, result) => {
        console.log('mono')
      if (error) throw error;
      if (result !== null) {
        console.log('rs')
        return res.json(JSON.parse(result));
      } else {
        return next();
      }
    });
  };
  
app.get("/post", cache, async (req, res) => {
    const products = await productsModel.find()
    console.log('data', products)
    if(products){
        redisClient.set('ultra', JSON.stringify(products), "ex", 15);
        return res.json(products);
    }
  });
  
//app.use('/api/products1', require('./routes/productRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))