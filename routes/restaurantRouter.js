const router = require('express').Router()
const restaurantCtrl = require('../controllers/restaurantController')

router.get('/cuisines', restaurantCtrl.GetCuisineTypes)
router.get('/cuisine/:cuisineType', restaurantCtrl.GetRestaurantsByCategory)

router.get('/', restaurantCtrl.GetAllRestaurants)
router.get('/:id', restaurantCtrl.GetRestaurant)
router.get('/:id/menu', restaurantCtrl.GetMenu)

module.exports = router
