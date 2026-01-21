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

const AccountSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    balance :{
        type: Number,
        required: true
    }
})

const User = mongoose.model('User',UserSchema)
const Account = mongoose.model('Account',AccountSchema)

module.exports = {User,Account}