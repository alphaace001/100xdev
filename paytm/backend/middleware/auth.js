const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")

async function authmiddleware(req,res,next){
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({})
    }

    const token = authHeader.split(' ')[1]

    try {
        const verify = jwt.verify(token,JWT_SECRET)
        req.userID = verify.userid
        next()
    }catch(e){
        return res.status(403).json({})
    }
}  

module.exports = {authmiddleware}