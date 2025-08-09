const router = require("express").Router()

const authCtrl = require("../controllers/AuthController")
const middleware = require("../middleware")

router.post("/sign-up", authCtrl.SignUp)

// route for sign-in, uncomment when SignIn controller is ready
router.post("/sign-in", authCtrl.SignIn)

router.get(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  authCtrl.getCustomerProfile
)
router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  authCtrl.updateCustomerProfile
)
router.put(
  "/update-password/:id",
  middleware.stripToken,
  middleware.verifyToken,
  authCtrl.UpdatePassword
)
router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  authCtrl.deletAccount
)

/*  router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
) */
module.exports = router
