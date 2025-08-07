// imports
const express = require('express')
require('dotenv').config()
const path = require('path')
const cors = require("cors")

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
app.get('/', (req, res) => {
  res.send('Your app is connected . . . ')
})

// Require Routers

const customerRouter = require('./routes/Customer')

// use Routers
app.use('/customers', customerRouter)

// Listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
