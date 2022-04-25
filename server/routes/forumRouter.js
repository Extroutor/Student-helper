const Router = require('express')
const router = new Router()
const forumController = require("../controllers/forumController")


router.post('/', forumController.create)
router.get('/', forumController.getAll)
router.get('/:id', forumController.getOne)

module.exports = router