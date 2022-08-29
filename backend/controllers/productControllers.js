const asyncHandler = require("express-async-handler")
const Product = require('../model/productsModel')
const mongoose= require('mongoose')
const redisClient = require("../config/redisClient")

const DEFAULT_EXPIRATION = 10000

/*
    @desc   Get Single Product
    @route  GET /api/products/:id
    @access Private
*/

const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        res.status(400)
        throw new Error("Product not found")
    }else{
        return res.status(200).json(product)
    }
})


/*
    @desc   Get All Products
    @route  GET /api/products
    @access Private
*/

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find()
    if(!products){
        res.status(400)
        throw new Error("Product not found")
    }else{
        redisClient.set('products', JSON.stringify(products), "ex", DEFAULT_EXPIRATION);
        return res.status(200).json(products)
    }
})


/*
    @desc   Set Product
    @route  GET /api/products
    @access Private
*/

const setProduct = asyncHandler(async (req, res) => {
    if(!req.body){
      res.status(401)
      throw new Error("Please enter values. Request body cannot be empty!")
    }

    const createdProduct = await Product.create({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        cover: req.body.cover,
        longDesc: req.body.longDesc,
        shortDesc: req.body.shortDesc
    })
    res.status(200).json(createdProduct)
})

/*
    @desc   Update Product
    @route  PUT /api/products/:id
    @access Private
*/

const updateProduct = asyncHandler( async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(400)
        throw new Error(`Product with ID${req.params.id} not found`)
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })
    res.status(200).json(updatedProduct)
})


/*
    @desc   Post Product
    @route  DELETE /api/products/:id
    @access Private
*/

const deleteProduct = async (req, res) => {
    // console.log(req.params.id)
    const product = await Product.findById(req.params.id)

    console.log('product', product)

    if(!product){
        res.status(400)
        throw new Error(`Product with ID${req.params.id} not found`)
    }

    await product.remove()
    return res.status(200).json({id: req.params.id, status: "Deleted successfully"})
}

module.exports = {getProduct, getProducts, setProduct, updateProduct, deleteProduct }