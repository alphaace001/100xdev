const express = require("express")
const jwt = require("jsonwebtoken")
const { fa } = require("zod/v4/locales")
const jwtPassword = "123456"

const app = express()
app.use(express.json())

const users = [
    {
        username:"test1@gmail.com",
        password:"1231",
        name:"test1"
    },
    {
        username:"test2@gmail.com",
        password:"1232",
        name:"test2"
    },
    {
        username:"test3@gmail.com",
        password:"1233",
        name:"test3"
    }
]

function UserExist(username,password){
    for(let i=0;i<users.length;i++){
        if(users[i]["username"]==username && users[i]["password"]==password) {return true}
    }
    return false
}

app.post("/signin",(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    if(!UserExist(username,password)){
        return res.status(403).json({
            msg:"user doesn't exist in the db"
        })
    }

    var token = jwt.sign({username:username},jwtPassword)
    return res.json({
        token
    })
})

app.get("/users",function(req,res){
    const token = req.headers.authorization
    try{
        const decoded = jwt.verify(token,jwtPassword)
        const username = decoded.username
        res.send({
            users: users.filter(function(value){
                if (value.username == username){
                    return false
                }
                return true
            })
        })
    }
    catch(err){
        res.json({
            msg:"invalid token"
        })
    }
})

app.listen(3000) 