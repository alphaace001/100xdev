const mongoose = require("mongoose")
const { describe } = require("node:test")

mongoose.connect('mongodb+srv://aplhaace:1234567890@cluster0.zpucp.mongodb.net/course_selling_app')

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchased_courses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]

})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imagelink: String,
    price: Number
})

const Admin  = mongoose.model('Admin',AdminSchema)
const User = mongoose.model('User',UserSchema)
const Course = mongoose.model('Course',CourseSchema)

module.exports = {
    Admin,
    User,
    Course
}