const asyncHandler = require("express-async-handler")

/*
    @desc   Get Single Product
    @route  GET /api/products/:id
    @access Private
*/

const getProduct = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Products'})
})


/*
    @desc   Get All Products
    @route  GET /api/products
    @access Private
*/

const getProducts = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Products'})
})


/*
    @desc   Set Product
    @route  GET /api/products
    @access Private
*/

const setProduct = asyncHandler(async (req, res) => {
    console.log('req', req.body)
    if(!req.body.desc){
      res.status(401)
      throw new Error("Please add a text field")
    }
    res.status(200).json({message: 'Set Products'})
})

/*
    @desc   Update Product
    @route  PUT /api/products/:id
    @access Private
*/

const updateProduct = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update ${req.params.id}` })
})


/*
    @desc   Post Product
    @route  DELETE /api/products/:id
    @access Private
*/

const deleteProduct = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete ${req.params.id}`})
})

module.exports = {getProduct, getProducts, setProduct, updateProduct, deleteProduct }