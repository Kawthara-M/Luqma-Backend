const Restaurant = require("../models/Restaurant")

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
    const restaurant = await Restaurant.findOne({_id: req.params.id})
    if (restaurant) {
      res.send(restaurant)
    } else {
      res.send("no restaurants found")
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  GetAllRestaurants,
  GetRestaurant
}
