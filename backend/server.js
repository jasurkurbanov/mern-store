const express = require('express')
const dbConnection = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000

dbConnection()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/products', require('./routes/productRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))