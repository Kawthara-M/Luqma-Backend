const router = require('express').Router()
const customerCtrl = require('./../controllers/Customer')
const authCtrl = require('./../controllers/AuthController')

// router.post('/new', customerCtrl.customer_new_POST)
router.post('/sign-up', authCtrl.SignUp)

module.exports = router
