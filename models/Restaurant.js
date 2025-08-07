const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const restaurantSchema = new Schema({
  name: { type: String },
 // menu: [mealSchema],
  cuisineType: { type: String },
  phone: { type: String },
  address: { type: String },
  email: { type: String },
})


const Restaurant = mongoose.model("Restaurant", restaurantSchema)
module.exports = Restaurant
