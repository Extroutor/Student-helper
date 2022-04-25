const uuid = require('uuid')
const {Forum,Post} = require('../models/models')
const ApiError = require('../error/ApiError')

class PostController {
    async create(req, res, next) {
        try {
            let {title, description, courseId, facultyId} = req.body
            const post = await Forum.create({title, description, courseId, facultyId})
            return res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    // async getAll(req, res) {
    //     let {courseId, facultyId, limit, page} = req.query
    //     page = page || 1
    //     limit = limit || 9
    //     let offset = page * limit - limit
    //     let forum;
    //     if (!courseId && !facultyId) {
    //         forum = await Forum.findAndCountAll({limit, offset})
    //     }
    //     if (courseId && !facultyId) {
    //         forum = await Forum.findAndCountAll({where:{courseId}, limit, offset})
    //
    //     }
    //     if (!courseId && facultyId) {
    //         forum = await Forum.findAndCountAll({where:{facultyId}, limit, offset})
    //
    //     }
    //     if (courseId && facultyId) {
    //         forum = await Forum.findAndCountAll({where:{courseId, facultyId}, limit, offset})
    //     }
    //     return res.json(forum)
    // }

}

module.exports = new PostController()