const jwt = require("jsonwebtoken")
const {User} = require("./database")

require('dotenv').config();
Secret = process.env.SECRET_KEY

async function usermiddleware(req,res,next){
    const username = req.body.username
    const password = req.body.password

    const data = await User.findOne({
        username:username,
        password:password
    })

    if(data){
        next()
    }
    else{
        res.json({
            message:"Invalid Username/Password or not reqistered"
        })
    }
}

async function tokenverifier(req,res,next){
    const token = req.headers.authorization
    const data = token.split(" ")
    const jwt_token = data[1]
    const is_valid = jwt.verify(jwt_token,Secret)
    if(is_valid.username){
        req.username = is_valid.username
        next()
    }else{
        res.json({
            message: "Invalid token"
        })
    }

}

module.exports = {usermiddleware,tokenverifier}