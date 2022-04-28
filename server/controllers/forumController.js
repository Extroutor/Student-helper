const uuid = require('uuid')
const path = require('path')
const {Forum, Post} = require('../models/models')
const ApiError = require('../error/ApiError')

class ForumController {
    async create(req, res, next) {
        try {
            let {name, description, facultyId, courseId} = req.body
            const forum = await Forum.create({name, description, facultyId, courseId})
            return res.json(forum)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let {courseId, facultyId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let forums;
        if (!courseId && !facultyId) {
            forums = await Forum.findAndCountAll({limit, offset})
        }
        if (courseId && !facultyId) {
            forums = await Forum.findAndCountAll({where:{courseId}, limit, offset})

        }
        if (!courseId && facultyId) {
            forums = await Forum.findAndCountAll({where:{facultyId}, limit, offset})

        }
        if (courseId && facultyId) {
            forums = await Forum.findAndCountAll({where:{facultyId, courseId}, limit, offset})
        }
        return res.json(forums)
    }
    async getOne(req, res) {
        const {id} = req.params
        const forums = await Forum.findOne(
            {
                where: {id},
                include: [{model: Post, as: 'post'}]
            },
        )
        return res.json(forums)
    }
}

module.exports = new ForumController()