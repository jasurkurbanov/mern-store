const express = require('express')
const {getProduct, getProducts, setProduct, updateProduct, deleteProduct } = require('../controllers/productControllers')
const router = express.Router()

// router.get('/', getCachedProducts, getProducts)
router.route('/').get(getProducts).post(setProduct)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)


module.exports = router;