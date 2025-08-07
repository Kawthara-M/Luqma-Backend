const router = require("express").Router()
const customerCtrl = require("./../controllers/Customer")

router.post("/new",  customerCtrl.customer_new_POST)

module.exports = router