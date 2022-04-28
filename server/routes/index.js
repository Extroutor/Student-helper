const Router = require('express')
const router = new Router()
const postRouter = require('./postRouter')
const forumRouter = require('./forumRouter')
const userRouter = require('./userRouter')
const courseRouter = require('./courseRouter')
const facultyRouter = require('./facultyRouter')


router.use('/user', userRouter)
router.use('/faculty', facultyRouter)
router.use('/course', courseRouter)
router.use('/forum', forumRouter)
router.use('/post', postRouter)



module.exports = router