/*
    @desc   Get Products
    @route  GET /api/products
    @access Private
*/

const getProducts = (req, res) => {
    res.status(200).json({message: 'Get Products'})
}


/*
    @desc   Set Product
    @route  GET /api/products
    @access Private
*/

const setProduct = (req, res) => {
    res.status(200).json({message: 'Set Products'})
}

/*
    @desc   Update Product
    @route  PUT /api/products/:id
    @access Private
*/

const updateProduct = (req, res) => {
    res.status(200).json({message: `Update ${req.params.id}` })
}


/*
    @desc   Post Product
    @route  DELETE /api/products/:id
    @access Private
*/

const deleteProduct = (req, res) => {
    res.status(200).json({message: `Delete ${req.params.id}`})
}

module.exports = { getProducts, setProduct, updateProduct, deleteProduct }