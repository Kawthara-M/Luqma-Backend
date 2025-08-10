// imports
const express = require('express')
require('dotenv').config()
const path = require('path')
const cors = require('cors')

// Initialize app
const app = express()

// Database Configuration
const mongoose = require('./config/db')

// set Port Configuration
const port = process.env.PORT ? process.env.PORT : 3000

// Require MiddleWares
app.use(cors())
const methodOverride = require('method-override')
const morgan = require('morgan')

// use MiddleWares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

// Root Route
app.get('/sign-in', (req, res) => {
  res.send('Your app is connected . . . ')
})

// Require Routers

const authRouter = require('./routes/AuthRouter')
const customerRouter = require('./routes/CustomerRouter')
const orderRouter = require("./routes/orderRouter") 
const searchRouter = require('./routes/searchRouter')
const restaurantRouter = require('./routes/restaurantRouter')

// use Routers
app.use('/auth', authRouter)
app.use('/customer', customerRouter)
app.use("/order", orderRouter) 
app.use('/search', searchRouter)
app.use("/restaurants", restaurantRouter)

// Listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
