const router = require('express').Router()

const authCtrl = require('../controllers/AuthController')

router.post('/sign-up', authCtrl.SignUp)

// route for sign-in, uncomment when SignIn controller is ready
router.post('/sign-in', authCtrl.SignIn)

// we need to add middleware after sign-in is done, to ensure only the user themselves can access the following routes:
// router.get("/:id", authCtrl.getCustomerProfile)
// router.put("/:id", authCtrl.updateCustomerProfile)
// router.put("/update-password/:id",authCtrl.UpdatePassword)
router.delete('/:id', authCtrl.deletAccount)

/*  router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
) */
module.exports = router
