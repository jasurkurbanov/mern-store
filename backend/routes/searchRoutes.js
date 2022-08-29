const express = require('express')
const router = express.Router()
const getSearchedProducts = require('../controllers/searchControllers')
const {cacheSearchedProducts} = require('../middleware/casheMiddleware')

router.route('/').get(cacheSearchedProducts, getSearchedProducts)

module.exports = router;