const router = require("express").Router()
const restaurantCtrl = require("../controllers/restaurantController")

router.get("/", restaurantCtrl.GetAllRestaurants)

module.exports = router
