const jwt = require("jsonwebtoken")
const {secret} = require("../config")

async function adminMiddleware(req,res,next){
    const token = req.headers.authorization
    const words = token.split(" ")
    const jwt_token = words[1]

    const decodevalue = jwt.verify(jwt_token,secret)
    if (decodevalue.username){
        next()
    }else{
        res.status(403).json({
            msg:"User doesn't exist"
    })}
}

module.exports = adminMiddleware