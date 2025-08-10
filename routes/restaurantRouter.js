const router = require('express').Router()
const restaurantCtrl = require('../controllers/restaurantController')

router.get('/', restaurantCtrl.GetAllRestaurants)
router.get('/:id', restaurantCtrl.GetRestaurant)
router.get('/:id/menu', restaurantCtrl.GetMenu)

router.get('/cuisine/:cuisineType', restaurantCtrl.GetRestaurantsByCategory)

module.exports = router
