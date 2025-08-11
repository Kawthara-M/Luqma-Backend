const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const deliverymanSchema = new Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String }
})

module.exports = mongoose.model('DeliveryMan', deliverymanSchema)
