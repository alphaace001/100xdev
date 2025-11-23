const {User} = require("../db")
const jwt = require("jsonwebtoken")
const password = require("../index")

async function userMiddleware(req,res,next){
    const token = req.headers.authorization
    const words = token.split(" ")
    const jwt_token = words[1]
    // put role: admin | user in jwt (authorization)
    const decodevalue = jwt.verify(jwt_token,password)
    if (decodevalue.username){
        next()
    }else{
        res.status(403).json({
            msg:"User doesn't exist"
    })}
}

module.exports = userMiddleware