const mongoose =  require("mongoose")

mongoose.connect("mongodb+srv://aplhaace:1234567890@cluster0.zpucp.mongodb.net/paytm")

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

const User = mongoose.model('User',UserSchema)

module.exports = {User}