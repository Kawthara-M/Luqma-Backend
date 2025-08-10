const Restaurant = require("../models/Restaurant")
const Meal = require("../models/Meal")

const GetAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
    if (restaurants) {
      res.send(restaurants)
    } else {
      res.send("no restaurants found")
    }
  } catch (error) {
    console.log(error)
  }
}

const GetRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ _id: req.params.id })
    if (restaurant) {
      res.send(restaurant)
    } else {
      res.send("no restaurants found")
    }
  } catch (error) {
    console.log(error)
  }
}
const GetMenu = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ _id: req.params.id })
    

    if (restaurant) {
      const meals = await Meal.find({ restaurant: restaurant._id })
      if (meals) {
        res.send(meals)
      } else {
        res.send("no meals found for this restaurant")
      }
    } else {
      res.send("no restaurants found")
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  GetAllRestaurants,
  GetRestaurant,
  GetMenu,
}
