const express = require('express')
const {getProduct, getProducts, setProduct, updateProduct, deleteProduct, getSearchedProducts } = require('../controllers/productControllers')
const {cacheAllProducts} = require('../middleware/casheMiddleware')
const router = express.Router()

router.route('/').get(cacheAllProducts, getProducts).post(setProduct)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = router;