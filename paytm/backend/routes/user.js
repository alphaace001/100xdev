const express = require("express")
const jwt = require("jsonwebtoken")

const {JWT_SECRET} = require("../config")
const {Signup,Signin,UpdateUser} = require("../zod")
const { User,Account } = require("../db")
const {authmiddleware} = require("../middleware/auth")
const { email } = require("zod")

const userrouter = express.Router()

userrouter.post("/signup",async(req,res)=>{
    const data = Signup.safeParse(req.body)

    if (!data.success) {
        const messages = data.error.issues.map(issue => issue.message)
        return res.status(400).json({"message": messages});
    }

    const email = data.data.email
    const username = data.data.username
    const password = data.data.password

    try{
        unique = await User.findOne({email:email})
        if(unique){
            res.json({
                message:"Email already taken"
            })
            return
        }
        result = await User.create({
            email:email,
            username:username,
            password:password
        })

        await Account.create({
            userID: result._id,
            balance: 1 + Math.random()*10000
        })
        
        console.log(result)
        
        const token = jwt.sign({
            userid:result._id
            },JWT_SECRET)
        
        res.json({
            message:"UserID: of the newly added user",
            token:token
        })
    }catch(e){
        res.json({
            message:"Failed to add new user"
        })
        return
    }

})

userrouter.post("/signin",async(req,res)=>{
    const data = Signin.safeParse(req.body)

    if(!data.success){
        return res.status(400).json(data.error.errors)
    }
    try{
        const verify = await User.findOne({
            email:data.data.email,
            password:data.data.password})

        if(!verify){
            return res.json({
                message:"Email not found or not registered"
            })
        }
        const token = jwt.sign({userid:verify._id},JWT_SECRET)
        res.status(200).json({
            message:token
        })
    }
    catch(e){
        console.log(e)
        res.status(411).json("Error while logging in")
    }
})

userrouter.put("/",authmiddleware,async(req,res)=>{
    const data = UpdateUser.safeParse(req.body)

    if(!data.success){
        res.status(411).json({
            message:"Password is too small"
        })
    }
    try{
        await User.updateOne(
            {_id:req.userID},
            {
                email:data.data.email,
                password:data.data.password,
                username:data.data.username
            })
        return res.status(200).json({
        message:"Updated successfully"
        })
    }catch(e){
        console.log(e)
        return res.status(400).json({
            message:"Failed to update the user data"
        })
    }
})

userrouter.get("/bulk",authmiddleware,async(req,res)=>{
    const filter = req.query.filter || ""
    const users = await User.find({
        $or:[{
            username: {$regex:filter,$options: "i" } // options i for case-insensitivity
        },{
            email:{$regex:filter,$options: "i" }
        }]
    })

    res.json({
        user:users.map(user =>({
            username:user.username,
            email:user.email,
            _id:user._id
        }))
    })
})
module.exports = userrouter