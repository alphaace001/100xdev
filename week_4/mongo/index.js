const express = require("express")
const bodyParser = require("body-parser")
 
const app = express()

const adminroutes = require("./routes/admin")
const userrouter = require("./routes/user")

app.use(bodyParser.json())
app.use("/admin",adminroutes)
app.use("/user",userrouter)

const Port = 3000

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})