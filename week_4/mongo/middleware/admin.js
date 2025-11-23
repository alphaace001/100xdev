const {Admin} = require("../db")

async function adminMiddleware(req,res,next){
    const username = req.headers.username
    const password = req.headers.password
    const data = await Admin.findOne({
        username:username,
        password:password
    })
    if(data){
        next()
    }else{
        res.status(403).json({
            msg:"Admin doesn't exist"
        })
    }
}

module.exports = adminMiddleware