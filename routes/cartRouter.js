const router = require("express").Router()
const cartCtrl = require("../controllers/orderController")
const middleware = require("../middleware")

// get all orders in cart
router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  cartCtrl.GetCartOrders
)

// create order in cart
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  cartCtrl.createOrder
)

// update order in cart
router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  cartCtrl.updateOrder
)

// delete an order from cart
router.delete(
  "/cart/:id",
  middleware.stripToken,
  middleware.verifyToken,
  cartCtrl.deleteOrder
)

//delete a meal from an order
router.delete(
  "/:orderId/meal/:mealId",
  middleware.stripToken,
  middleware.verifyToken,
  cartCtrl.deleteMealFromOrder
)


module.exports = router
