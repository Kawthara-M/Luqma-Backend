const Restaurant = require("../models/Restaurant")

const searchRestaurants = async (req, res) =>{
  try {
  const queryString = req.body.search
  const queryStrings = queryString.split(" ")
  allQueries = []

  queryStrings.forEach((element) => {
    allQueries.push({ name: { $regex: String(element) } })
  })
  const restaurants = await Restaurant.find({ $or: allQueries })
  if (!restaurants || restaurants.length === 0) {
    res.status(400).send({ error: "No Restaurant with this name was found" })
  }

  res.status(200).send(restaurants)
} catch (error) {
  console.error("An error has occurred searching a username!", error.message)
}
}

module.exports = {
  searchRestaurants,
}
