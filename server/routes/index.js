const Router = require('express')
const router = new Router()
const facultyRouter = require('./facultyRouter')
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')
const forumRouter = require('./forumRouter')
const courseRouter = require('./courseRouter')

router.use('/user', userRouter)
router.use('/faculty', facultyRouter)
router.use('/course', courseRouter)
router.use('/forum', forumRouter)
router.use('/post', postRouter)

module.exports = router