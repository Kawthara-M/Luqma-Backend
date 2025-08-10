const router = require("express").Router()

const authCtrl = require("../controllers/AuthController")
const middleware = require("../middleware")

router.post("/sign-up", authCtrl.SignUp)

router.post("/sign-in", authCtrl.SignIn)

router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  authCtrl.deletAccount
)

router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  authCtrl.CheckSession
)
module.exports = router
