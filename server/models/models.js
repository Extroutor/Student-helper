const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    name: {type: DataTypes.STRING, unique: false,},
    surname: {type: DataTypes.STRING, unique: false,},
})

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
})

const Forum = sequelize.define('forum', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
})

const Faculty = sequelize.define('faculty', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Course = sequelize.define('course', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const FacultyCourse = sequelize.define('faculty_course', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasMany(Rating)
Rating.belongsTo(User)

Faculty.hasMany(Forum)
Forum.belongsTo(Faculty)

Course.hasMany(Forum)
Forum.belongsTo(Course)

Forum.hasMany(Rating)
Rating.belongsTo(Forum)

Forum.hasMany(Post, {as: 'info'});
Post.belongsTo(Forum)

Faculty.belongsToMany(Course, {through: FacultyCourse })
Course.belongsToMany(Faculty, {through: FacultyCourse })

module.exports = {
    User,
    Forum,
    Faculty,
    Course,
    Rating,
    Post
}
