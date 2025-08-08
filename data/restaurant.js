const mongoose = require("mongoose")
const  Restaurant  = require("../models/Restaurant")
require("dotenv").config({ path: '../.env' })
console.log(process.cwd())
mongoose
  .connect(process.env.MONGO_URI) 
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error("Connection error:", e.message)
  })

const restaurantData = [
  {
    name: "Jasmi's",
    cuisineType: "Fast-food",
    phone: "+973 17179000",
    address: "2450 Muharraq",
    email: "jasmis@gmail.com",
  },
  {
    name: "Coco's",
    cuisineType: "International",
    phone: "+973 17712288",
    address: "3389 Adliya",
    email: "cocos@gmail.com",
  },
]

// Seed function
const seedRestaurants = async () => {
  await Restaurant.insertMany(restaurantData)
  console.log("New restaurants created!")

  mongoose.connection.close()
}

seedRestaurants()
