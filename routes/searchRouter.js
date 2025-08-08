const router = require("express").Router()
const searchCtrl = require("../controllers/searchController.js")

router.post("/", searchCtrl.searchRestaurants)

module.exports = router
