const mongoose = require("mongoose");

require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("MongoDB connected"))
    .catch((err)=>console.log("MongoDB connection error:",err))

const Userschema  = mongoose.Schema({
    username: String,
    password: String,
})

const Todoschema = mongoose.Schema({
    todos:[{
        task: {
            type:String,
            required: true
        },
        description: String,
        is_done: {
            type:Boolean,
            default:false
        }
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        }
})

const Todo = mongoose.model("Todo",Todoschema)
const User = mongoose.model("User",Userschema)

module.exports = {
    Todo,
    User
}