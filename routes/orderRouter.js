const router = require("express").Router()
const orderCtrl = require("../controllers/orderController")
const middleware = require("../middleware")

// get all previous orders
router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.GetPastOrders
)

// get all orders in cart
router.get(
  "/cart",
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.GetCartOrders
)

// create order in cart
router.post(
  "/cart",
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.createOrder
)

// update order in cart
router.put(
  "/cart/:id",
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.updateOrder
) 

// delete an order from cart
// router.delete(
//   "/cart/:id",
//   middleware.stripToken,
//   middleware.verifyToken,
//   orderCtrl.DeleteOrder
// ) 

module.exports = router
