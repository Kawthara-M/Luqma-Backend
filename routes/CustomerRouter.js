const router = require('express').Router()
const customerCtrl = require('../controllers/CustomerController')
const middleware = require('../middleware')

router.get(
  '/profile/:id',
  middleware.stripToken,
  middleware.verifyToken,
  customerCtrl.getCustomerProfile
)
router.put(
  '/profile/:id',
  middleware.stripToken,
  middleware.verifyToken,
  customerCtrl.updateCustomerProfile
)
router.put(
  '/update-password/:id',
  middleware.stripToken,
  middleware.verifyToken,
  customerCtrl.UpdatePassword
)

module.exports = router
