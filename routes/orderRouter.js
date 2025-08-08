const router = require('express').Router()
const orderCtrl = require('../controllers/orderController')
const middleware = require('../middleware')

router.get('/', orderCtrl.GetOrders)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.CreateOrder
)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.UpdateOrder
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  orderCtrl.DeleteOrder                                                             
)

module.exports = router