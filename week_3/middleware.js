const express = require("express")
const app = express()

let numreq = 0
// app.use() add middleware to the api that are below its declaration.
// in paramater it expects a function that has paramter (req,res,next)
app.use(express.json())
// used for user authentication and input validation
// other use cases - count the number of requests, find the avg time server is taking to handle request

function calculate_request(req,res,next){
    numreq++
    next()
}

app.post("/health-checkup", calculate_request,function(req,res){
    const kidneys = req.body.kidneys
    const kidneyLength = kidneys.kdineyLength
    res.send("you have" + kidneyLength + "no of kidneys")
})

//global catches - runs if there an execption throw by any of the api
app.use(function(err,req,res,next){
    // log err here
    res.json({
        msg: "sorry somehting is up with our server"
    })
})

app.listen(3000)