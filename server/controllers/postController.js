const uuid = require('uuid')
const path = require('path')
const {Forum, Post} = require('../models/models')
const ApiError = require('../error/ApiError')

class ForumController {
    async create(req, res, next) {
        try {
            let {name, description, forumId} = req.body
            const post = await Post.create({name, description, forumId})
            return res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let {} = req.query
        // page = page || 1
        // limit = limit || 9
        // let offset = page * limit - limit
        let posts;
        // if (!courseId && !facultyId) {
        //     posts = await Forum.findAndCountAll({limit, offset})
        // }
        posts = await Post.findAndCountAll()
        return res.json(posts)
    }
    async getOne(req, res) {
        const {id} = req.params
        const post = await Post.findOne(
            {
                where: {id},
            },
        )
        return res.json(post)
    }
}

module.exports = new ForumController()