const express = require('express')
const dbConnection = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const cors = require('cors')

dbConnection()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)


// endpoints
app.use('/api/products/search', require('./routes/searchRoutes'))
app.use('/api/products', require('./routes/productRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))