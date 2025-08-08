const router = require("express").Router()

const authCtrl = require("../controllers/AuthController")

router.post("/sign-up", authCtrl.SignUp)

// route for sign-in, uncomment when SignIn controller is ready
//router.post('/sign-in',authCtrl.SignIn)

router.get("/:id", authCtrl.getCustomerProfile)
router.put("/:id", authCtrl.updateCustomerProfile)

// update password route is commented until login is done, otherwise it wouldn't work
/* router.put("/update-password/:id",middleware.stripToken,
  middleware.verifyToken, authCtrl.UpdatePassword) */

  // 
/*  router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
) */
module.exports = router
