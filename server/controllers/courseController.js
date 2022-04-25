const {Course} = require('../models/models')
const ApiError = require('../error/ApiError');

class CourseController {
    async create(req, res) {
        const {name} = req.body
        const course = await Course.create({name})
        return res.json(course)
    }

    async getAll(req, res) {
        const courses = await Course.findAll()
        return res.json(courses)
    }

}

module.exports = new CourseController()