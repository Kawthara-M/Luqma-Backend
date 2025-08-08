const router = require('express').Router()

const authCtrl = require('./../controllers/AuthController')

router.post('/sign-up', authCtrl.SignUp)

router.get('/:id', authCtrl.getCustomerProfile)
router.put('/:id', authCtrl.updateCustomerProfile)

module.exports = router
