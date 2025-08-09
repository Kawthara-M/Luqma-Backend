const router = require('express').Router()

const customerCtrl = require('../controllers/CustomerController')

const middleware = require('../middleware')

// we need to add middleware after sign-in is done, to ensure only the user themselves can access the following routes:
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
