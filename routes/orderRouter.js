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

module.exports = router
