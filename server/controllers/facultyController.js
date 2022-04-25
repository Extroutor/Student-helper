const {Faculty} = require('../models/models')
const ApiError = require('../error/ApiError');

class FacultyController {
    async create(req, res) {
        const {name} = req.body
        const faculty = await Faculty.create({name})
        return res.json(faculty)
    }

    async getAll(req, res) {
        const faculties = await Faculty.findAll()
        return res.json(faculties)
    }
}

module.exports = new FacultyController()