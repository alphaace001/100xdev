const express = require("express")
const cors = require("cors")

app = express()
app.use(express.json())
app.use(cors())

app.get("/add",(req,res)=>{
    var a = parseInt(req.query.a)
    var b = parseInt(req.query.b)
    console.log(a+b)
    res.json({
        sum:a+b
    })
})

app.listen(3000)