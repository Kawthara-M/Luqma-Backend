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

module.exports = {
  GetAllRestaurants,
}
