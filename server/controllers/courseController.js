const {Course} = require('../models/models')
const ApiError = require('../error/ApiError');

class CourseController {
    async create(req, res) {
        const {name} = req.body
        const course = await Course.create({name})
        return res.json(course)
    }
    async getAll(req, res) {
        const course = await Course.findAll()
        return res.json(course)
    }
}

module.exports = new CourseController()