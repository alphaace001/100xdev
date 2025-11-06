const express = require("express")

app = express()
app.use(express.json())
kidneys = [{
    kidney_name:"A",
    kidney_healthy:false
},{
    kidney_name:"B",
    kidney_healthy:true
}]

app.get("/kidneys",function(req,res){
    res.send(kidneys)
})

app.post("/kidney",function(req,res){
    const name = req.body.name
    const healthy = req.body.health
    kidneys.push({kidney_name:name,kidney_healthy:healthy})
    res.status(201).send("Successfully added a new kidney")
})

app.put("/kidney",function(req,res){
    const name = req.query.name
    const update = req.query.status
    let flag = 0 
    for (let i=0;i<kidneys.length;i++){
        if (kidneys[i]["kidney_name"] == name){
            kidneys[i]["kidney_healthy"] =  update
            flag = 1
        }
    }
    if (flag == 1) {
        return res.status(200).send("Successfully updated the status of the kidney")
    }
    return res.status(404).send("No kidney with provided name found")
})

app.listen(3000)