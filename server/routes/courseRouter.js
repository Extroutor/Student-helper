const Router = require('express')
const router = new Router()
const courseController = require("../controllers/courseController")
const checkRole = require("../middleware/checkRoleMiddleware")

router.post('/', checkRole('ADMIN'), courseController.create)
router.get('/', courseController.getAll)

module.exports = router