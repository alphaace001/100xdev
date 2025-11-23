const {User} = require("../db")

async function userMiddleware(req,res,next){
    const username = req.headers.username
    const password = req.headers.password
    const data = await User.findOne({
        username:username,
        password:password
    })
    // console.log(data)
    if (data){
        next()
    }else{
        res.status(403).json({
            msg:"User doesn't exist"
    })}
}

module.exports = userMiddleware