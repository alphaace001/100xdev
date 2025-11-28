const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const {User,Todo} = require("./database")
const {usermiddleware,tokenverifier} = require("./middleware")

require('dotenv').config();
Secret = process.env.SECRET_KEY

const app = express()
app.use(express.json())

app.post("/signup",async(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const data = await User.findOne({username})
    if(data){
        return res.json({
            message:"User name already taken"
        })
    }

    try{
        const user = await User.create({
            username:username,
            password:password
        })
        console.log(user)
        await Todo.create({
            todos:[],
            user: user._id
        })
        res.json({
            message:"Signup Successful"
        })
    }
    catch(err){
        console.log(err)
        res.json({
            message: "Failed to signup"
        })
    }
})


app.post("/login",usermiddleware,(req,res)=>{
    const username = req.body.username
    const token = jwt.sign({username:username},Secret)
    res.json({
        message:"Logged in Successfully",
        token: token
    })
})

app.get("/todos",tokenverifier,async(req,res)=>{
    const username = req.username
    const data = await User.findOne({username:username})
    const todos = await Todo.findOne({user:data._id})
    res.json({
        message:todos
    })
})

app.post("/todos",tokenverifier,async(req,res)=>{
    const username = req.username
    const task = req.body.task
    const description = req.body.description

    if(!task){
        return res.status(400).json({
            message:"Task field is required"
        })
    }

    const data = await User.findOne({username:username})
    try{
        await Todo.updateOne(
            {user:data._id},
            {$push:{todos:{
                task : task,
                description : description
            }}}
        )
        res.json({
            message:"Successfully added the todo"
        })
    }catch(err){
        console.log(err)
        res.json({
            message:"Failed to update the todo"
        })
    }

})

app.delete("/todos",tokenverifier,async(req,res)=>{
    const username = req.username
    const todoId = req.body._id

    if(!todoId){
        return res.status(400).json({
            message:"Todo _id is required"
        })
    }

    if(!mongoose.Types.ObjectId.isValid(todoId)){
        return res.status(400).json({
            message:"Invalid todo _id format"
        })
    }

    try{
        const user = await User.findOne({username:username})
        const result = await Todo.updateOne(
            {user: user._id},
            {$pull:{todos:{_id: new mongoose.Types.ObjectId(todoId)}}}
        )
        
        if(result.modifiedCount === 0){
            return res.status(404).json({
                message:"Todo not found"
            })
        }
        
        res.json({
            message:"Successfully removed the todo"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Failed to remove todo"
        })
    }
})

app.put("/todos",tokenverifier,async(req,res)=>{
    const username = req.username
    const { todoId, title, description, is_done } = req.body.data

    if(!todoId){
        return res.status(400).json({
            message:"Todo _id is required"
        })
    }

    if(!mongoose.Types.ObjectId.isValid(todoId)){
        return res.status(400).json({
            message:"Invalid todo _id format"
        })
    }

    try{
        const user = await User.findOne({username:username})
        const result = await Todo.updateOne(
            {
                user: user._id, 
                "todos._id": new mongoose.Types.ObjectId(todoId)
            },
            {
                $set:{
                    "todos.$.task": title,
                    "todos.$.description": description,
                    "todos.$.is_done": is_done === "True" || is_done === true
                }
            }
        )
        
        if(result.modifiedCount === 0){
            return res.status(404).json({
                message:"Todo not found"
            })
        }
        
        res.json({
            message:"Successfully updated"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Failed to update todo",
            error: err.message
        })
    }
})

app.listen(3000)