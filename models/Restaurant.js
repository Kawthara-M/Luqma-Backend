const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const restaurantSchema = new Schema({
  name: { type: String },
  menu: { type: Array },
  cuisineType: { type: String },
  phone: { type: String },
  address: { type: String },
  email: { type: String }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
